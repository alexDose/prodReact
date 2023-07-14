import {classNames} from "shared/lib/classNames/classNames";
import styles from './WindowError.module.scss'

interface WindowErrorProps {
    className?: string
}

export const WindowError = ({className}: WindowErrorProps) => {
    const reload = () => {
        location.reload()
    }

    return (
        <div className={classNames(styles.WindowError, {}, [className])}>
            <h3>Error</h3>
            <button onClick={reload}>reload</button>
        </div>
    );
};
