import Accordion from 'react-bootstrap/Accordion';
const GeneralFAQ = () => {
	return (
		<Accordion defaultActiveKey="0" className="accordion-faq" flush>
			<Accordion.Item eventKey={1}>
				<Accordion.Header>What is an altcoin?</Accordion.Header>
				<Accordion.Body>
					<p>Altcoin is short for Alternative Coin. This term, Altcoin, is used for all other coins other than the mighty Bitcoin.</p>
				</Accordion.Body>
			</Accordion.Item>

			<Accordion.Item eventKey={2}>
				<Accordion.Header>What is a wallet and why do I need one?</Accordion.Header>
				<Accordion.Body>
					<p>
						A crypto wallet is the place where your coins are stored. Your wallet must contain seeds, keys, and addresses to function properly. There are several types
						of wallets, such as hardware and software. If you use a mobile app to store your crypto, that is an example of a software wallet.
					</p>
				</Accordion.Body>
			</Accordion.Item>

			<Accordion.Item eventKey={3}>
				<Accordion.Header>What is an AMA?</Accordion.Header>
				<Accordion.Body>
					<p>
						AMA stands for ask me anything, In relation to The Landlord this is relates to our regular video conferences that we hold where the team give and update and
						answer any questions from investors.
					</p>
				</Accordion.Body>
			</Accordion.Item>

			<Accordion.Item eventKey={4}>
				<Accordion.Header>What does doxxed mean?</Accordion.Header>
				<Accordion.Body>
					<p>
						Doxxed is a term used in crypto to describe a team or team member who has actively shared there true Identity such as name and picture or by appearing in
						live video conferences or videos. The key Landlord Team members have done this and their linked on profiles can be found on our team page.
					</p>
				</Accordion.Body>
			</Accordion.Item>

			<Accordion.Item eventKey={5}>
				<Accordion.Header>What are Gas fees?</Accordion.Header>
				<Accordion.Body>
					<p>
						When you make a transaction on the blockchain, you have to pay a fee. That fee is called a gas price. You are basically paying a miner to go out and receive
						crypto for you. You can choose to pay higher fees for faster transaction speeds, or lower fees for slower transaction fees. Luckily The Landlord is on the
						BSC block chain which is both fast and has low gas fees.
					</p>
				</Accordion.Body>
			</Accordion.Item>

			<Accordion.Item eventKey={6}>
				<Accordion.Header>What is a NFT?</Accordion.Header>
				<Accordion.Body>
					<p>Non-fungible tokens are units of value used to represent the ownership of unique digital items like art or collectibles.</p>
				</Accordion.Body>
			</Accordion.Item>

			<Accordion.Item eventKey={7}>
				<Accordion.Header>What is my Private Key is it important?</Accordion.Header>
				<Accordion.Body>
					<p>
						This is the super-important string of numbers and letters you should not share with anyone. If someone is able to access your private key, you can lose your
						funds in a matter of seconds. This key is necessary to verify transactions when selling or withdrawing your crypto.
					</p>
				</Accordion.Body>
			</Accordion.Item>

			<Accordion.Item eventKey={8}>
				<Accordion.Header>What is a Seed Phrase?</Accordion.Header>
				<Accordion.Body>
					<p>
						The seed is the foundation of your wallet&apos;s digital existence. A recovery seed is a series of twelve, sometimes sixteen words that can be used to
						access your wallet if something goes wrong and you lose it.
					</p>
				</Accordion.Body>
			</Accordion.Item>

			<Accordion.Item eventKey={9}>
				<Accordion.Header>What is fiat?</Accordion.Header>
				<Accordion.Body>
					<p>
						Fiat currency is 1) government-backed and 2) not backed by any commodity (like gold). Those US dollars or GBP in your wallet? That’s fiat currency. The
						value of these rely solely on peoples collective faith in the institution of the government.
					</p>
				</Accordion.Body>
			</Accordion.Item>

			<Accordion.Item eventKey={10}>
				<Accordion.Header>What is a whale and are they good?</Accordion.Header>
				<Accordion.Body>
					<p>
						Crypto Whale (or Whale) are the entities big enough to swing markets by their unilateral purchase or sell-off. They are typically the largest crypto
						holders, projects need whales for large growth and are an important part of the crypto community.
					</p>
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
};
export default GeneralFAQ;
