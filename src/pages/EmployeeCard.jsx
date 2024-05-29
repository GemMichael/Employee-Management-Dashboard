import React, { useContext } from 'react';
import { EmployeeContext } from './EmployeeContext';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';

function EmployeeCard() {
    const { employeeList } = useContext(EmployeeContext);

    return (
        <div className="vh-100" style={{ backgroundColor: '#eee' }}>
            <div className="overflow-y-auto" style={{ maxHeight: 'calc(100vh - 100px)' }}>
                <MDBContainer>
                    <MDBRow className="justify-content-center">
                        {employeeList.map(employee => (
                            <MDBCol md="9" lg="7" xl="5" className="mt-5" key={employee.id}>
                                <MDBCard style={{ borderRadius: '15px', backgroundColor: '#93e2bb' }}>
                                    <MDBCardBody className="p-4 text-black">
                                        <div>
                                            <MDBTypography tag='h6'>Employee Card</MDBTypography>
                                        </div>
                                        <div className="d-flex align-items-center mb-4">
                                            <div className="flex-shrink-0">
                                                <MDBCardImage
                                                    style={{ width: '70px' }}
                                                    className="img-fluid rounded-circle border border-dark border-3"
                                                    src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp'
                                                    alt='Generic placeholder image'
                                                    fluid
                                                />
                                            </div>
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
                                                    <p>First Name: {employee.firstname}</p>
                                                    <p>Last Name: {employee.lastname}</p>
                                                    <p>Email: {employee.email}</p>
                                                    <p>Employment: {employee.employment}</p>
                                                    <p>Department: {employee.department}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        ))}
                    </MDBRow>
                </MDBContainer>
            </div>
        </div>
    );
}

export default EmployeeCard;
