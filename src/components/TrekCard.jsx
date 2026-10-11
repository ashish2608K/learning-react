import CardHeartImg from '../assets/images/icons/heart.png'
import CardstarImg from '../assets/images/icons/star.png'
import CardtrekImg from '../assets/images/icons/trek.png'
import "./TrekDetailCard.css";

function TrekCard({
    image,
    name,
    description,
    rating,
    level,
    distance }) {

    return (
        <div className="trek_detail_card">
            <div className="card_img_wrap">
                <img className="card_img" src={image} alt={name} />
            </div>
            <div className="like_button">
                <div className="card_inner_icons">
                    <img className="card_icon" src={CardHeartImg} alt="" />
                </div>
            </div>
            <div className="content_area">
                <h2 className="heading">{name}</h2>
                <div className="cnt_para">{description}</div>
                <div className="trek_rating">
                    <div className="card_inner_icons">
                        <img className="card_icons" src={CardstarImg} alt="" />
                    </div>
                    <span className="stats">{rating}</span>
                </div>
                <div className="level_of_trek">
                    <div className="card_inner_icons">
                        <img className="card_icons" src={CardtrekImg} alt="" />
                    </div>
                    <span className="stats">{level} {distance}km</span>
                </div>
            </div>
        </div>
    )
}

export default TrekCard;