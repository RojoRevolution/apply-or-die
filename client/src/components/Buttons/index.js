import React from "react";


function SortButton(props) {
    return (
        <React.Fragment>
            <button id={props.id} type="button" className='btn sortBtn' onClick={props.sort}>{props.text}</button>
        </React.Fragment>
    );
};

function FilterButton(props) {
    return (
        <React.Fragment>
            <button id={props.id} type="button" className='btn sortBtn' onClick={props.sort}>{props.text}</button>
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

function DeleteEntry(props) {
    return (
        <React.Fragment>
            <button {...props} type="button" className="btn-close bg-light closeIcon" aria-label="Close"></button>
        </React.Fragment>
    )
}

export { SortButton, FilterButton, AddNew, DeleteEntry };