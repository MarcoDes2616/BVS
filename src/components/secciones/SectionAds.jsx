import React, { useState } from 'react';
import "./secciones.css"
import icon1 from "../../assets/img/icon1.png"
import img from "../../assets/img/img-sec1.jpg"

const SectionAds = () => {
    const [text, setText] = useState("face")

    const getText = () => {
        if(text === "face"){
            return <p>FAumenta tus ventas con campañas publicitarias en ADS
            específicamente diseñadas para tu negocio: ¡Nuestro enfoque
            en la segmentación te garantiza un alto rendimiento y un retorno de inversión óptimo!</p>
        } else if(text === "insta"){
            return <p>IAumenta tus ventas con campañas publicitarias en ADS
            específicamente diseñadas para tu negocio: ¡Nuestro enfoque
            en la segmentación te garantiza un alto rendimiento y un retorno de inversión óptimo!</p>
        } else {
            return <p>GAumenta tus ventas con campañas publicitarias en ADS
            específicamente diseñadas para tu negocio: ¡Nuestro enfoque
            en la segmentación te garantiza un alto rendimiento y un retorno de inversión óptimo!</p>
        }
    }

    
    return (
        <section className='seccion'>
            <img src={icon1} alt="" /> <br /><br />
            <div className='seccion_contenido relative ads'>
                <div className='text_seccion_ads cuarter'>
                    <h2 className='seccion_titulo'>Marketing ADS</h2>
                    <p>Descubre cómo el marketing digital y
                        los anuncios (Ads) pueden impulsar tu
                        negocio: ¡Haz publicidad con confianza
                        y obtén resultados sorprendentes!</p>
                </div>
                <div className='video_ads_contain cuarter'>
                    <div className='video'>
                        <div className='relative_one'></div>
                        <div className='relative_two'></div>
                        {/* <iframe width="80%" height="80%" src="https://www.youtube-nocookie.com/embed/iEJsToUeZ48" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                    </div>
                    <p><i className='bx bx-radio-circle-marked bx-burst bx-md' ></i>“Alcanza a tu público ideal. Con nuestra segmentación avanzada, podrás llegar
                        a la audiencia que realmente importa para tu negocio, basada en factores
                        como la edad, género, ubicación e intereses. ¡Optimiza tus campañas de
                        publicidad y maximiza tus resultados hoy mismo!"</p>
                </div>
                <div className='cuarter'>
                    <img className='img_ads' src={img} alt="" />
                </div>
                <div className='cuarter'>
                    <div className='pestañas'>
                        <h4 onClick={() => setText("face")} style={{backgroundColor: text === "face" && "#43D682"}}>Facebook Ads</h4>
                        <h4 onClick={() => setText("insta")} style={{backgroundColor: text === "insta" && "#43D682"}}>Instagram</h4>
                        <h4 onClick={() => setText("")} style={{backgroundColor: text === "" && "#43D682"}}>Google Ads</h4>
                    </div>
                    <div className='texto_dinamico'>
                        {getText()}
                        <button>Conocer mas</button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SectionAds;