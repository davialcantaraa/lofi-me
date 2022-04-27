const express = require('express');
const play = require('play-dl');
const router = express.Router();

let playlist;

async function getPlaylist() {
	playlist = await play.playlist_info(
		'https://www.youtube.com/playlist?list=PLofht4PTcKYki_6M4TCWftA2SIcdD0x7h'
	);
	const videos = await playlist.all_videos();
	playlist = [];
	(async function getStream() {
		console.log('getting data...');
		for (let i = 0; i < videos.length; i++) {
			const stream = await play.stream(videos[i].url);
			playlist = [
				...playlist,
				{
					id: videos[i].id,
					title: videos[i].title,
					url: videos[i].url,
					uri: stream.url,
				},
			];
		}
		console.log('done!');
	})();
}
getPlaylist();
setInterval(() => {
	getPlaylist();
}, 300 * 60000); // 5 hours

router.get('/focus', function (request, response) {
	response.send(playlist);
});

module.exports = router;
