// -----JS CODE-----
//@input SceneObject startButton

print("clicking start with active character: " + global.activeCharacter);

switch(global.activeCharacter){
//    print("active char is " + global.activeCharacter);
    case "cat": global.startCatCode(); break;
    case "fish": global.startFishCode(); break;
}