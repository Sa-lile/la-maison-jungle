
import { useState } from 'react';
// import Cart from '../composants/Cart'


export const Payer = () => {
    
    const [Payer, updatePayer] = useState()
    const total = Payer.reduce(
        (accumulator, plantType) => accumulator + plantType.amount * plantType.price, 0
    )
	return (
		<div>
			Payer
			<h3>Total : {total}€</h3>
			<button onClick={() => updatePayer({total})}>Total price est {total} € </button>
		</div>
	);
};
