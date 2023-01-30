import './businessCard.css'
import icon1 from "../../assets/img/icon1.png"
import icon2 from "../../assets/img/icon2.png"
import icon3 from "../../assets/img/icon3.png"
import icon4 from "../../assets/img/icon4.png"
import icon5 from "../../assets/img/icon5.png"


const Business = ({ data }) => {
    const colors = ['--primary', '--secondary', '--success', '--light', '--dark', '--dark-sec']

    const changeShadow = () => {
        let index = Math.floor(Math.random() * colors.length);
        return colors[index]
    }

    return (
        <>
            <div className='business' style={{ boxShadow: changeShadow() }}>
                <div className='business_circle'>
                    <div>
                        <img src={icon1} alt="" />
                    </div>
                </div>
                <div className='business_rectangle'>
                    <div className='business_info'>
                        <div className='cintillo'></div>
                        <h2></h2>
                        <p>

                        </p>
                    </div>
                </div>
            </div>
            <div className='business' style={{ boxShadow: changeShadow() }}>
                <div className='business_circle'>
                    <div>
                        <img src={icon2} alt="" />
                    </div>
                </div>
                <div className='business_rectangle'>
                    <div className='business_info'>
                        <div className='cintillo'></div>
                        <h2></h2>
                        <p>

                        </p>
                    </div>
                </div>
            </div>
            <div className='business' style={{ boxShadow: changeShadow() }}>
                <div className='business_circle'>
                    <div>
                        <img src={icon3} alt="" />
                    </div>
                </div>
                <div className='business_rectangle'>
                    <div className='business_info'>
                        <div className='cintillo'></div>
                        <h2></h2>
                        <p>

                        </p>
                    </div>
                </div>
            </div>
            <div className='business' style={{ boxShadow: changeShadow() }}>
                <div className='business_circle'>
                    <div>
                        <img src={icon4} alt="" />
                    </div>
                </div>
                <div className='business_rectangle'>
                    <div className='business_info'>
                        <div className='cintillo'></div>
                        <h2></h2>
                        <p>

                        </p>
                    </div>
                </div>
            </div>
            <div className='business' style={{ boxShadow: changeShadow() }}>
                <div className='business_circle'>
                    <div>
                        <img src={icon5} alt="" />
                    </div>
                </div>
                <div className='business_rectangle'>
                    <div className='business_info'>
                        <div className='cintillo'></div>
                        <h2></h2>
                        <p>

                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Business;