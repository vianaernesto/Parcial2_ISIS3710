import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {IntlProvider} from 'react-intl';
import locale_es from "./locales/es";
import locale_en from "./locales/en";

let detectLocal = () =>{
    if(navigator.language.split("-")[0] === "es"){
        return locale_es;
    }else{
        return locale_en;
    }
}

ReactDOM.render(
    <IntlProvider locale={navigator.language} messages= {detectLocal()}>
        <App />
    </IntlProvider>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
