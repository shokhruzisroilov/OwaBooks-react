import "./Header.scss"

import owaLogo from "../../imges/owa-logo.png"
import moon from "../../imges/moon.png"

function Header() {
	return (
		<header>
			<div className="header__content">
					<div className="header__logo">
						<img src={owaLogo} alt="owa logo" />
					</div>
					<nav>
						<div className="dark-lite">
							<img src={moon} alt="moon img" />
						</div>
						<button>
							Log out
						</button>
					</nav>
			</div>
		</header>
	)
}

export default Header