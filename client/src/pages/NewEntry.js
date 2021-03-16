import React from "react";


import SideBar from "../components/SideBar/SideBar";
import NewContent from "../components/DashboardContent/NewContent";


function SearchPage() {



    return (
        <div>
            <SideBar />
            <div className="container-fluid py-5 mainContainer">
                <NewContent />
            </div>
        </div>
    );
}


export default SearchPage;
