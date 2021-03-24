import React from "react";

function ApiTable(props) {
    let dataArray = Array.from(props.data)


    return (
        <div id="userData" className="container-fluid py-3">
            <table className="results">
                <tbody>
                    {dataArray.length === 0 ?
                        <tr className="row justify-content-between my-4 card-container" data-aos="fade-up">
                            <td className="col">
                                <p>Start a search above</p>
                            </td>
                        </tr>
                        :
                        dataArray.map(content => (
                            <tr key={content.id} className="row justify-content-between my-4 card-container" data-aos="fade-up">
                                <td className="col-10">
                                    <h2>{content.title.replace(/(<([^>]+)>)/ig, '')}</h2>
                                    <p className="margin-none">{content.company.display_name} | {content.location.display_name}</p>
                                </td>
                                <td className="col text-center viewBtnColAPI">
                                    <a href={content.redirect_url} target="_blank"><button id={content.id} className="viewBtn">View More</button></a>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ApiTable;