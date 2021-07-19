import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from "../FetchData";
import Avatar from './Avatar';
import { lastFiveEpisodes } from './HelperFunctions';

function CharacterDetails() {
    const fetchData = useContext(DataContext); 
    const [episodes, setEpisodes] = useState([]); 
    const handleClick = () => {
        fetchData.setData("");
    }
    const character = fetchData.data;
    useEffect(()=> {
        const fetchCharacters = async (baseURL) => {
            try {
              await fetch(baseURL).then(data => data.json()).then(data => setEpisodes(episodes => [...episodes, {name: data.name, episode: data.episode}]));
            } catch (error) {
              console.log("Error during fetching the data");
            }
        };  
        const fiveEpisodes = lastFiveEpisodes(character);
        for (let i in fiveEpisodes) {
            fetchCharacters(fiveEpisodes[i]);
        }
    }, [])
    console.log("here is episodes", episodes);
    return (
      <div className="characterBox">
        <Avatar image={character.image}/>
        <div className="characterInfo">
        <ul>
            <li><strong>Name : </strong>{character.name}</li>
            <li><strong>Gender : </strong>{character.gender}</li>
            <li><strong>Species : </strong>{character.species}</li>
            <li><strong>Status : </strong>{character.status}</li>
        </ul>
        <h3>Last Five Episodes</h3>
        {episodes.map(episode => {
            return <li key={episode.name}> <strong>{episode.name}</strong>  ({episode.episode})</li>
        })}
        </div>
        <Link to='/'>
                <button className="seeDetails" onClick={handleClick}>Go Back</button>
        </Link>
      </div>
    );
}

export default CharacterDetails
