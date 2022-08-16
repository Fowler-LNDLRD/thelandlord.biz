const buyModal = ({ children }) => {
	return (
		<div className="modal fade" id="buyModal" tabIndex="-1" aria-labelledby="buyModalLabel" aria-hidden="true">
			<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content contract-modal">{children}</div>
			</div>
		</div>
	);
};
export default buyModal;
