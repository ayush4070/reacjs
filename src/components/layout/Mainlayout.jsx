import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Midsection from '../midsection/Midsection';

function Mainlayout(props) {
    return (
        <div>
            <Header/>
            <Midsection/>
            <Footer/>
            <Midsection/>
            
        </div>
    );
}

export default Mainlayout;