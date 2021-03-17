import React from "react";


import { InnerSideBar } from "../components/SideBar/SideBar";
import NewNote from "../components/Forms/NewNote";


function SearchPage() {



    return (
        <div>
            <InnerSideBar />
            <div className="container-fluid py-5 mainContainer">
                <NewNote />
            </div>
        </div>
    );
}


export default SearchPage;
