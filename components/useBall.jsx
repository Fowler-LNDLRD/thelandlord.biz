import { useEffect, useState } from 'react';
import axios from 'axios';

const useBall = () => {
	const [data, setData] = useState(null);
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data: response } = await axios.get('/api/ball');
				if (response) {
					setData(response);
					setSuccess(true);
				}
			} catch (error) {
				setSuccess(false);
			}
		};

		fetchData();
	}, []);

	return { data, success };
};

export default useBall;
