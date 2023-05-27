import "./Search.scss"
import { useState} from "react"

function Search({searchTitle, mode}) {
	let [search, setSearch] = useState('')

	const onSearch = (e) => {
		setSearch(() => {
			return e.target.value
		})	
		searchTitle(search)
	}


	return (
		<div className='search'>
			<input type='text' placeholder='Search' onChange={onSearch} />
			<div className='search-icon'>
				<svg
					width='17'
					height='17'
					viewBox='0 0 17 17'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M2.01999 11.5C3.17393 12.6556 4.71063 13.3493 6.34057 13.4505C7.97051 13.5516 9.58119 13.0532 10.8692 12.0492L15.3008 16.4809C15.458 16.6327 15.6685 16.7167 15.887 16.7148C16.1055 16.7129 16.3145 16.6252 16.469 16.4707C16.6235 16.3162 16.7112 16.1072 16.7131 15.8887C16.7149 15.6702 16.631 15.4597 16.4792 15.3025L12.0475 10.8709C13.0961 9.52516 13.5918 7.83015 13.4336 6.1315C13.2755 4.43285 12.4753 2.85852 11.1962 1.72958C9.91719 0.600637 8.25568 0.0021199 6.55054 0.0560913C4.8454 0.110063 3.22506 0.812457 2.01999 2.02003C1.39732 2.64238 0.903372 3.38132 0.566369 4.19462C0.229365 5.00793 0.0559082 5.87966 0.0559082 6.76003C0.0559082 7.64039 0.229365 8.51213 0.566369 9.32543C0.903372 10.1387 1.39732 10.8777 2.01999 11.5ZM3.19832 3.20003C4.02213 2.37623 5.10609 1.86356 6.26551 1.74936C7.42493 1.63515 8.58808 1.92648 9.55679 2.57371C10.5255 3.22094 11.2398 4.18402 11.5781 5.29887C11.9163 6.41372 11.8576 7.61136 11.4118 8.68774C10.966 9.76412 10.1608 10.6526 9.13343 11.2019C8.10601 11.7512 6.91993 11.9273 5.77726 11.7001C4.63458 11.473 3.60602 10.8566 2.86682 9.95614C2.12761 9.05566 1.7235 7.92672 1.72332 6.76169C1.72103 6.09967 1.85024 5.44379 2.10344 4.83209C2.35665 4.2204 2.7288 3.66508 3.19832 3.19836V3.20003Z'
						fill='#F27851'
					/>
				</svg>
			</div>
		</div>
	)
}

export default Search