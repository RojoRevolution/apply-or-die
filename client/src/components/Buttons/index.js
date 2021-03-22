import React from "react";

import { useAtom } from "jotai";
import { searchAtom, sortAtom, sortResults } from "../../utils/Atoms"


function SortButton(props) {
    const [searchInput] = useAtom(searchAtom);
    const [sortResults, setSortResults] = useAtom(sortAtom);

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

function FilterButton(props) {

    const [searchInput] = useAtom(searchAtom);

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

function AddNew() {
    return (
        <React.Fragment>
            <button className="btn addNewBtn">Add New Application</button>
        </React.Fragment>
    );
};

function Search() {
    return (
        <React.Fragment>
            <button className="btn addNewBtn">Search</button>
        </React.Fragment>
    );
};

function DeleteEntry(props) {
    return (
        <React.Fragment>
            <button {...props} type="button" className="btn-close bg-light closeIcon" aria-label="Close"></button>
        </React.Fragment>
    )
}

export { SortButton, FilterButton, AddNew, DeleteEntry, Search };