import React from "react";
import { InnerSideBar } from "../components/SideBar/SideBar";
import EditFormContent from "../components/DashboardContent/ExistingContent/EditContent";
import { MenuBtn } from "../components/Buttons/index"
import { useAtom } from "jotai";
import { sideBar } from "../utils/Atoms"

function SearchPage() {
    const [sidebarWidth] = useAtom(sideBar);


    // Set page title
    document.title = 'Edit Entry | Apply or Die'
    return (
        <div>
            <InnerSideBar width={sidebarWidth} />
            <div className="container-fluid py-5 mainContainer">
                <MenuBtn />
                <EditFormContent />
            </div>
        </div>
    );
}


export default SearchPage;
