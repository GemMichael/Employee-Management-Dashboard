import React, { useContext } from "react";
import { EmployeeContext } from "./EmployeeContext";
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

function EditEmployee() {
  const { employeeList } = useContext(EmployeeContext);

  const getEmploymentColor = (employment) => {
    switch (employment) {
          case 'full-time':
            return 'success';
          case 'part-time':
            return 'warning';
          case 'temporary':
            return 'danger';
          default:
            return 'primary';
    }
  };

  return (
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Email</th>
          <th scope='col'>Employment</th>
          <th scope='col'>Department</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {employeeList.map(employee => (
          <tr key={employee.id}>
            <td>
              <div className='d-flex align-items-center'>
                <img
                  src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                  alt=''
                  style={{ width: '45px', height: '45px' }}
                  className='rounded-circle'
                />
                <div className='ms-3'>
                  <p className='fw-bold mb-1'>{employee.firstname}</p>
                  <p className='text-muted mb-0'>{employee.lastname}</p>
                </div>
              </div>
            </td>
            <td>
              <p className='text-muted mb-0'>{employee.email}</p>
            </td>
            <td>
              <MDBBadge color={getEmploymentColor(employee.employment)} pill>
                {employee.employment}
              </MDBBadge>
            </td>
            <td>{employee.department}</td>
            <td>
              <MDBBtn color='link' rounded size='sm'>
                Edit
              </MDBBtn>
            </td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
}

export default EditEmployee;
