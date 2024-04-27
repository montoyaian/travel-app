import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendrequest } from '../../functions';
import DivinputRegister from '../../components/Inputs/DivinputRegister';

export const Register = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const go = useNavigate();

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const register = async (e) => {
    e.preventDefault();
    const form = { name: name, contact: contact, email: email, password: password };
    console.log(form);
    const res = await sendrequest('POST', form, '/clients/add/standardclient', '');
    console.log('Response:', res);
    if (res) {
      go('/Login'); //Nos redigirimos al Login.
    }
  };

  return (
    <div className="form-outline mb-4">
      <form onSubmit={register}>
        <DivinputRegister
          type='text'
          icon='fa-user'
          value={name}
          className='form-control'
          placeholder='Name'
          required='required'
          handleChange={(e) => setName(e.target.value)}
        />
        <DivinputRegister
          type='number'
          icon='fa-phone'
          value={contact}
          className='form-control'
          placeholder='Contact'
          required='required'
          handleChange={(e) => setContact(e.target.value)}
        />
        <DivinputRegister
          type='email'
          icon='fa-envelope'
          value={email}
          className='form-control'
          placeholder='Email'
          required='required'
          handleChange={(e) => setEmail(e.target.value)}
        />
        <DivinputRegister
          type={showPassword ? 'text' : 'password'}
          icon='fa-lock'
          value={password}
          className='form-control'
          placeholder='Password'
          required='required'
          handleChange={(e) => setPassword(e.target.value)}
        />
        <div className="text-end mt-2">
          <button
            type="button"
            className="btn btn-link btn-sm"
            onClick={handlePasswordVisibility}
          >
            {showPassword ? 'Hide' : 'Show'} Password
          </button>
        </div>
        <div className="text-center text-lg-start mt-4 pt-2">
          <button type="submit" className="btn btn-primary btn-lg" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;