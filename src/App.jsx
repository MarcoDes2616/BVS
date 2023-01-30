import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Typewriter from 'typewriter-effect';
import Cards from './components/BussniesCard/BusinessCard'
import Navbar from './components/Navbar/Navbar'
import slider1 from "./assets/img/slider1.png"
import slider2 from "./assets/img/slider2.png"
import slider3 from "./assets/img/slider3.png"
import logo from "./assets/img/logo_big.png"
import './App.css'




function App() {
    const textToShow = ['Somos la revolución de los servicios Tecnológicos', 'Mejore su rendimiento con nuestras asesorías personalizadas']

    const init = useCallback( async (engine) =>{
        await loadFull(engine);
    })


    return (
        <div className="App">
            <Navbar />
            <div className='presentation'>
                {/* <div className="writter">
                    <Typewriter
                        options={{
                            strings: textToShow,
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
                <Particles
                    id='particles'
                    init={ init }
                    options={{
                        fps_limit: 60,
                        interactivity: {
                            events: {
                                onHover:{
                                    enable: true,
                                    mode: 'repulse'
                                }
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 100,
                                    duration: 0.4
                                }
                            }
                        },
                        particles: {
                            color: {
                                value: '#43D682'
                            },
                            links: {
                                color: '#fff',
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            collisions: {
                                enable: true
                            },
                            move: {
                                directions: 'none',
                                enable: true,
                                outModes: {
                                    default: 'bounce'
                                },
                                random: false,
                                speed: 1,
                                straight: false
                            },
                            opacity: {
                                value: 0.3,
                            },
                            shape: {
                                type: 'circle'
                            },
                            size: {
                                value: {min:1, max: 5}
                            }
                        },
                        detectRetina: true
                    }}
                />
                <div className='img_container'>
                    <img className='slider one' src={slider1} alt="" />
                    <img className='slider two' src={slider2} alt="" />
                    <img className='slider three' src={slider3} alt="" />
                    <img className='logo' src={logo} alt="" />
                </div>
                <Cards /> */}
            </div>

        </div>
    )
}

export default App
