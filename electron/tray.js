const { Tray, Menu, app, shell } = require('electron');
const { resolve } = require('path');

const trayIcon = resolve(__dirname, '../', 'assets', 'iconTemplateWhite.png');

function createTray() {
	const tray = new Tray(trayIcon);
	const contextMenu = Menu.buildFromTemplate([
		{ label: 'Support' },
		{
			label: 'Source',
			click: async () => {
				await shell.openExternal('https://github.com/divinurised/lofi-me');
			},
		},
		{
			label: 'Quit',
			click: () => {
				app.isQuiting = true;
				app.quit();
			},
		},
	]);

	tray.setToolTip('Lofi.me');
	tray.setContextMenu(contextMenu);

	tray.on('click', () => {
		tray.popUpContextMenu();
	});
	return tray;
}

module.exports = createTray();
