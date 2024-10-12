import { plantList } from '../datas/plantList';
import PlantItem from './PlantItem';
import "../styles/ShoppingList.css";

function ShoppingList() {
    const categories = []

    plantList.forEach((plant) => {
        if (!categories.includes(plant.category)){
            categories.push(plant.category)
        }
    })
    return (
        <div>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>            
                ))}
            </ul>
            <ul className='lmj-plant-list'>
                {plantList.map((plant) => (
                        <PlantItem name = {plant.name} id = {plant.id} light = {plant.light} water = {plant.water} cover={plant.cover}/>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList