import React from "react";


import { InnerSideBar } from "../components/SideBar/SideBar";
import EditFormContent from "../components/DashboardContent/ExistingContent/EditContent";


function SearchPage() {


    // Set page title
    document.title = 'Edit Entry | Apply or Die'
    return (
        <div>
            <InnerSideBar />
            <div className="container-fluid py-5 mainContainer">
                <EditFormContent />
            </div>
        </div>
    );
}


export default SearchPage;
