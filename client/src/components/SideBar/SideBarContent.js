import React from "react";
import { Link } from "react-router-dom";

import { useAtom } from "jotai";
import { searchAtom, filterStatus, filterValue } from "../../utils/Atoms"
import { SortButton } from "../Buttons";
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
    return (
        <div className="container-fluid px-3 mb-3">
            <div className="divider">
                <div className="my-4">
                    <h3 className="ms-2">Sort Results:</h3>
                    {sortContent.map(content => (
                        <SortButton key={content.id} text={content.text} id={content.id} />
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
        const input = event.target.id
        console.log("Input:", input)

        setStatusFilter(input)
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
                        <SortButton key={content.id} text={content.text} id={content.id} filterStatusHandler={filterStatusHandler} />
                    ))}
                </div>
            </div>
        </div>
    );
};

// Navigation Section
function Navigation() {
    return (
        <div className="container-fluid px-3 mb-3">
            <div className="divider">
                <nav id="dashNav" className="my-4">
                    <ul>
                        <li>
                            <a href="/search">Search Jobs</a>
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
function GoBack() {
    return (
        <div className="container-fluid px-3 mb-3">
            <div className="divider">
                <nav id="dashNav" className="my-4">
                    <ul>
                        <li>
                            <a href="/">Dashboard</a>
                        </li>
                        <li>
                            <a href="/search">Search Jobs</a>
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




export { Logo, SearchContent, Sort, Filter, Navigation, CopyRight, GoBack };
