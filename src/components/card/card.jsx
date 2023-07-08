/* eslint-disable react/prop-types */
import "./card.sass"

function Card(props) {
    return (
        <div className="card_container">
            <img src={props.img_src} alt="" />

            <div className="card_title">
                <h2>{props.title}</h2>
                <h3>{props.about}</h3>
            </div>

            <button>
                <i className="fi fi-rr-play"></i>
            </button>


        </div>
    )
}

Card.defaultProps = {
    title: "title",
    about: "description"
}

export default Card;