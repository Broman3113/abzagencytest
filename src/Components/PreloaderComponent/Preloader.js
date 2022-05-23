import React from 'react';
import preloader from '../../assets/preloader.svg';

const Preloader = () => {
    return (
        <img style={{width: '48px'}} src={preloader} alt="loading"/>
    );
};

export default Preloader;
