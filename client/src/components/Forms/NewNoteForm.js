import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";





function NewNote(props) {
    const { id } = useParams()
    let history = useHistory();
    const [formObject, setFormObject] = useState("")

    function handleInputChange(event) {
        const noteValue = event.target.value;
        setFormObject(noteValue)
    };

    function handleSubmit(event) {
        event.preventDefault();

        API.newNote(id, { noteText: formObject })
            // .then(res => console.log(res.data))
            .then(history.push("/logs/" + id))
            .catch(err => console.log(err))
    }


    return (
        <div className="m-2 newNote">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="newNote" className="form-label">Add a New Note:</label>
                    <textarea className="form-control" id="formTitle" rows="4" cols="4" name="notes" onChange={handleInputChange}></textarea>
                </div>
                <div className="mb-3">
                    <Link to={"/logs/" + id}><button className="btn viewBtn">Cancel</button></Link>
                    <button id={id} className="btn addNewBtn">Add Note</button>
                </div>
            </form>
        </div>
    )
}

export default NewNote;