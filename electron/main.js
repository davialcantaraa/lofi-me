const { app, BrowserWindow, ipcMain } = require('electron');
const Store = require('electron-store');

const store = new Store();

function createWindow() {
	const win = new BrowserWindow({
		width: 200,
		height: 100,
		frame: false,
		resizable: false,
		alwaysOnTop: true,
		transparent: true,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
		},
	});
	win.setPosition(store.get('positionX'), store.get('positionY'));
	win.on('move', (event) => {
		store.set('positionX', win.getPosition()[0]);
		store.set('positionY', win.getPosition()[1]);
	});
	ipcMain.on('closeMenu', (event, arg) => {
		win.setResizable(true);
		win.setSize(200, 100, true);
		win.setResizable(false);
	});
	ipcMain.on('openMenu', (event, arg) => {
		win.setResizable(true);
		win.setSize(200, 305, true);
		win.setResizable(false);
	});
	win.loadURL('http://localhost:3000');
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
