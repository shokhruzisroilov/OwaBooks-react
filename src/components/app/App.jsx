import './App.scss';

import { Routes, Route } from 'react-router-dom';
import Layouts from '../layouts/Layouts';
import HomePage from '../pages/HomePage';
import Login from '../pages/auth/Login';
import Error404Page from '.././pages/error/Error404Page'


function App() {
  return (
		<>
			<Routes>
				<Route path='/home' element={<Layouts />}>
					<Route index element={<HomePage />} />
				</Route>
				<Route path='/' element={<Login />} />
				<Route path='*' element={<Error404Page/>} />
			</Routes>
		</>
	)
}

export default App;
