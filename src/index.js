import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import Modal from "react-modal";
// import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material';
// import App from './app/App';
import * as serviceWorker from './dashboard/serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';


// third party style
import 'perfect-scrollbar/css/perfect-scrollbar.css';

const root = createRoot(document.getElementById('root'));
serviceWorker.unregister();
Modal.setAppElement("#root");
root.render(
    <StyledEngineProvider injectFirst>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StyledEngineProvider>
);

// for IE-11 support un-comment cssVars() and it's import in this file
// and in MatxTheme file

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA




// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<App />);