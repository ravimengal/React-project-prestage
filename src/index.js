import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import'bootstrap-css-only/css/bootstrap.min.css';


//verify for token from local storage
//if(localStorage.getItem('token')){
  //if token avaliable check if expired or not
  //const token = localStorage.getItem('token');
  //const base64Url = token.split('.')[1];
  //const base64 = base64Url.replace('-', '+').replace('_', '/');
  //const expiryDate = JSON.parse(window.atob(base64)).exp;
  //const currentDate = Date.now() / 1000;
  //if(currentDate > expiryDate){
    //if token expired remove token from local storage
    //localStorage.removeItem('token');
    //redirect to login page
   // window.location.href = '/login';
  //}
  //if token is not expired render app
  //else{
   // ReactDOM.render(<App />, document.getElementById('root'));
  //}
//}

// const token = localStorage.getItem('token');
// if(token){
  //verify token
  // fetch('http://localhost:5000/auth/verify',{
  //   method:'GET',
  //   headers:{
  //     'Content-Type':'application/json',
  //     'Authorization':`Bearer ${token}`
  //   }
  // })
  // .then(res=>res.json())
  // .then(json=>{
  //   if(json.success){
  //     ReactDOM.render(<App />, document.getElementById('root'));
  //   }
  //   else{
  //     ReactDOM.render(<App />, document.getElementById('root'));
  //   }
  // }
  // )




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

