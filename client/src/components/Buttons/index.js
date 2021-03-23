import React from "react";

import { useAtom } from "jotai";
import { searchAtom, sortAtom, sortResults } from "../../utils/Atoms"

// ============================
// Sort Buttons
// ============================

function SortButton(props) {

    let sort;
    if (props.id === "sortCompanyName") {
        console.log("A-Z")
        sort = props.sortByCompany;
    }
    if (props.id === "sortDate") {
        console.log("A-Z")
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
        console.log(searchInput)
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

export { SortButton, FilterButton, DeleteEntry };