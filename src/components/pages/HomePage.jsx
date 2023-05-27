import './HomePage.scss'
import { useState, useEffect, useContext } from 'react'
import getData from '../../servises/BooksServises'

import Navbar from './components/navbar/Navbar'
import Search from './components/search/Search'
import BooksItem from './components/booksItem/BooksItem'

function HomePage({value}) {
	let [bookData, setBookData] = useState([])
	let [input, setInput] = useState('')
	useEffect(() => {
		getData('https://owabooks.vercel.app/db.json')
		.then(data => {
			setBookData(
				data?.filter(value => {
					return value.title.toLowerCase().includes(input.toLowerCase())
				})	
			)
		})
	}, [bookData])

	const searchTitle = title => {
		return setInput(title)
	}
	

	return (
		<main>
			<div className='main__content'>
				<Navbar />
				<div className='main__home'>
					<Search searchTitle={searchTitle}/>
					<div className='books__items'>
						{bookData?.map(item => {
							return (	
								<BooksItem
									key={item.id}
									id={item.id}	
									img={item.img}
									title={item.title}
									author={item.author}
									createdAt={item.createdAt}
									rate={item.rate}
								/>
							)
						})}
					</div>
				</div>
			</div>
		</main>
	)
}

export default HomePage
