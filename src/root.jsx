import SideBar from "./Components/Shared/SideBar.jsx";
import MainPort from "./Components/Shared/MainPort.jsx";
import {SearchBar} from "./Components/Shared/SearchBar.jsx";
import {Outlet} from "react-router-dom";
import "./assets/base.css"

export default function Root(){
    return <div className="base">
        <div id="detail" className="row">
            <SideBar/>
            <MainPort>
                <SearchBar/>
                <Outlet/>
            </MainPort>
        </div>
    </div>
}