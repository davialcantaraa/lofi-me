const { Tray } = require('electron');
const { resolve } = require('path');

const trayIcon = resolve(__dirname, '../', 'assets', 'iconTemplateWhite.png');

function createTray() {
	const tray = new Tray(trayIcon);
	tray.setToolTip('Lofi.me');

	return tray;
}

module.exports = createTray();
