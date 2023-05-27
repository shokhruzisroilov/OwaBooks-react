import { Outlet } from "react-router-dom"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../header/Header"


function Layouts({theme}) {
	const navigate = useNavigate()
	useEffect(() => {
		if (!localStorage.getItem('accessToken')) {
			navigate('/sign-in')
		}
	})
	return (
		<>
		<Header theme={theme}/>
		<Outlet />
		</>
	)
}

export default Layouts