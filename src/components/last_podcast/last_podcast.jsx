import "./last_podcast.sass";

function LastPodcast() {
	return (
		<section className="content">
			<div className="send_date">
				<p>Monday 23</p>
				<h1>Last Podcast</h1>
			</div>

			<div className="banner">
				<img src="https://th.bing.com/th/id/OIP.Eiz_cHBT9MLi9Tu_e-6aiQHaE5?pid=ImgDet&rs=1" alt="image from the last podcast" />
				<div className="podcast_title">
					<h2>21 Pilots</h2>
					<p>Mind Fresh Song</p>
				</div>
			</div>
		</section>
	)
}

export default LastPodcast;