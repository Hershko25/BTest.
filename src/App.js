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

function App() {
  return (
    <Routes>
      <Route path='/' element={<OpenPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/signin' element={<SignInPage/>}/>
      <Route path='/scanner' element={<ScannerPage/>}/>
      <Route path="/ManualReport" element={<ManualReportPage/>}/>
      <Route path="/Healthquestionnaire" element={<HealthquestionnairePage/>}/>
      <Route path="/fetch" element={<FetchSignIn/>}/>
      <Route path="AnonymousUser" element={<FetchAnonymous/>}/>
      <Route path="feed" element={<FeedPage/>}/>
    </Routes>
  );
}

export default App;
