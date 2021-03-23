// import API from '../utils/API
import React, { useState, useEffect } from "react";
// import { APItable } from "../components/DashboardContent/ResultsTable";
import APItable from "../components/DashboardContent/ResultsTable/ApiTable"
import dummyAPI from '../content/dummyAPI.json'
import { InnerSideBar } from "../components/SideBar/SideBar";
import SearchBar from "../components/SearchBar"
import API from "../utils/API";

import { useAtom } from "jotai";
import { apiResults } from "../utils/Atoms"



function SearchPage() {

    const apiID = process.env.REACT_APP_API_ID;
    const apiKEY = process.env.REACT_APP_API_KEY;
    const resultsPerPage = '2';

    const [apiData, setApiData] = useAtom(apiResults);

    const [formObject, setFormObject] = useState({})
    // const [didMount, setDidMount] = useState(false);

    useEffect(() => {
        return () => {
            setApiData({}); // This worked for me
        };
    }, []);

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("Submit")
        console.log(event.target.name)

        // let jobTitle = formObject.jobTitle
        let jobSearch = encodeURIComponent(formObject.jobTitle.trim())
        let locationSearch = encodeURIComponent(formObject.jobLocation.trim())
        // console.log('Job Title: ', jobTitle)

        let url = `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${apiID}&app_key=${apiKEY}&results_per_page=${resultsPerPage}&what=${jobSearch}&where=${locationSearch}&content-type=application/json`

        console.log(url)

        API.apiResults(url)
            .then(res =>
                // console.log(res.data.results)
                setApiData(res.data.results)
            )
            .catch(err => console.log(err))
    };

    function handleInputChange(event) {
        const { name, value } = event.target
        setFormObject({ ...formObject, [name]: value })
        console.log(formObject)
    };


    // function getAll() {
    //     API.apiResults(`https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=acdc5b19&app_key=4e793282d539b513354aaab9e6fcbbb9&results_per_page=1&what=javascript%20developer&where=austin%20texas&content-type=application/json`)
    //         // .then(res => res.json())
    //         .then(res => console.log(res.data.results))
    //         // .then(res => setResults(res.results))
    //         // .then(res => console.log("API STATE", res))
    //         .catch(err => console.log(err))
    // }

    // getAll()

    // Set page title
    document.title = 'Search For Jobs | Apply or Die'
    return (
        <div>
            <InnerSideBar />
            <div className="container-fluid py-5 mainContainer">
                <SearchBar onSubmit={handleFormSubmit} inputChange={handleInputChange} />
                <APItable data={apiData} />
            </div>
        </div>
    );
}


export default SearchPage;
