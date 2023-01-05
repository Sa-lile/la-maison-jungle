import '../styles/PlantItem.css';
import CareScale from './CareScale';
import '../composants/datas/PlantList';



// function handleClick(e) {
//     console.log('✨ Ceci est mon event :', e)
// }
function handleClick(plantName) {
    alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
}


function PlantItem({cover, name, water, light, price }) {
	
	return (
		<li className="lmj-plant-item" onClick={() => handleClick}>
			<span className='lmj-plant-item-price'>{price}€</span>
			<img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType="water" scaleValue={water} />
				<CareScale careType="light" scaleValue={light} />
			</div>
		</li>
	);
}

export default PlantItem;
