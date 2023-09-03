import {React, useState,useEffect} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { NavLink } from 'react-router-dom';
import { changePasswordSchema } from '../schemas';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import getCurrentUser from '../utils/getCurrentUser';
import newRequest from '../utils/newRequest';
import Lottie from 'lottie-react';
import animationData from '../assets/animation_ll3jzn1r.json';


const ChangePassword = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);  




  const [message, setMessage]= useState("");
  const [error, setError]= useState("");
  const currentUser = getCurrentUser();
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const userId = currentUser._id;

  const [showPasswords, setShowPasswords] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false
  });

  const togglePasswordVisibility = (field) => {
    setShowPasswords(prevShowPasswords => ({
      ...prevShowPasswords,
      [field]: !prevShowPasswords[field]
    }));
  };

  const initialValues = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  };
 

  const handleSubmit = async (values) => {
    try{
      setSubmitButtonDisabled(true);
    const response = await newRequest.put(`/user/updatePassword/${userId}`, values); 
    if(response.data.message){
      setMessage(response.data.message)
    }
    if(response.data){
      setError(response.data)
    }
  }
  catch(err){
    setSubmitButtonDisabled(false);
    setError(err.response.data);
      console.error('Please try again:', error);
  }
  };

  return (
    <div>
      <header>
        <div className="container py-4 h-100">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-sm-10 col-md-8 col-lg-7 col-xl-6">
              <div className="col-sm-10 col-md-8 col-lg-7 col-xl-6">
              <Lottie animationData={animationData}></Lottie>
              </div>
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1 pt-5 pb-5">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <h1 className="text-center mb-5 mt-3" style={{ fontWeight: '800', color: '#333', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", letterSpacing: '1.3px' }}>
                    CHANGE PASSWORD
                  </h1>
                  <Formik initialValues={initialValues} validationSchema={changePasswordSchema} onSubmit={handleSubmit}>
                    <Form>
                    <div className="form-outline mb-2">
                  <label htmlFor="oldPassword" className="form-label">
                    Old Password
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Field
                      type={showPasswords.oldPassword ? 'text' : 'password'}
                      className="form-control"
                      name="oldPassword"
                      id="oldPassword"
                      placeholder="Old Password"
                    />
                    <button
                      type="button"
                      style={{
                        position: 'absolute',
                        right: '0.5rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        color: '#888',
                      }}
                      onClick={() => togglePasswordVisibility('oldPassword')}
                    >
                      {showPasswords.oldPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  <ErrorMessage
                    name="oldPassword"
                    component="div"
                    className="form-error"
                    style={{ color: 'red' }}
                  />
                </div>

        <div className="form-outline mb-2">
          <label htmlFor="newPassword" className="form-label">
          New Password
           </label>
            <div style={{ position: 'relative' }}>
              <Field
                    type={showPasswords.newPassword ? 'text' : 'password'}
                    className="form-control"
                    name="newPassword"
                    id="newPassword"
                    placeholder="New Password"
                  />
                  <button
                    type="button"
                    style={{
                      position: 'absolute',
                      right: '0.5rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      color: '#888',
                    }}
                    onClick={() => {
                      togglePasswordVisibility('newPassword');
                      togglePasswordVisibility('confirmPassword');
                    }}
                  >
                    {showPasswords.newPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <ErrorMessage
                  name="newPassword"
                  component="div"
                  className="form-error"
                  style={{ color: 'red' }}
                />
              </div>

              <div className="form-outline mb-2">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <div style={{ position: 'relative' }}>
                  <Field
                    type={showPasswords.confirmPassword ? 'text' : 'password'}
                    className="form-control"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                  />
                  <button
                    type="button"
                    style={{
                      position: 'absolute',
                      right: '0.5rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      color: '#888',
                    }}
                    onClick={() => {
                      togglePasswordVisibility('newPassword');
                      togglePasswordVisibility('confirmPassword');
                    }}
                  >
                    {showPasswords.confirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="form-error"
                  style={{ color: 'red' }}
                />
              </div>

                      <button type="submit" className="input-button btn btn-primary btn-md btn-block mb-3" disabled={submitButtonDisabled}>
                        Change Password
                      </button>
                      <div className='message-error'style={{display:'flex', justifyContent:"center", alignItem:'center', margin:"0px"}}>
                      { message ? (
                              <p className='success-message' style={{ color: 'green', fontWeight: '800', marginTop: '3%' }}>
                                {message}
                              </p>
                            ) : (
                              error ? (
                                <p className='success-message' style={{ color: 'red', fontWeight: '800', marginTop: '3%' }}>
                                  {error}
                                </p>
                              ) : null
                            )
                          }
                          </div>
                       
                      <div className='links mt-3' style={{display:"flex", justifyContent:"space-between"}}>
                      <div className="signinbtn pr-5 mb-5">
                        <NavLink to="/"  style={{ textDecoration: 'none' }}>
                          Back to Home
                        </NavLink>
                      </div>

                      {!submitButtonDisabled ? (
                        <NavLink to="/forgetpass"  style={{ textDecoration: 'none' }}>
                          Forget Password?
                        </NavLink>
                      ) : (
                        null
                      )}
                      </div>
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <footer className="footer_date" style={{ borderTop: 'solid 1px #ccc', paddingBottom: '1rem' }}>
        <p style={{ textAlign: 'center', marginTop: '2rem', marginBottom: '1rem' }}>&copy; {new Date().getFullYear()} Shampy. All rights reserved</p>
      </footer>
    </div>
  );
};

export default ChangePassword;