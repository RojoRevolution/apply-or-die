import React from "react";

import { useAtom } from "jotai";
import { searchAtom, sideBar } from "../../utils/Atoms"

// ============================
// Sort Buttons
// ============================

function SortButton(props) {

    let sort;
    if (props.id === "sortCompanyName") {
        sort = props.sortByCompany;
    }
    if (props.id === "sortDate") {
        sort = props.sortByDate;
    }

    return (
        <React.Fragment>
            <button id={props.id} type="button" className='btn sortBtn' onClick={sort} >{props.text}</button>
        </React.Fragment>
    );
};

// ============================
// Filter Buttons
// ============================
function FilterButton(props) {

    const [searchInput] = useAtom(searchAtom);

    // Logic for setting the active state
    let active;
    if (searchInput === props.id.toLowerCase()) {
        active = "active"
    } else if (searchInput === "" && props.id.toLowerCase() === "all") {
        active = "active"
    } else {
        active = "inactive";
    }

    return (
        <React.Fragment>
            <button id={props.id} type="button" className={`btn sortBtn ` + active} onClick={props.filterStatusHandler}>{props.text}</button>
        </React.Fragment >
    );
};

function DeleteEntry(props) {
    return (
        <React.Fragment>
            <button {...props} type="button" className="btn-close bg-light closeIcon" aria-label="Close"></button>
        </React.Fragment>
    )
}

function MenuBtn() {
    const [sidebarWidth, setsidebarWidth] = useAtom(sideBar);

    const handleClick = () => {
        setsidebarWidth("openMenu")
    }

    return (
        <React.Fragment>
            <div className="burgerMenu">
                <button type="button" className="btn bg-light" aria-label="menu" onClick={handleClick}><i className="fas fa-bars"></i>
                </button>
            </div>
        </React.Fragment>
    )
}

function MenuClose() {
    const [sidebarWidth, setsidebarWidth] = useAtom(sideBar);

    const handleClick = () => {
        setsidebarWidth("closeMenu")
    }

    return (
        <React.Fragment>
            <div className="closeMenuDiv">
                <button type="button" className="btn" aria-label="closeMenu" onClick={handleClick}><i className="fas fa-times"></i>
                </button>
            </div>
        </React.Fragment>
    )
}

export { SortButton, FilterButton, DeleteEntry, MenuBtn, MenuClose };