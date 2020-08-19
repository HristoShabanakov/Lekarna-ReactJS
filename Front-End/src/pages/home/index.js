import React from 'react';
import Main from '../../components/main';
import styles from './index.module.css';
import Layout from '../../components/layout';
import baner from '../../images/baner.jpg'
import Title from '../../components/title';
const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
      <Title title="Main Page" />
      <Main>
      <img  src={baner} alt="baner" />
      </Main>
      </div>
    </div>
  );
}

export default HomePage;
