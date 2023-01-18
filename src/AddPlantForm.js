import React, {useState} from "react"

function AddPlantForm ({onAddItem}){
const [name, setName]=useState("")
const [image, setImage]=useState("")
const [price, setPrice]=useState("")

 function handleAddPlant(e){
    e.preventDefault()
   const newPlant={name, image, price}
   onAddItem(newPlant)
 }

   return (
    <div className="AddItemForm">
        <h3>New Plant</h3>
        <form onSubmit={handleAddPlant}>
            <label>
            <input type="text" name="name" placeholder="Plant Name" value={name} onChange={(e)=>setName(e.target.value)} />
            </label>
            <label>
            <input type="url" name="url" placeholder="Image URL" value={image} onChange={(e)=>setImage(e.target.value)}/>
            </label>
            <label>
            <input type="number" name="price" placeholder="Price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
            </label>
            <button type="submit">Add Plant</button>
        </form>
    </div>
    )

}
export default AddPlantForm