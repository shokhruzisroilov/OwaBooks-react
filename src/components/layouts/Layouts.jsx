import { Outlet } from "react-router-dom"
import Header from "../header/Header"


function Layouts() {
	return (
		<>
		<Header />
		<Outlet />
		</>
	)
}

export default Layouts