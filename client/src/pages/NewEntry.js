import React from "react";
import { InnerSideBar } from "../components/SideBar/SideBar";
import NewContent from "../components/DashboardContent/NewContent";
import { MenuBtn } from "../components/Buttons/index"
import { useAtom } from "jotai";
import { sideBar } from "../utils/Atoms"

function NewEntry() {
    const [sidebarWidth] = useAtom(sideBar);


    // Set page title
    document.title = 'Add New Application | Apply or Die'
    return (
        <div>
            <InnerSideBar width={sidebarWidth} />
            <div className="container-fluid py-5 mainContainer">
                <MenuBtn />
                <NewContent />
            </div>
        </div>
    );
}


export default NewEntry;
