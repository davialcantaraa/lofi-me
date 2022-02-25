const {
	app,
	BrowserWindow,
	ipcMain,
	screen,
	Menu,
	Tray,
	shell,
} = require('electron');
const Store = require('electron-store');
const { resolve } = require('path');

const trayIcon = resolve(__dirname, '../', 'assets', 'iconTemplateWhite.png');

function createWindow() {
	let width = screen.getPrimaryDisplay().bounds.width;
	const tray = new Tray(trayIcon);
	const store = new Store();

	const win = new BrowserWindow({
		width: 200,
		height: 100,
		frame: false,
		show: false,
		resizable: false,
		fullscreenable: false,
		alwaysOnTop: true,
		transparent: true,
		skipTaskbar: true,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
		},
	});

	var loading = new BrowserWindow({
		width: 500,
		height: 200,
		transparent: true,
		frame: false,
		alwaysOnTop: true,
		skipTaskbar: true,
	});

	loading.loadFile(resolve(__dirname, './loading.html'));
	loading.center();
	setTimeout(function () {
		loading.close();
		win.show();
	}, 5000);

	const contextMenu = Menu.buildFromTemplate([
		{ label: 'Support' },
		{
			label: 'Reset position',
			click: () => {
				win.center();
				win.webContents.send('removeButtons');
			},
		},
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

	tray.setToolTip('lofi me');
	tray.setContextMenu(contextMenu);

	tray.on('click', () => {
		tray.popUpContextMenu();
	});

	win.setPosition(
		store.get('positionX') > width - 200 ? width - 200 : store.get('positionX'),
		store.get('positionY')
	);
	win.on('move', () => {
		store.set('positionX', win.getPosition()[0]);
		store.set('positionY', win.getPosition()[1]);
	});

	ipcMain.on('openGithub', (event, arg) => {
		shell.openExternal('https://github.com/divinurised/lofi-me');
	});
	ipcMain.on('openWebsite', (event, arg) => {
		shell.openExternal('https://lofi.me');
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

	ipcMain.on('hideWindow', (event, arg) => {
		win.setPosition(width - 40, win.getPosition()[1]);
	});
	ipcMain.on('showWindow', (event, arg) => {
		win.setPosition(width - 200, win.getPosition()[1]);
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

if (process.platform === 'darwin') {
	app.dock.hide();
}
