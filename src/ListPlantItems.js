//import React, {useState, useEffect} from "react"
import PlantItem from "./PlantItem"

function ListPlantItems({list}){
    const plants = list.map((plant) =>{
        return (
        <PlantItem key={plant.id} plant={plant} />
        )
})
    return (
        <div style={{display: "flex"}} className='items'>
        {plants}
        </div>
    )
}
 export default ListPlantItems;