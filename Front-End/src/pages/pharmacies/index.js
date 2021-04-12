import React, { useState, useContext, useEffect} from 'react';
import Title from '../../components/title';
import Input from '../../components/input';
import styles from './index.module.css';
import Button from '../../components/submit-button/submit-button';
import {useHistory} from 'react-router-dom';
import {createPharmacy, getDetails,editPharmacy } from '../../services/pharmacies';
import {setCookie, getCookie } from '../../utils/cookie';
import {Context} from '../../providers/GlobalContextProvider';

const PharmacyPage = () => {
  const [id, setId] = useState(null);
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [name, setName] = useState('');
  const [hasPharmacy, setHasPharmacy] = useState(false);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  useEffect(()=> {
  getPharmacy()
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])
      const getPharmacy = async () => {
        const token = getCookie('LekarnaToken');
        var res= await getDetails(token)
        console.log(res)
        if(res !==null){
          setHasPharmacy(true)
          setAddress(res.address)
          setCountry(res.country)
          setCity(res.city)
          setName(res.name)
          setId(res.id)
        }
        setLoading(false)
      }
      const createNewPharmacy = async () => {
        const token = getCookie('LekarnaToken');
        const result = await createPharmacy({ name, address, country, city}, token);
        if (result) {
          history.push('/');
        }
      };

      const updatePharmacy = async () => {
        console.log('editPharmacy');
        const token = getCookie('LekarnaToken');
        const result = await editPharmacy({ name, address, country, city, id}, token);
        if (result) {
          history.push('/');
        }
      }

      const handleSubmit = async () => {
        if (hasPharmacy) {
          await updatePharmacy()
        }else{
          await createNewPharmacy()
        }
      
      }
if(!loading){
  return (
    <div className={styles.div}>
   <form className={styles.container}>
   <Title title={`${hasPharmacy? "Edit" : "Register"} Pharmacy`} />
   <Input 
   value={name}
   onChange={e => setName(e.target.value)}
   label="Name"
   id="name"
   />
   <Input 
   value={address}
   onChange={e => setAddress(e.target.value)}
   label="Address"
   id="address"
   />
   <Input 
   value={country}
   onChange={e => setCountry(e.target.value)}
   label="Country"
   id="country"
   />
   <Input
   value={city}
   onChange={e => setCity(e.target.value)}
   label="City"
   id="city"
   />
   <div className={styles.buttonDiv}>
   <Button onClick ={()=>handleSubmit()} type='button' title={hasPharmacy? "Edit" : "Register"}/>
   </div>
</form>
</div>
)
}else{
 return null;
}
}

export default PharmacyPage;