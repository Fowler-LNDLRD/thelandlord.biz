import HeadTag from '../../components/HeadTag';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Page = ({ data }) => {
	const router = useRouter();

	useEffect(() => {
		if (data.url) {
			router.push(data.url);
		} else {
			router.push('/');
		}
	}, [data, router]);

	return (
		<>
			<HeadTag title={data.title} desc={data.desc} img={data.img ? 'https://earn.thelandlord.biz' + data.img : data.img} />
			<div as="section" className="page page-ama container" style={{ zIndex: -2 }}>
				<h1 className="page-title text-center">{data.title}</h1>
				<div className="page-desc text-center mb-5">{data.desc}</div>
			</div>

			<div className="bg-dark position-fixed w-100 h-100 start-0 top-0 d-flex" style={{ zIndex: -1 }}>
				<div className="m-auto pb-3">
					<div className="spinner-border text-brand" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</div>
			</div>
		</>
	);
};

// This gets called on every request
export async function getServerSideProps(context) {
	let data = {};

	if (context.params.ref) {
		try {
			const resp = await axios.get(`http://localhost:5000/api/general/card/${context?.params?.ref}`);
			data = await resp.data;
		} catch (e) {
			// console.log(e);
		}
	}

	return { props: { data } };
}

export default Page;
