const { ipcRenderer } = require('electron');

window.onload = function () {
	const openMenuButton = document.getElementById('openMenuButton');
	const closeMenuButton = document.getElementById('closeMenuButton');

	openMenuButton.addEventListener('click', function () {
		ipcRenderer.send('openMenu');
	});
	closeMenuButton.addEventListener('click', function () {
		ipcRenderer.send('closeMenu');
	});
};
