import React from "react";
// import dummyDB from "../../content/dummyDBresults.json";


function UserDataTable(props) {

    // REPLACE dummyDB with actual MongoDB or API Call when ready

    return (
        <div id="userData" className="container-fluid py-3">
            <table className="results">
                {props.data.map(content => (
                    <tr key={content.id} className="row justify-content-between my-4 results-row">
                        <td className="col-10">
                            <p><span className={`status ${content.status}`}>{content.status}</span>{content.date}</p>
                            <h2>{content.title}</h2>
                            <p className="margin-none">{content.company} | {content.location}</p>
                        </td>
                        <td className="col text-center viewBtnCol">
                            <button id={content.id} className="viewBtn">View More</button>
                        </td>
                    </tr>
                ))}
            </table>
        </div >
    );
};

export default UserDataTable;