import React from "react";


import { InnerSideBar } from "../components/SideBar/SideBar";
import NewNoteForm from "../components/Forms/NewNoteForm";


function NewNote() {
    // Set page title
    document.title = 'Add a New Note | Apply or Die'
    return (
        <div>
            <InnerSideBar />
            <div className="container-fluid py-5 mainContainer">
                <NewNoteForm />
            </div>
        </div>
    );
}


export default NewNote;
