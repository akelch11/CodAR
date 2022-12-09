
// -----JS CODE-----
// @input SceneObject cat
// @input Component.Text catCodeMenu



function get90DegreeRotation() {
    var degrees = 90 * 20 * getDeltaTime();

// Convert degrees to radians
var radians = degrees * (Math.PI / 180);

// Axis to rotate around
var axis = vec3.up();

// Rotation we will apply to the object's current rotation
var rotationToApply = quat.angleAxis(radians, axis);

// Get the object's current world rotation
var oldRotation = script.cat.getTransform().getWorldRotation();

// Get the new rotation by rotating the old rotation by rotationToApply
var newRotation = rotationToApply.multiply(oldRotation);
    return newRotation;
}
// Degrees to rotate by


// Set the object's world rotation to the new rotation

//
//script.api.moveStraight = function(nextBlock) {
////    print("move straight function. Times: " + ++calledTimes);
//    
//    var curPos = script.cat.getTransform().getWorldPosition();
//    var curRot = script.cat.getTransform().getWorldRotation();
////    var newRot = get90DegreeRotation();
////    print("new rot ya: " + newRot);
////    script.cat.getTransform().setWorldRotation(newRot);
//   
//    
//    var endPos = new vec3(curPos.x, curPos.y, curPos.z  + 10);
////    print("rot vec: " + curRot.toEulerAngles().toString());
// 
//
//    global.tweenManager.setStartValue(script.cat, "moveStraight", curPos);
//    global.tweenManager.setEndValue(script.cat, "moveStraight", endPos);
//    
//    global.tweenManager.startTween(script.cat, "moveStraight");
//
//
//    
////    global.tweenManager.startTween(script.cat, "moveStraight");
//    
//    var finalPos = script.cat.getTransform().getWorldPosition();
//    
//    
//}
//
//
//script.api.moveSouth = function(nextBlock) {
////    print("move straight function. Times: " + ++calledTimes);
//    
//    var curPos = script.cat.getTransform().getWorldPosition();
//    var curRot = script.cat.getTransform().getWorldRotation();
////    var newRot = get90DegreeRotation();
////    print("new rot ya: " + newRot);
////    script.cat.getTransform().setWorldRotation(newRot);
//   
//    
//    var endPos = new vec3(curPos.x, curPos.y, curPos.z  -10);
////    print("rot vec: " + curRot.toEulerAngles().toString());
//
//    global.tweenManager.setStartValue(script.cat, "moveSouth", curPos);
//    global.tweenManager.setEndValue(script.cat, "moveSouth", endPos);
//    
//   
//    global.tweenManager.startTween(script.cat, "moveSouth");
// 
//
//    
////    global.tweenManager.startTween(script.cat, "moveStraight");
//    
//
//    
//    
//}
//
//script.api.moveEast = function(nextBlock) {
////    print("move straight function. Times: " + ++calledTimes);
//    
//    var curPos = script.cat.getTransform().getWorldPosition();
//    var curRot = script.cat.getTransform().getWorldRotation();
////    var newRot = get90DegreeRotation();
////    print("new rot ya: " + newRot);
////    script.cat.getTransform().setWorldRotation(newRot);
//   
//    
//    var endPos = new vec3(curPos.x + 10, curPos.y, curPos.z);
////    print("rot vec: " + curRot.toEulerAngles().toString());
//
//    global.tweenManager.setStartValue(script.cat, "moveEast", curPos);
//    global.tweenManager.setEndValue(script.cat, "moveEast", endPos);
//    
//   
//    global.tweenManager.startTween(script.cat, "moveEast");
//  
//
//    
////    global.tweenManager.startTween(script.cat, "moveStraight");
//    
//
//    
//    
//}
//
//script.api.moveWest = function(nextBlock) {
////    print("move straight function. Times: " + ++calledTimes);
//    
//    var curPos = script.cat.getTransform().getWorldPosition();
//    var curRot = script.cat.getTransform().getWorldRotation();
////    var newRot = get90DegreeRotation();
////    print("new rot ya: " + newRot);
////    script.cat.getTransform().setWorldRotation(newRot);
//   
//    
//    var endPos = new vec3(curPos.x - 10, curPos.y, curPos.z);
////    print("rot vec: " + curRot.toEulerAngles().toString());
//
//    global.tweenManager.setStartValue(script.cat, "moveWest", curPos);
//    global.tweenManager.setEndValue(script.cat, "moveWest", endPos);
//    
//   
//    global.tweenManager.startTween(script.cat, "moveWest");
//    
//    
////    global.tweenManager.startTween(script.cat, "moveStraight");
//    
//
//    
//    
//}
//
//script.api.moveUp = function (nextBlock) {
////    print("move straight function. Times: " + ++calledTimes);
//    
//    var curPos = script.cat.getTransform().getWorldPosition();
//    var curRot = script.cat.getTransform().getWorldRotation();
////    var newRot = get90DegreeRotation();
////    print("new rot ya: " + newRot);
////    script.cat.getTransform().setWorldRotation(newRot);
//   
//    print("Current position is " + curPos.x + " ," + curPos.y);
//    var endPos = new vec3(curPos.x , curPos.y + 20, curPos.z);
////    print("rot vec: " + curRot.toEulerAngles().toString());
////    endPos = endPos.add(curRot.toEulerAngles()).add(new vec3(5,-5, 0));
//    global.tweenManager.setStartValue(script.cat, "moveUp", curPos);
//    global.tweenManager.setEndValue(script.cat, "moveUp", endPos);
//    
//  
//    global.tweenManager.startTween(script.cat, "moveUp", nextBlock["function"]);
//   
//       
//    
////    global.tweenManager.startTween(script.cat, "moveUp");
//    
//    var finalPos = script.cat.getTransform().getWorldPosition();
//    print(" position is now " + finalPos.x + " ," + finalPos.y + ", " + finalPos.z);
//    
//};
//
//script.api.turnLeft = function(nextBlock){
//    
//        print("Rotating left!");
//     
//            
//            global.tweenManager.startTween(script.cat, "turnLeft", nextBlock["function"]);
//    
//        
//        
////        global.tweenManager.startTween(script.cat, "turnLeft");
//        
//};
//
//script.api.turnRight = function(nextBlock){
//    
//       
//        
//            global.tweenManager.startTween(script.cat, "turnRight", nextBlock["function"]);
//
//        
////        global.tweenManager.startTween(script.cat, "turnRight");
//        
//};

//function rotate90(){
//    var transform = script.cat.getTransform();
//    var rotation = transform.getLocalRotation();
//
//    tweenManager.setStartValue(script.cat, "y_rot_", rotation.y);
//    tweenManager.setEndValue(script.cat, "y_rot_", rotation.y + 90);
//}

    
function getTweenFromName (name){
    switch(name)
    {
            case "moveStraight":
                return script.api.moveStraight;
                break;
            case "turnLeft":
                return script.api.turnLeft;
                break;
            case "turnRight":
                return script.api.turnRight;
                break;
            case "moveUp":
                return script.api.moveUp;
                break;
    }
}

//
//    
//function executeCodeBlocks(){
//    // indexed for loop allows for reassigning of index i 
//    // to simulate looping with goto like behavior
//    print("in execute code func, running: ");
//    global.catCodeActions.push({"action": ""});
//    var prevDelay = 0;
//    for(var i = 0; i < global.catCodeActions.length - 1; i++)
//    {
//        
////         print("start w iteration " + i);
//
//        const block = global.catCodeActions[i];
////        var nextBlock = global.catCodeActions[i+1];
//        var nextBlock = {"action": "BLAH"};
//        var useCallback = true;
//        if(nextBlock["type"] == "functional")
//        {
//             useCallback = false;
//        }
//        
////        print("running code block: " + block['action']);
////        
//        
//               switch(block['action'])
//               {
//                    case "moveStraight":
//                    var delayedEvent = script.createEvent("DelayedCallbackEvent");
//                    delayedEvent.bind(function(eventData) 
//                    {
//                                script.api.moveStraight(nextBlock);
//                                // Start with a 2 second delay     
//                                print("STRAIGHT FINISHED")
//                    });
//                    break;
//                    case "turnLeft":
//                         script.api.turnLeft(nextBlock);
//                    var delayedEvent = script.createEvent("DelayedCallbackEvent");
//                    delayedEvent.bind(function(eventData) 
//                    {
//                                script.api.turnLeft(nextBlock);
//                                // Start with a 2 second delay     
//                                print("LEFT FINISHED")
//                    });
//        //                new global.DoDelay(func, [nextBlock]).byTime(5);
//                        
//                    break;
//                    case "turnRight":
//                    var delayedEvent = script.createEvent("DelayedCallbackEvent");
//                    delayedEvent.bind(function(eventData) 
//                    {
//                        script.api.turnRight(nextBlock);
//                        // Start with a 2 second delay     
//                        print("RIGHT FINISHED")
//                    });
//                        break;
//                    case "moveUp":
//                        var delayedEvent = script.createEvent("DelayedCallbackEvent");
//                        delayedEvent.bind(function(eventData) 
//                        {
//                        script.api.moveUp(nextBlock);
//                        // Start with a 2 second delay     
//                        print("RIGHT FINISHED")
//                     });
//                        break; 
//                    case "moveEast":
//                        var delayedEvent = script.createEvent("DelayedCallbackEvent");
//                        delayedEvent.bind(function(eventData) 
//                        {
//                        script.api.moveEast(nextBlock);
//                        // Start with a 2 second delay     
//                        print("East FINISHED")
//                     });
//                        break;
//                    case "moveWest":
//                        var delayedEvent = script.createEvent("DelayedCallbackEvent");
//                        delayedEvent.bind(function(eventData) 
//                        {
//                        script.api.moveWest(nextBlock);
//                        // Start with a 2 second delay     
//                        print("West FINISHED")
//                     });
//                        break;
//                    case "moveSouth":
//                        var delayedEvent = script.createEvent("DelayedCallbackEvent");
//                        delayedEvent.bind(function(eventData) 
//                        {
//                        script.api.moveSouth(nextBlock);
//                        // Start with a 2 second delay     
//                        print("West FINISHED")
//                     });
//                        break; 
//               }
//       
//        
//        
//        delayedEvent.reset(++prevDelay);
//   
//    }
//}

//moveStraight();
//turnLeft();
////turnRight();
//
//const moveStraightBlock = {'action': "moveStraight", 'type': "movement", "func" : script.api.moveStraight};
//const turnLeftBlock = {'action': "turnLeft", "type": "rotation", "func" : script.api.turnLeft};
//const turnRightBlock = {'action': "turnRight", "type": "rotation", "func" : script.api.turnRight};
//const moveUpBlock = {'action': "moveUp", "type": "movement", "func" : script.api.moveUp};
//
//
//const moveSouthBlock = {'action': "moveSouth", 'type': "movement", "func" : script.api.moveSouth};
//const moveEastBlock = {'action': "moveEast", "type": "movement", "func" : script.api.moveEast};
//const moveWestBlock = {'action': "moveWest", "type": "movement", "func" : script.api.moveWest};

//for(var i = 0; i < 20; i++)
//{
//    print("adding code block " + i);
//   global.catCodeActions.push(moveStraightBlock);
//   global.catCodeActions.push(turnRightBlock);
//}
//for(var i = 0; i < 10; i++)
//{
//    print("adding code block");
//    global.catCodeActions.push(moveStraightBlock);
//    global.catCodeActions.push(turnLeftBlock);
////    global.catCodeActions.push(moveUpBlock);
////    global.catCodeActions.push(turnRightBlock);
//}
//global.catCodeActions.push(moveStraightBlock);
//global.catCodeActions.push(moveUpBlock);
//global.catCodeActions.push(turnRightBlock);
//global.catCodeActions.push(moveStraightBlock);
const printThing = function() {print("HELOOOOOO");};


//var delayed = new global.DoDelay();
//delayed.func = function(arg){ print(arg) }; 		
//delayed.args = ['hello!'];						// arguments should be given as an array
//delayed.byFrame(2);							// this will print 'hello!' in 10 frames (function is called on the next frame, if no argument given)
//delayed.byTime(2);								// this will print 'hello!' in 10 seconds
//delayed.stop();
	
//for(var i = 0; i < 10; i++)
//{
//    print("adding code block");
//    global.catCodeActions.push(moveStraightBlock);
//    global.catCodeActions.push(turnLeftBlock);
//    global.catCodeActions.push(turnLeftBlock);
//    global.catCodeActions.push(turnLeftBlock);
//    global.catCodeActions.push(turnLeftBlock);
////    global.catCodeActions.push(moveEastBlock);
////    global.catCodeActions.push(moveSouthBlock);
////    global.catCodeActions.push(turnLeftBlock);
////    global.catCodeActions.push(moveWestBlock);
////    global.catCodeActions.push(turnLeftBlock);
//    
//}




				// this will stop the scheduled function
//for(var i = 0; i < global.catCodeActions.length; i++)
//    print("CODE BLOCK STATUS: " + global.catCodeActions[i]["action"]);

//executeCodeBlocks();
    

const moveSouthBlock = {'action': "moveSouth", "amount": 1, 'type': "movement", "func" : script.api.moveSouth};
const moveNorthBlock = {'action': "moveNorth", "amount": 1, 'type': "movement", "func" : script.api.moveNorth};
const moveEastBlock = {'action': "moveEast", "amount": 1, 'type': "movement", "func" : script.api.moveWest};
const moveWestBlock = {'action': "moveWest", "amount": 1, 'type': "movement", "func" : script.api.moveEast};
const turnCCWBlock = {'action': "turnCCW", "amount": 90, "type": "rotation", "func" : script.api.turnCCW};
const turnCWBlock = {'action': "turnCW", "amount": 90, "type": "rotation", "func" : script.api.turnCW};
const moveUpBlock = {'action': "moveUp", "type": "movement", "func" : script.api.moveUp};


global.catCodeText = "";




var commandIndex = -1;

//var commands = [ "moveSouth", "moveSouth", "turnCCW", "turnCW" ];
global.catCodeCommands = [];

// move in square loop for 10 secs
//for(var i = 0; i < 2; i++)
//{
//    
//    global.catCodeCommands.push(turnCCWBlock);
//    global.catCodeCommands.push(moveEastBlock);
//    global.catCodeCommands.push(turnCCWBlock);
//    global.catCodeCommands.push(moveNorthBlock);
//    global.catCodeCommands.push(turnCCWBlock);
//    global.catCodeCommands.push(moveWestBlock);
//    global.catCodeCommands.push(turnCCWBlock);
//    global.catCodeCommands.push(moveSouthBlock);
//    
//}


script.cat.timer = 0;
script.cat.angle = 0;

// update every frame event wont access command until event listed here
// configured to run on start
// later configure to run on some sort of visual/interactive cue trigger

global.startCatCode = function() {
    script.cat.startNextOperation();
}

global.resetCatCode = function() {
    script.cat.timer = 0;
    script.cat.angle = 0;
    commandIndex = -1;
    global.catCodeCommands = [];
}

//
//script.createEvent("OnStartEvent").bind(function () {
//	script.cat.startNextOperation();
//});


    
script.createEvent("UpdateEvent").bind(function() {
    
    var obj = script.getSceneObject();
//    print(script.getSceneObject().getChildrenCount());
//    script.catCodeMenu.text = "";
    var codeText = "";
    for(var i = 0; i <Math.min(global.catCodeCommands.length, 10); i++)
    {
        var block_type = global.catCodeCommands[i]["action"] + "()";
        codeText += (block_type + "\n");
    }
  

//    script.catCodeMenu.text = codeText;
//    
//    
//    var codeMenuText = menu.getComponent("Component.Text");
//    codeMenuText.text = global.catCodeText;
//    
})

script.createEvent("UpdateEvent").bind(function (eventData) {
    if(commandIndex >= global.catCodeCommands.length || ! global.catCodeCommands[commandIndex])
        return;
    
    var amount = global.catCodeCommands[commandIndex]["amount"];
    print("ACTION IS: " + global.catCodeCommands[commandIndex]["action"]);
	switch (global.catCodeCommands[commandIndex]["action"]) {
 
        
        case "moveNorth": script.cat.moveNorth(eventData, amount); break;
        case "moveSouth": script.cat.moveSouth(eventData, amount); break;
        case "moveEast": script.cat.moveEast(eventData, amount); break;
		case "moveWest": script.cat.moveWest(eventData, amount); break;
		case "turnCCW": script.cat.turnCCW(eventData, amount); break;
        case "turnCW": script.cat.turnCW(eventData, amount); break;
        
		default: print("what?");
	}
});

script.cat.startNextOperation = function() {
	script.cat.timer = 0;
	script.cat.angle = 0;
	commandIndex++;
}

script.cat.moveSouth = function move(eventData, amount) {
	script.cat.timer += eventData.getDeltaTime();
	// move operation
    
    var curPos = script.cat.getTransform().getWorldPosition();
    var endPos = curPos.add(new vec3(0,0,1));
    script.cat.getTransform().setLocalPosition(endPos);
    
	if (script.cat.timer >= amount) {
		script.cat.startNextOperation();
	}
}


script.cat.moveNorth = function move(eventData, amount) {
	script.cat.timer += eventData.getDeltaTime();
	// move operation
    
    var curPos = script.cat.getTransform().getWorldPosition();
    var endPos = curPos.add(new vec3(0,0,-1));
    script.cat.getTransform().setLocalPosition(endPos);
    
	if (script.cat.timer >= amount) {
		script.cat.startNextOperation();
	}
}

script.cat.moveEast = function move(eventData, amount) {
	script.cat.timer += eventData.getDeltaTime();
	// move operation
    
    var curPos = script.cat.getTransform().getWorldPosition();
    var endPos = curPos.add(new vec3(1,0,0));
    script.cat.getTransform().setLocalPosition(endPos);
    
	if (script.cat.timer >= amount) {
		script.cat.startNextOperation();
	}
}

script.cat.moveWest = function move(eventData, amount) {
	script.cat.timer += eventData.getDeltaTime();
	// move operation
    
    var curPos = script.cat.getTransform().getWorldPosition();
    var endPos = curPos.add(new vec3(-1,0,0));
    script.cat.getTransform().setLocalPosition(endPos);
    
	if (script.cat.timer >= amount) {
		script.cat.startNextOperation();
	}
}

script.cat.turnCCW = function (eventData, amount) {
	// adjust current angle (be sure to clamp so it's always the exact amount)
	// set rotation
    
    var degrees = 50 * eventData.getDeltaTime();
    
    script.cat.angle += degrees;

    // Convert degrees to radians
    var radians = degrees * (Math.PI / 180);

    // Axis to rotate around
    var axis = vec3.up();

    // Rotation we will apply to the object's current rotation
    var rotationToApply = quat.angleAxis(radians, axis);

    // Get the object's current world rotation
    var oldRotation = script.cat.getTransform().getWorldRotation();

    // Get the new rotation by rotating the old rotation by rotationToApply
    var newRotation = rotationToApply.multiply(oldRotation);

    // Set the object's world rotation to the new rotation
    script.cat.getTransform().setWorldRotation(newRotation);
    
    print("cat angle is: " + script.cat.angle + "end amount is " + amount);
	if (script.cat.angle >= amount) {
        print("STARTING NEXT OP, ANGLE REACHED")
		script.cat.startNextOperation();
	}
}

script.cat.turnCW = function (eventData, amount) {
	// adjust current angle (be sure to clamp so it's always the exact amount)
	// set rotation
    
    var degrees = 50 * eventData.getDeltaTime();
    
   
    
    script.cat.angle += degrees;

    // Convert degrees to radians
    var radians = -1 * degrees * (Math.PI / 180);

    // Axis to rotate around
    var axis = vec3.up();

    // Rotation we will apply to the object's current rotation
    var rotationToApply = quat.angleAxis(radians, axis);

    // Get the object's current world rotation
    var oldRotation = script.cat.getTransform().getWorldRotation();

    // Get the new rotation by rotating the old rotation by rotationToApply
    var newRotation = rotationToApply.multiply(oldRotation);

    // Set the object's world rotation to the new rotation
    script.cat.getTransform().setWorldRotation(newRotation);
    
    print("cat angle is: " + script.cat.angle + "end amount is " + amount);
	if (script.cat.angle >= amount) {
        print("STARTING NEXT OP, ANGLE REACHED")
		script.cat.startNextOperation();
	}
}



// script.catCodeMenu.text = "TEST";



