import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import SlideFade from '../components/SlideFade';
import HeadTag from '../components/HeadTag';

import axios from 'axios';

const Contact = () => {
	const formId = process.env.FORM_ID;

	const [contact, setContact] = useState({ email: '', message: '', _gotcha: '' });
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);

	const handleSubmit = async (e) => {
		try {
			e.preventDefault();
			setError(false);
			setSuccess(false);
			setLoading(true);

			const res = await axios.post(`https://formspree.io/f/${formId}`, contact);

			if (res?.status === 200) {
				setSuccess(true);
				setLoading(false);
			}
		} catch (err) {
			setLoading(false);
			setError(true);
		}
	};

	return (
		<>
			<HeadTag title={`Contact`} desc="If you have any proposal, or you have any questions, you can contact the team." />
			<div className="page">
				<div className="container">
					{success && (
						<div>
							<h1 className="page-title text-center">Sent!</h1>
							<p className="page-desc text-center">We will respond as soon as possible.</p>
						</div>
					)}

					{error && (
						<div>
							<h1 className="page-title text-center">Error!</h1>
							<p className="page-desc text-center">Something went wrong! please join our Telegram group.</p>
						</div>
					)}

					{loading && (
						<div className="spinner-border m-auto d-block text-brand" role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
					)}

					<div className="row align-items-center" hidden={error || success || loading}>
						<SlideFade className="col-md-6 mb-2 mb-md-0">
							<h1 className="page-title">Contact</h1>
							<p className="page-desc">We will respond as soon as possible.</p>
						</SlideFade>
						<SlideFade className="col-md-6" delay={0.2}>
							<Form onSubmit={handleSubmit}>
								<FloatingLabel controlId="email" label="Email address" className="mb-2">
									<Form.Control
										onChange={(e) => setContact({ ...contact, email: e.target.value })}
										value={contact.email}
										required
										type="email"
										name="email"
										placeholder="name@example.com"
									/>
								</FloatingLabel>
								<FloatingLabel controlId="message" label="Message" className="mb-2">
									<Form.Control
										onChange={(e) => setContact({ ...contact, message: e.target.value })}
										value={contact.message}
										required
										height={150}
										rows={6}
										as="textarea"
										name="message"
										placeholder="Message ..."
									/>
								</FloatingLabel>
								<input
									onChange={(e) => setContact({ ...contact, _gotcha: e.target.value })}
									value={contact._gotcha}
									type="text"
									name="_gotcha"
									style={{ display: 'none' }}
								/>
								<button className="btn btn-brand w-100 py-1" type="submit">
									Submit
								</button>
							</Form>
						</SlideFade>
					</div>
				</div>
			</div>
		</>
	);
};
export default Contact;
