import icon1 from "../../assets/img/icono1.png"
import './businessCard.css'

const Business = ({data}) => {
    const colors = ['--primary', '--secondary', '--success', '--light', '--dark', '--dark-sec']

    const changeShadow = () =>{
        let index = Math.floor(Math.random() * colors.length);
        return colors[index]
    }
    return data.map( card =>(
            <div className='business' key={card.id} style={{boxShadow: changeShadow()}}>
                <div className='business_circle'>
                    <div>
                        <img src={icon1} alt="" />
                    </div>
                </div>
                <div className='business_rectangle'>
                    <div className='business_info'>
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