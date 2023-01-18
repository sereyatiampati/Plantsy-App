//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./Header"
import AddPlantForm from './AddPlantForm';
import Search from './Search';
import ListPlantItems from './ListPlantItems';
import React, {useState, useEffect} from "react"


function App() {
  const [list, setList]=useState([])
  const url="http://localhost:3001/plants"
    useEffect(()=> {
        fetch(url)
        .then(res=>res.json())
        .then((data)=>setList(data))
    }, [])
function handleAddNewPlant(newItem){
  fetch(url, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newItem)
  })
  .then(res => res.json())
  .then(data => setList([...list, data]))
  // const updatedItem=[...list, newItem]
  // setList(updatedItem)
}

  return (
    <div className="App">
      <Header />
      <AddPlantForm onAddItem={handleAddNewPlant}/>
      <Search />
      <ListPlantItems list={list} />
    </div>
  );
}

export default App;
