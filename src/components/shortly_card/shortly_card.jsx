/* eslint-disable react/prop-types */
import "./shortly_cards.sass"

function ShortlyCards(props) {
	return (
		<div className="shortly_card">
			<div className="shortly_card_img">
				<img src={props.src} alt={props.alt} />
			</div>

			<div className="shortly_card_description">
				<h3>{props.title}</h3>
				<p>em breve</p>
			</div>
		</div>
	)
}

export default ShortlyCards;