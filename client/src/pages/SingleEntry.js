import React from "react";
import { InnerSideBar } from "../components/SideBar/SideBar";
import ExistingContent from "../components/DashboardContent/ExistingContent";
import { MenuBtn } from "../components/Buttons/index"
import { useAtom } from "jotai";
import { sideBar } from "../utils/Atoms"

function AppLog() {
    const [sidebarWidth] = useAtom(sideBar);

    // Set page title
    document.title = 'Viewing Application | Apply or Die'
    return (
        <div>
            <InnerSideBar width={sidebarWidth} />
            <div className="container-fluid py-5 mainContainer">
                <MenuBtn />
                <ExistingContent />
            </div>
        </div>
    );
}


export default AppLog;
