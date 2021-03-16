import React from "react";


import SideBar from "../components/SideBar/SideBar";
import EditFormContent from "../components/DashboardContent/ExistingContent/EditContent";


function SearchPage() {



    return (
        <div>
            <SideBar />
            <div className="container-fluid py-5 mainContainer">
                <EditFormContent />
            </div>
        </div>
    );
}


export default SearchPage;
