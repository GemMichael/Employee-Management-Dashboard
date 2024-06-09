import { useState } from 'react';
import React, { useContext } from 'react'; 
import { EmployeeContext } from './EmployeeContext';
import { Link } from 'react-router-dom';
import EditEmployee from './EditEmployee';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';

function AddEmployee(){
  const { addEmployee } = useContext(EmployeeContext);

  const [employee, setEmployee] = useState({
    firstname: '',
    lastname: '',
    email: '',
    employment: '',
    department: '',
});

const handleAddEmployee = () => {
  if( employee.firstname === '' || employee.lastname === '' || employee.email === '' || employee.employment === '' || employee.department ===''){
    alert("Missing fields!");
  }else{

  
  addEmployee(employee);
  setEmployee({
      firstname: '',
      lastname: '', 
      email: '',
      employment: '',
      department: '',
  
  });
}
};
    return(
      <section>
          <div className="vh-100" style={{ backgroundColor: '#eee' }}>
        <MDBContainer>
          <MDBRow className="justify-content-center">
            <MDBCol md="9" lg="7" xl="5" className="mt-5">
              <MDBCard style={{ borderRadius: '15px', backgroundColor: '#93e2bb' }}>
                <MDBCardBody className="p-4 text-black">
                  <div>
                    <MDBTypography tag='h6'>Add Employee</MDBTypography>
                  </div>
                  <div className="d-flex align-items-center mb-4">

                    <div className="flex-grow-1 ms-3">
                      <div className="d-flex flex-row align-items-center mb-2">
                        <ul className="mb-0 list-unstyled d-flex flex-row" style={{ color: '#1B7B2C' }}>
                          <li>
                            <MDBIcon fas icon="star fa-xs" />
                          </li>
                          <li>
                            <MDBIcon fas icon="star fa-xs" />
                          </li>
                          <li>
                            <MDBIcon fas icon="star fa-xs" />
                          </li>
                          <li>
                            <MDBIcon fas icon="star fa-xs" />
                          </li>
                          <li>
                            <MDBIcon fas icon="star fa-xs" />
                          </li>
                        </ul>
  
                      </div>
                      <div>
                        <div>
                            <label htmlFor="firstname">First name:</label>
                            <input id="firstname" 
                                onChange={(e)=>setEmployee({
                                    ...employee,
                                    firstname: e.target.value
                            })} 
                            value={employee.firstname}
                            className='form-control' 
                            type='text' 
                            
                            />
                        </div>
                        <div>
                            <label htmlFor="lastname">Last name:</label>
                            <input id="lastname" 
                            onChange={(e)=>setEmployee({
                                ...employee,
                                lastname: e.target.value
                        })} 
                        value={employee.lastname}
                            className='form-control' 
                            type='text' 
                            
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input id="email"
                            onChange={(e)=>setEmployee({
                                ...employee,
                                email: e.target.value
                            })} 
                            value={employee.email}
                            className='form-control' 
                            type='email' 
                            
                            />
                        </div>
                        <div>
                            <label htmlFor="employment">Employment Type:</label>
                                <select id="employment" 
                                onChange={(e) => setEmployee({
                                    ...employee,
                                    employment: e.target.value
                                })}
                                value={employee.employment}
                                className="form-select" 
                                aria-label="Employment Type"
                                required>
                                    <option value="" disabled>Select employment type</option>
                                    <option value="full-time">Full-time</option>
                                    <option value="part-time">Part-time</option>
                                    <option value="temporary">Temporary</option>
                                </select>
                            </div>
                        <div>
                        <label htmlFor="department">Department:</label>
                        <input id="department" 
                        onChange={(e)=>setEmployee({
                            ...employee,
                            department: e.target.value
                        })} 
                        value={employee.department}
                        className='form-control' 
                        type='text' 
                        
                        />
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div>
                    <button onClick={handleAddEmployee} className='btn btn-success mt-3'>Add</button>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>

    
    

      </section>
        
      
    );
}

export default AddEmployee;