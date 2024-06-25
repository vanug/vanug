import React from "module";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
    return(
    <>
    <Header/>
    <Outlet/>
    <Sidebar/>
    </>
    )
}
export default Layout
