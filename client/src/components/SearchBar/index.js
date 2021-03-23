import React from "react";

function SearchBar(props) {
    return (
        <React.Fragment>
            <div className="searchInputDiv">
                <form onSubmit={props.onSubmit}>
                    <div className="row">
                        <div className="col-md-5 margin-none padding-none">
                            <input type="input" className="searchInput" id="exampleFormControlInput1" placeholder="Job Title" name="jobTitle" onChange={props.inputChange} />
                        </div>
                        <div className=" col-md-5">
                            <input type="input" className="searchInput" id="exampleFormControlInput1" placeholder="City" name="jobLocation" onChange={props.inputChange} />
                        </div>
                        <div className="col-md-2">
                            <button className="btn addNewBtn">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )

}

export default SearchBar;