
// -----JS CODE-----
// @input SceneObject fish

print("SEE IF fish WORKS:  " + script.fish.getTransform().getLocalPosition());


function get90DegreeRotation() {
    var degrees = 90 * 20 * getDeltaTime();

// Convert degrees to radians
var radians = degrees * (Math.PI / 180);

// Axis to rotate around
var axis = vec3.up();

// Rotation we will apply to the object's current rotation
var rotationToApply = quat.angleAxis(radians, axis);

// Get the object's current world rotation
var oldRotation = script.fish.getTransform().getWorldRotation();

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
//    var curPos = script.fish.getTransform().getWorldPosition();
//    var curRot = script.fish.getTransform().getWorldRotation();
////    var newRot = get90DegreeRotation();
////    print("new rot ya: " + newRot);
////    script.fish.getTransform().setWorldRotation(newRot);
//   
//    
//    var endPos = new vec3(curPos.x, curPos.y, curPos.z  + 10);
////    print("rot vec: " + curRot.toEulerAngles().toString());
// 
//
//    global.tweenManager.setStartValue(script.fish, "moveStraight", curPos);
//    global.tweenManager.setEndValue(script.fish, "moveStraight", endPos);
//    
//    global.tweenManager.startTween(script.fish, "moveStraight");
//
//
//    
////    global.tweenManager.startTween(script.fish, "moveStraight");
//    
//    var finalPos = script.fish.getTransform().getWorldPosition();
//    
//    
//}
//
//
//script.api.moveSouth = function(nextBlock) {
////    print("move straight function. Times: " + ++calledTimes);
//    
//    var curPos = script.fish.getTransform().getWorldPosition();
//    var curRot = script.fish.getTransform().getWorldRotation();
////    var newRot = get90DegreeRotation();
////    print("new rot ya: " + newRot);
////    script.fish.getTransform().setWorldRotation(newRot);
//   
//    
//    var endPos = new vec3(curPos.x, curPos.y, curPos.z  -10);
////    print("rot vec: " + curRot.toEulerAngles().toString());
//
//    global.tweenManager.setStartValue(script.fish, "moveSouth", curPos);
//    global.tweenManager.setEndValue(script.fish, "moveSouth", endPos);
//    
//   
//    global.tweenManager.startTween(script.fish, "moveSouth");
// 
//
//    
////    global.tweenManager.startTween(script.fish, "moveStraight");
//    
//
//    
//    
//}
//
//script.api.moveEast = function(nextBlock) {
////    print("move straight function. Times: " + ++calledTimes);
//    
//    var curPos = script.fish.getTransform().getWorldPosition();
//    var curRot = script.fish.getTransform().getWorldRotation();
////    var newRot = get90DegreeRotation();
////    print("new rot ya: " + newRot);
////    script.fish.getTransform().setWorldRotation(newRot);
//   
//    
//    var endPos = new vec3(curPos.x + 10, curPos.y, curPos.z);
////    print("rot vec: " + curRot.toEulerAngles().toString());
//
//    global.tweenManager.setStartValue(script.fish, "moveEast", curPos);
//    global.tweenManager.setEndValue(script.fish, "moveEast", endPos);
//    
//   
//    global.tweenManager.startTween(script.fish, "moveEast");
//  
//
//    
////    global.tweenManager.startTween(script.fish, "moveStraight");
//    
//
//    
//    
//}
//
//script.api.moveWest = function(nextBlock) {
////    print("move straight function. Times: " + ++calledTimes);
//    
//    var curPos = script.fish.getTransform().getWorldPosition();
//    var curRot = script.fish.getTransform().getWorldRotation();
////    var newRot = get90DegreeRotation();
////    print("new rot ya: " + newRot);
////    script.fish.getTransform().setWorldRotation(newRot);
//   
//    
//    var endPos = new vec3(curPos.x - 10, curPos.y, curPos.z);
////    print("rot vec: " + curRot.toEulerAngles().toString());
//
//    global.tweenManager.setStartValue(script.fish, "moveWest", curPos);
//    global.tweenManager.setEndValue(script.fish, "moveWest", endPos);
//    
//   
//    global.tweenManager.startTween(script.fish, "moveWest");
//    
//    
////    global.tweenManager.startTween(script.fish, "moveStraight");
//    
//
//    
//    
//}
//
//script.api.moveUp = function (nextBlock) {
////    print("move straight function. Times: " + ++calledTimes);
//    
//    var curPos = script.fish.getTransform().getWorldPosition();
//    var curRot = script.fish.getTransform().getWorldRotation();
////    var newRot = get90DegreeRotation();
////    print("new rot ya: " + newRot);
////    script.fish.getTransform().setWorldRotation(newRot);
//   
//    print("Current position is " + curPos.x + " ," + curPos.y);
//    var endPos = new vec3(curPos.x , curPos.y + 20, curPos.z);
////    print("rot vec: " + curRot.toEulerAngles().toString());
////    endPos = endPos.add(curRot.toEulerAngles()).add(new vec3(5,-5, 0));
//    global.tweenManager.setStartValue(script.fish, "moveUp", curPos);
//    global.tweenManager.setEndValue(script.fish, "moveUp", endPos);
//    
//  
//    global.tweenManager.startTween(script.fish, "moveUp", nextBlock["function"]);
//   
//       
//    
////    global.tweenManager.startTween(script.fish, "moveUp");
//    
//    var finalPos = script.fish.getTransform().getWorldPosition();
//    print(" position is now " + finalPos.x + " ," + finalPos.y + ", " + finalPos.z);
//    
//};
//
//script.api.turnLeft = function(nextBlock){
//    
//        print("Rotating left!");
//     
//            
//            global.tweenManager.startTween(script.fish, "turnLeft", nextBlock["function"]);
//    
//        
//        
////        global.tweenManager.startTween(script.fish, "turnLeft");
//        
//};
//
//script.api.turnRight = function(nextBlock){
//    
//       
//        
//            global.tweenManager.startTween(script.fish, "turnRight", nextBlock["function"]);
//
//        
////        global.tweenManager.startTween(script.fish, "turnRight");
//        
//};

//function rotate90(){
//    var transform = script.fish.getTransform();
//    var rotation = transform.getLocalRotation();
//
//    tweenManager.setStartValue(script.fish, "y_rot_", rotation.y);
//    tweenManager.setEndValue(script.fish, "y_rot_", rotation.y + 90);
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
//    global.fishCodeActions.push({"action": ""});
//    var prevDelay = 0;
//    for(var i = 0; i < global.fishCodeActions.length - 1; i++)
//    {
//        
////         print("start w iteration " + i);
//
//        const block = global.fishCodeActions[i];
////        var nextBlock = global.fishCodeActions[i+1];
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
//   global.fishCodeActions.push(moveStraightBlock);
//   global.fishCodeActions.push(turnRightBlock);
//}
//for(var i = 0; i < 10; i++)
//{
//    print("adding code block");
//    global.fishCodeActions.push(moveStraightBlock);
//    global.fishCodeActions.push(turnLeftBlock);
////    global.fishCodeActions.push(moveUpBlock);
////    global.fishCodeActions.push(turnRightBlock);
//}
//global.fishCodeActions.push(moveStraightBlock);
//global.fishCodeActions.push(moveUpBlock);
//global.fishCodeActions.push(turnRightBlock);
//global.fishCodeActions.push(moveStraightBlock);
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
//    global.fishCodeActions.push(moveStraightBlock);
//    global.fishCodeActions.push(turnLeftBlock);
//    global.fishCodeActions.push(turnLeftBlock);
//    global.fishCodeActions.push(turnLeftBlock);
//    global.fishCodeActions.push(turnLeftBlock);
////    global.fishCodeActions.push(moveEastBlock);
////    global.fishCodeActions.push(moveSouthBlock);
////    global.fishCodeActions.push(turnLeftBlock);
////    global.fishCodeActions.push(moveWestBlock);
////    global.fishCodeActions.push(turnLeftBlock);
//    
//}




				// this will stop the scheduled function
//for(var i = 0; i < global.fishCodeActions.length; i++)
//    print("CODE BLOCK STATUS: " + global.fishCodeActions[i]["action"]);

//executeCodeBlocks();
    

const moveSouthBlock = {'action': "moveSouth", "amount": 0.5, 'type': "movement", "func" : script.api.moveSouth};
const moveNorthBlock = {'action': "moveNorth", "amount": 0.5, 'type': "movement", "func" : script.api.moveNorth};
const moveEastBlock = {'action': "moveEast", "amount": 0.5, 'type': "movement", "func" : script.api.moveWest};
const moveWestBlock = {'action': "moveWest", "amount": 0.5, 'type': "movement", "func" : script.api.moveEast};
const turnCCWBlock = {'action': "turnCCW", "amount": 90, "type": "rotation", "func" : script.api.turnCCW};
const turnCWBlock = {'action': "turnCW", "amount": 90, "type": "rotation", "func" : script.api.turnCW};
const moveUpBlock = {'action': "moveUp", "type": "movement", "func" : script.api.moveUp};
const loopStartBlock = {'action': "loopStart", "length": 1, "amount": ""};
const loopEndBlock = {'action': "loopEnd", "times": 0, "length": 1, "amount": ""};


function createLoopEndBlock(times) {
    return {'action': "loopEnd", "times": times, "length": 1, "amount":""};
}


var commandIndex = -1;
//var commands = [ "moveSouth", "moveSouth", "turnCCW", "turnCW" ];
global.fishCodeCommands = [];
script.fish.loopStack = [];

// move in square loop for 10 secs
//for(var i = 0; i < 4; i++)
//{
//   
//    global.fishCodeCommands.push(moveEastBlock);
//    global.fishCodeCommands.push(turnCCWBlock);
//    global.fishCodeCommands.push(moveNorthBlock);
//    global.fishCodeCommands.push(turnCCWBlock);
//    global.fishCodeCommands.push(moveWestBlock);
//    global.fishCodeCommands.push(turnCCWBlock);
//    global.fishCodeCommands.push(moveSouthBlock);
//    global.fishCodeCommands.push(turnCCWBlock);
//    
//}
//global.fishCodeCommands.push(loopStartBlock);
//    global.fishCodeCommands.push(moveEastBlock);
//    global.fishCodeCommands.push(turnCCWBlock);
//    global.fishCodeCommands.push(moveNorthBlock);
//    global.fishCodeCommands.push(turnCCWBlock);
//    global.fishCodeCommands.push(moveWestBlock);
//    global.fishCodeCommands.push(turnCCWBlock);
//    global.fishCodeCommands.push(moveSouthBlock);
//    global.fishCodeCommands.push(turnCCWBlock);
//global.fishCodeCommands.push(createLoopEndBlock(4));
//

script.fish.timer = 0;
script.fish.angle = 0;

// update every frame event wont access command until event listed here
// configured to run on start
// later configure to run on some sort of visual/interactive cue trigger

global.startFishCode = function() {
    script.fish.startNextOperation();
}


global.resetFishCode = function() {
    script.fish.timer = 0;
    script.fish.angle = 0;
    commandIndex = -1;
    global.fishCodeCommands = [];
}
//script.createEvent("OnStartEvent").bind(function () {
//	script.fish.startNextOperation();
//});

script.createEvent("UpdateEvent").bind(function (eventData) {
    if(commandIndex >= global.fishCodeCommands.length || !global.fishCodeCommands[commandIndex])
        return;
    
    print("BLOCK IS: " + global.fishCodeCommands[commandIndex]);
    print("ACTION IS: " + global.fishCodeCommands[commandIndex]["action"]);
    var amount = global.fishCodeCommands[commandIndex]["amount"];
    
	switch (global.fishCodeCommands[commandIndex]["action"]) {
 
        case "loopStart": 
            script.fish.loopStack.push(commandIndex);
//            print("INDEXED PUSHED: " + commandIndex);
            script.fish.startNextOperation();
            break;
        case "loopEnd":
            var goToIndex = script.fish.loopStack.pop();
//            print("INDEXED POPPED: " + goToIndex);
            global.fishCodeCommands[commandIndex]["times"] =  global.fishCodeCommands[commandIndex]["times"]  - 1; 
            var times = global.fishCodeCommands[commandIndex]["times"];
             print("TIMES LEFT: " + times);
            if(times > 0)
            {
                commandIndex = goToIndex;
                break;
            }
               
        
            script.fish.startNextOperation();
            break;
            
        
        case "moveNorth": script.fish.moveNorth(eventData, amount); break;
        case "moveSouth": script.fish.moveSouth(eventData, amount); break;
        case "moveEast": script.fish.moveEast(eventData, amount); break;
		case "moveWest": script.fish.moveWest(eventData, amount); break;
		case "turnCCW": script.fish.turnCCW(eventData, amount); break;
        case "turnCW": script.fish.turnCW(eventData, amount); break;
        
		default: print("what?");
	}
});

script.fish.startNextOperation = function() {
	script.fish.timer = 0;
	script.fish.angle = 0;
	commandIndex++;
}

script.fish.moveSouth = function move(eventData, amount) {
	script.fish.timer += eventData.getDeltaTime();
	// move operation
    
    var curPos = script.fish.getTransform().getWorldPosition();
    var endPos = curPos.add(new vec3(0,0,1));
    script.fish.getTransform().setLocalPosition(endPos);
    
	if (script.fish.timer >= amount) {
		script.fish.startNextOperation();
	}
}


script.fish.moveNorth = function move(eventData, amount) {
	script.fish.timer += eventData.getDeltaTime();
	// move operation
    
    var curPos = script.fish.getTransform().getWorldPosition();
    var endPos = curPos.add(new vec3(0,0,-1));
    script.fish.getTransform().setLocalPosition(endPos);
    
	if (script.fish.timer >= amount) {
		script.fish.startNextOperation();
	}
}

script.fish.moveEast = function move(eventData, amount) {
	script.fish.timer += eventData.getDeltaTime();
	// move operation
    
    var curPos = script.fish.getTransform().getWorldPosition();
    var endPos = curPos.add(new vec3(1,0,0));
    script.fish.getTransform().setLocalPosition(endPos);
    
	if (script.fish.timer >= amount) {
		script.fish.startNextOperation();
	}
}

script.fish.moveWest = function move(eventData, amount) {
	script.fish.timer += eventData.getDeltaTime();
	// move operation
    
    var curPos = script.fish.getTransform().getWorldPosition();
    var endPos = curPos.add(new vec3(-1,0,0));
    script.fish.getTransform().setLocalPosition(endPos);
    
	if (script.fish.timer >= amount) {
		script.fish.startNextOperation();
	}
}

//script.fish.turnCCW = function (eventData, amount) {
//	// adjust current angle (be sure to clamp so it's always the exact amount)
//	// set rotation
//    
//    var degrees = 20 * eventData.getDeltaTime();
//    
//    script.fish.angle += degrees;
//
//    // Convert degrees to radians
//    var radians = degrees * (Math.PI / 180);
//
//    // Axis to rotate around
//    var axis = vec3.up();
//
//    // Rotation we will apply to the object's current rotation
//    var rotationToApply = quat.angleAxis(radians, axis);
//
//    // Get the object's current world rotation
//    var oldRotation = script.fish.getTransform().getWorldRotation();
//
//    // Get the new rotation by rotating the old rotation by rotationToApply
//    var newRotation = rotationToApply.multiply(oldRotation);
//
//    // Set the object's world rotation to the new rotation
//    script.fish.getTransform().setWorldRotation(newRotation);
//    
//    print("fish angle is: " + script.fish.angle + "end amount is " + amount);
//	if (script.fish.angle >= amount) {
//        print("STARTING NEXT OP, ANGLE REACHED")
//		script.fish.startNextOperation();
//	}
//}


script.fish.turnCW = function (eventData, amount) {
	// adjust current angle (be sure to clamp so it's always the exact amount)
	// set rotation
    
    var degrees = 50 * eventData.getDeltaTime();
    
    script.fish.angle += degrees;

    // Convert degrees to radians
    var radians = -1 * degrees * (Math.PI / 180);

    // Axis to rotate around
    var axis = vec3.up();

    // Rotation we will apply to the object's current rotation
    var rotationToApply = quat.angleAxis(radians, axis);

    // Get the object's current world rotation
    var oldRotation = script.fish.getTransform().getWorldRotation();

    // Get the new rotation by rotating the old rotation by rotationToApply
    var newRotation = rotationToApply.multiply(oldRotation);

    // Set the object's world rotation to the new rotation
    script.fish.getTransform().setWorldRotation(newRotation);
    
    print("cat angle is: " + script.fish.angle + "end amount is " + amount);
	if (script.fish.angle >= amount) {
        print("STARTING NEXT OP, ANGLE REACHED")
		script.fish.startNextOperation();
	}
}


script.fish.turnCCW = function (eventData, amount) {
	// adjust current angle (be sure to clamp so it's always the exact amount)
	// set rotation
    
    var degrees = 50 * eventData.getDeltaTime();
    
    script.fish.angle += degrees;

    // Convert degrees to radians
    var radians = degrees * (Math.PI / 180);

    // Axis to rotate around
    var axis = vec3.up();

    // Rotation we will apply to the object's current rotation
    var rotationToApply = quat.angleAxis(radians, axis);

    // Get the object's current world rotation
    var oldRotation = script.fish.getTransform().getWorldRotation();

    // Get the new rotation by rotating the old rotation by rotationToApply
    var newRotation = rotationToApply.multiply(oldRotation);

    // Set the object's world rotation to the new rotation
    script.fish.getTransform().setWorldRotation(newRotation);
    
    print("cat angle is: " + script.fish.angle + "end amount is " + amount);
	if (script.fish.angle >= amount) {
        print("STARTING NEXT OP, ANGLE REACHED")
		script.fish.startNextOperation();
	}
}


//script.fish.turnCCW = function (eventData, amount) {
//	// adjust current angle (be sure to clamp so it's always the exact amount)
//	// set rotation
//    
//    
//    var looky = quat.lookAt(new vec3(1,0,0), vec3.up());
//    
//    
//    var degrees = 50 * eventData.getDeltaTime();
//    
//    script.fish.angle += degrees;
//
//    // Convert degrees to radians
//    var radians = degrees * (Math.PI / 180);
//    
//    var curRot = script.fish.getTransform().getLocalRotation();
//    
//     var curRotwee = script.fish.getTransform().getLocalRotation().toEulerAngles();
//    var newyy = curRot.multiplyVec3(vec3.up());
//    
//    
//    var pos = script.fish.getTransform().getWorldPosition();
//    
//    var rotToApply = quat.angleAxis(radians, new vec3(0, 1, 0));
//    
//    
//    script.fish.getTransform().setWorldRotation(newyy);
//
//    // Axis to rotate around
////    var axis = vec3.up();
////
////    // Rotation we will apply to the object's current rotation
////    var rotationToApply = quat.angleAxis(radians, axis);
////
////    // Get the object's current world rotation
////    var oldRotation = script.fish.getTransform().getWorldRotation();
////
////    // Get the new rotation by rotating the old rotation by rotationToApply
////    var newRotation = rotationToApply.multiply(oldRotation);
////
////    // Set the object's world rotation to the new rotation
////    script.fish.getTransform().setWorldRotation(newRotation);
//    
//    print("cat angle is: " + script.fish.angle + "end amount is " + amount);
//	if (script.fish.angle >= amount) {
//        print("STARTING NEXT OP, ANGLE REACHED")
//		script.fish.startNextOperation();
//	}
//}




