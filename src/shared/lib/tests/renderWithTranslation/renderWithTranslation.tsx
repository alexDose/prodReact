import {render} from "@testing-library/react";
import {I18nextProvider} from "react-i18next";
import i18nForTest from "../../../config/i18n/i18nForTest";
import {ReactNode} from "react";

export const renderWithTranslation = (component: ReactNode) => {
    return render(
        <I18nextProvider i18n={i18nForTest}>
            {component}
        </I18nextProvider>
    )
}
