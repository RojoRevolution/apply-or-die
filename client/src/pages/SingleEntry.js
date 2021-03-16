import React from "react";


import SideBar from "../components/SideBar/SideBar";
import ExistingContent from "../components/DashboardContent/ExistingContent";


function AppLog() {



    return (
        <div>
            <SideBar />
            <div className="container-fluid py-5 mainContainer">
                <ExistingContent />
            </div>
        </div>
    );
}


export default AppLog;
