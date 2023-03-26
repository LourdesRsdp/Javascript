import * as endpoints from "./data-business";
import * as utils from "./util";

var root = document.getElementById("root");

for(i = 1; i < 7; i++){
    endpoints.getCharacter(i).then((result) => {
        const character = result;
        var characterDOM = utils.createCharacterRow(character);
        characterDOM.addEventListener("click", event => utils.showCharacter(character));
        root.appendChild(characterDOM);
    });
}

