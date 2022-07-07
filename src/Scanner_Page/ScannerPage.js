import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Button from '../assets/Button';
import HeaderBack from '../assets/HeaderBack';
import scanner from '../Image/scanner.png';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import { head } from '../Context/Store';

const Main = styled.main`

height: 100vh;
display: flex;
flex-direction: column;

& .file{
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  font-size: 18px;
  position:relative;

  & input[type=file]{
  opacity:0;
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
}
}

& .next{
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

`;



export default function ScannerPage() {

  const apiurl = 'https://proj.ruppin.ac.il/bgroup87/prod/api/PdfFile/';
  const [selectedFile, setSelectedFile] = useState(); //contains information on the currently picked file
  const [Counter, setCounter] = useState(0);
  const [filesent, setfilesent] = useState(false);
  const navigate = useNavigate();
  const UserFile = useContext(head);

  const changeHandler = (event) => {
    if (selectedFile !== undefined) {
      if (event.target.files[0].type === 'application/pdf') {
        let temp = [];
        temp.push(selectedFile[0]);
        temp.push(event.target.files[0]);
        setSelectedFile(temp);
        setCounter(prev => prev + 1);
      }
    }
    else {
      let temp = [];
      if (event.target.files[0].type === 'application/pdf') {
        temp.push(event.target.files[0]);
        setSelectedFile(temp);
        setCounter(prev => prev + 1);
      }
    }
  };


  async function handleSubmission() {
    setfilesent(true);
    setCounter(0);
    let filename = selectedFile.map(per => {
      return per.name.split(".");
    })
    const formData = new FormData();
    for (var i = 0; i < selectedFile.length; i++) {
      formData.append("File[" + i + "].Id", selectedFile[i])

    }
    const settings = {
      method: 'POST',
      body: formData,
    };


    try {
      const respone = await fetch(`${apiurl}`, settings)
      console.log('Success:', respone);
      let tempnamefile = [];
      filename.map(per => tempnamefile.push(per[0]));
      UserFile.setUserPdf(tempnamefile);
      if (UserFile.IsUser && !UserFile.New_Report) {
        navigate('/Healthquestionnaire')
      }
      else if (UserFile.New_Report) {
        UserFile.setAnonymousUserPdf(tempnamefile);
        navigate('/newreport');
      }
      else {
        UserFile.setAnonymousUserPdf(tempnamefile);
        navigate('/AnonymousUser')
      }


    }
    catch {
      console.log('error')
    }
  }


  return (
    <Main>
      <HeaderBack />
      <div className='file'>
        {
          !filesent ?
            <>
              <label>לחץ על הסורק </label>
              <img src={scanner} alt='scan' style={{ width: '45%' }} />
              <input type='file' onChange={changeHandler} />
            </>
            :
            <>
              <label style={{ marginBottom: '25px' }}>מעלה קבצים לפענוח</label>
              <CircularProgress />
            </>
        }
      </div>
      {
        Counter > 0 ?
          <div className='next'>
            <label style={{ marginBottom: '25px' }}>נבחרו {Counter} קבצים</label>
            <Button onClick={handleSubmission}>המשך</Button>
          </div>
          :
          <div className='next'>
            <Button onClick={() => navigate('/ManualReport')}>להזנה ידנית לחץ כאן</Button>
          </div>
      }
    </Main>
  )
}
