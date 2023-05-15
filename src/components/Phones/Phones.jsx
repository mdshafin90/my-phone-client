import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Phone from '../Phone/Phone';
import './Phones.css'

const Phones = () => {

    const phones = useLoaderData()
    console.log(phones)

    return (
        <div>
            <h4>Phones are Available: {phones.length}</h4>
            <div className='phones-map'>
                {
                    phones.map(phone => <Phone
                        key={phone.id}
                        phone={phone}
                    ></Phone>)
                }
            </div>
        </div>
    );
};

export default Phones;