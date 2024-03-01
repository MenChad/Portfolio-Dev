import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import common_fr from "./Translations/fr/common.json";
import common_en from "./Translations/en/common.json";

i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng: 'en',                              // language to use
    resources: {
        en: {
            common: common_en               // 'common' is our custom namespace
        },
        de: {
            common: common_fr
        },
    },
});


// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<I18nextProvider i18n={i18next}>
<BrowserRouter>
  <App />
</BrowserRouter>
</I18nextProvider>

</React.StrictMode>
);
