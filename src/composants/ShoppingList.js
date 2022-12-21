import { plantList } from './datas/PantList';

function ShoppingList() {
    //  const category = plantList.array.forEach(element => (
    //     console.log (element,[]);


	return (
		<div>
			<ul>
				{plantList.map((plant, index) => (
					<li id={'name_' + index} key={'name_' + index}>
						<div>{plant.name}</div>
						{/* <div>{plant.category}</div> */}
					</li>
				))}
			</ul>
		</div>
	);
}

export default ShoppingList;
