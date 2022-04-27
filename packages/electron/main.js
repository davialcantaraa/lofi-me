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

const appExe = resolve(__dirname, '..', '..', 'lofi-me.exe');

const trayIcon = resolve(__dirname, './', 'assets', 'iconTemplate.png');
const githubIcon = resolve(
	__dirname,
	'./',
	'assets',
	'trayIcons',
	'github.png'
);
const heartIcon = resolve(__dirname, './', 'assets', 'trayIcons', 'heart.png');
const undoIcon = resolve(__dirname, './', 'assets', 'trayIcons', 'undo.png');
const quitIcon = resolve(__dirname, './', 'assets', 'trayIcons', 'quit.png');
const reloadIcon = resolve(
	__dirname,
	'./',
	'assets',
	'trayIcons',
	'reload.png'
);

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
			devTools: false,
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
		{
			label: 'Reset position',
			click: () => {
				win.center();
				win.webContents.send('removeButtons');
			},
			icon: undoIcon,
		},
		{
			label: 'Reload app',
			click: () => {
				win.reload();
			},
			icon: reloadIcon,
		},
		{ type: 'separator' },
		{
			label: 'Source',
			click: async () => {
				await shell.openExternal('https://github.com/divinurised/lofi-me');
			},
			icon: githubIcon,
		},
		{
			label: 'Support',
			click: async () => {
				await shell.openExternal('https://ko-fi.com/divinurised');
			},
			icon: heartIcon,
		},
		{
			label: 'Quit',
			click: () => {
				app.isQuiting = true;
				app.quit();
			},
			icon: quitIcon,
		},
	]);

	tray.setToolTip('lofi me');
	tray.setContextMenu(contextMenu);

	tray.on('click', () => {
		tray.popUpContextMenu();
	});

	if (store.get('positionX') !== undefined) {
		win.setPosition(
			store.get('positionX') > width - 200
				? width - 200
				: store.get('positionX'),
			store.get('positionY')
		);
	} else {
		win.center();
	}

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
	ipcMain.on('openSupport', (event, arg) => {
		shell.openExternal('https://ko-fi.com/divinurised');
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
	win.loadURL('https://lofi-me-app.netlify.app');

	const lockWindow = app.requestSingleInstanceLock();

	if (!lockWindow) {
		app.quit();
	} else {
		app.on('second-instance', (event, commandLine, workingDirectory) => {
			if (win) {
				if (win.isMinimized()) win.restore();
				win.focus();
			}
		});
		app.on('ready', () => {});
	}

	// No internet connection
	if (
		app.getLoginItemSettings().openAtLogin ||
		app.getLoginItemSettings().wasOpenedAtLogin
	) {
		setTimeout(() => {
			win.reload();
		}, 60 * 1000); // 1 minute
	}

	if (app.getLoginItemSettings().wasOpenedAtLogin) {
		win.webContents.send('hideWindow');
	}
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

app.setLoginItemSettings({
	openAtLogin: true,
	path: appExe,
});

if (process.platform === 'darwin') {
	app.dock.hide();
}
