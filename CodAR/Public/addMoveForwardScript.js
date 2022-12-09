// -----JS CODE-----
// @input SceneObject moveNorthButton
// @input name = 'cat';

const moveNorthBlock = {'action': "moveNorth", "amount": 1, 'type': "movement", "func" : script.api.moveNorth};

 print("add move forward being called!!!!")
global.catCodeCommands.push(moveNorthBlock);
global.catCodeCommands.push(moveNorthBlock);
global.catCodeCommands.push(moveNorthBlock);
global.catCodeCommands.push(moveNorthBlock);

// reference text variable of cat/codeMenu/Text Object to append 'moveNorth' to text or add image of block