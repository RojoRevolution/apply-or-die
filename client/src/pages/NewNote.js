import React from "react";


import { InnerSideBar } from "../components/SideBar/SideBar";
import NewNoteForm from "../components/Forms/NewNoteForm";


function SearchPage() {



    return (
        <div>
            <InnerSideBar />
            <div className="container-fluid py-5 mainContainer">
                <NewNoteForm />
            </div>
        </div>
    );
}


export default SearchPage;
