import './App.css';
import { useState,useEffect} from "react";
import {CardList} from './components/card-list/card-list.component';
import {SearchBar} from './components/searchbar/searchbar.component';
function App() {

  const [monsters,setMonsters] = useState(
    []
  );

  const [searchquery,setSearchQuery]=useState(" ");

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then((users) => {
          setMonsters(users);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange= (e)=>{ setSearchQuery(e.target.value) };

  const filteredMonsters=monsters.filter((monsterrecord)=> monsterrecord.name.toLowerCase().includes(searchquery.toLowerCase()));
  return (
    <div className="App">
      <h1 className="AppName" >Monsters Rolodex</h1>
      <SearchBar placeholder="Search For Monsters" handleChange={handleChange} >
      </SearchBar>
      <CardList monsters={filteredMonsters} > 
      </CardList>
    </div>
  );
}

export default App;
