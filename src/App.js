import React, { useEffect, useState,useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import OpenPage from './Open_Page/OpenPage';
import LoginPage from "./Login_Page/LoginPage";
import SignInPage from './SignIn_Page/SignInPage';
import ScannerPage from "./Scanner_Page/ScannerPage";
import ManualReportPage from './ManualReport_Page/ManualReportPage';
import HealthquestionnairePage from "./Healthquestionnaire_Page/HealthquestionnairePage";
import FetchSignIn from "./fetch/FetchSignIn";
import FetchAnonymous from "./fetch/FetchAnonymous";
import FeedPage from "./Feed_Page/FeedPage";
import FullIndex from "./Feed_Page/Full_Index_Explation/FullIndex";
import SetManualReportPage from "./ManualReport_Page/SetManualReportPage";
import FetchNewReport from './fetch/FetchNewReport';
import ChartBmiPage from './Feed_Page/Chart_Bmi_Page/ChartBmiPage';
import AnonymousFeedPage from "./AnonymousFeed_Page/AnonymousFeedPage";
import { head } from "./Context/Store";


function App() {


  const IsLogin=useContext(head);
  const [IsReady, setIsReady] = useState(false);

  useEffect(() => {

    if (localStorage.getItem('json') !== null) {
      IsLogin.setIsLogin(true);
    }
    setIsReady(true);

  }, [])




  return (
    <>
      {
        IsReady &&
        <Routes>
          <Route path='/' element={IsLogin.IsLogin ? <Navigate to='feed' /> : <OpenPage />} />
          <Route path='/login' element={IsLogin.IsLogin ? <Navigate to='feed' /> : <LoginPage />} />
          <Route path='/signin' element={IsLogin.IsLogin ? <Navigate to='feed' /> : <SignInPage />} />
          <Route path='/scanner' element={<ScannerPage />} />
          <Route path="/ManualReport" element={<ManualReportPage />} />
          <Route path="/Healthquestionnaire" element={IsLogin.IsLogin ? <Navigate to='feed' /> : <HealthquestionnairePage />} />
          <Route path="/fetch" element={<FetchSignIn />} />
          <Route path="/AnonymousUser" element={ <FetchAnonymous />} />
          <Route path="/feed" element={IsLogin.IsLogin ? <FeedPage /> : <Navigate to='/'/>} />
          <Route path="/fullindex" element={<FullIndex />} />
          <Route path="/SetManualReportPage" element={<SetManualReportPage />} />
          <Route path="/newreport" element={<FetchNewReport />} />
          <Route path="/chartBmi" element={<ChartBmiPage />} />
          <Route path="/AnonymousFeed" element={<AnonymousFeedPage />} />
        </Routes>
      }
    </>
  );
}

export default App;
