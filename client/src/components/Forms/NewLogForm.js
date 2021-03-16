import React from "react";


function LogForm() {

    const newFormEl = document.getElementById('newLogForm')

    // newFormEl.addEventListener('submit', (event) => {
    //     event.preventDefalt();
    //     console.log("Submit")
    // })

    function handleSubmit(event) {
        event.preventDefault();
        console.log('SUBMIT')
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
                    <input className="form-check-input" type="radio" name="radioStatus" id="radioApplied" value="applied" />
                    <label className="form-check-label" htmlFor="checkApplied">Applied</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="radioStatus" id="radioGhosted" value="ghosted" />
                    <label className="form-check-label" htmlFor="checkGhosted">Ghosted</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="radioStatus" id="radioRejected" value="rejected" />
                    <label className="form-check-label" htmlFor="rejected">Rejected</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="radioStatus" id="radioScreen" value="screen" />
                    <label className="form-check-label" htmlFor="checkScreen">Screen</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="radioStatus" id="radioInterview" value="interview" />
                    <label className="form-check-label" htmlFor="checkInterview">Interview</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="radioStatus" id="radioOffer" value="offer" htmlFor="checkOffer" />
                    <label className="form-check-label" htmlFor="offer">Offer</label>
                </div>
            </div>
            {/* Title */}
            <div className="mb-3">
                <label htmlFor="formTitle" className="form-label">Title</label>
                <input type="input" className="form-control" id="formTitle" placeholder="Senior Web Designer" />
            </div>
            {/* Company */}
            <div className="mb-3">
                <label htmlFor="formCompany" className="form-label">Company</label>
                <input type="input" className="form-control" id="formCompany" placeholder="" />
            </div>
            {/* Location */}
            <div className="mb-3">
                <label htmlFor="formLocation" className="form-label">Location</label>
                <input type="input" className="form-control" id="formLocation" placeholder="" />
            </div>
            {/* URL */}
            <div className="mb-3">
                <label htmlFor="formURL" className="form-label">Listing URL:</label>
                <input type="input" className="form-control" id="formURL" placeholder="indeed.com etc." />
            </div>
            {/* Description */}
            <div className="mb-3">
                <label htmlFor="formDescription" className="form-label">Listing Description</label>
                <textarea type="input" className="form-control" id="formDescription" placeholder="" >
                </textarea>
            </div>
            {/* Buttons */}
            <div>
                <button type="submit" className="btn m-2 submitBtn">Submit</button>
            </div>
        </form >
    )
}

export default LogForm;