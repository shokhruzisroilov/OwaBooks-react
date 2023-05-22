import "./HomePage.scss"
import { useEffect,useState } from "react"


import Navbar from "./components/navbar/Navbar"
import Search from "./components/search/Search"
import BooksItem from "./components/booksItem/BooksItem"

function HomePage() {
	let [bookData, setBookData] = useState(null)
	// useEffect(() => {
	// 	getData('https://owabooks.netlify.app/db.json')
	// 	.then((data) => {
	// 		setBookData(data)
	// 	})
	// 	.catch(() => {
	// 		console.log("eeeor")
	// 	})
	// }, [])
	console.log(bookData)
	return (
		<main>
			<div className='main__content'>
				<Navbar />
				<div className='main__home'>
					<Search />
					<div className='books__items'>
						<BooksItem />	
						<BooksItem />
						<BooksItem />
						<BooksItem />
						<BooksItem />
						<BooksItem />
						<BooksItem />
						<BooksItem />
						<BooksItem />
						<BooksItem />
					</div>
				</div>
			</div>
		</main>
	)
}

export default HomePage