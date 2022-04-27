const express = require('express');
const play = require('play-dl');
const router = express.Router();

let urls = [
	{ type: 'rain', url: 'https://www.youtube.com/watch?v=q76bMs-NwRk&' },
	{ type: 'city', url: 'https://www.youtube.com/watch?v=8s5H76F3SIs' },
	{ type: 'fire', url: 'https://www.youtube.com/watch?v=6VB4bgiB0yA' },
];

let audio = [];

async function getData() {
	for (let i = 0; i < urls.length; i++) {
		const source = await play.stream(urls[i].url);
		const info = await play.video_info(urls[i].url);
		audio = [
			...audio,
			{
				type: urls[i].type,
				id: info.video_details.id,
				title: info.video_details.title,
				url: info.video_details.url,
				uri: source.url,
			},
		];
	}
}
getData();
setInterval(() => {
	getData();
}, 300 * 60000); // 5 hours

router.get('/noises', function (request, response) {
	response.send(audio);
});

module.exports = router;
