import React, { useState, useContext, useEffect} from 'react';
import Title from '../../components/title';
import Input from '../../components/input';
import styles from './index.module.css';
import Button from '../../components/submit-button/submit-button';
import {useHistory} from 'react-router-dom';
import {createMedicine } from '../../services/medicines';
import {getCookie } from '../../utils/cookie';
const StockPage = () => {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const history = useHistory();

  const createNewMedicine = async () => {
    const token = getCookie('LekarnaToken');
    const result = await createMedicine({ name, price, quantity}, token);
    console.log(result)
    if (result) {
      history.push('/');
    }
  };

  const handleSubmit = async () => {
      await createNewMedicine()
    }
    return(
        <div className={styles.div}>
   <form className={styles.container}>
   <Title title={"Add Medicine"} />
   <Input 
   value={name}
   onChange={e => setName(e.target.value)}
   label="Name"
   id="name"
   />
   <Input 
   value={price}
   onChange={e => setPrice(e.target.value)}
   label="Price"
   id="price"
   />
   <Input 
   value={quantity}
   onChange={e => setQuantity(e.target.value)}
   label="Quantity"
   id="quantity"
   />
   <div className={styles.buttonDiv}>
   <Button onClick ={()=>handleSubmit()} type='button' title={"Register"}/>
   </div>
</form>
</div>
    )
}

export default StockPage