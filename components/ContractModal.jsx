import { useState } from 'react';
import LinkArrow from './LinkArrow';
const ContractModal = () => {
	const [copied, setCopied] = useState(false);

	const copyToClipboard = () => {
		navigator.clipboard.writeText(process.env.NEXT_PUBLIC_CONTRACT);
		setCopied(true);

		const tooltip = bootstrap.Tooltip.getInstance('#contractModelCode');
		if (tooltip) {
			tooltip.hide();
			tooltip.disable();
		}

		setTimeout(() => {
			setCopied(false);
			tooltip.enable();
		}, 5000);
	};
	return (
		<div className="modal fade" id="contractModal" tabIndex="-1" aria-labelledby="contractModalLabel" aria-hidden="true">
			<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content contract-modal">
					<div className="contract-modal-title">Contract</div>
					<p className="contract-modal-desc">V2 Contract with 8% Tax or 9% Slippage.</p>
					<div
						data-bs-toggle="tooltip"
						data-bs-placement="bottom"
						data-bs-title="Click to copy!"
						onClick={() => copyToClipboard()}
						id="contractModelCode"
						className={'contract-modal-code' + (copied ? ' copied' : '')}
					>
						{copied ? 'Copied!' : process.env.NEXT_PUBLIC_CONTRACT}
					</div>
					<div className="contract-modal-link mt-2">
						<LinkArrow target="_blank" rel="noreferrer" className="link link-brand" dir="right" href={`https://bscscan.com/token/${process.env.NEXT_PUBLIC_CONTRACT}`}>
							Check it on BscScan
						</LinkArrow>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ContractModal;
