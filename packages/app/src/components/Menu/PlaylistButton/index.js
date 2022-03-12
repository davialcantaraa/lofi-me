function PlaylistButton({ name, previousPlaylist, type }) {
	window.addEventListener('load', () => {
		if (type === 'multiple') {
			const element = document.getElementById(name);
			console.log(element);
			const parentElement = document.getElementById('category-container');
			const hiddenElement = document.getElementById('category-container2');
			element.addEventListener('click', () => {
				console.log('sasdas');
				parentElement.classList.add('disabled');
				hiddenElement.classList.add('active');
			});
		}
	});

	return (
		<>
			<button
				className={`${previousPlaylist === name ? 'active-playlist' : null} ${
					type === 'multiple' && 'multiple'
				}`}
				id={name}
			>
				{name}
			</button>
		</>
	);
}

export default PlaylistButton;
