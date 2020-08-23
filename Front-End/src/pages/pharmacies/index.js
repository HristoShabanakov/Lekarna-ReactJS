import React, { useState, useContext} from 'react';
import Title from '../../components/title';
import Input from '../../components/input';
import styles from './index.module.css';
import SubmitButton from '../../components/submit-button/submit-button';
import {useHistory} from 'react-router-dom';
import { createPharmacy } from '../../services/pharmacies';
import { setCookie, getCookie } from '../../utils/cookie';

const PharmacyPage = () => {
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [name, setName] = useState('');
  const history = useHistory();

      const handleCreatePharmacy = async () => {
        const token = getCookie('LekarnaToken');
        //const { name, address, country, city } = data;
        const result = await createPharmacy({ name, address, country, city}, token);
        if (result.token) {
          setCookie('LekarnaToken', result.token);
          history.push('/');
        }
      };

  return (
    <div className={styles.div}>
   <form className={styles.container} onSubmit={handleCreatePharmacy}>
   <Title title="Register Pharmacy" />
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
   <SubmitButton title="Register"/>
   </div>
</form>
</div>
)
}

export default PharmacyPage;