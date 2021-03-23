
import React from "react";
import { Logo, SearchContent, Sort, Filter, NavigationMain, CopyRight, NavigationInterior } from "./SideBarContent";

// ================================
// Dashboard / Home Sidebar
// ================================
function SideBar() {
    return (
        <div className="sidebar">
            <div>
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
function InnerSideBar() {
    return (
        <div className="sidebar">
            <div>
                <Logo />
                <NavigationInterior />
                <CopyRight />
            </div>
        </div>
    );
}

export { SideBar, InnerSideBar };
