import React from "react";
import "./App.css";
import {NavLink, Outlet, Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <NavLink to={"/"}>main</NavLink>---
            <NavLink to={"/login"}>login</NavLink>---
            <NavLink to={"/profile"}>profile</NavLink>---
            <NavLink to={'/profile/settings'}>settings</NavLink>---

            <Routes>
                <Route path={'*'} element={<div><div>404</div> </div>}/>
                <Route path={'/'} element={<div>main</div>}/>
                <Route path={'/login'} element={<div>login</div>}/>
                <Route path={"/profile"} element={
                    <div>
                        profile
                    <Outlet/> {/*settings - тут отобразится из строки 23*/}

                    </div>}>
                    <Route path={"*"} element={<div>profile page not found</div>}/>
                    <Route index element={<div>show id</div>}/>
                    <Route path={":id/:XXX"} element={<div>id</div>}/>
                    <Route path={"settings"} element={<div>settings</div>}/>

                </Route>
            </Routes>
        </div>
    );
}

export default App;
// * - все что угодно после слеша

// 1 - вложенность

/*<Route path={"/profile/!*"} element={
    <div>
        profile
                    // сюда встанет settings
        <Routes>
            <Route path={"/settings"} element={<div>settings</div>}/>
        </Routes>
    </div>}
/>*/

// 2 - вложенность - вставляем как чилдрен

/*<Route path={"/profile/!*"} element={
    <div>
        profile
        <Outlet/> {/!*settings - тут отобразится из строки 23*!/}

    </div>}>
    <Route path={"settings"} element={<div>settings</div>}/>
</Route>*/

