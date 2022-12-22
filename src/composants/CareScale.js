import Sun from '../assets/sun.svg';
import Water from '../assets/water.svg';

function CareScale(props) {
	// const scaleValue = props.scaleValue

	const range = [1, 2, 3];

	const display_icon = () => {
		if (props.careType === 'light') {
			return <img src={Sun} alt="sun-icon" />
		} else {
			return <img src={Water} alt="water-icon" />
		}
	};

	return (
        <div>
            {range.map((rangeElem) => (props >= rangeElem ? <span key={rangeElem.toString()}>{display_icon()}</span> : null))}
        </div>
    )
}

export default CareScale;
