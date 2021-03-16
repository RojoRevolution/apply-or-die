import React, { useEffect } from "react";
import { useAtom } from "jotai";
import { applications } from "../utils/Atoms"
import API from "../utils/API"

import { AddNew } from "../components/Buttons";
import SideBar from "../components/SideBar/SideBar";
import ResultsTable from "../components/DashboardContent/ResultsTable";
import dummyDB from "../content/dummyDBresults.json";
// import API from "../utils/API"

function Dashboard() {

  const [appsData, setAppsData] = useAtom(applications);

  useEffect(() => {
    loadApps()
  }, []);

  function loadApps() {
    API.getApps()
      .then(res => {
        console.log(res)
        setAppsData(res.data)
      })
      .catch(err => console.log(err));
  };

  console.log('AppsData', appsData)

  // const apiID = 'acdc5b19';
  // const apiKEY = '4e793282d539b513354aaab9e6fcbbb9';
  // const results = '10';
  // const search = 'Web%20Designer';
  // const where = 'Austin%20Texas'

  // const apiUrl = `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${apiID}&app_key=${apiKEY}&results_per_page=${results}&what=${search}&where=${where}`

  // function getAll() {
  //   fetch(`https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=acdc5b19&app_key=4e793282d539b513354aaab9e6fcbbb9&results_per_page=20&what=javascript%20developer&where=austin%20texas&content-type=application/json`)
  //     .then(res => res.json())
  //     // .then(res => setResults(res))
  //     .then(res => console.log(res))
  // }

  // function getAll() {
  //   setResults(dummyDB)
  //   console.log(Results)
  // }

  // getAll()


  return (
    <div>
      <SideBar />
      <div className="container-fluid py-5 mainContainer">
        <div className="text-center">
          <a href="/new"><AddNew /></a>
        </div>
        <ResultsTable data={dummyDB} id={dummyDB.id} date={dummyDB.date} title={dummyDB.title} comapny={dummyDB.company} location={dummyDB.location} />
      </div>
    </div >
  );
}


export default Dashboard;
