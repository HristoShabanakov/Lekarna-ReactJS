import React, { useState, useContext, useEffect} from 'react';
import Title from '../../components/title';
import Input from '../../components/input';
//import styles from './index.module.css';
import Button from '../../components/submit-button/submit-button';
import {useHistory, useParams} from 'react-router-dom';
import {getDetails, editMedicine, deleteMedicine} from '../../services/medicines';
import {getCookie } from '../../utils/cookie';

const EditPage = () => {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const history = useHistory();
  const {id} = useParams();
  console.log(id);

  useEffect(()=> {
    getMedicine()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
        const getMedicine = async () => {
          const token = getCookie('LekarnaToken');
          var res = await getDetails(token,id)
          console.log(res)
          if(res !== null){
            setName(res.name)
            setPrice(res.price)
            setQuantity(res.quantity)
          }
        }

        const updateMedicine = async () => {
          console.log('editMedicine');
          const token = getCookie('LekarnaToken');
          const result = await editMedicine({ name, price, quantity, id}, token);
          if (result) {
            history.push('/dashboard');
          }
        }

        const removeMedicine = async () => {
          console.log('deleteMedicine');
          const token = getCookie('LekarnaToken');
          const result = await deleteMedicine(token, id);
          if (result) {
            history.push('/dashboard');
          }
        }
  
    return(
        <div>
   <form>
   <Title title={"Edit Medicine"} />
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
   <div>
   <Button onClick ={()=>updateMedicine()} type='button' title={"Edit"}/>
   <Button onClick ={()=>removeMedicine()} type='button' title={"Delete"}/>
   </div>
</form>
</div>
    )
}

export default EditPage