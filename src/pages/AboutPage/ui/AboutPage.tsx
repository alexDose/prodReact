import {useTranslation} from 'react-i18next';
import {useEffect, useState} from 'react';
import styles from './AboutPage.module.scss';
import {classNames} from 'shared/lib/classNames/classNames';

const AboutPage = () => {
  const {t} = useTranslation('about');

  const [tasks, setTasks] = useState([]);

  const removeUser = (id:number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const removeNameCompany = (id: number) => {
    setTasks(tasks.map(task => task.id !== id ? task : {...task, company: {...task.company, name: 'empty'}}));
  };

  const editNameCompany = (id: number) => {
    const newName = prompt('Enter name company');
    setTasks(tasks.map(task => task.id === id ? {...task, company: {...task.company, name: newName}} : task));
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        setTasks(json);
        console.log(json);
      }
      );
  }, []);

  return (
    <div>
      {t('About')}
      <div className={classNames(styles.AboutPage, {}, [])}>
        {tasks.map(task => {
          return <div className={styles.task} key={task.id}>
            <div className={styles.name}>
              {task.name}
              <button onClick={() => removeUser(task.id)}>X</button>
            </div>
            <div className={styles.company}>
              {task.company.name}
              <button onClick={() => editNameCompany(task.id)}>{t('Edit')}</button>

              {task.company.name !== 'empty' &&
                                <button onClick={() => removeNameCompany(task.id)}>X</button>
              }

            </div>
          </div>;
        })}
      </div>
    </div>
  );
};

export default AboutPage;
