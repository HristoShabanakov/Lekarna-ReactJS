import React, { useState, useContext, useEffect} from 'react';
import Title from '../../components/title';
import {getCookie } from '../../utils/cookie';
import {getMedicines } from '../../services/medicines';
import {useHistory} from 'react-router-dom';

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
       

    return (<card class="row justify-content-center">
       <div class="card">
    <table class="table table-sm table-hover">
        <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Details</th>
            </tr>
        </thead>
            <tbody>
                <tr>
                    <th scope="row">(1)</th>
                    <td>Aspirin</td>
                    <td>$20</td>
                    <td>1000</td>
                    <td><a href="/">Info</a></td>
                </tr>
            </tbody>
    </table>
    </div></card>) 
}
export default DashboardPage;