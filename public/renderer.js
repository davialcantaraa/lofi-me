const { ipcRenderer } = require('electron');

window.onload = function () {
	const openMenuButton = document.getElementById('openMenuButton');
	const closeMenuButton = document.getElementById('closeMenuButton');
	const hideWindowButton = document.getElementById('hideWindowButton');
	const hiddenWindowRight = document.getElementById('hiddenWindowRight');
	const openGithubButton = document.getElementById('openGithubButton');
	const openWebSiteButton = document.getElementById('openWebSiteButton');

	openMenuButton.addEventListener('click', function () {
		ipcRenderer.send('openMenu');
	});
	closeMenuButton.addEventListener('click', function () {
		ipcRenderer.send('closeMenu');
	});

	hideWindowButton.addEventListener('click', function () {
		ipcRenderer.send('hideWindow');
		hiddenWindowRight.style.display = 'flex';
	});
	hiddenWindowRight.addEventListener('click', function () {
		ipcRenderer.send('showWindow');
		hiddenWindowRight.style.display = 'none';
	});

	openGithubButton.addEventListener('click', function () {
		ipcRenderer.send('openGithub');
	});
	openWebSiteButton.addEventListener('click', function () {
		ipcRenderer.send('openWebsite');
	});

	ipcRenderer.on('removeButtons', (event, arg) => {
		hiddenWindowRight.style.display = 'none';
	});
};
