import React from "react";


import { InnerSideBar } from "../components/SideBar/SideBar";
import ExistingContent from "../components/DashboardContent/ExistingContent";


function AppLog() {


    // Set page title
    document.title = 'Viewing Application | Apply or Die'
    return (
        <div>
            <InnerSideBar />
            <div className="container-fluid py-5 mainContainer">
                <ExistingContent />
            </div>
        </div>
    );
}


export default AppLog;
