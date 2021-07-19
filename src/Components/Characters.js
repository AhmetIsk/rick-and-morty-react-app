import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from "../FetchData";
import Avatar from './Avatar';
import "../styles/Character.css";

function Characters(props) {
    const { character } = props;
    const fetchData = useContext(DataContext);  
    const handleClick = () => {
        fetchData.setData(character);
    }
    return (
        <div className="characterBox">
        <Avatar image={character.image}/>
        <div className="characterInfo">
        <ul>
            <li>Name : {character.name}</li>
            <li>Gender : {character.gender}</li>
            <li>Species : {character.species}</li>
            <li>Status : {character.status}</li>
            <Link to='/details'>
                <button className="seeDetails" onClick={handleClick}>See Character Details</button>
            </Link>
        </ul>
        
        </div>
        </div>
    );
}
      
export default Characters
