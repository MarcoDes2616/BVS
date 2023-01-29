import React from 'react';
import logoHeader from "../assets/img/logo_small.png"
import destello from "../assets/img/destello.png"

const Header = () => {
    return (
        <nav>
            <div className='logoHeader'>
                <img src={logoHeader} alt="" />
            </div>
            <div className='menu'>
                <div>
                    <img className='destello' src={destello} alt="" />
                    <a href="">Home</a></div>
                <div>
                    <img className='destello' src={destello} alt="" />
                    <a href="">Company</a></div>
                <div>
                    <img className='destello' src={destello} alt="" />
                    <a href="">Services</a></div>
                <div>
                    <img className='destello' src={destello} alt="" />
                    <a href="">Proyects</a></div>
                <div>
                    <img className='destello' src={destello} alt="" />
                    <a href="">Contact</a></div>

            </div>
            <div className='social-media'>
                <a target={"_blank"} href="#"><i class='bx bxl-linkedin'></i></a>
                <a target={"_blank"} href="#"><i class='bx bxl-facebook'></i></a>
                <a target={"_blank"} href="#"><i class='bx bxl-twitter' ></i></a>
                <a target={"_blank"} href="#"><i class='bx bxl-youtube' ></i></a>
            </div>
        </nav>
    )
}
export default Header;