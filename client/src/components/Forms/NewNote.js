import React from "react";


function NewNote() {

    return (
        <div className="my-5">
            <form>
                <div className="mb-3">
                    <label htmlFor="newNote" className="form-label">Add a New Note:</label>
                    <input type="input" className="form-control" id="formTitle" placeholder="Senior Web Designer" name="newNote" />
                </div>
            </form>
        </div>
    )
}

export default NewNote;