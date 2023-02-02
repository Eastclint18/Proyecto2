const getCharacters = async () => {
    try {
      const response = await axios("https://rickandmortyapi.com/api/character");
      const data = response.data.results;
      
      data.forEach((character) => {
        let div = document.createElement("div");
        div.innerHTML = `
          <img src="${character.image}" />
        `
        ;
  
        document.body.append(div);
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  getCharacters();
 

 