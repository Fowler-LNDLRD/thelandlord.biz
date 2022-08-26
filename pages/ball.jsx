import { useState, useEffect } from 'react';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import useLocalStorage from 'use-local-storage';
import HeadTag from '../components/HeadTag';
import SlideFade from '../components/SlideFade';

const Calc = () => {
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);
	const [localWallet, setLocalWallet] = useLocalStorage('wallet', '');
	const [wallet, setWallet] = useState(localWallet);

	const fetchData = async () => {
		setLoading(true);
		setError(false);
		setSuccess(false);
		try {
			const { data: response } = await axios.get(`/api/ball?wallet=${wallet}`);
			if (response) {
				setBalance(response.balance);
				setPrice(response.price);
				setMc(response.price * circulation);
				setValue(response.price * response.balance);
				setLoading(false);
				setSuccess(true);
			}
		} catch (err) {
			setLoading(false);
			setSuccess(false);
			setError(err?.response?.data?.message);
		}
	};

	const walletHandler = (e) => {
		setWallet(e.target.value);
	};

	const walletChange = () => {
		setLocalWallet(wallet);
		fetchData();
	};

	//
	const [focused, setFocused] = useState(null);
	const [circulation, setCirculation] = useState(98872756300);
	const [price, setPrice] = useState(0);
	const [balance, setBalance] = useState(0);
	const [value, setValue] = useState(0);
	const [mc, setMc] = useState(0);

	const balanceHandler = (num) => {
		if (num !== undefined && focused === 'balance') {
			setBalance(num);
			setValue(num * price);
		}
	};

	const valueHandler = (num) => {
		if (num !== undefined && focused === 'value') {
			setValue(num);
			setPrice(num / balance);
			setMc((num / balance) * circulation);
		}
	};

	const mcHandler = (num) => {
		if (num !== undefined && focused === 'mc') {
			setMc(num);
			setPrice(num / circulation);
			setValue((num / circulation) * balance);
		}
	};

	const priceHandler = (num) => {
		if (num !== undefined && num > 0 && focused === 'price') {
			setPrice(num);
			setMc(num * circulation);
			setValue(num * balance);
		}
	};

	return (
		<div className="page page-calc">
			<HeadTag title={`Crystal Ball`} desc="How much your Landlord Token worth now, and in the future?" />

			<div className="container mb-5">
				<h1 className="page-title text-center">Crystal Ball</h1>
				<p className="page-desc text-center">How much your Landlord Token worth now, and in the future?</p>
			</div>

			<div className="container d-flex justify-content-center">
				<div className="col-6">
					<div className="form-item mb-1">
						<div className="form-wallet">
							<input value={wallet} onChange={walletHandler} name="wallet" placeholder="Wallet address" type="text" className="form-control pe-3" />
							<button hidden={loading} onClick={walletChange} className="btn form-search">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
									<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
								</svg>
							</button>
						</div>
					</div>
					{error && <div className="bg-danger my-2 p-1 rounded-2">{error}</div>}
					{loading && (
						<div className="spinner-border mx-auto d-block my-3 text-brand" role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
					)}
					{!loading && !error && success && (
						<div className="row">
							<div className="col-6">
								<div className="form-item mb-1">
									<label className="from-label">Balance</label>
									<NumberFormat
										onFocus={() => setFocused('balance')}
										onValueChange={({ floatValue }) => balanceHandler(floatValue)}
										value={balance}
										displayType={'input'}
										decimalScale={0}
										thousandSeparator={true}
										className="form-control"
									/>
								</div>
							</div>
							<div className="col-6">
								<div className="form-item mb-1">
									<label className="from-label">Value</label>
									<NumberFormat
										onFocus={() => setFocused('value')}
										onValueChange={({ floatValue }) => valueHandler(floatValue)}
										value={value}
										displayType={'input'}
										thousandSeparator={true}
										decimalScale={2}
										className="form-control"
										prefix="$"
									/>
								</div>
							</div>
							<div className="col-6">
								<div className="form-item mb-1">
									<label className="from-label">Market Cap</label>
									<NumberFormat
										onFocus={() => setFocused('mc')}
										onValueChange={({ floatValue }) => mcHandler(floatValue)}
										value={mc}
										displayType={'input'}
										thousandSeparator={true}
										decimalScale={2}
										className="form-control"
										prefix="$"
									/>
								</div>
							</div>
							<div className="col-6">
								<div className="form-item mb-1">
									<label className="from-label">Price</label>
									<NumberFormat
										onFocus={() => setFocused('price')}
										onValueChange={({ floatValue }) => priceHandler(floatValue)}
										value={price}
										displayType={'input'}
										thousandSeparator={true}
										className="form-control"
										decimalScale={9}
										prefix="$"
									/>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
export default Calc;
