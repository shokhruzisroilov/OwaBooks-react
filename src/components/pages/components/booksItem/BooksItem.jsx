import "./BooksItem.scss"
import { Link } from "react-router-dom"

import booksImg from "../../../../imges/books-img.png"
import stroke from '../../../../imges/Stroke.png'



function booksItem({ img, title, author, createdAt, rate }) {

	const titleStr = () => {
		let item = {title}.title
		if(item.length >= 27){
			return item.slice(0, 27) + '...'
		}else{
			return item
		}
	}
	return (
		<div className='books'>
			<img className='books-img' src={img} alt='books' />
			<h2>{titleStr()}</h2>
			<p>
				{author}, {createdAt}
			</p>
			<div className='like'>
				<h4>{rate}/5</h4>
				<img src={stroke} alt='stroke' />
			</div>
			<span>
				<Link  to='/home/books' className='btn-info'>
					Info
				</Link>
				<button className='btn-read'>Read</button>
			</span>
		</div>
	)
}

export default booksItem