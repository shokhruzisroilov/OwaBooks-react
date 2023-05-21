import "./BooksItem.scss"
import booksImg from "../../../imges/books-img.png"
import stroke from "../../../imges/Stroke.png"


function booksItem() {
	return (
		<div className='books'>
			<img src={booksImg} alt='books' />
			<h2>Don’t Make Me think</h2>
			<p>Steve Krug, 2000</p>
			<div className="like">
				<h4>4.5/5</h4>
				<img src={stroke} alt='stroke' />
			</div>
			<span>
				<button className='btn-info'>Info</button>
				<button className='btn-read'>Read</button>
			</span>
		</div>
	)
}

export default booksItem