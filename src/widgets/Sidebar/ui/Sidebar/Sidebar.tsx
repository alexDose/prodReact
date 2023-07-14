import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Sidebar.module.scss';
import {useState} from 'react';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';
import {LangSwitcher} from 'widgets/LangSwitcher';
import {Button} from "../../../../shared/ui/Button/Button";

interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);

	const onToggle = () => {
		console.log('t')
		setCollapsed(prev => !prev);
	};

	return (
		<div data-testid='sidebar' className={classNames(styles.Sidebar, {[styles.collapsed]: collapsed}, [className])}>
			<Button
				data-testid='sidebar-toggle'
				onClick={onToggle}
			>
				toggle
			</Button>
			<div className={styles.switchers}>
				<ThemeSwitcher/>
				<LangSwitcher/>
			</div>
		</div>
	);
};
