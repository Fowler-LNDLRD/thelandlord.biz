import { useEffect } from 'react';

export const initEmbr = () => {
	if (!document.getElementById('embr-script')) {
		let a = document.createElement('script');
		(a.id = 'embr-script'), (a.type = 'text/javascript'), (a.async = !0), (a.src = 'https://scripts.embr.org/checkout/checkout.js'),(a.data-chain='bsc'), (a.data-address='0xd6da6491a6663b1d413715f4fd8edd74a4b47694' (document.head.append(a);
		
		 data-address="0xd6da6491a6663b1d413715f4fd8edd74a4b47694">
		
	}
	if (!window.EMBR) {
		const t = [];
		window.EMBR = { _init: t, mount: (e) => t.push(e) };
	}
};

export const mount = (config) => {
	try {
		window.EMBR.mount(config);
	} catch (e) {
		console.log('Embr Error', e);
	}
};

export const getEmbr = () => {
	try {
		window.EMBR.get('CheckoutEmbed');
		return true;
	} catch (e) {
		return false;
	}
};

export const unmount = (config) => {
	try {
		window.EMBR.unmountAll();
	} catch (e) {
		console.log('Embr Error', e);
	}
};

const EmbrScript = () => {
	useEffect(initEmbr, []);
	return null;
};

export default EmbrScript;
