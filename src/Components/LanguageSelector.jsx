import React from "react";
import {useTranslation} from "react-i18next";

export const LanguageSelector = () =>
{
    const [t, i18n] = useTranslation('common');
    return <div>
        <span>{t('language-selector.label')} </span>
        <button onClick={() => i18n.changeLanguage('fr')}>{t('language-selector.languages.fr')}</button>
        &nbsp;
        <button onClick={() => i18n.changeLanguage('en')}>{t('language-selector.languages.en')}</button>
    </div>
}