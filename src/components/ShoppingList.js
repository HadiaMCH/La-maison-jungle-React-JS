import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'

function ShoppingList() {
	const categories = plantList.reduce(
		(init, plant) =>
			init.includes(plant.category) ? init : init.concat(plant.category),
		[]
	)

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map((plant) => (
					<li className='lmj-plant-item' key={plant.id}>{plant.name} {plant.isBestSale && plant.category==='classique' && <span>'🔥'</span> } {plant.isSpecialOffer && <div className="lmj-sales" > Soldes </div>}</li>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList