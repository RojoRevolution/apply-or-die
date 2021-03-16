import React from "react";
import EditForm from "../../Forms/EditForm"

function NewContent() {


    return (
        <React.Fragment>
            <div className=" p-5 card-container">
                <h1>Add application information to log a new entry</h1>
                <EditForm />
            </div>
        </React.Fragment>
    )

}

export default NewContent;