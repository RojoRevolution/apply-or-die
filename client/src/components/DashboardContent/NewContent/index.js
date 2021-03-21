import React from "react";
import NewLogForm from "../../Forms/NewLogForm"

function NewContent() {


    return (
        <React.Fragment>
            <div className=" p-5 card-container">
                <h1>Add application information to log a new entry</h1>
                <NewLogForm />
            </div>
        </React.Fragment>
    )

}

export default NewContent;