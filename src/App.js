import { Route, Routes } from 'react-router-dom';
import "./App.css";
// import Admin from "./views/pages/admin";
import Login from "./views/pages/login";
import AppFooter from "./views/components/appFooter";
import AppHeader from "./views/components/appHeader";
import PageContent from "./views/components/pageContent";
import SideMenu from "./views/components/sideMenu";
import { useSelector } from 'react-redux';
import { loginResponse } from "./controllers/redux/selectors";

function App() {
  let loginAuth = useSelector(loginResponse);
  console.log(loginAuth);
  return (
    loginAuth === true ? (
      <div className="App">
        <AppHeader />
        <div className="SideMenuAndPageContent">
          <SideMenu></SideMenu>
          <PageContent></PageContent>
        </div>
        <AppFooter />
      </div>) : (<Routes><Route path='/' element={<Login />} /></Routes>)
    // < div className = 'App' > <Routes><Route path='/' element={<Login />} /></Routes></ >
    // <div>hello</div>
  );
  // return ((1 + 1 > 2) ? (<div>hello</div>) : (<div>hello 1</div>));
}
export default App;
