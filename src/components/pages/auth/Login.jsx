import './Login.scss'
import { useState} from 'react'
import { useNavigate } from 'react-router-dom'



function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const navigate = useNavigate()

	const onSubmit = e => {
		e.preventDefault()

		if (email === 'ali@owa.uz' && password === 'pass12345') {
			navigate('/home')
			localStorage.setItem(
				'accessToken',
				'7eadfjahehcfq7jkdafkcvzxvbajhznxbvcayu032432r**-/234/v*cv'
			)
			setError('')
		} else {
			setError('Xatolik yuz berdi')
		}
	}
	return (
		<div className='login__form'>
			<div className='form__container'>
				<form onSubmit={onSubmit} className='sign-in'>
					<h2>Sign In</h2>
					<label>Email Address</label>
					<input
						type='text'
						onChange={({ target }) => setEmail(target.value)}
					/>
					<label>Password</label>
					<input
						type='password'
						onChange={({ target }) => setPassword(target.value)}
					/>
					<p className='error'>{error}</p>
					<button type='submit'>Sign In</button>
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