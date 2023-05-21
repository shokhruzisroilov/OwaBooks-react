import "./HomePage.scss"

import Navbar from "./navbar/Navbar"
import Search from "./search/Search"
import BooksItem from "./booksItem/BooksItem"

function HomePage() {
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