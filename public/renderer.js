const { ipcRenderer } = require('electron');

window.onload = function () {
	const openMenuButton = document.getElementById('openMenuButton');
	const closeMenuButton = document.getElementById('closeMenuButton');
	const hideWindowButton = document.getElementById('hideWindowButton');
	const hiddenWindowRight = document.getElementById('hiddenWindowRight');
	const hiddenWindowLeft = document.getElementById('hiddenWindowLeft');

	openMenuButton.addEventListener('click', function () {
		console.log('abriu');
		ipcRenderer.send('openMenu');
	});
	closeMenuButton.addEventListener('click', function () {
		console.log('fechou');
		ipcRenderer.send('closeMenu');
	});

	hideWindowButton.addEventListener('click', function () {
		ipcRenderer.send('hideWindow');
		hiddenWindowRight.style.display = 'flex';
		hiddenWindowLeft.style.display = 'flex';
	});
	hiddenWindowRight.addEventListener('click', function () {
		ipcRenderer.send('showWindow');
		hiddenWindowRight.style.display = 'none';
		hiddenWindowLeft.style.display = 'none';
	});
	hiddenWindowLeft.addEventListener('click', function () {
		ipcRenderer.send('showWindow');
		hiddenWindowLeft.style.display = 'none';
		hiddenWindowRight.style.display = 'none';
	});

	ipcRenderer.on('removeButtons', (event, arg) => {
		hiddenWindowLeft.style.display = 'none';
		hiddenWindowRight.style.display = 'none';
	});
};
