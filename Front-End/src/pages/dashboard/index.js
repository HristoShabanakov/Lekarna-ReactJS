import React, { useState, useContext, useEffect} from 'react';
import Title from '../../components/title';
import {getCookie } from '../../utils/cookie';
import {getMedicines } from '../../services/medicines';
import {useHistory} from 'react-router-dom';
import Table from '../../components/table';
const DashboardPage = () => {

    const [ medicines, setMedicines ] = useState([]);
    
    useEffect(
		() => {
			getAllMedicines();
		},
		[]
	);
    const getAllMedicines = async () => {
        const token = getCookie('LekarnaToken');
        const result = await getMedicines(token);
        setMedicines(result);
       };
       

    return (<Table  medicines={medicines}> </Table>)
}

export default DashboardPage;