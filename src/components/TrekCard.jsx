import CardImage from '../assets/images/card-img-one.jpg'
import CardHeartImg from '../assets/images/icons/heart.png'
import CardstarImg from '../assets/images/icons/star.png'
import CardtrekImg from '../assets/images/icons/trek.png'
import "./TrekDetailCard.css";




function TrekDetailCrad() {
    return (
        <div className="trek_detail_card">
            <div className="card_img_wrap">
                <img className="card_img" src={CardImage} alt="" />
            </div>
            <div className="like_button">
                <div className="card_inner_icons">
                    <img className="card_icon" src={CardHeartImg} alt="" />
                </div>
            </div>
            <div className="content_area">
                <h2 className="heading">Rupin Pass</h2>
                <div className="cnt_para">
                    Rupin Pass Trek - Himalayan SunshineThe Indiahikes
                    Rupin Pass Trek is a high-altitude Himalayan cross-over
                    trek connecting Himachal Pradesh and Uttarakhand.
                </div>
                <div className="trek_rating">
                    <div className="card_inner_icons">
                        <img className="card_icons" src={CardstarImg} alt="" />
                    </div>
                    <span className='stats'>4.8</span>
                </div>
                <div className="level_of_trek">
                    <div className="card_inner_icons">
                        <img className="card_icons" src={CardtrekImg} alt="" />
                    </div>
                    <span className='stats'>Hard 25KM</span>
                </div>
            </div>
        </div>
    )
}

export default TrekDetailCrad; 