export const lastFiveEpisodes = (character) => {
    const lastFive = character.episode.length > 5 ? (character.episode).slice(Math.max((character.episode).length - 5)) : character.episode;
    console.log(lastFive);
    return lastFive;
};

export const FormObjectToBody = (filterByGender, filterByStatus, filterBySpecies) => {
    let baseURL = "https://rickandmortyapi.com/api/character/?";
    if (filterByGender) {
      baseURL.includes("=") ? baseURL += `&gender=${filterByGender}` : baseURL += `gender=${filterByGender}`;
      console.log("this is the baseURL", baseURL);
    }
    if (filterBySpecies) {  
      baseURL.includes("=") ? baseURL += `&species=${filterBySpecies}` : baseURL += `species=${filterBySpecies}`;
      console.log("this is the baseURL", baseURL);
    }
    if (filterByStatus) {
      baseURL.includes("=") ? baseURL += `&status=${filterByStatus}` : baseURL += `status=${filterByStatus}`;
      console.log("this is the baseURL", baseURL);
    }
    return baseURL;
  };
  

