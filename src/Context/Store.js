import React, { useState } from 'react';
export const head = React.createContext();

export default function Store({ children }) {

    const [UserInfo, setUserInfo] = useState({
        Full_Name: '',
        Email: '',
        Birthday: new Date(),
        Password: '',
        Health_Questionnaire: '',
        User_Report: [{ "Report_Id": 1, "User_Id": 1 }],
        UserIndexs: '',
        PDF: false,
        FileName: []
    })

    const [IsLogin, setIsLogin] = useState(false);

    const [AnonymousUser, setAnonymousUser] = useState({
        "UserIndexs": [],
        "PDF": true,
        "FileName": []
    })

    const [UserJson, setUserJson] = useState();

    const [IsUser, setIsUser] = useState(true);

    const [New_Report, setNew_Report] = useState(false);

    const setUserProfile = (Full_Name, Email, Birthday, Password) => {
        let tempUserInfo = UserInfo;
        tempUserInfo.Full_Name = Full_Name;
        tempUserInfo.Email = Email;
        tempUserInfo.Birthday = Birthday;
        tempUserInfo.Password = Password
        setUserInfo(tempUserInfo);
        console.log(tempUserInfo);
    }

    const setUserPdf = (filename) => {
        let tempUserInfo = UserInfo;
        tempUserInfo.FileName = filename;
        tempUserInfo.PDF = true;
        setUserInfo(tempUserInfo);
        console.log(tempUserInfo)
    }

    const manualReport = (report) => {

        let temp = UserInfo;
        temp.UserIndexs = report;
        setUserInfo(temp);
        console.log(temp);

    }


    const setquestion = (question) => {

        let temp = UserInfo;
        temp.Health_Questionnaire = question;
        console.log(temp);
        setUserInfo(temp);
    }

    const setAnonymousUserPdf = (filename) => {
        let temp = AnonymousUser;
        temp.FileName = filename;
        setAnonymousUser(temp);
    }

    const setAnonymousUsermanualReport = (index) => {
        let temp = AnonymousUser;
        temp.UserIndexs = index;
        temp.PDF = false;
        setAnonymousUser(temp);
    }


    return (
        <head.Provider value={{
            setUserProfile: setUserProfile,
            setUserPdf: setUserPdf,
            manualReport: manualReport,
            setquestion: setquestion,
            UserInfo: UserInfo,
            setUserInfo: setUserInfo,
            setAnonymousUserPdf,
            AnonymousUser: AnonymousUser,
            setAnonymousUsermanualReport: setAnonymousUsermanualReport,
            IsUser: IsUser,
            setIsUser: setIsUser,
            setNew_Report: setNew_Report,
            New_Report: New_Report,
            UserJson:UserJson,
            setUserJson:setUserJson,
            IsLogin:IsLogin,
            setIsLogin:setIsLogin
        }}>
            {children}
        </head.Provider>
    )
}