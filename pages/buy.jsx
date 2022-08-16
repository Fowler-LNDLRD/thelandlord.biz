import { useState } from 'react';
import Link from 'next/link';
import HeadTag from '../components/HeadTag';

import TrustIos from '../sections/buy/TrustIos';
import TrustAndroid from '../sections/buy/TrustAndroid';

import MetaIos from '../sections/buy/MetaIos';
import MetaAndroid from '../sections/buy/MetaAndroid';

const Buy = () => {
	const [wallet, setWallet] = useState('TrustWallet');
	const [device, setDevice] = useState('Android');

	return (
		<>
			<HeadTag title={`How To Buy`} />
			<section className="page page-buy container">
				<h1 className="page-title text-center mb-2">How To Buy</h1>
				<div className="buy-options text-center d-flex justify-content-center">
					<div className="dropdown me-1">
						<button className="btn btn-primary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							{wallet}
						</button>
						<ul className="dropdown-menu dropdown-menu-end  dropdown-menu-dark">
							<li>
								<button onClick={(e) => setWallet('TrustWallet')} className="dropdown-item" type="button">
									TrustWallet
								</button>
							</li>
							<li>
								<button onClick={(e) => setWallet('MetaMask')} className="dropdown-item" type="button">
									MetaMask
								</button>
							</li>
						</ul>
					</div>

					<div className="dropdown">
						<button className="btn btn-primary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							{device}
						</button>
						<ul className="dropdown-menu dropdown-menu-end  dropdown-menu-dark">
							<li>
								<button onClick={(e) => setDevice('Android')} className="dropdown-item" type="button">
									Android
								</button>
							</li>
							<li>
								<button onClick={(e) => setDevice('iOS')} className="dropdown-item" type="button">
									iOS
								</button>
							</li>
							<li>
								<button onClick={(e) => setDevice('Browser')} className="dropdown-item" type="button">
									Browser
								</button>
							</li>
						</ul>
					</div>
				</div>

				{wallet === 'TrustWallet' && device === 'Android' && <TrustAndroid />}
				{wallet === 'TrustWallet' && device === 'iOS' && <TrustIos />}
				{wallet === 'MetaMask' && device === 'Android' && <MetaAndroid />}
				{wallet === 'MetaMask' && device === 'iOS' && <MetaIos />}
			</section>
		</>
	);
};
export default Buy;
