import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import useUserContext from '../UserContext';


const LoginSchema = Yup.object().shape({
  
  email: Yup.string().email('Invalid email').required('Email is Required'),
  password:Yup.string().required('Password is Required'),
});

const Login = () => {
  const {setLoggedIn } = useUserContext();

  const navigate = useNavigate( );

  //Initialising fromik
  const loginForm =useFormik( { 
    initialValues:{
      email :" ",
      password:" "
    },
    onSubmit : async (  values, {resetForm} ) =>{ 
      console.log(values);
      // write code to submit form to server
      const res= await fetch('http://localhost:5000/user/authenticate',{
        method : 'POST',
        body:JSON.stringify(values),
        headers:{
          'Content-Type' :'application/json'
        }
      })

      console.log(res.status);

      if(res.status == 200){
        Swal.fire({
          icon : 'success',
          title : 'WellDone!',
          text : 'Registered Successfully'
        });
        const data = await res.json();
        sessionStorage.setItem('user', JSON.stringify(data));
        setLoggedIn(true);
        resetForm( );

      }
      else if(res.status === 401){
        Swal.fire({
          icon : 'error',
          title : 'Error',
          text : 'Email or Password is incorrect 😢'
        });
      }
        
      
      
      else{
        Swal.fire({
          icon :'error',
          title :' Error',
          text : 'Something went wrong'
        })
      }
    },
    validationSchema :LoginSchema
  });
  
  



  return (
    <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-xl-10">
          <div className="card" style={{ borderRadius: "1rem" }}>
            <div className="row g-0">
              <div className="col-md-6 col-lg-5 d-none d-md-block">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                  alt="login form"
                  className="img-fluid"
                  style={{ borderRadius: "1rem 0 0 1rem" }}
                />
              </div>
              <div className="col-md-6 col-lg-7 d-flex align-items-center">
                <div className="card-body p-4 p-lg-5 text-black">
                  <form onSubmit={loginForm.handleSubmit}>
                    
                    <h5
                      className="fw-normal mb-3 pb-3"
                      style={{ letterSpacing: 1 }}
                    >
                      Login into your account
                    </h5>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        className="form-control form-control-lg" name="email" onChange={ loginForm.handleChange} value={ loginForm.values.email}
                      />
                      <label className="form-label" htmlFor="form2Example17">
                        Email address
                      </label>
                      <span style={{ color:'red', fontSize:'0.7em',marginLeft:10}}>{loginForm.errors.email}</span>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        className="form-control form-control-lg" name="password" onChange={loginForm.handleChange} value={ loginForm.values.password}
                      />
                      <label className="form-label" htmlFor="form2Example27">
                        Password
                      </label>
                      <span style={{ color:'red', fontSize:'0.7em',marginLeft:10}}>{loginForm.errors.password}</span>

                    </div>
                    <div className="pt-1 mb-4">
                      <button
                        className="btn btn-dark btn-lg btn-block"
                        type="submit"
                      >
                        Login
                      </button>
                    </div>
                    <a className="small text-muted" href="#!">
                      Forgot password?
                    </a>
                    <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                      Don't have an account?{" "}
                      <a href="#!" style={{ color: "#393f81" }}>
                        Register here
                      </a>
                    </p>
                    <a href="#!" className="small text-muted">
                      Terms of use.
                    </a>
                    <a href="#!" className="small text-muted">
                      Privacy policy
                    </a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Login;