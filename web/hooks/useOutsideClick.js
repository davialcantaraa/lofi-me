import { useEffect } from 'react';

function useOutsideAlerter(menuRef, isOpen, setIsOpen) {
	useEffect(() => {
		function handleClickOutside(event) {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		}
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen, menuRef, setIsOpen]);
}

export default useOutsideAlerter;
