import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";

import { useAtom } from "jotai";
import { searchAtom, sortAtom, activeBtn, dbData } from "../../utils/Atoms"
import { SortButton, FilterButton } from "../Buttons";
import sortContent from "../../content/sort.json";
import { useHistory } from "react-router-dom";

import filterContent from "../../content/filter.json";

// Logo Section
function Logo() {
    return (
        <div className="container-fluid px-3 mb-3">
            <div className="divider">
                <div className="logo py-3">
                    <Link to={"/dashboard"}><img src="/assets/images/logo/ApplyOrDie.gif" alt="Apply or Die Logo" className="img-size" /></Link>
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

    // const [searchInput, setSearchInput] = useAtom(searchAtom);
    const [appsData, setAppsData] = useAtom(dbData);
    const [sortResults, setSortResults] = useAtom(sortAtom);


    const sortByCompany = (event) => {
        console.log(event.target.id)
        const sortedCompany = appsData.sort((a, b) => {
            if (b.company > a.company) {
                return -1
            }
            if (a.company > b.company) {
                return 1
            }
            return 0;
        });

        if (sortResults === "DESC") {
            sortedCompany.reverse();
            setSortResults("ASC");
            console.log(sortResults)
        } else {
            setSortResults("DESC");
        }
        setAppsData(sortedCompany)
    }

    const sortByDate = (event) => {
        console.log(event.target.id)
        const sortedCompany = appsData.sort((a, b) => {
            if (b.date > a.date) {
                return -1
            }
            if (a.date > b.date) {
                return 1
            }
            return 0;
        });

        if (sortResults === "DESC") {
            sortedCompany.reverse();
            setSortResults("ASC");
        } else {
            setSortResults("DESC");
        }
        setAppsData(sortedCompany)
    }

    return (
        <div className="container-fluid px-3 mb-3">
            <div className="divider">
                <div className="my-4">
                    <h3 className="ms-2">Sort Results:</h3>
                    {sortContent.map(content => (
                        <SortButton key={content.id} text={content.text} id={content.id} sortByCompany={sortByCompany} sortByDate={sortByDate} />
                    ))}
                </div>
            </div>
        </div>
    );
};

// Filter by status Section
function Filter() {

    const [searchInput, setSearchInput] = useAtom(searchAtom);
    const [activeButton, setActiveButton] = useAtom(activeBtn);

    let allFilterBtns = document.querySelectorAll('inactive')
    console.log(allFilterBtns)


    function filterStatusHandler(event) {
        let id = event.target.id.toLowerCase();
        let click = event.target.id.toLowerCase();

        if (id === "all") {
            setSearchInput("")
        } else {
            setSearchInput(click)
        }


    }

    return (
        <div className="container-fluid px-3 mb-3">
            <div className="divider">
                <div className="my-4">
                    <h3 className="ms-2">Filter by Status:</h3>
                    {filterContent.map(content => (
                        <FilterButton key={content.id} text={content.text} id={content.id} filterStatusHandler={filterStatusHandler} active={activeButton} />
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
                            <Link to={"/new"}>Add New Application</Link>
                        </li>
                        <li>
                            <Link to={"/search"}>Search Jobs</Link>
                        </li>
                        <li>
                            <a href="#">View Stats</a>
                        </li>
                        <li>
                            <Link to={"/login"}>Log Out</Link>
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
                            <Link to={"/dashboard"}>Dashboard</Link>
                        </li>
                        <li>
                            <Link to={"/search"}>Search Jobs</Link>
                        </li>
                        <li>
                            <a href="#">View Stats</a>
                        </li>
                        <li>
                            <Link to={"/login"}>Log Out</Link>
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
