import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';

const Home = () => {
	return (
		<div className='page'>
			<div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100%' }}>
				<Sidebar />
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						width: '100%',
						height: '100%',
						backgroundColor: '#eff1f5',
					}}>
					<Topbar></Topbar>

					<div className='main'>Home</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
