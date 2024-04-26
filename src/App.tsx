import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './index.css';
import {Provider} from "react-redux";
import store from './store/index.ts';

import { HomePage } from "./HomePage.tsx";

import SearchPage from "./pages/SearchPage.tsx";
import MainDetailsPage from "./pages/MainDetailsPage.tsx";
import ServiceDetails from "./main-details/components/ServiceDetails.tsx";



function App() {

	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/search" element={<SearchPage />} />

					<Route path="/main-details" element={<MainDetailsPage />} />
					<Route path="/main-details/:id" element={<ServiceDetails />} ></Route>
				</Routes>
			</BrowserRouter>

		</Provider>
	)
}

export default App
