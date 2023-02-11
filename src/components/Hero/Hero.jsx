import ParticlesEffect from '../../components/Particles/ParticlesEffect';
import Cards from '../../components/BusinessCard/BusinessCard'
import Typewriter from 'typewriter-effect';
import slider1 from "../../assets/img/slider1.png"
import slider2 from "../../assets/img/slider2.png"
import slider3 from "../../assets/img/slider3.png"
import logo from "../../assets/img/logo_big.png"
import { cardsData, textToShow } from '../../data';
import './hero.css'
import BusinessCard from '../../components/BusinessCard/BusinessCard';
import scroll from "../../assets/img/scroll.gif"

const Hero = () => {


    return (
        <div className='hero'>
            <div className="writter">
                <img className='logo' src={logo} alt="" />
                <Typewriter
                    options={{
                        strings: textToShow,
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
            {/* <ParticlesEffect /> */}
            <div className='img_container'>
                <img className='slider one' src={slider1} alt="" />
                <img className='slider two' src={slider2} alt="" />
                <img className='slider three' src={slider3} alt="" />
            </div>
            <div className='business__container'>
                <div className='call_play'>
                    <i className='bx bx-play-circle bx-lg' ></i>
                    <p>Descubre mas de BVS</p>
                </div>
                <img className='scroll' src={scroll} alt="" />
                <BusinessCard />
            </div>
        </div>
    );
};

export default Hero;