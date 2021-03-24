import React, { useState, useEffect } from "react";
import APItable from "../components/DashboardContent/ResultsTable/ApiTable"
import { InnerSideBar } from "../components/SideBar/SideBar";
import SearchBar from "../components/SearchBar"
import API from "../utils/API";
import { MenuBtn } from "../components/Buttons/index"

import { useAtom } from "jotai";
import { apiResults, sideBar } from "../utils/Atoms"



function SearchPage() {
    const [sidebarWidth] = useAtom(sideBar);

    const apiID = process.env.REACT_APP_API_ID;
    const apiKEY = process.env.REACT_APP_API_KEY;
    const resultsPerPage = '30';

    const [apiData, setApiData] = useAtom(apiResults);

    const [formObject, setFormObject] = useState({})

    // Use the return statement so it can unmount when you leave the page
    useEffect(() => {
        return () => {
            setApiData({});
        };
    }, []);

    function handleFormSubmit(event) {
        event.preventDefault();
        // encode the entered text to account for spaces
        let jobSearch = encodeURIComponent(formObject.jobTitle.trim())
        let locationSearch = encodeURIComponent(formObject.jobLocation.trim())

        let url = `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${apiID}&app_key=${apiKEY}&results_per_page=${resultsPerPage}&what=${jobSearch}&where=${locationSearch}&content-type=application/json`

        API.apiResults(url)
            .then(res =>
                // Set results to ApiData atom
                setApiData(res.data.results)
            )
            .catch(err => console.log(err))
    };

    function handleInputChange(event) {
        const { name, value } = event.target
        setFormObject({ ...formObject, [name]: value })
    };


    // Set page title
    document.title = 'Search For Jobs | Apply or Die'
    return (
        <div>
            <InnerSideBar width={sidebarWidth} />
            <div className="container-fluid py-5 mainContainer">
                <MenuBtn />
                <SearchBar onSubmit={handleFormSubmit} inputChange={handleInputChange} />
                <APItable data={apiData} />
            </div>
        </div>
    );
}


export default SearchPage;
