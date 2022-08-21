import { useState } from 'react';
import posProducts from '../data/posProducts.json';

const POS = () => {
	const [products, setProducts] = useState(posProducts);
	const [cartShow, setCartShow] = useState(false);
	const [confirmShow, setConfirmShow] = useState(false);
	const [payShow, setPayShow] = useState(false);
	const [cartTotal, setCartTotal] = useState(0);
	const [tip, setTip] = useState(0);
	const [search, setSearch] = useState('');
	const [flash, setFlash] = useState(false);
	const [addedProducts, setAddedProducts] = useState(0);

	const addProduct = (item, index) => {
		let tempProduct = [...products];
		tempProduct[index].added += 1;
		setProducts(tempProduct);
		setAddedProducts(addedProducts + 1);

		setCartTotal(cartTotal + item.price);
		setFlash(true);
		setTimeout(() => setFlash(false), 300);
	};

	const removeItem = (item) => {
		const currentItem = item;
		let tempProduct = [...products];
		tempProduct = tempProduct.map((c) => (c.id === item.id ? { ...c, added: 0 } : c));
		setProducts(tempProduct);
		setAddedProducts(addedProducts - currentItem.added);

		if (addedProducts - currentItem.added === 0) {
			setCartShow(false);
			setCartTotal(0);
		} else {
			setCartTotal(cartTotal - currentItem.price * currentItem.added);
		}
	};

	const lessItem = (item) => {
		setAddedProducts(addedProducts - 1);
		if (addedProducts - 1 === 0) {
			setCartShow(false);
		}
		let tempProduct = [...products];
		tempProduct = tempProduct.map((c) => (c.id === item.id ? { ...c, added: c.added - 1 } : c));
		setCartTotal(cartTotal - item.price);
		setProducts(tempProduct);
	};

	const moreItem = (item) => {
		setAddedProducts(addedProducts + 1);
		let tempProduct = [...products];
		tempProduct = tempProduct.map((c) => (c.id === item.id ? { ...c, added: c.added + 1 } : c));
		setCartTotal(cartTotal + item.price);
		setProducts(tempProduct);
	};

	return (
		<section className="papp">
			<div className="row">
				<div className="col-10">
					<div className="position-relative">
						<input type="text" onChange={(e) => setSearch(e.target.value)} value={search} className="form-control papp-search" placeholder="Find products..." />
						<button onClick={() => setSearch('')} hidden={search.length === 0} className="btn-close position-absolute top-0 end-0 h-100 p-0 px-1"></button>
					</div>
				</div>
				<div className="col-2">
					<button className={'d-flex btn w-100 papp-cart-btn btn-brand' + (flash ? ' flash' : '')} onClick={() => setCartShow(!cartShow)}>
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="mx-auto" viewBox="0 0 16 16">
							<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
						</svg>
						{addedProducts !== 0 && <span className="papp-cart-badge">{addedProducts}</span>}
					</button>
				</div>
			</div>

			<div className="row">
				{products
					.filter((item) => {
						if (!search) return true;
						if (item.title.toLowerCase().includes(search.toLowerCase())) {
							return true;
						}
					})
					.map((item, index) => (
						<div className="col-3" key={item.id}>
							<button disabled={item.added >= item.stock} className="papp-product" onClick={() => addProduct(item, index)}>
								<img className="papp-product-img" src={`/img/papp/${item.img}`} alt={item.title} />
								<div className="papp-product-title">{item.title}</div>
								<div className="papp-product-price">${item.price}</div>
								{item.added !== 0 && <div className="papp-product-added">{item.added}</div>}
							</button>
						</div>
					))}
			</div>

			<div className={'papp-modal' + (cartShow ? ' active' : '')}>
				<div className="papp-modal-overlay" onClick={() => setCartShow(!cartShow)}></div>
				<div className="btn-close"></div>

				{addedProducts === 0 && <div className="papp-modal-content text-center small">Empty cart, add something!</div>}

				{addedProducts !== 0 && (
					<div className="papp-modal-content">
						<h4>Cart</h4>
						<hr className="hr mb-0" />

						<ul className="papp-cart-list my-1">
							{products
								.filter((item) => item.added !== 0)
								.map((item, index) => (
									<li className="papp-cart-item" key={index}>
										<button type="button" className="text-danger papp-cart-item-btn papp-cart-item-del" onClick={() => removeItem(item)}>
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
												<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
												<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
											</svg>
										</button>

										<span className="papp-cart-item-title">{item.title}</span>
										<span className="papp-cart-item-price me-1">${item.price}</span>
										<button type="button" className="text-warning papp-cart-item-btn papp-cart-item-del" onClick={() => lessItem(item)}>
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-circle" viewBox="0 0 16 16">
												<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
												<path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
											</svg>
										</button>
										<span className="papp-cart-item-added">{item.added}</span>
										<button
											disabled={item.added >= item.stock}
											type="button"
											className={'papp-cart-item-btn papp-cart-item-del ' + (item.added >= item.stock ? 'text-dark' : 'text-success ')}
											onClick={() => moreItem(item)}
										>
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
												<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
												<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
											</svg>
										</button>
									</li>
								))}
						</ul>

						<hr className="hr mb-1" />
						<div className="papp-cart-total mb-1 d-flex">
							<div className="papp-cart-total-title me-auto ps-1">
								<b>Total</b>
							</div>
							<div className="papp-cart-total-value pe-1">
								<b>${cartTotal}</b>
							</div>
						</div>

						<button
							className="btn btn-success w-100"
							onClick={() => {
								setConfirmShow(!confirmShow);
								setCartShow(!cartShow);
							}}
						>
							Confirm
						</button>
					</div>
				)}
			</div>

			<div className={'papp-modal' + (confirmShow ? ' active' : '')}>
				<div className="papp-modal-overlay" onClick={() => setConfirmShow(!confirmShow)}></div>
				<div className="btn-close"></div>

				<div className="papp-modal-content">
					<h4 className="">Confirm</h4>
					<hr className="hr mb-2" />

					<h5>Add Tip</h5>
					<div className="form-item d-flex">
						<input
							onChange={(e) => setTip(Number(e.target.value))}
							value={parseFloat(tip).toLocaleString('en-US', { maximumFractionDigits: 2 })}
							min="0"
							placeholder="Tip in $"
							type="number"
							className="flex-1 form-control me-1"
						/>
						<button className="btn btn-danger" onClick={() => setTip(0)}>
							&times;
						</button>
					</div>
					<div className="btn-group w-100 mt-1" role="group">
						<button onClick={() => setTip(cartTotal * 0.1)} type="button" className="btn btn-outline-secondary">
							10%
						</button>
						<button onClick={() => setTip(cartTotal * 0.15)} type="button" className="btn btn-outline-secondary">
							15%
						</button>
						<button onClick={() => setTip(cartTotal * 0.18)} type="button" className="btn btn-outline-secondary">
							18%
						</button>
						<button onClick={() => setTip(cartTotal * 0.2)} type="button" className="btn btn-outline-secondary">
							20%
						</button>
					</div>
					<hr className="hr my-2" />

					<h5>Summary</h5>
					<div className="">
						<div className="d-flex justify-content-between">
							<span className="fw-400">Products</span>
							<span className="fw-400">${cartTotal.toFixed(2)}</span>
						</div>
						<div className="d-flex justify-content-between">
							<span className="fw-400">Tip</span>
							<span className="fw-400">${Number(tip).toFixed(2)}</span>
						</div>
					</div>

					<button
						type="button"
						className="btn btn-success w-100 mt-2"
						onClick={() => {
							setConfirmShow(false);
							setPayShow(true);
						}}
					>
						Pay ${(cartTotal + Number(tip)).toFixed(2)}
					</button>
				</div>
			</div>

			<div className={'papp-modal' + (payShow ? ' active' : '')}>
				<div className="papp-modal-overlay" onClick={() => setPayShow(!payShow)}></div>
				<div className="btn-close"></div>

				<div className="papp-modal-content">
					<h4 className="">Pay</h4>
					<hr className="hr mb-2" />

					<p>You can select which crypto you want to pay with and then we show a QR code with a wallet address that you can pay with.</p>
					<p>This is just part of the POS system demo, soon we will release it and you get to try it.</p>
				</div>
			</div>
		</section>
	);
};
export default POS;
