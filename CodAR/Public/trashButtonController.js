// -----JS CODE-----
// @input SceneObject trashButton

print("trashing code of selected character: " + global.activeCharacter);

switch(global.activeCharacter) {
    case "cat": 
        global.resetCatCode();
        break;
    case "fish":
        global.resetFishCode();
        break;
}