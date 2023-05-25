import "./Header.scss"
import { Link } from "react-router-dom"

import owaLogo from "../../imges/owa-logo.png"
import moon from "../../imges/moon.png"

function Header() {
	return (
		<header>
			<div className='header__content'>
				<Link to='/home' className='header__logo'>
					<img src={owaLogo} alt='owa logo' />
				</Link>
				<nav>
					<div className='dark-lite'>
						<img src={moon} alt='moon img' />
					</div>
					<Link
						to='/sign-in'
						className='button'
						onClick={() => {
							localStorage.removeItem('accessToken')
						}}
					>
						Log out
					</Link>
				</nav>
			</div>
		</header>
	)
}

export default Header