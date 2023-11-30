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

					<div className='main'>
						<div style={{ display: 'flex', height: '100%', width: '100%', gap: '1rem' }}>
							<div
								style={{
									display: 'flex',
									height: '100%',
									width: '100%',
									border: '1px solid #e6e8ec',
									boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',

									backgroundColor: '#f7f8fa',
									borderRadius: '10px',
								}}></div>
							<div
								style={{
									display: 'flex',
									height: '100%',
									width: '100%',
									border: '1px solid #e6e8ec',
									boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',

									backgroundColor: '#f7f8fa',
									borderRadius: '10px',
								}}></div>
						</div>
						<div style={{ display: 'flex', height: '100%', width: '100%', gap: '1rem' }}>
							<div
								style={{
									display: 'flex',
									height: '100%',
									width: '100%',
									border: '1px solid #e6e8ec',
									boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',

									backgroundColor: '#f7f8fa',
									borderRadius: '10px',
								}}></div>
							<div
								style={{
									display: 'flex',
									height: '100%',
									width: '100%',
									border: '1px solid #e6e8ec',
									boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',

									backgroundColor: '#f7f8fa',
									borderRadius: '10px',
								}}></div>
							<div
								style={{
									display: 'flex',
									height: '100%',
									width: '100%',
									border: '1px solid #e6e8ec',
									boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',

									backgroundColor: '#f7f8fa',
									borderRadius: '10px',
								}}></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
