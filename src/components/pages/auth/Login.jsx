import './Login.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const navigate = useNavigate()

	const onSubmit = async e => {		
		e.preventDefault()
		let req = await fetch('https://reqres.in/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},

			body: JSON.stringify({
				email: 'eve.holt@reqres.in',
				password: 'cityslicka',
			}),
		})
			req = await req.json()
		
		if (req.token) {
			navigate('/home')
			localStorage.setItem('accessToken', req.token)
			setError('')
		} else {
			setError('Invaid input! Chek your email or password and try again')
		}
	}
	return (
		<div className='login__form'>
			<div className='form__container'>
				<form className='sign-in' onSubmit={onSubmit}>
					<h2>Sign In</h2>
					<label>Email Address</label>
					<input
						type='text'
						placeholder='eve.holt@reqres.in'
						onChange={({ target }) => setEmail(target.value)}
					/>
					<label>Password</label>
					<input
						type='password'
						placeholder='cityslicka'
						onChange={({ target }) => setPassword(target.value)}
					/>
					<p className='error'>{error}</p>
					<button type='submit'>Sign In</button>
					<span>
						<h3>Forget Password?</h3>
						<h3>
							Don't have an account?
							<p>Sign Up</p>
						</h3>
					</span>
				</form>
				<div className='imges'></div>
			</div>
		</div>
	)
}

export default Login
