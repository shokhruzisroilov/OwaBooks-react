import './App.scss';

import { Routes, Route, Navigate } from 'react-router-dom';
import Layouts from '../layouts/Layouts';
import HomePage from '../pages/HomePage';
import Login from '../pages/auth/Login';
import Error404Page from '.././pages/error/Error404Page'
import BookInformation from '../pages/BookInformation';


function App() {
  return (
		<>
			<Routes>
				<Route path='/' element={<Navigate to={'/sign-in'} />} />
				<Route path='/home' element={<Layouts />}>
					<Route index element={<HomePage />} />
					<Route path='/home/books' element={<BookInformation />} />
				</Route>
				<Route path='/sign-in' element={<Login />} />
				<Route path='*' element={<Error404Page />} />
			</Routes>
		</>
	)
}

export default App;
