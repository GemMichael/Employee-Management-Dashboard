import React, { useContext } from 'react';
import { EmployeeContext } from './EmployeeContext';
import { BarChart } from '@mui/x-charts/BarChart';
import EditEmployee from './EditEmployee';
import { useState, useEffect } from "react";
import { getFirestore, collection, onSnapshot, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebaseApp from "./firebaseConfig";

function EmployeeChart() {

  //Use the employeeContext to access the employee lisy
  const { employeeList } = useContext(EmployeeContext);
  //State to manage authentication status and user properties
  const [authenticated, setAuthenticated] = useState(false)

  const [userProperties, setUserProperties] = useState({});

  const auth = getAuth(firebaseApp);


  onAuthStateChanged(auth, (user) => {
    if (user) {
      setAuthenticated(true)
      setUserProperties(user);

    } else {

    }
  });


  // Function to calculate employee counts by employment type
  const getEmployeeCountsByType = () => {
    const counts = {
      fullTime: 0,
      partTime: 0,
      temporary: 0
    };

    // Iterate through employeeList and count employees by employment type
    employeeList.forEach(employee => {
      switch (employee.employment) {
        case 'full-time':
          counts.fullTime++;
          break;
        case 'part-time':
          counts.partTime++;
          break;
        case 'temporary':
          counts.temporary++;
          break;
        default:
          break;
      }
    });

    return counts;
  };

  // Get employee counts by type
  const employeeCounts = getEmployeeCountsByType();

  // Define xAxis labels and series data for the BarChart
  const xAxis = [{ scaleType: 'band', data: ['Full-time', 'Part-time', 'Temporary'] }];
  const series = [{ data: [employeeCounts.fullTime, employeeCounts.partTime, employeeCounts.temporary] }];
  //Render the EditEmployee component and Barchart if authenticated
  if (authenticated) {
    return (
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '1', overflowY: 'auto' }}>
          <EditEmployee />
        </div>

        <div style={{ width: '500px', height: '300px' }}>
          <BarChart
            xAxis={xAxis}
            series={series}
            width={500}
            height={300}
          />
        </div>
      </div>
    );
  } else {
    return (
      <section>
        <h1>Welcome guest!</h1>
      </section>
    )
  }

}

export default EmployeeChart;
