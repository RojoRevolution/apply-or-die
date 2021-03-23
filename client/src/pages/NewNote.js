import React from "react";
import { InnerSideBar } from "../components/SideBar/SideBar";
import NewNoteForm from "../components/Forms/NewNoteForm";
import { MenuBtn } from "../components/Buttons/index"
import { useAtom } from "jotai";
import { sideBar } from "../utils/Atoms"

function NewNote() {
    const [sidebarWidth] = useAtom(sideBar);


    // Set page title
    document.title = 'Add a New Note | Apply or Die'
    return (
        <div>
            <InnerSideBar width={sidebarWidth} />
            <div className="container-fluid py-5 mainContainer">
                <MenuBtn />
                <NewNoteForm />
            </div>
        </div>
    );
}


export default NewNote;
