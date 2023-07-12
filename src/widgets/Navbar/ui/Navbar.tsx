import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import {useTranslation} from 'react-i18next';

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
	const {t} = useTranslation();

	return (
		<div className={classNames(styles.Navbar, {}, [className])}>
			<div className={styles.mainLinks}>
				<AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>{t('Main')}</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>{t('About')}</AppLink>
			</div>
		</div>
	);
};
