import './secciones.css'
import bg1 from '../../assets/Section_2/fondo-sec2a.png';
import bg2 from '../../assets/Section_2/fondo-sec2b.png';
import icon from '../../assets/Section_2/icon_sec2.png';
import makeIa from '../../assets/Section_2/img-sec2.jpg';
import imgIcon from '../../assets/Section_2/sec2_icon_s1.png';
import vidIcon from '../../assets/Section_2/sec2_icon_s2.png';
import copyIcon from '../../assets/Section_2/sec2_icon_s3.png';

const SectionIA = () => {
    return (
        <section className='media_section'>
            <img className='bg-1' src={bg1} alt="bg_section"/>
            <div className="header_section">
                <div>
                    <h2>Media With IA</h2>
                    <figure className='icon_container'>
                        <img src={icon} alt="" />
                    </figure>
                </div>
                <div>
                    {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/eD2SfC-OQlk?autoplay=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                </div>
            </div>
            <div className="subHeader">
                <p>¡Ya! es posible crear imágenes, videos y contenido de publicidad, con inteligencia artificial.</p>
            </div>
            <div className="media_content">
                <img className='bg-2' src={bg2} alt="bg-2" />
                <div className="main_content">
                    <div className="mediaImg_container">
                        <img src={makeIa} alt="IA_create" />
                    </div>
                    <div className="main_offert">
                        <p>
                            Quieres transformar tu presencia digital?,
                            Usa contenido corporativo inteligente.
                        </p>
                        <ul className='offert_services'>
                            <li className='service_item'>
                                <img src={imgIcon} alt="" />
                                Images
                            </li>
                            <li className='service_item'>
                                <img src={vidIcon} alt="" />
                                Videos
                            </li>
                            <li className='service_item'>
                                <img src={copyIcon} alt="" />
                                Copywriting
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionIA;