import React from "react";

function SortButton(props) {
    return (
        <React.Fragment>
            <button id={props.id} type="button" className="btn sortBtn">{props.text}</button>
        </React.Fragment>
    );
};

function AddNew() {
    return (
        <React.Fragment>
            <button className="btn addNewBtn">Add New Application</button>
        </React.Fragment>
    );
};

export { SortButton, AddNew };