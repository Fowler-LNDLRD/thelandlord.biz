import { useState } from 'react';
import LinkArrow from './LinkArrow';
const ContractModal = () => {
	const [copied, setCopied] = useState(false);

	const copyToClipboard = () => {
		navigator.clipboard.writeText(process.env.NEXT_PUBLIC_CONTRACT);
		setCopied(true);

		setTimeout(() => {
			setCopied(false);
		}, 5000);
	};
	return (
		<div className="contract-modal">
			<p className="contract-modal-desc">V2 Contract with 8% Tax or 9% Slippage.</p>
			<div onClick={() => copyToClipboard()} id="contractModelCode" className={'contract-modal-code' + (copied ? ' copied' : '')}>
				{copied ? 'Copied!' : process.env.CONTRACT}
			</div>
			<div className="contract-modal-link mt-2">
				<LinkArrow target="_blank" rel="noreferrer" className="link link-brand" dir="right" href={`https://bscscan.com/token/${process.env.NEXT_PUBLIC_CONTRACT}`}>
					Check it on BscScan
				</LinkArrow>
			</div>
		</div>
	);
};
export default ContractModal;
