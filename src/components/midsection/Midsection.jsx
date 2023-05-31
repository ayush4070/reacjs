import React from 'react';
import Sidebar from './Sidebar';
import Content from './Content';
import "./midSection.css";

function Midsection(props) {
    return (
        <div className='MidSectionbox'>
            <Sidebar/>
            <Content/>
        </div>
    );
}

export default Midsection;