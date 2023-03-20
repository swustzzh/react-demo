import { FC, memo, ReactNode } from 'react';
import logo from '@/assets/logo.svg';
import styles from './Home.module.less';

interface IProps {
  children?: ReactNode;
}

const Home: FC<IProps> = () => {
  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className={styles['App-link']} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
};

export default memo(Home);
