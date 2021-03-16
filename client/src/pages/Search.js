import React from "react";
// import API from '../utils/API
import ResultsTable from "../components/DashboardContent/ResultsTable";
import dummyAPI from '../content/dummyAPI.json'
import SideBar from "../components/SideBar/SideBar";


function SearchPage() {



    // const apiID = 'acdc5b19';
    // const apiKEY = '4e793282d539b513354aaab9e6fcbbb9';
    // const results = '10';
    // const search = 'Web%20Designer';
    // const where = 'Austin%20Texas'

    // const apiUrl = `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${apiID}&app_key=${apiKEY}&results_per_page=${results}&what=${search}&where=${where}`

    // API has 250 HIT LIMIT PER DAY

    // function getAll() {
    //     API.getAll(`https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=acdc5b19&app_key=4e793282d539b513354aaab9e6fcbbb9&results_per_page=20&what=javascript%20developer&where=austin%20texas&content-type=application/json`)
    //         .then(res => res.json())
    //         .then(res => console.log(res))
    //         // .then(res => setResults(res.results))
    //         // .then(res => console.log("API STATE", res))
    //         .catch(err => console.log(err))
    // }

    // getAll()


    return (
        <div>
            <SideBar />
            <div className="container-fluid py-5 mainContainer">
                <ResultsTable data={dummyAPI} id={dummyAPI.id} date={dummyAPI.date} title={dummyAPI.title} comapny={dummyAPI.company} location={dummyAPI.location} />
            </div>
        </div>
    );
}


export default SearchPage;