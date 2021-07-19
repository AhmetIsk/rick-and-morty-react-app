import { useEffect, useState } from 'react';
import Characters from './Characters';
import { FormObjectToBody } from './HelperFunctions';

const MainPage = () => {
  const [characters, setCharacters] = useState(null);
  const [filterByGender, setFilterByGender] = useState(null);
  const [filterByStatus, setFilterByStatus] = useState(null);
  const [filterBySpecies, setFilterBySpecies] = useState(null);

  const handleGenderChange = (e) => {
    e.preventDefault();
    setFilterByGender(e.currentTarget.value);
  }

  const handleSpeciesChange = (e) => {
    e.preventDefault();
    setFilterBySpecies(e.currentTarget.value);
  }
 
  const handleStatusChange = (e) => {
    e.preventDefault();
    setFilterByStatus(e.currentTarget.value);
  }
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        let baseURL = FormObjectToBody(filterByGender, filterByStatus, filterBySpecies);
        const response = await fetch(baseURL);
        if (response.ok) {
          const data = await response.json();
          setCharacters({info: data.info, results: data.results});  
        }
        else {
          console.log("Error. Data is not found");
          setCharacters(null);  
          throw response;
        }
      } catch (error) {
        console.log("Error during fetching the data");
        setCharacters(null);
      }
    };  
    fetchCharacters();
  }, [filterByGender, filterByStatus, filterBySpecies])

    return (
        <div className="MainPage">
          <div className="filters">
            <div>
              <select className="filter" onChange={handleGenderChange} name="gender" id="gender-select">
                <option value="">--Please choose a gender--</option>
                <option value="male" >Male</option>
                <option value="female" >Female</option>
                <option value="genderless" >Genderless</option>
                <option value="unknown" >Unknown</option>
              </select>
            </div>
            <div>
              <select className="filter" onChange={handleStatusChange} name="status" id="status-select">
                <option value="">--Please choose a status--</option>
                <option value="alive" >Alive</option>
                <option value="dead" >Dead</option>
                <option value="unknown" >Unknown</option>
              </select>
            </div>
            <div>
              <select className="filter" onChange={handleSpeciesChange} name="species" id="species-select">
                <option value="">--Please choose a species--</option>
                <option value="human" >Human</option>
                <option value="alien" >Alien</option>
              </select>
            </div>
          </div>
          <ul>
            {characters !== null ? characters.results.map(character => (
                <Characters key={character.id} character={character} />
            )) : <div className="noResults"><h3>No results found for specified filters. Please try another filter. </h3></div>}
          </ul>
        </div>
    );
  
}
export default MainPage;
