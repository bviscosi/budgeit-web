import { useEffect } from 'react';

const MobileNavbar = ({ setOpenMenu }) => {
	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === 'Escape') {
				setOpenMenu(false);
			}
		};

		document.addEventListener('keydown', handleKeyDown);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [setOpenMenu]);

	return <div>MobileNavbar</div>;
};

export default MobileNavbar;
