
import React from "react";


import { Logo, SearchContent, Sort, Filter, NavigationMain, CopyRight, NavigationInterior } from "./SideBarContent";


function SideBar() {


    return (
        <div className="sidebar">
            <div>
                <Logo />
                <SearchContent />
                <Sort />
                <Filter />
                <NavigationMain />
                <NavigationInterior />
                <CopyRight />
            </div>
            {/* <RenderSideBar /> */}
        </div>
    );
}

export default SideBar;
