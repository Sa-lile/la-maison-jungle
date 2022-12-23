import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import Footer from './Footer';
// import Recommendation from './Recommendation'

function App() {
	return (
		<div>
			<Banner />

			<Cart />
			<ShoppingList />
			{/* TEST */}
			{/* <PlantItem id = '1' name = 'Monstra'  />     */}
			<Footer />

			{/* <Recommendation /> */}
		</div>
	);
}

export default App;
