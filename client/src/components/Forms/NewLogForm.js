import React, { useState } from "react";
import API from "../../utils/API";


function LogForm() {

    const newFormEl = document.getElementById('newLogForm')
    const [formObject, setFormObject] = useState({})

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
        console.log(formObject)
    };

    function handleSubmit(event) {
        event.preventDefault();
        API.postOne({
            status: formObject.status,
            title: formObject.title,
            company: formObject.company,
            location: formObject.location,
            listing: formObject.listing,
            description: formObject.description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }


    function Cancel() {
        console.log('Cancel')
    }

    return (
        <form className="pt-5" id="newLogForm" onSubmit={handleSubmit}>
            {/* Radio Buttons */}
            < div className="pb-4">
                <p>Status:</p>
                <div className="form-check form-check-inline">
                    <input onClick={handleInputChange} className="form-check-input" type="radio" name="radioStatus" id="radioApplied" value="applied" />
                    <label className="form-check-label" htmlFor="checkApplied">Applied</label>
                </div>
                <div className="form-check form-check-inline">
                    <input onClick={handleInputChange} className="form-check-input" type="radio" name="radioStatus" id="radioGhosted" value="ghosted" />
                    <label className="form-check-label" htmlFor="checkGhosted">Ghosted</label>
                </div>
                <div className="form-check form-check-inline">
                    <input onClick={handleInputChange} className="form-check-input" type="radio" name="radioStatus" id="radioRejected" value="rejected" />
                    <label className="form-check-label" htmlFor="rejected">Rejected</label>
                </div>
                <div className="form-check form-check-inline">
                    <input onClick={handleInputChange} className="form-check-input" type="radio" name="radioStatus" id="radioScreen" value="screen" />
                    <label className="form-check-label" htmlFor="checkScreen">Screen</label>
                </div>
                <div className="form-check form-check-inline">
                    <input onClick={handleInputChange} className="form-check-input" type="radio" name="radioStatus" id="radioInterview" value="interview" />
                    <label className="form-check-label" htmlFor="checkInterview">Interview</label>
                </div>
                <div className="form-check form-check-inline">
                    <input onClick={handleInputChange} className="form-check-input" type="radio" name="radioStatus" id="radioOffer" value="offer" htmlFor="checkOffer" />
                    <label className="form-check-label" htmlFor="offer">Offer</label>
                </div>
            </div>
            {/* Title */}
            <div className="mb-3">
                <label htmlFor="formTitle" className="form-label">Title</label>
                <input onChange={handleInputChange} type="input" className="form-control" id="formTitle" placeholder="Senior Web Designer" name="title" />
            </div>
            {/* Company */}
            <div className="mb-3">
                <label htmlFor="formCompany" className="form-label">Company</label>
                <input onChange={handleInputChange} type="input" className="form-control" id="formCompany" placeholder="" name="company" />
            </div>
            {/* Location */}
            <div className="mb-3">
                <label htmlFor="formLocation" className="form-label">Location</label>
                <input onChange={handleInputChange} type="input" className="form-control" id="formLocation" placeholder="" name="location" />
            </div>
            {/* URL */}
            <div className="mb-3">
                <label htmlFor="formURL" className="form-label">Listing URL:</label>
                <input onChange={handleInputChange} type="input" className="form-control" id="formURL" placeholder="indeed.com etc." name="listing" />
            </div>
            {/* Description */}
            <div className="mb-3">
                <label htmlFor="formDescription" className="form-label">Listing Description</label>
                <textarea onChange={handleInputChange} type="input" className="form-control" id="formDescription" placeholder="" name="description" >
                </textarea>
            </div>
            {/* Buttons */}
            <div>
                <button type="submit" className="btn m-2 submitBtn" onClick={handleSubmit}>Submit</button>
            </div>
        </form >
    )
}

export default LogForm;