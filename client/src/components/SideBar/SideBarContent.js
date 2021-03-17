import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useAtom } from "jotai";
import { searchAtom, sortAtom, filterValue } from "../../utils/Atoms"
import { SortButton, FilterButton } from "../Buttons";
import sortContent from "../../content/sort.json";
import filterContent from "../../content/filter.json";

// Logo Section
function Logo() {
    return (
        <div className="container-fluid px-3 mb-3">
            <div className="divider">
                <div className="logo py-3">
                    <Link to={"/"}><img src="/assets/images/logo/ApplyOrDie.gif" alt="Apply or Die Logo" className="img-size" /></Link>
                </div>
            </div>
        </div>
    );
};

// Filter By Company Section
function SearchContent() {

    const [searchInput, setSearchInput] = useAtom(searchAtom);

    // Search Form functions
    function handleFormSubmit(event) {
        event.preventDefault();
    }

    function handleInputChange(event) {
        const input = event.target.value;
        setSearchInput(input)
    }

    return (
        <div className="container-fluid px-3 mb-3">
            <div className="divider">
                <div className="py-4">
                    <form onSubmit={handleFormSubmit}>
                        <div className="mb-3">
                            <input type="input" className="form-control" id="searchByCompany" placeholder="Filter By Company:" onChange={handleInputChange} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

// Sort Results Section
function Sort() {

    const [sortResults, setSortResults] = useAtom(sortAtom);

    function sortHandler(event) {
        event.preventDefault();
        const click = event.target.id
        console.log("Input:", click)

        setSortResults({ click }, function () {
            setSortResults({ sort: sortResults.click })
        })
        console.log('sortResults:', sortResults)

    }

    return (
        <div className="container-fluid px-3 mb-3">
            <div className="divider">
                <div className="my-4">
                    <h3 className="ms-2">Sort Results:</h3>
                    {sortContent.map(content => (
                        <SortButton key={content.id} text={content.text} id={content.id} sort={sortHandler} />
                    ))}
                </div>
            </div>
        </div>
    );
};

// Filter by status Section
function Filter() {

    // const [statusState, setStatusState] = useAtom(filterStatus);
    const [statusFilter, setStatusFilter] = useAtom(filterValue);



    function filterStatusHandler(event) {
        // const filterButton = document.getElementById(event.target.id)
        const click = event.target.id
        console.log("Click:", click)

        setStatusFilter(click)
        console.log('StatusFilter:', statusFilter)



        // if (statusState.value === "") {
        //     setStatusState("active");
        //     console.log(statusState)
        //     filterButton.classList.add(statusState)
        // }
        // else if (statusState === "active") {
        //     setStatusState({
        //         status: "",
        //         value: "",
        //     });
        //     setStatusState({
        //         status: "fStatusActive",
        //         value: [input],
        //     });
        //     filterButton.classList.remove(statusState.status)
        // }

    }

    return (
        <div className="container-fluid px-3 mb-3">
            <div className="divider">
                <div className="my-4">
                    <h3 className="ms-2">Filter by Status:</h3>
                    {filterContent.map(content => (
                        <FilterButton key={content.id} text={content.text} id={content.id} filterStatusHandler={filterStatusHandler} />
                    ))}
                </div>
            </div>
        </div>
    );
};

// Navigation Section
function NavigationMain() {
    return (
        <div className="container-fluid px-3 mb-3">
            <div className="divider">
                <nav id="dashNav" className="my-4">
                    <ul>
                        <li>
                            <Link to={"/search"}>Search Jobs</Link>
                        </li>
                        <li>
                            <a href="#">View Stats</a>
                        </li>
                        <li>
                            <a href="#">Log Out</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};



// Interior Navigation Section
function NavigationInterior() {
    return (
        <div className="container-fluid px-3 mb-3">
            <div className="divider">
                <nav id="dashNav" className="my-4">
                    <ul>
                        <li>
                            <Link to={"/"}>Dashboard</Link>
                        </li>
                        <li>
                            <Link to={"/search"}>Search Jobs</Link>
                        </li>
                        <li>
                            <a href="#">View Stats</a>
                        </li>
                        <li>
                            <a href="#">Log Out</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

// Copyright text section
function CopyRight() {
    return (
        <div className="container-fluid px-3 mb-3">
            <div className="my-4">
                <p className="copyright">Copyright © 2021 RojoRevolution. All Rights Reserved.</p>
            </div>
        </div>
    );
};




export { Logo, SearchContent, Sort, Filter, NavigationMain, CopyRight, NavigationInterior };
