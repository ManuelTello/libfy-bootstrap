import SideBar from "./Components/Shared/SideBar.jsx";
import MainPort from "./Components/Shared/MainPort.jsx";
import {SearchBar} from "./Components/Shared/SearchBar.jsx";
import {Outlet} from "react-router-dom";

export default function Root(){
    return <div>
        <div id="detail" className="container-fluid">
            <SideBar/>
            <MainPort>
                <SearchBar/>
                <Outlet/>
            </MainPort>
        </div>
    </div>
}