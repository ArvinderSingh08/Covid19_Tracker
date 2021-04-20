import React, { useEffect, useState } from 'react';

import {FormControl, NativeSelect} from '@material-ui/core';


import {FetchCountries} from '../../Api';
import styles from './Country.module.css';

const Country=({handleCountryChange})=>{
const[fetchedCountries, setFetchedCountries]=useState([]);

    useEffect(()=>{
        const fetchedApi=async ()=>{
        setFetchedCountries(await FetchCountries());
    }
    fetchedApi();
},[setFetchedCountries]);


    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue=" " onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value="global">Global</option>
                {fetchedCountries.map((country,i)=> <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    );
};


export default Country;