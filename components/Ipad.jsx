const iPad = ({ children }) => {
	return (
		<div className="ipad">
			<div className="ipad-controls">
				<span className="ipad-volume"></span>
				<span className="ipad-lock"></span>
				<span className="ipad-camera"></span>
			</div>
			<div className="ipad-content">{children}</div>
		</div>
	);
};
export default iPad;
