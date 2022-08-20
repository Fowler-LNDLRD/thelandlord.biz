const Book = ({ className, children }) => {
	return (
		<div className={'book ' + className}>
			<div className="book-front">
				<div className="book-cover">{children}</div>
			</div>
			<div className="book-pages">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div className="book-back"></div>
		</div>
	);
};
export default Book;
