import "./BookItemSmall.scss"
import bookSmall from "../../../../imges/book-small.png"

function BookItemSmall() {
	return (
		<div className='books__small'>
			<img src={bookSmall} alt='book small' />
			<h3>Don’t Make Me think</h3>
			<h4>Steve Krug, 2000</h4>
			<p>4.5/5</p>
		</div>
	)
}

export default BookItemSmall