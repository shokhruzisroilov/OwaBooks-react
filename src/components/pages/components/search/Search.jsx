import "./Search.scss"
import searchIcon from '../../../../imges/search-icon.png'
import { useState } from "react"

function Search({searchTitle}) {
	let [search, setSearch] = useState(null)
	const onSearch = (e) => {
		setSearch(() => {
			return e.target.value
		})	
		searchTitle(search)
	}
	return (
		<div className='search'>
			<input type='text' placeholder='Search'  onChange={onSearch}/>
			<div className='search-icon'>
				<img src={searchIcon} alt='searchIcon' />
			</div>
		</div>
	)
}

export default Search