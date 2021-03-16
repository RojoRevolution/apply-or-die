import React from "react";
import { SortButton } from "../Buttons";
import sortContent from "../../content/sort.json";
import filterContent from "../../content/filter.json";

function Logo() {
    return (
        <div className="container-fluid px-3 mb-3">
            <div className="divider">
                <div className="logo py-3">
                    <a href="/"><img src="/assets/images/logo/ApplyOrDie.gif" alt="Apply or Die Logo" className="img-size" /></a>
                </div>
            </div>
        </div>
    );
};

function SearchContent(props) {

    console.log(props.handleInputChange)
    return (
        <div className="container-fluid px-3 mb-3">
            <div className="divider">
                <div className="py-4">
                    <form onSubmit={props.handleFormSubmit}>
                        <div className="mb-3">
                            <input type="input" className="form-control" id="searchByCompany" placeholder="Filter By Company:" onChange={props.handleInputChange} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

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

function Filter() {
    return (
        <div className="container-fluid px-3 mb-3">
            <div className="divider">
                <div className="my-4">
                    <h3 className="ms-2">Filter by Status:</h3>
                    {filterContent.map(content => (
                        <SortButton key={content.id} text={content.text} id={content.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

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
                            <a href="">View Stats</a>
                        </li>
                        <li>
                            <a href="">Log Out</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

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
                            <a href="">View Stats</a>
                        </li>
                        <li>
                            <a href="">Log Out</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

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
