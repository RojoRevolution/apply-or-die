import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";


import API from "../../utils/API";

function EditForm() {

    // const [appData, setAppData] = useState([])
    const { id } = useParams()
    let history = useHistory();
    const [data, setData] = useState([])
    const [formObject, setFormObject] = useState({})

    useEffect(() => {
        loadData();
        return () => {
            setFormObject({}); // This worked for me
        };
    }, []);

    let checkedStatus;

    function loadData() {
        API.getOne(id)
            .then(res => {
                // setAppData(res.data)
                setFormObject({
                    status: res.data.status,
                    title: res.data.title,
                    company: res.data.company,
                    location: res.data.location,
                    listing: res.data.listing,
                    description: res.data.description
                })
                console.log(res)
            })
            .catch(err => console.log(err));
    };



    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
        console.log(formObject)
    };

    function handleSubmit(event) {
        event.preventDefault();
        API.updateData(id, {
            status: formObject.status,
            title: formObject.title,
            company: formObject.company,
            location: formObject.location,
            listing: formObject.listing,
            description: formObject.description
        })
            .then(res => console.log(res.data._id))
            .then(history.push("/logs/" + id))
            .catch(err => console.log(err))
    }



    // function Cancel() {
    //     console.log('Cancel')
    // }

    return (
        <form className="pt-5" id="newLogForm" onSubmit={handleSubmit}>
            {/* Radio Buttons */}
            < div className="pb-4">
                <p>Status:</p>
                <div className="form-check form-check-inline">
                    <input onClick={handleInputChange} className="form-check-input" type="radio" name="status" id="radioApplied" value="Applied" />
                    <label className="form-check-label" htmlFor="checkApplied">Applied</label>
                </div>
                <div className="form-check form-check-inline">
                    <input onClick={handleInputChange} className="form-check-input" type="radio" name="status" id="radioGhosted" value="Ghosted" />
                    <label className="form-check-label" htmlFor="checkGhosted">Ghosted</label>
                </div>
                <div className="form-check form-check-inline">
                    <input onClick={handleInputChange} className="form-check-input" type="radio" name="status" id="radioRejected" value="Rejected" />
                    <label className="form-check-label" htmlFor="rejected">Rejected</label>
                </div>
                <div className="form-check form-check-inline">
                    <input onClick={handleInputChange} className="form-check-input" type="radio" name="status" id="radioScreen" value="Screen" />
                    <label className="form-check-label" htmlFor="checkScreen">Screen</label>
                </div>
                <div className="form-check form-check-inline">
                    <input onClick={handleInputChange} className="form-check-input" type="radio" name="status" id="radioInterview" value="Interview" />
                    <label className="form-check-label" htmlFor="checkInterview">Interview</label>
                </div>
                <div className="form-check form-check-inline">
                    <input onClick={handleInputChange} className="form-check-input" type="radio" name="status" id="radioOffer" value="Offer" htmlFor="checkOffer" />
                    <label className="form-check-label" htmlFor="offer">Offer</label>
                </div>
            </div>
            {/* Title */}
            <div className="mb-3">
                <label htmlFor="formTitle" className="form-label">Title:</label>
                <input onChange={handleInputChange} type="input" className="form-control" id="formTitle" placeholder="Senior Web Designer" name="title" defaultValue={formObject.title} />
            </div>
            {/* Company */}
            <div className="mb-3">
                <label htmlFor="formCompany" className="form-label">Company:</label>
                <input onChange={handleInputChange} type="input" className="form-control" id="formCompany" placeholder="" name="company" defaultValue={formObject.company} />
            </div>
            {/* Location */}
            <div className="mb-3">
                <label htmlFor="formLocation" className="form-label">Location:</label>
                <input onChange={handleInputChange} type="input" className="form-control" id="formLocation" placeholder="" name="location" defaultValue={formObject.location} />
            </div>
            {/* URL */}
            <div className="mb-3">
                <label htmlFor="formURL" className="form-label">Listing URL:</label>
                <input onChange={handleInputChange} type="input" className="form-control" id="formURL" placeholder="indeed.com etc." defaultValue={formObject.listing} />
            </div>
            {/* Description */}
            <div className="mb-3">
                <label htmlFor="formDescription" className="form-label">Listing Description</label>
                <textarea onChange={handleInputChange} type="input" className="form-control" id="formDescription" placeholder="" name="description" defaultValue={formObject.description}>
                </textarea>
            </div>
            {/* Buttons */}
            <div>
                <button type="submit" className="btn m-2 submitBtn" onClick={handleSubmit}>Submit</button>
            </div>
        </form >
    )
}

export default EditForm;