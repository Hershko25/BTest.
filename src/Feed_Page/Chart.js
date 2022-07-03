import React, { useContext, useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import styled from "styled-components";
import {head} from '../Context/Store';



const Main = styled.div`

width: 90%;
border-radius: 15px;
margin: auto;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background: rgba(255, 255, 255, 0.06);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid #0d9da1;
margin-top: 25px;
padding-bottom: 20px;
box-sizing: border-box;



& h4{
    color: white;
    text-align: center;
    margin-top: 5px;
}
`;



const COLORS = ["#FF0000", "#008000"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

export default function Chart() {

    const UserInfo=useContext(head);


    const [ready, setready] = useState(false);
    const [data, setdata] = useState();
    const IndexPieChart = UserInfo.UserJson;

    useEffect(() => {
        let counterAboveBelow = 0;
        let counterFine = 0;
        IndexPieChart.Indexs.map((per) => {
            if (per.IndexStatus === 'Above' || per.IndexStatus === 'Below') {
                return counterAboveBelow++;
            }
            else {
                return  counterFine++;
            }
        })

        setdata([{ name: "Not Normal", value: counterAboveBelow }, { name: "Normal", value: counterFine }])
        setready(true);

    }, [])




    return (
        <Main>
            <h4 style={{ paddingTop: '25px' }}>התפלגות מדדי בדיקת הדם</h4>
            {
                ready &&
                <PieChart width={300} height={200} >
                    <Pie
                        data={data}
                        cx={150}
                        cy={100}
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"

                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>

            }
        </Main>
    )
}
