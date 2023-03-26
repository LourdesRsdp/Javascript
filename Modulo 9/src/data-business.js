const URL = "https://rickandmortyapi.com";

const getCharacters = async () => {
  const endpoint = URL + "/api/character";
  
  const response = await fetch(endpoint);
  const characters = response.json();
  return characters;
};

const getCharacter = async (id) => {
    const endpoint = URL + "/api/character/" + id;
    
    const response = await fetch(endpoint);
    const character = response.json();
    return character;
};

export { getCharacters , getCharacter};