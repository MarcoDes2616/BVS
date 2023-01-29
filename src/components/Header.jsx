import React from 'react';
import logoHeader from "../assets/img/logo_small.png"

const Header = () => {
    return (
        <nav>
            <div className='logoHeader'>
                <img src={logoHeader} alt="" />
            </div>
            <div className='menu'>
                <a href="">Home</a>
                <a href="">Company</a>
                <a href="">Services</a>
                <a href="">Proyects</a>
                <a href="">Contact</a>
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