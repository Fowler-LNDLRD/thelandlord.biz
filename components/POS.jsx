import { useState, useEffect } from 'react';
import posProducts from '../data/posProducts.json';

const POS = () => {
	const [products, setProducts] = useState(posProducts);
	const [cart, setCart] = useState([]);
	const [cartShow, setCartShow] = useState(false);
	const [cartTotal, setCartTotal] = useState(0);
	const [search, setSearch] = useState('');
	const [flash, setFlash] = useState(false);

	const addProduct = (item) => {
		let nowCart = [...cart];
		const found = nowCart.find((c) => c.id === item.id);
		if (found) {
			nowCart = nowCart.map((c) => (c.id === item.id ? { ...c, added: c.added + 1 } : c));
		} else {
			nowCart.push({
				id: item.id,
				title: item.title,
				price: item.price,
				added: 1,
			});
		}
		setCartTotal(cartTotal + item.price);
		setCart(nowCart);

		setFlash(true);

		setTimeout(() => setFlash(false), 300);
	};

	const removeItem = (item) => {
		let nowCart = [...cart];
		nowCart = nowCart.filter((c) => c.id !== item.id);
		if (nowCart.length === 0) {
			setCartShow(false);
			setCartTotal(0);
		} else {
			setCartTotal(cartTotal - item.price * item.added);
		}
		setCart(nowCart);
	};

	const lessItem = (item) => {
		let nowCart = [...cart];
		if (item.added > 1) {
			nowCart = nowCart.map((c) => (c.id === item.id ? { ...c, added: c.added - 1 } : c));
			setCart(nowCart);
		} else {
			removeItem(item);
		}
		if (nowCart.length === 0) {
			setCartShow(false);
			setCartTotal(0);
		} else {
			setCartTotal(cartTotal - item.price);
		}
	};

	const moreItem = (item) => {
		let nowCart = [...cart];
		nowCart = nowCart.map((c) => (c.id === item.id ? { ...c, added: c.added + 1 } : c));
		setCartTotal(cartTotal + item.price);
		setCart(nowCart);
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
						{cart.length !== 0 && <span className="papp-cart-badge">{cart.length}</span>}
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
					.map((item) => (
						<div className="col-3" key={item.id} onClick={() => addProduct(item)}>
							<div className="papp-product">
								<img className="papp-product-img" src={`/img/papp/${item.img}`} alt={item.title} />
								<div className="papp-product-title">{item.title}</div>
								<div className="papp-product-price">${item.price}</div>
							</div>
						</div>
					))}
			</div>

			<div className={'papp-modal' + (cartShow ? ' active' : '')}>
				<div className="papp-modal-overlay" onClick={() => setCartShow(!cartShow)}></div>
				<div className="btn-close"></div>

				{cart.length === 0 && <div className="papp-modal-content text-center small">Empty cart, add something!</div>}

				{cart.length !== 0 && (
					<div className="papp-modal-content">
						<h4>Cart</h4>

						<ul className="papp-cart-list my-2">
							{cart.map((item, index) => (
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
									<button type="button" className="text-success papp-cart-item-btn papp-cart-item-del" onClick={() => moreItem(item)}>
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
											<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
											<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
										</svg>
									</button>
								</li>
							))}
						</ul>

						<div className="papp-cart-total mb-2 d-flex">
							<div className="papp-cart-total-title me-auto ps-1">
								<b>Total</b>
							</div>
							<div className="papp-cart-total-value pe-1">
								<b>${cartTotal}</b>
							</div>
						</div>

						<button className="btn btn-success w-100">Confirm</button>
					</div>
				)}
			</div>
		</section>
	);
};
export default POS;
