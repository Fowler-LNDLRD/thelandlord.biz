import Dropdown from 'react-bootstrap/Dropdown';

import { useState } from 'react';
import Link from 'next/link';
import HeadTag from './HeadTag';

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
					<Dropdown>
						<span className="dropdown-title">Device</span>
						<Dropdown.Toggle id="dropdown-device" size="sm">
							{device}
						</Dropdown.Toggle>
						<Dropdown.Menu variant="dark">
							<Dropdown.Item as="button" onClick={(e) => setDevice('Android')} active={device === 'Android'}>
								Android
							</Dropdown.Item>
							<Dropdown.Item as="button" onClick={(e) => setDevice('iOS')} active={device === 'iOS'}>
								iOS
							</Dropdown.Item>
							<Dropdown.Item as="button" onClick={(e) => setDevice('Desktop')} active={device === 'Desktop'}>
								Desktop
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown className="mx-1">
						<span className="dropdown-title">Wallet</span>
						<Dropdown.Toggle id="dropdown-wallet" size="sm">
							{wallet}
						</Dropdown.Toggle>
						<Dropdown.Menu variant="dark">
							<Dropdown.Item as="button" onClick={(e) => setWallet('TrustWallet')} active={wallet === 'TrustWallet'}>
								TrustWallet
							</Dropdown.Item>
							<Dropdown.Item as="button" onClick={(e) => setWallet('MetaMask')} active={wallet === 'MetaMask'}>
								MetaMask
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown>
						<span className="dropdown-title">dApp</span>
						<Dropdown.Toggle id="dropdown-dapp" size="sm">
							{dApp}
						</Dropdown.Toggle>
						<Dropdown.Menu variant="dark">
							<Dropdown.Item as="button" onClick={(e) => setdApp('PancakeSwap')} active={dApp === 'PancakeSwap'}>
								PancakeSwap
							</Dropdown.Item>
							<Dropdown.Item as="button" onClick={(e) => setdApp('PooCoin')} active={dApp === 'PooCoin'}>
								PooCoin
							</Dropdown.Item>
							<Dropdown.Item as="button" onClick={(e) => setdApp('Bogged')} active={dApp === 'Bogged'}>
								Bogged
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
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
