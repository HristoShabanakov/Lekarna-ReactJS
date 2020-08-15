import React from 'react';
import styles from './index.module.css';
import Card from '../../components/card';
const OfferPage = () => {
    return(
        <div className={styles.container}>
            <h1 className={styles.h1}>This is Offers Page!</h1>
            <Card />
        </div>
    )
}

export default OfferPage