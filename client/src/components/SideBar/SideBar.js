
import React from "react";
import { MenuClose } from "../Buttons"
import { Logo, SearchContent, Sort, Filter, NavigationMain, CopyRight, NavigationInterior } from "./SideBarContent";

// ================================
// Dashboard / Home Sidebar
// ================================
function SideBar(props) {

    return (
        <div className={`sidebar ${props.width}`}>
            <div>
                <MenuClose />
                <Logo />
                <SearchContent />
                <Sort />
                <Filter />
                <NavigationMain />
                <CopyRight />
            </div>
        </div>
    );
}

// ================================
// Interio Pages Sidebar
// ================================
function InnerSideBar(props) {
    return (
        <div className={`sidebar ${props.width}`}>
            <div>
                <MenuClose />
                <Logo />
                <NavigationInterior />
                <CopyRight />
            </div>
        </div>
    );
}

export { SideBar, InnerSideBar };
