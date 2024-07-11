import './SignUpPage.css';
import SignUpPage from './SignUpPage';
import NavBar from './NavBar';
// import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
// import Home from './Home'; //  component for Home page
// import About from './About'; // component for About page
// import Services from './Services'; // component for Services page


function App() {
  return (
    <div className='App'>
      <NavBar></NavBar>
      <SignUpPage />
    </div>
  );
}

export default App;


// import React from 'react';
// import SignInPage from './SignInPage';
// import NavBar from './NavBar';



// const App = () => {
//   return (
//     <div className="App">
//       <NavBar></NavBar>
//       <SignInPage />
//     </div>
//   );
// };

// export default App;


// import React from 'react';
// import OtpPage from './OtpPage';
// import NavBar from './NavBar';


// const App = () => {
//   return (
//     <div className="App">
//       <NavBar></NavBar>
//       <OtpPage />
//     </div>
//   );
// };

// export default App;
