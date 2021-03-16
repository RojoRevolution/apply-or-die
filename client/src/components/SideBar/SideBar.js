import React from "react";
import { Logo, SearchContent, Sort, Filter, Navigation, CopyRight, GoBack } from "./SideBarContent";




function SideBar() {


    function RenderTable() {
        if (window.location.pathname === "/") {
            return (
                <React.Fragment>
                    <Logo />
                    <SearchContent />
                    <Sort />
                    <Filter />
                    <Navigation />
                    <CopyRight />
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <Logo />
                    <GoBack />
                </React.Fragment>
            )
        }
    };


    return (
        <div className="sidebar">
            <RenderTable />
        </div>
    );
}

export default SideBar;
