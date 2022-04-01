import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './Base.css';
function Base(props) {
    return (
        <div id='Base'>
            <div className="Base_design_wrapper">
                <div className="design_left">
                    <img src={require('../../Static/img/3d_illustration.png')} alt="" />
                </div>
                <div className="design_head">
                    <img src={require('../../Static/img/head.png')} alt="img" />
                </div>
            </div>
            <Header></Header>
            {props.children}
            <Footer></Footer>
        </div>
    );
}

export default Base;