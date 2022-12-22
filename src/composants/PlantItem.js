import '../styles/PlantItem.css';


const PlantItem = (props) => {
	console.log(props);

	return (
		<div>
			{props.id}
			{props.cover}
			{props.name}
			{props.light}
			{props.water}
		</div>
	);
};
export default PlantItem;
