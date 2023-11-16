import "./assets/sass/app.scss";
import {  Route, Routes } from "react-router-dom";
import LayoutSite from "./layouts/LayoutSite/Home";
import RouterPublic from "./router/RouterPublic";
import LayoutAdmin from "./layouts/LayoutAdmin/Index";
import RouterPrivate from "./router/RouterPrivate";
import LoginAdmin from "./Pages/backend/Admin/LoginAdmin";


function App() {
  return (  
      <Routes>
        <Route path="/" element={<LayoutSite />}>
          {RouterPublic.map(function(route,index){
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page/>}/>
          })}
        </Route>
        <Route path="/admin/login" element={<LoginAdmin/>}/>
        <Route path="/admin" element={<LayoutAdmin/>}>
          {RouterPrivate.map(function (route, index) {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />}/>
          })}
        </Route>
      </Routes> 
  );
}

export default App;
