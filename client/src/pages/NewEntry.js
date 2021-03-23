import React from "react";


import { InnerSideBar } from "../components/SideBar/SideBar";
import NewContent from "../components/DashboardContent/NewContent";


function NewEntry() {


    // Set page title
    document.title = 'Add New Application | Apply or Die'
    return (
        <div>
            <InnerSideBar />
            <div className="container-fluid py-5 mainContainer">
                <NewContent />
            </div>
        </div>
    );
}


export default NewEntry;
