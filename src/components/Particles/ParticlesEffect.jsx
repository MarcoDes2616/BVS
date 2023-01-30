import { useCallback } from 'react';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';
import './particles.css'
import particlesconfig from './config/particles-config';

const ParticlesEffect = () => {
    const init = useCallback(async (engine) => {
        await loadFull(engine);
    })


    return (
        <>
            <Particles className='particles'
                init={init} options={particlesconfig}
                // options={{
                //     fps_limit: 60,
                //     width: '100%',
                //     height: '100px',
                //     interactivity: {
                //         events: {
                //             onHover: {
                //                 enable: true,
                //                 mode: 'repulse'
                //             }
                //         },
                //         modes: {
                //             push: {
                //                 quantity: 4,
                //             },
                //             repulse: {
                //                 distance: 100,
                //                 duration: 0.4
                //             }
                //         }
                //     },
                //     particles: {
                //         color: {
                //             value: '#43D682'
                //         },
                //         links: {
                //             color: '#fff',
                //             distance: 150,
                //             enable: true,
                //             opacity: 0.5,
                //             width: 1,
                //         },
                //         collisions: {
                //             enable: true
                //         },
                //         move: {
                //             directions: 'none',
                //             enable: true,
                //             outModes: {
                //                 default: 'bounce'
                //             },
                //             random: false,
                //             speed: {
                //                 value:{min: 1, max: 3}
                //             },
                //             straight: false
                //         },
                //         opacity: {
                //             value: .5,
                //         },
                //         shape: {
                //             type: 'circle'
                //         },
                //         size: {
                //             value: { min: 1, max: 3 }
                //         },
                //     },
                //     detectRetina: true
                // }}
            />
        </>
    );
};

export default ParticlesEffect;