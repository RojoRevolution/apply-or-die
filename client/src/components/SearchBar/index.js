import React, { useState } from "react";
import API from "../../utils/API";
import { useAtom } from "jotai";
import { apiTitle, apiLocation } from "../../utils/Atoms"

function SearchBar() {
    // const [apiTitle] = useAtom(apiTitle);
    // const [apiLocation] = useAtom(apiLocation);

    const [formObject, setFormObject] = useState({})

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
        console.log(formObject)
    };

    function handleSubmit(event) {
        event.preventDefault();
        API.saveData({
            status: formObject.jobTitle,
            title: formObject.jobLocation
        })
            // .then(history.push("/dashboard"))
            .catch(err => console.log(err))
    }

    return (
        <React.Fragment>
            <div className="searchInputDiv">
                <form>
                    <div className="row">
                        <div className="col-md-5 margin-none padding-none">
                            <input type="input" className="searchInput" id="exampleFormControlInput1" placeholder="Job Title" name="jobTitle" />
                        </div>
                        <div className=" col-md-5">
                            <input type="input" className="searchInput" id="exampleFormControlInput1" placeholder="City" name="jobLocation" />
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