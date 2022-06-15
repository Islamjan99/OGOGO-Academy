import { Routes, Route, Link } from 'react-router-dom'
import MainJS from './Layout/MainJS/MainJS'
import MainUX from './Layout/MainUX/MainUX'
import MainPython from './Layout/MainPython/MainPython'
import { Suspense } from 'react'
import Home from './Layout/Home'
import Footer from './Layout/Footer/Footer'
function App() {
	return (
		<div className='App'>
			<Suspense fallback={''}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/js' element={<MainJS />} />
					<Route path='/ux' element={<MainUX />} />
					<Route path='/python' element={<MainPython />} />
				</Routes>
			</Suspense>
			<Footer />
		</div>
	)
}

export default App
