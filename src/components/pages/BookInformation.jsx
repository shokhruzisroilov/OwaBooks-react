import "./BookInformation.scss"
import BookItemSmall from "./components/bookItemSmall/BookItemSmall"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import getData from "../../servises/BooksServises"


import backArror from "../../imges/back-arrow.png"
import books from "../../imges/books-img.png"
import icon1 from "../../imges/icon1.png"
import icon2 from "../../imges/icon2.png"
import icon3 from "../../imges/icon3.png"
import star from "../../imges/star.png"
import checkbox from "../../imges/checkbox.png"
import location from "../../imges/location.png"
import headPhones from "../../imges/headphones.png"
import person from "../../imges/person.png"

function BookInformation() {
	let [bookInfoData, setBookInfoData] = useState(null)
	useEffect(() => {
		getData('https://owabooks.vercel.app/db.json').then(data => {
			setBookInfoData(data)
		})
	}, [])
	
	console.log()	
	return (
		<div className='book__info'>	
			<Link to='/home' className='back__info'>
				<img src={backArror} alt='back-errow' />
				<p>Back to results</p>
			</Link>
			<section className='book__info__full'>
				<div className='books__img'>
					<img src={books} alt='books' />
					<div className='icon__img'>
						<span>
							<img src={icon1} alt='icon1' />
							<p>Review</p>
						</span>
						<span>
							<img src={icon2} alt='icon2' />
							<p>Notes</p>
						</span>
						<span>
							<img src={icon3} alt='icon3' />
							<p>Share</p>
						</span>
					</div>
				</div>
				<div className='books__text'>
					<h1>Don’t Make Me Think</h1>
					<h3>By Steve Krug, 2000</h3>
					<h4>Second Edition</h4>
					<div className='price'>
						<div className='price__star'>
							<img src={star} alt='star' />
							<img src={star} alt='star' />
							<img src={star} alt='star' />
							<img src={star} alt='star' />
							<img src={star} alt='star' />
						</div>
						<p>4.0 Ratings</p>
						<p>25 Currently reading</p>
					</div>
					<div className='status__section'>
						<div className='availability'>
							<h2>Availability</h2>
							<span>
								<img src={checkbox} alt='checkbox' />
								<p>Hard Copy</p>
							</span>
							<span>
								<img src={checkbox} alt='checkbox' />
								<p>E - Book</p>
							</span>
							<span>
								<img src={checkbox} alt='checkbox' />
								<p>Audio book</p>
							</span>
						</div>
						<div className='status'>
							<h2>Status</h2>
							<button>In-Shelf</button>
							<span>
								<img src={location} alt='location icon' />
								<p> CS A-15</p>
							</span>
						</div>
					</div>
					<div className='read__button'>
						<button className='btn-borrow'>BORROW</button>
						<div className='btn-read'>
							<button>Read Now</button>
							<div className='read-now'>
								<img src={headPhones} alt='headphones img' />
							</div>
						</div>
					</div>
				</div>
				<div className='about__author'>
					<div className='title'>
						<span>
							<h3>
								About <span>Author</span>
							</h3>
							<h4>Steve Krug</h4>
						</span>
						<img src={person} alt='person' />
					</div>
					<p>
						Steve Krug is a usability consultant who has more than 30 years of
						experience as a user advocate for companies like Apple, Netscape,
						AOL, Lexus, and others. Based in part on the success of his first
						book, Don't Make Me Think, he has become a highly sought-after
						speaker on usability design.
					</p>
				</div>
			</section>
			<section className='description'>
				<h3>Description</h3>
				<p>
					Steve Krug is a usability consultant who has more than 30 years of
					experience as a user advocate for companies like Apple, Netscape, AOL,
					Lexus, and others. Based in part on the success of his first book,
					Don't Make Me Think, he has become a highly sought-after speaker on
					usability design. Steve Krug is a usability consultant who has more
					than 30 years of experience as a user advocate for companies like
					Apple, Netscape, AOL, Lexus, and others. Based in part on the success
					of his first book, Don't Make Me Think, he has become a highly
					sought-after speaker on usability design. Steve Krug is a usability
					consultant who has more than 30 years of experience as a user advocate
					for companies like Apple, Netscape, AOL, Lexus, and others. Based in
					part on the success of his first book, Don't Make Me Think, he has
					become a highly sought-after speaker on usability design. Steve Krug
					is a usability consultant who has more than 30 years of experience as
					a user advocate for companies like Apple, Netscape, AOL, Lexus, and
					others. Based in part on the success of his first book, Don't Make Me
					Think, he has become a highly sought-after speaker on usability
					design.
				</p>
			</section>
			<section className='other__books'>
				<h2>
					Other <span>Books</span>
				</h2>
				<div className='o__books'>
				{	
					bookInfoData?.map((item) => {
						return (
							<BookItemSmall
								key={item.id}
								img={item.img}
								title={item.title}
								author={item.author}
								rate={item.rate}
							/>
						)
					})
				}
				</div>
			</section>
		</div>
	)
}

export default BookInformation