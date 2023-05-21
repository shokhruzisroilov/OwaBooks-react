import "./Search.scss"
import searchIcon from "../../../imges/search-icon.png"

function Search() {
	return (
		<div className='search'>
			<input type='text' placeholder="Search"/>
			<div className='search-icon'>
				<img src={searchIcon} alt='searchIcon' />
			</div>
		</div>
	)
}

export default Search