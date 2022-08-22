import Link from 'next/link';
import Accordion from 'react-bootstrap/Accordion';
import LinkArrow from '../../components/LinkArrow';
const LandlordFAQ = () => {
	return (
		<Accordion defaultActiveKey="0" className="accordion-faq" flush>
			<Accordion.Item eventKey={0}>
				<Accordion.Header>Tax and Slippage?</Accordion.Header>
				<Accordion.Body>
					<p>8% Tax and 9% Slippage</p>
				</Accordion.Body>
			</Accordion.Item>

			<Accordion.Item eventKey={1}>
				<Accordion.Header>Liquidity locked?</Accordion.Header>
				<Accordion.Body>
					<p className="m-0">All liquidity is locked for 5 years from launch on PinkSale.</p>
					<LinkArrow target="_blank" rel="noreferrer" className="link link-primary" dir="right" href={process.env.LIQUIDITY_LOCK}>
						Lock info
					</LinkArrow>
					<p className="m-0 mt-1">
						Additional tokens in the owner wallet that are not being used for liquidity are stored in a token locker so cannot be accessed or used or sold.
					</p>
					<LinkArrow target="_blank" rel="noreferrer" className="link link-primary" dir="right" href={process.env.TOKEN_LOCK}>
						Lock info
					</LinkArrow>
				</Accordion.Body>
			</Accordion.Item>

			<Accordion.Item eventKey={2}>
				<Accordion.Header>Team doxxed?</Accordion.Header>
				<Accordion.Body>
					<p>
						You can take a look at our{' '}
						<Link href="/ama">
							<a>Video Call AMAs</a>
						</Link>{' '}
						and also LinkedIn profiles can be found on our{' '}
						<Link href="/team">
							<a>Team page</a>
						</Link>
						.
					</p>
				</Accordion.Body>
			</Accordion.Item>

			<Accordion.Item eventKey={3}>
				<Accordion.Header>How to buy and where?</Accordion.Header>
				<Accordion.Body>
					<p>The Landlord is currently available to buy via pancake swap and is paired with $BNB. This means you need to buy $BNB to swap for $LNDLRD tokens.</p>
					<p>
						Tokens can also be bought from{' '}
						<Link href={process.env.LINK_TOKPIE}>
							<a target="_blank" rel="noreferrer">
								TokPie exchange
							</a>
						</Link>{' '}
						either via card payment or via $USDT pairing. This means you need to buy $USDT to swap for $LNDLRD tokens.
					</p>
					<LinkArrow className="link link-primary" dir="right" href="/buy">
						Buy now
					</LinkArrow>
				</Accordion.Body>
			</Accordion.Item>

			<Accordion.Item eventKey={4}>
				<Accordion.Header>How to see my tokens in my wallet?</Accordion.Header>
				<Accordion.Body>
					<p>
						<b className="text-white">Trust wallet:</b>
						<br />
						Scroll to bottom of screen, select add token. Press the plus button and enter BNB SmartChain as the network. Then paste in The Landlord contract address,
						This will populate the name, symbol and decimals fields and then hit save.
					</p>
					<p>
						<b className="text-white">MetaMask:</b> <br />
						You will need to add SmartChain network to your wallet this can be done by following these instructions MM LINK. Once added select the circle at the app and
						select Smart chain. Then select import tokens and select custom token and paste in the contract address in the token address field. Then select import.
					</p>

					<p>
						<b className="text-white">Contract address:</b> <br />
						{process.env.CONTRACT}
					</p>
				</Accordion.Body>
			</Accordion.Item>

			<Accordion.Item eventKey={5}>
				<Accordion.Header>How to see my busd rewards?</Accordion.Header>
				<Accordion.Body>
					<p>The easiest way to see you rewards is to add $BUSD token to your wallet. Then you will see the amount increase.</p>
				</Accordion.Body>
			</Accordion.Item>

			<Accordion.Item eventKey={6}>
				<Accordion.Header>Am I taxed if I send from one wallet to another?</Accordion.Header>
				<Accordion.Body>
					<p>Yes, the standard sale tax of 9% is applied if you move tokens from wallet to another or to an exchange.</p>
				</Accordion.Body>
			</Accordion.Item>

			<Accordion.Item eventKey={7}>
				<Accordion.Header>How do BUSD rewards work?</Accordion.Header>
				<Accordion.Body>
					<p>
						2% of every transaction gets sent to the Landlord contract and swapped for BUSD. The contract then distributes BUSD rewards to all holders with minimum of
						100k tokens.
					</p>
					<p>
						The rewards are distributed off the back of each buy or sell and are done in batches of 5-6. This means during high volume periods your get rewards quicker
						than during low volume periods.
					</p>
					<p>Lastly the amount of reward you receive is relative to how many tokens you hold, so the more you hold the more BUSD tokens you receive.</p>
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
};
export default LandlordFAQ;
