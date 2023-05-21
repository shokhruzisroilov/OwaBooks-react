import './Login.scss'

function Login() {
	return (
		<div className='login__form'>
			<div className='form__container'>
				<form className='sign-in'>
					<h2>Sign In</h2>
					<label>Email Address</label>
					<input type='text' />
					<label>Email Address</label>
					<input type='text' />
					<button>Sign In</button>
					<span>
						<h3>Forget Password?</h3>
						<h3>
							Don't have an account?
							<h4>Sign Up</h4>
						</h3>
					</span>
				</form>
				<div className='imges'></div>
			</div>
		</div>
	)
}

export default Login