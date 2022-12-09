// -----JS CODE-----
// @input SceneObject moveNorthButton

print("move north button tapped");

const moveSouthBlock = {'action': "moveSouth", "amount": 1, 'type': "movement", "func" : script.api.moveSouth};
const moveNorthBlock = {'action': "moveNorth", "amount": 1, 'type': "movement", "func" : script.api.moveNorth};
const moveEastBlock = {'action': "moveEast", "amount": 1, 'type': "movement", "func" : script.api.moveWest};
const moveWestBlock = {'action': "moveWest", "amount": 1, 'type': "movement", "func" : script.api.moveEast};
const turnCCWBlock = {'action': "turnCCW", "amount": 90, "type": "rotation", "func" : script.api.turnCCW};
const turnCWBlock = {'action': "turnCW", "amount": 90, "type": "rotation", "func" : script.api.turnCW};
const moveUpBlock = {'action': "moveUp", "type": "movement", "func" : script.api.moveUp};

var characterCodeCommands = null;
switch(global.activeCharacter) {
    case "cat":
        characterCodeCommands = global.catCodeCommands;
        break;
    case "fish":
        characterCodeCommands = global.fishCodeCommands;
        break;
}

if(characterCodeCommands)
    characterCodeCommands.push(moveNorthBlock);
