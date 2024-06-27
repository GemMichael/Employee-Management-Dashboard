// Import necessary modules and components from react-router-dom, Firebase, React, and mdb-react-ui-kit
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import firebaseApp from "../firebaseConfig";
import { useState } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';

function Register() {

  //State variables for user input fields
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  //useNavigate hook to programatically navigate to different routes
  let navigate = useNavigate();

  //Function to handle the registration process
  const handleRegistration = () => {

    if (firstname !== '' && lastname !== '' && email !== '' && password !== '' && confirmPassword !== '' && confirmPassword === password) {
      const auth = getAuth(firebaseApp);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: firstname + " " + lastname
          });
          navigate("/");
        })
        .catch((error) => {
          alert("Registration failed!")
        });
    } else {
      alert("Incorrect or missing credentials")
    }

  }


  return (
    <section>
      <div className="vh-100" style={{ backgroundColor: '#eee' }}>
        <MDBContainer>
          <MDBRow className="justify-content-center">
            <MDBCol md="9" lg="7" xl="5" className="mt-5">
              <MDBCard style={{ borderRadius: '15px', backgroundColor: '#93e2bb' }}>
                <MDBCardBody className="p-4 text-black">
                  <div>
                    <MDBTypography tag='h6'>Registration</MDBTypography>
                    <MDBTypography tag='h6'>Create your account here.</MDBTypography>
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
                          <label htmlFor="firstname">Firstname</label>
                          <input id="firstname"
                            onChange={(e) => setFirstname(
                              e.target.value
                            )}
                            value={firstname}
                            className='form-control'
                            type='text'
                          />
                        </div>
                        <div>
                          <label htmlFor="lastname">Lastname</label>
                          <input id="lastname"
                            onChange={(e) => setLastname(
                              e.target.value
                            )}
                            value={lastname}
                            className='form-control'
                            type='text'
                          />
                        </div>
                        <div>
                          <label htmlFor="email">Email</label>
                          <input id="email"
                            onChange={(e) => setEmail(
                              e.target.value
                            )}
                            value={email}
                            className='form-control'
                            type='email'
                          />
                        </div>
                        <div>
                          <label htmlFor="password">Password</label>
                          <input id="password"
                            onChange={(e) => setPassword(
                              e.target.value
                            )}
                            value={password}
                            className='form-control'
                            type='password'

                          />
                        </div>
                        <div>
                          <label htmlFor="confirmPassword">Confirm Password</label>
                          <input id="confirmPassword"
                            onChange={(e) => setConfirmPassword(
                              e.target.value
                            )}
                            value={confirmPassword}
                            className='form-control'
                            type='password'

                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div>
                    <button onClick={() => handleRegistration()} className='btn btn-success mt-3'>Registration</button>
                    <hr />
                    <Link to="/login">Don't have an account? Register here.</Link>
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

export default Register;