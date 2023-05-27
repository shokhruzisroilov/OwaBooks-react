import "./Navbar.scss"
import books from '../../../../imges/books.png'
import stroke from '../../../../imges/Stroke.png'

function Navbar() {
	return (
		<div className='navbar'>
			<h3>Bookmarks</h3>
			<article>
				<img src={books} alt='books' />
				<div className='text'>
					<h3>Don’t Make Me... </h3>
					<p>Steve Krug</p>
					<img src={stroke} alt='stroke' />
				</div>
			</article>
		</div>
	)
}

export default Navbar