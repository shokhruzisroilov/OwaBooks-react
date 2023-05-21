import "./Error404Page.scss"

function Error404Page() {
	return (
		<div className='error__page'>
			<div className='container'>
				<h1>404</h1>
				<h2>Oops! That page can’t be found</h2>
				<p>The page you are looking for it maybe deleted</p>
				<button>Go To Home</button>
			</div>
		</div>
	)
}

export default Error404Page