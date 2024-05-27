import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';


function EmployeeList(){
    return(

        <>
        <section>
          <h1 className='fw-bold'>Employee List</h1>
          <hr />
          <div className='mb-5 p-5'>
            <div className='row'>
              <div className="col-md-5">
                
              </div>
            </div>
          </div>
        </section>

         <BarChart
        xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
        series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
        width={500}
         height={300}
        />

        <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          area: true,
        },
      ]}
      width={500}
      height={300}
    />


        </>
        

    );
}

export default EmployeeList;

