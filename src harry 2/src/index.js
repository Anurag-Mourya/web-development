
// import { StrictMode } from 'react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

// import App from './Components/AllApps/App';

// import App from './Components/AllApps/App2';

// import App from './Components/AllApps/App3';

import ModeApp from './Components/AllApps/NavbarMode/ModeApp';

// here we can export this function to index.html...
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <StrictMode>
    <BrowserRouter>

      {/* This App component is only for App.js, App2.js, App3.js */}
      {/* <App /> */}
      <ModeApp />
    </BrowserRouter>,
  {/* </StrictMode> */}
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
