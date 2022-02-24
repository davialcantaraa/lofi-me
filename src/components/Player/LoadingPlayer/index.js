import '../styles.scss';

function LoadingPlayer() {
	return (
		<div className="player">
			<div className="title-container">
				<div className="skeleton skeleton-container"></div>
				<div
					className="skeleton skeleton-container"
					style={{ width: '30%' }}
				></div>
			</div>
			<div
				id="audio-container"
				style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
			>
				<div className="skeleton skeleton-container"></div>
				<div
					className="volume-container skeleton skeleton-container"
					sx={{ width: 200 }}
				></div>
			</div>
		</div>
	);
}

export default LoadingPlayer;
