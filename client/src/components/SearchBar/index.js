import React from "react";
import { AddNew } from "../Buttons"


function SearchBar() {

    return (
        <React.Fragment>
            <div className="searchInputDiv">
                <form>
                    <div className="row">
                        <div className="col-md-5 margin-none padding-none">
                            <input type="input" className="form-control searchInput" id="exampleFormControlInput1" placeholder="Title" />
                        </div>
                        <div className=" col-md-5">
                            <input type="input" className="form-control searchInput" id="exampleFormControlInput1" placeholder="City" />
                        </div>
                        {/* <div className="col-md-2">
                            <button className="btn addNewBtn">Submit</button>
                        </div> */}
                    </div>
                </form>
            </div>
        </React.Fragment>
    )

}

export default SearchBar;