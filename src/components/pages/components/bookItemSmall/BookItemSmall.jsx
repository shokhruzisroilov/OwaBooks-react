import "./BookItemSmall.scss"
import bookSmall from "../../../../imges/book-small.png"
import bookSmall2 from "../../../../imges/bookSmall2.png"
import bookSmall3 from "../../../../imges/bookSmall3.png"
import bookSmall4 from "../../../../imges/bookSmall4.png"
import bookSmall5 from '../../../../imges/bookSmall5.png'
import bookSmall6 from '../../../../imges/bookSmall6.png'
import bookSmall7 from '../../../../imges/bookSmall7.png'

function BookItemSmall({ title, author, createdAt, rate, img }) {
	const titleStr = () => {
		let item = { title }.title
		if (item.length >= 20) {
			return item.slice(0, 20) + '..'
		} else {
			return item
		}
	}
	return (
		<>
			<div className='books__small'>
				<img src={bookSmall} alt='book small' />
				<h3>Don’t Make Me think</h3>
				<h4>Steve Krug, 2000</h4>
				<p>4.5/5</p>
			</div>
		</>
	)
}

export default BookItemSmall