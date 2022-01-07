const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow() {
	const win = new BrowserWindow({
		width: 200,
		height: 100,
		frame: false,
		resizable: true,
		alwaysOnTop: true,
		transparent: true,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js'),
			nodeIntegration: true,
			contextIsolation: false,
		},
	});
	win.loadURL('http://localhost:3000');
	ipcMain.on('closeMenu', (event, arg) => {
		win.setSize(200, 100, true);
	});
	ipcMain.on('openMenu', (event, arg) => {
		win.setSize(200, 305, true);
	});
}

app.whenReady().then(() => {
	createWindow();

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow();
		}
	});
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});
