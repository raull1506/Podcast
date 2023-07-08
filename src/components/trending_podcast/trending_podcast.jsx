import "./trending_podcast.sass"
import Card from "../card/card"

function TrendingPodcast() {
	return (
		<section className="trending_container">
			<h1>Trending Podcast</h1>

			<Card img_src="https://th.bing.com/th/id/R.03d2992111d21eab79e9fe7e989da648?rik=jzCwxDEd98IZoA&pid=ImgRaw&r=0" title="21 Pilots" about="Twenty One Pilots is an ..."/>
			<Card img_src="https://th.bing.com/th/id/OIP.dl4-pHo5eDqcR8lp2lXMJwAAAA?pid=ImgDet&rs=1" title="Imagine Dragons" about="Imagine Dragons is a pop ..."/>
			<Card img_src="https://th.bing.com/th/id/OIP.NBDqTDziypoX2b1xtrjGUwHaGn?pid=ImgDet&rs=1" title="Post Malone" about="Austin Richard Post, known ..."/>
			<Card img_src="https://i0.wp.com/www.pittsburghbeautiful.com/wp-content/uploads/2019/08/wiz-khalifa.jpg?resize=1080%2C1079&ssl=1" title="Wiz Khalifa" about="Cameron Jibril Thomaz ..."/>
			<Card img_src="https://lastfm.freetls.fastly.net/i/u/ar0/0d8e5060af81eb802d5dada53f45fe28.jpg" title="One Republic" about="OneRepublic is an American ..."/>
		</section>
	)
}

export default TrendingPodcast;