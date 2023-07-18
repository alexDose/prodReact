import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Sidebar.module.scss';
import {useState} from 'react';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';
import {LangSwitcher} from 'widgets/LangSwitcher';
import {Button, ButtonSize, ButtonTheme} from "shared/ui/Button/Button";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {useTranslation} from "react-i18next";
import MainIcon from 'shared/assets/icons/MainIcon.svg'
import AboutUsIcon from 'shared/assets/icons/AboutUsIcon.svg'

interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const {t} = useTranslation()

    const onToggle = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <div data-testid='sidebar' className={classNames(styles.Sidebar, {[styles.collapsed]: collapsed}, [className])}>
            <Button
                data-testid='sidebar-toggle'
                className={styles.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
                onClick={onToggle}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={styles.items}>
                <AppLink
                    className={styles.item}
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.main}>
                    <MainIcon className={styles.icon}/>
                    <span className={styles.link}>{t('Main')}</span>
                </AppLink>
                <AppLink
                    className={styles.item}
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.about}>
                    <AboutUsIcon className={styles.icon}/>
                    <span className={styles.link}>{t('About')}</span>
                </AppLink>
            </div>
            <div className={styles.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher short={collapsed}/>
            </div>
        </div>
    );
};
