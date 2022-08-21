import { useForm } from '@formspree/react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const Contact = () => {
	const [state, handleSubmit] = useForm('x');

	return (
		<div className="page">
			<div className="container">
				{state?.succeeded && (
					<div>
						<h1 className="page-title text-center">Sent!</h1>
						<p className="page-desc text-center">We will respond as soon as possible.</p>
					</div>
				)}

				{state?.errors.length !== 0 && (
					<>
						<div>
							<h1 className="page-title text-center">Error!</h1>
							<p className="page-desc text-center">Something went wrong! please join our Telegram group.</p>
						</div>
					</>
				)}

				<div className="row align-items-center" hidden={state.succeeded || state?.errors.length !== 0}>
					<div className="col-md-6 mb-2 mb-md-0">
						<h1 className="page-title">Contact</h1>
						<p className="page-desc">We will respond as soon as possible.</p>
					</div>
					<div className="col-md-6">
						<Form onSubmit={handleSubmit}>
							<FloatingLabel controlId="email" label="Email address" className="mb-2">
								<Form.Control min={24} required type="email" name="email" placeholder="name@example.com" />
							</FloatingLabel>

							<FloatingLabel controlId="message" label="Message" className="mb-2">
								<Form.Control required height={150} rows={6} as="textarea" name="message" placeholder="Message ..." />
							</FloatingLabel>

							<button className="btn btn-brand w-100 py-1" type="submit" disabled={state.submitting}>
								Submit
							</button>
						</Form>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Contact;
