import React from 'react';
import styles from './index.module.css'

const Card = () => {
    return ( <div className={styles.card}>
 <img src="src\images\LekarnaLogo.png" alt="Offer" className={styles.card}></img>
 <h1>Custom Offer</h1>
 <p className={styles.price}>$19.99</p>
 <p>Some text about here.</p>
 <p><button>Add to Cart</button></p>
    </div>
    )
}

export default Card;