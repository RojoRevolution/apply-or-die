import React from "react";
import dummyDB from "../../content/dummyDBresults.json";


function UserDataTable() {

    // REPLACE dummyDB with actual MongoDB when ready

    return (
        <div id="userData" className="container-fluid py-5">
            <table className="results">
                {dummyDB.map(content => (
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