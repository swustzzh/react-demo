/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, memo, ReactNode, useEffect, useRef } from 'react';
import logo from '@/assets/logo.svg';
import styles from './Home.module.less';
// @ts-ignore
import TestWorker from '@/workers/test.worker';

interface IProps {
  children?: ReactNode;
}

// 新建一个线程
const worker: Worker = new TestWorker();

const Home: FC<IProps> = () => {
  const workerRef = useRef<Worker>();

  useEffect(() => {
    workerRef.current = new TestWorker();
  }, []);

  const handleClick = () => {
    if (!workerRef.current) return;
    // 获取计算开始的时间
    const start = performance.now();
    console.log('worker', worker);
    // 线程之间通过postMessage进行通信
    workerRef.current.postMessage(0);
    // 监听message事件
    workerRef.current.onmessage = (e: MessageEvent<number>) => {
      // 关闭线程
      workerRef.current?.terminate();
      // 获取计算结束的时间
      const end = performance.now();
      // 得到总的计算时间
      const durationTime = end - start;
      console.log('计算结果:', e.data);
      console.log(`代码执行了 ${durationTime} 毫秒`);
      console.log('worker', worker);
    };
  };

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
        <button onClick={handleClick}>WebWorker</button>
      </header>
    </div>
  );
};

export default memo(Home);
