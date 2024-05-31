import React, { useContext } from 'react';
import { EmployeeContext } from './EmployeeContext';
import { BarChart } from '@mui/x-charts/BarChart';
import EditEmployee from './EditEmployee';

function EmployeeChart() {
  const { employeeList } = useContext(EmployeeContext);

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
}

export default EmployeeChart;
