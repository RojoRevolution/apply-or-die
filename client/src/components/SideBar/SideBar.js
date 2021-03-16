import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { applications, searchAtom } from "../../utils/Atoms"
import { Logo, SearchContent, Sort, Filter, Navigation, CopyRight, GoBack } from "./SideBarContent";




function SideBar() {

    const [searchInput, setSearchInput] = useAtom(searchAtom);
    // const [searchInput, setSearchInput] = useState("");


    // Search Form functions
    function handleFormSubmit(event) {
        event.preventDefault();
    }

    function handleInputChange(event) {
        const input = event.target.value;
        console.log(input)
        setSearchInput(input)
    }

    function RenderTable() {
        if (window.location.pathname === "/") {
            return (
                <div>
                    <Logo />
                    <p>Atom {searchInput}</p>
                    {/* <SearchContent search={props.search} handleFormSubmit={props.handleFormSubmit} handleInputChange={props.handleInputChange} /> */}
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
                    <Sort />
                    <Filter />
                    <Navigation />
                    <CopyRight />
                </div>
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
            <div>
                <Logo />
                <p>Atom {searchInput}</p>
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
                <Sort />
                <Filter />
                <Navigation />
                <CopyRight />
            </div>
            {/* <RenderTable /> */}
        </div>
    );
}

export default SideBar;
