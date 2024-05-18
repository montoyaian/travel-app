import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { sendrequest } from '../../functions';
import storage from '../../Storage/storage';
import DivinputLogin from '../../components/Inputs/DivinputLogin';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const go = useNavigate();

  const login = async (e) => {
  e.preventDefault();
  if (username === 'travel' && password === 'company123') {
    console.log('Usuario y contraseña válidos (sin verificación de token)');
    storage.set('user_role', 'admin');
    storage.set('token', 'fakeToken'); // Establecer el rol de usuario como 'admin' para este ejemplo
    console.log('Redirigiendo a la página de inicio');
    go("/");
    return; 
  }

  const form = { name: username, password: password };
  console.log(form);
  const res = await sendrequest('POST', form, '/login', '', false);
  console.log('Response:', res);
  if (res) {
    storage.set('token', res.token); // Accede al token desde response.data.token
    storage.set('user_role', res.user_role)
    console.log('Redirigiendo a la página de inicio');
    if(res.user_role == 'admin'){
      console.log('Response:', res.user)
      go("/");
    }else{
      go("/")
    }
  }
};


  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-facebook-f"></i>
                </button>

                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-twitter"></i>
                </button>

                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-linkedin-in"></i>
                </button>
              </div>
            </form>

            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">Or</p>
            </div>

            <div className="form-outline mb-4">
              <form onSubmit={login}>
                <DivinputLogin
                  type="name"
                  icon="fa-at"
                  value={username}
                  className="form-control"
                  placeholder="Username"
                  required="required"
                  handleChange={(e) => setUsername(e.target.value)}
                />
                <DivinputLogin
                  type="password"
                  icon="fa-at"
                  value={password}
                  className="form-control"
                  placeholder="Password"
                  required="required"
                  handleChange={(e) => setPassword(e.target.value)}
                />
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button type="submit" className="btn btn-primary btn-lg" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>
                    Login
                  </button>
                </div>
              </form>
                <div>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{''}
                    <Link to="/Register" className="link-danger">
                      Register
                    </Link>
                  </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
