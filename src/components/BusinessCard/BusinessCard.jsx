import icon1 from "../../assets/img/icono1.png"
import './businessCard.css'

const Business = ({data}) => {


    return data.map( card =>(
            <div className='business'>
                <div className='business_circle'>
                    <div>
                        <img src={icon1} alt="" />
                    </div>
                </div>
                <div className='business_rectangle'>
                    <div className='business_content'>
                        <div className='cintillo'></div>
                        <h2>{card.title}</h2>
                        <p>
                            {card.content}
                        </p>
                    </div>
                </div>
            </div>
    ))
};

export default Business;