import React from "react";
import {Component} from "react";
import {withTranslation} from "react-i18next";
import {LanguageSelector} from "./LanguageSelector";

class HighOrderComponentBody extends Component {
    render() {
        const { t } = this.props;
        return (
            <div>
            <p>{t('hoc.text')}</p>
            <LanguageSelector/>
            </div>
        )
    }
}
export const HighOrderComponent = withTranslation('common')(HighOrderComponentBody)
