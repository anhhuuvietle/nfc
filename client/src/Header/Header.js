import React from 'react';
import './Header.css';
import img from '../assets/img.jpg';

const Header = () => {
    return (
        <div className="header">
            <div className="header__img">
                <img src={img} alt="plant"/>
            </div>
            <div className="header__content">
                <h2>Rau thủy canh</h2>
                <p>Mã số cây: 1510054</p>
                <div className="header-content-action">
                    <button className="btn-success"><i class="far fa-plus-square"></i></button>
                    <button className="btn-info"><i class="far fa-edit"></i></button>
                </div>
            </div>
        </div>
    );
};

export default Header;