const express = require('express');
const router = express.Router();

const playlists = [
	{
		name: 'relax',
		url: '',
		type: 'normal',
		content: null,
	},
	{
		name: 'chill',
		url: '',
		type: 'normal',
		content: null,
	},
	{
		name: 'focus',
		url: '',
		type: 'normal',
		content: null,
	},
	{
		name: 'sleepy',
		url: '',
		type: 'normal',
		content: null,
	},
	{
		name: 'anime',
		url: '',
		type: 'multiple',
		content: [
			{
				name: 'kajshdas',
				url: '',
			},
			{
				name: 'askdjalsjd',
				url: '',
			},
			{
				name: 'klasdjlkajs',
				url: '',
			},
		],
	},
	{
		name: 'games',
		url: '',
		type: 'multiple',
		content: [
			{
				name: 'league of legends',
				url: '',
			},
			{
				name: 'world of warcraft',
				url: '',
			},
			{
				name: 'genshin impact',
				url: '',
			},
		],
	},
];

router.get('/playlists', function (request, response) {
	response.send(playlists);
});

module.exports = router;
