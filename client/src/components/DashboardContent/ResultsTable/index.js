import React from "react";
// import { useAtom } from "jotai";
// import { filterStatus } from "../../utils/Atoms"

function ResultsTable(props) {

    const filterBtns = document.getElementsByClassName('active')

    // console.log('PROPS', props.search)
    // props.search.filter(input => input.company.toLowerCase().includes(props.search)).

    function RenderTable() {
        if (window.location.pathname === "/") {
            return (
                <React.Fragment>
                    {props.data.filter(input => input.company.toLowerCase().includes(props.search)).map(content => (
                        <tr key={content._id} className="row justify-content-between my-4 card-container">
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
                </React.Fragment>
            )
        }
        else if (window.location.pathname === "/" && filterBtns.className.includes('active')) {
            return (
                <React.Fragment>
                    {props.data.filter(input => input.company.toLowerCase().includes(props.filterState)).map(content => (
                        <tr key={content._id} className="row justify-content-between my-4 card-container">
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
                </React.Fragment>
            )
        }
        else if (window.location.pathname === "/search") {
            return (
                <React.Fragment>
                    {props.data.map(content => (
                        <tr key={content._id} className="row justify-content-between my-4 card-container">
                            <td className="col-10">
                                <h2>{content.title}</h2>
                                <p className="margin-none">{content.company} | {content.location}</p>
                            </td>
                            <td className="col text-center viewBtnColAPI">
                                <button id={content.id} className="viewBtn">View More</button>
                            </td>
                        </tr>
                    ))}
                </React.Fragment>
            )
        }
    }


    return (
        <div id="userData" className="container-fluid py-3">
            <table className="results">
                <tbody>
                    <RenderTable />
                </tbody>
            </table>
        </div >
    );
};

export default ResultsTable;