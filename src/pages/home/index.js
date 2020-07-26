import React from 'react';
import Main from '../../components/main';
import styles from './index.module.css';

import Title from '../../components/title';
const HomePage = () => {
  return (
    <div className={styles.container}>
      <div>
      <Title title="Main Page" />
      <Main>
        
      </Main>
      </div>
    </div>
    
  );
}

export default HomePage;
