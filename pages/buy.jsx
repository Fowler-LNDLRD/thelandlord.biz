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
	const [dApp, setdApp] = useState('PancakeSwap');

	return (
		<>
			<HeadTag title={`How To Buy`} />
			<section className="page page-buy container">
				<h1 className="page-title text-center mb-3">How To Buy</h1>
				<div className="buy-options text-center d-flex justify-content-center">
					<div className="dropdown">
						<span className="dropdown-title">Device</span>
						<button className="btn btn-primary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							{device}
						</button>
						<ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark">
							<li>
								<button onClick={(e) => setDevice('Android')} className={`dropdown-item ${device === 'Android' && ' active'}`} type="button">
									Android
								</button>
							</li>
							<li>
								<button onClick={(e) => setDevice('iOS')} className={`dropdown-item ${device === 'iOS' && ' active'}`} type="button">
									iOS
								</button>
							</li>
							<li>
								<button onClick={(e) => setDevice('Browser')} className={`dropdown-item ${device === 'Browser' && ' active'}`} type="button">
									Browser
								</button>
							</li>
						</ul>
					</div>

					<div className="dropdown mx-1">
						<span className="dropdown-title">Wallet</span>
						<button className="btn btn-primary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							{wallet}
						</button>
						<ul className="dropdown-menu dropdown-menu-end  dropdown-menu-dark">
							<li>
								<button onClick={(e) => setWallet('TrustWallet')} className={`dropdown-item ${wallet === 'TrustWallet' && ' active'}`} type="button">
									TrustWallet
								</button>
							</li>
							<li>
								<button onClick={(e) => setWallet('MetaMask')} className={`dropdown-item ${wallet === 'MetaMask' && ' active'}`} type="button">
									MetaMask
								</button>
							</li>
						</ul>
					</div>

					<div className="dropdown">
						<span className="dropdown-title">dApp</span>
						<button className="btn btn-primary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							{dApp}
						</button>
						<ul className="dropdown-menu dropdown-menu-end  dropdown-menu-dark ">
							<li>
								<button onClick={(e) => setdApp('PancakeSwap')} className={`dropdown-item ${dApp === 'PancakeSwap' && ' active'}`} type="button">
									PancakeSwap
								</button>
							</li>
							<li>
								<button onClick={(e) => setdApp('PooCoin')} className={`dropdown-item ${dApp === 'PooCoin' && ' active'}`} type="button">
									PooCoin
								</button>
							</li>
							<li>
								<button onClick={(e) => setdApp('Bogged')} className={`dropdown-item ${dApp === 'Bogged' && ' active'}`} type="button">
									Bogged
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
