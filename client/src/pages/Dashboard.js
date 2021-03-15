import React from "react";
import SideBar from "../components/SideBar/SideBar";
import ResultTable from "../components/DashboardContent/ResultTable";
// import API from "../utils/API"

function Dashboard() {

  // const apiID = 'acdc5b19';
  // const apiKEY = '4e793282d539b513354aaab9e6fcbbb9';
  // const results = '10';
  // const search = 'Web%20Designer';
  // const where = 'Austin%20Texas'

  // const apiUrl = `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${apiID}&app_key=${apiKEY}&results_per_page=${results}&what=${search}&where=${where}`

  // function getAll() {
  //   fetch(`http://api.adzuna.com/v1/api/jobs/us/search/1?app_id=acdc5b19&app_key=4e793282d539b513354aaab9e6fcbbb9&results_per_page=20&what=javascript%20developer&where=austin%20texas&content-type=application/json`)
  //     .then(res => res.json())
  //     .then(result => console.log(result))
  // }

  // getAll()


  return (
    <div>
      <SideBar />
      <ResultTable />
    </div>
  );
}


export default Dashboard;
