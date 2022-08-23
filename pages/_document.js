import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
					<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet" />

					<link rel="icon" href="/img/meta/logo.svg" type="image/svg+xml" />
					<link rel="apple-touch-icon" sizes="180x180" href="/img/meta/apple-touch-icon.png" />
					<link rel="manifest" href="/img/meta/site.webmanifest" />
					<link rel="mask-icon" href="/img/meta/safari-pinned-tab.svg" color="#0b0b0c" />
					<meta name="apple-mobile-web-app-title" content="The Landlord" />
					<meta name="application-name" content="The Landlord" />
					<meta name="theme-color" content="#0b0b0c" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
