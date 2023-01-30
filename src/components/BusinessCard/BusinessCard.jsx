import icon1 from "../../assets/img/icono1.png"
import './businessCard.css'

const Business = () => {
    return (
        <div className='business__container'>
            <div className='business b_one'>
                <div className='business_circle c_one'>
                    <div>
                        <img src={icon1} alt="" />
                    </div>
                </div>
                <div className='business_rectangle'>
                    <div className='rec'>
                        <div className='cintillo'></div>
                        <h2>Media IA</h2>
                    </div>
                </div>
            </div>
            <div className='business b_two'>
                <div className='business_circle c_two'>
                    <div>
                        <img src={icon1} alt="" />
                    </div>
                </div>
                <div className='business_rectangle'>
                    <div className='rec'>
                        <div className='cintillo'></div>
                        <h2>Media IA</h2>
                    </div>
                </div>
            </div>
            <div className='business b_three'>
                <div className='business_circle c_three'>
                    <div>
                        <img src={icon1} alt="" />
                    </div>
                </div>
                <div className='business_rectangle'>
                    <div className='rec'>
                        <div className='cintillo'></div>
                        <h2>Media IA</h2>
                    </div>
                </div>
            </div>
            <div className='business b_four'>
                <div className='business_circle c_four'>
                    <div>
                        <img src={icon1} alt="" />
                    </div>
                </div>
                <div className='business_rectangle'>
                    <div className='rec'>
                        <div className='cintillo'></div>
                        <h2>Media IA</h2>
                    </div>
                </div>
            </div>
            <div className='business b_five'>
                <div className='business_circle c_five'>
                    <div>
                        <img src={icon1} alt="" />
                    </div>
                </div>
                <div className='business_rectangle'>
                    <div className='rec'>
                        <div className='cintillo'></div>
                        <h2>Media IA</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Business;