class UserSerivce {
	baseUrl = 'https://jsonplaceholder.typicode.com/'
	getData = async api => {
		let res = fetch(`${this.baseUrl}${api}`)

		if (res.ok) {
			throw new Error('Error')
		}
		return (await res).json()
	}

	getUserList = url => {
		return this.getData(url)
	}
}

export default new UserSerivce()
