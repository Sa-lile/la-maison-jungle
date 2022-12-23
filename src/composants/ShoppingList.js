import { plantList } from './datas/PantList';
import PlantItem from './PlantItem';
import '../styles/ShoppingList.css';


function ShoppingList() {
	/* reduce() est accumulateur et traite chaque valeur
	 * d'une liste (de la gauche vers la droite)
	 *  forEach() permet d'exéxuter une fonction donnée sur chaque élément du tableau
	 */

	const categories = ['classique', 'extérieur', 'plante grasse'];
	categories.forEach((category) => console.log(category), []);

	/**
	 *  map() est crée un nouveau tableau avec les résultats
	 *  de l'appel d'une fonction fournie
	 *  key() est revoie un nouvel objet Array Iterator qui contient
	 *  les clefs pour chaque indice du tableau
	 */

	
	return (
		<div>
			<ul>
				{categories.map((categories) => (
					<li key={categories}>{categories}</li>
				))}
			</ul>

			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light }) => (
					<PlantItem
						id={id}
						cover={cover}
						name={name}
						water={water}
						light={light}
					/>
				))}
			</ul>
	       
			

			{/* <ul>
				{plantList.map((plant, index) => (
					<li id={'name_' + index} key={'name_' + index}>
						<div>
							{plant.id}:{plant.name}
						</div>
					</li>
				))}
			</ul> */}

		{/* "props" ne functionne pas ....?? même j'ai changé PlanItems*/}
			{/* <ul className="lmj-plant-list">
				{plantList.map(({ props }) => (
					<PlantItem 
					id={props.id} 
					cover={props.cover} 
					name={props.name} 
					light={props.light} 
					water={props.water}
					 />
				))}
			</ul> */}
		</div>
	);
}

export default ShoppingList;
