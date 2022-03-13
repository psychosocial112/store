import { store } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductDetail from "./pages/ProductDetails";
import Search from "./pages/Search";
import Cart from "./pages/Cart"

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<div>
					<Header />
					<div>
						<Routes>
							<Route path="/login" element={<Login />}></Route>
							<Route path="/register" element={<Register />}></Route>
							<Route path="/" element={<Home />}></Route>
							<Route path="/products/:slug" element={<ProductDetail/>} ></Route>
							<Route path="/search" element={<Search/>}></Route>
							<Route path="/cart" element={<Cart/>}></Route>
						</Routes>
					</div>
					<Footer/>
				</div>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
