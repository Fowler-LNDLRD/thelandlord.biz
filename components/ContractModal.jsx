import { useState } from 'react';

const ContractModal = () => {
	const [copied, setCopied] = useState(false);

	const copyToClipboard = () => {
		navigator.clipboard.writeText(process.env.NEXT_PUBLIC_CONTRACT);
		setCopied(true);

		setTimeout(() => setCopied(false), 5000);
	};
	return (
		<div className="modal fade" id="contractModal" tabIndex="-1" aria-labelledby="contractModalLabel" aria-hidden="true">
			<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content contract-modal">
					<div className="contract-modal-title">Contract</div>
					<p className="contract-modal-desc">V2 Contract with 8% Tax or 9% Slippage.</p>
					<div onClick={() => copyToClipboard()} className={'contract-modal-code' + (copied ? ' copied' : '')}>
						{copied ? 'Copied!' : process.env.NEXT_PUBLIC_CONTRACT}
					</div>
				</div>
			</div>
		</div>
	);
};
export default ContractModal;
