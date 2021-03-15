import React from "react";
import { Logo, SearchContent, Sort, Filter, Navigation, CopyRight } from "./SideBarContent";


function SideBar() {
    return (
        <div className="sidebar">
            <Logo />
            <SearchContent />
            <Sort />
            <Filter />
            <Navigation />
            <CopyRight />
        </div>
    );
}

export default SideBar;
