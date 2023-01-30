import ParticlesEffect from '../../components/Particles/ParticlesEffect';
import Cards from '../../components/BusinessCard/BusinessCard'
import Typewriter from 'typewriter-effect';
import slider1 from "../../assets/img/slider1.png"
import slider2 from "../../assets/img/slider2.png"
import slider3 from "../../assets/img/slider3.png"
import logo from "../../assets/img/logo_big.png"

import './hero.css'

const Hero = () => {
    const textToShow = [
        'Somos la revolución de los servicios Tecnológicos',
        'Mejore su rendimiento con nuestras asesorías personalizadas'
    ]

    return (
        <div className='hero'>
            <div className="writter">
                <Typewriter
                    options={{
                        strings: textToShow,
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
            <ParticlesEffect />
            <div className='img_container'>
                <img className='slider one' src={slider1} alt="" />
                <img className='slider two' src={slider2} alt="" />
                <img className='slider three' src={slider3} alt="" />
                <img className='logo' src={logo} alt="" />
            </div>
            <Cards />
        </div>
    );
};

export default Hero;