
// -----JS CODE-----
// @input SceneObject dog

print("SEE IF DOG WORKS:  " + script.dog.getTransform().getLocalPosition());


function get90DegreeRotation() {
    var degrees = 90 * 20 * getDeltaTime();

// Convert degrees to radians
var radians = degrees * (Math.PI / 180);

// Axis to rotate around
var axis = vec3.up();

// Rotation we will apply to the object's current rotation
var rotationToApply = quat.angleAxis(radians, axis);

// Get the object's current world rotation
var oldRotation = script.dog.getTransform().getWorldRotation();

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
//    var curPos = script.dog.getTransform().getWorldPosition();
//    var curRot = script.dog.getTransform().getWorldRotation();
////    var newRot = get90DegreeRotation();
////    print("new rot ya: " + newRot);
////    script.dog.getTransform().setWorldRotation(newRot);
//   
//    
//    var endPos = new vec3(curPos.x, curPos.y, curPos.z  + 10);
////    print("rot vec: " + curRot.toEulerAngles().toString());
// 
//
//    global.tweenManager.setStartValue(script.dog, "moveStraight", curPos);
//    global.tweenManager.setEndValue(script.dog, "moveStraight", endPos);
//    
//    global.tweenManager.startTween(script.dog, "moveStraight");
//
//
//    
////    global.tweenManager.startTween(script.dog, "moveStraight");
//    
//    var finalPos = script.dog.getTransform().getWorldPosition();
//    
//    
//}
//
//
//script.api.moveSouth = function(nextBlock) {
////    print("move straight function. Times: " + ++calledTimes);
//    
//    var curPos = script.dog.getTransform().getWorldPosition();
//    var curRot = script.dog.getTransform().getWorldRotation();
////    var newRot = get90DegreeRotation();
////    print("new rot ya: " + newRot);
////    script.dog.getTransform().setWorldRotation(newRot);
//   
//    
//    var endPos = new vec3(curPos.x, curPos.y, curPos.z  -10);
////    print("rot vec: " + curRot.toEulerAngles().toString());
//
//    global.tweenManager.setStartValue(script.dog, "moveSouth", curPos);
//    global.tweenManager.setEndValue(script.dog, "moveSouth", endPos);
//    
//   
//    global.tweenManager.startTween(script.dog, "moveSouth");
// 
//
//    
////    global.tweenManager.startTween(script.dog, "moveStraight");
//    
//
//    
//    
//}
//
//script.api.moveEast = function(nextBlock) {
////    print("move straight function. Times: " + ++calledTimes);
//    
//    var curPos = script.dog.getTransform().getWorldPosition();
//    var curRot = script.dog.getTransform().getWorldRotation();
////    var newRot = get90DegreeRotation();
////    print("new rot ya: " + newRot);
////    script.dog.getTransform().setWorldRotation(newRot);
//   
//    
//    var endPos = new vec3(curPos.x + 10, curPos.y, curPos.z);
////    print("rot vec: " + curRot.toEulerAngles().toString());
//
//    global.tweenManager.setStartValue(script.dog, "moveEast", curPos);
//    global.tweenManager.setEndValue(script.dog, "moveEast", endPos);
//    
//   
//    global.tweenManager.startTween(script.dog, "moveEast");
//  
//
//    
////    global.tweenManager.startTween(script.dog, "moveStraight");
//    
//
//    
//    
//}
//
//script.api.moveWest = function(nextBlock) {
////    print("move straight function. Times: " + ++calledTimes);
//    
//    var curPos = script.dog.getTransform().getWorldPosition();
//    var curRot = script.dog.getTransform().getWorldRotation();
////    var newRot = get90DegreeRotation();
////    print("new rot ya: " + newRot);
////    script.dog.getTransform().setWorldRotation(newRot);
//   
//    
//    var endPos = new vec3(curPos.x - 10, curPos.y, curPos.z);
////    print("rot vec: " + curRot.toEulerAngles().toString());
//
//    global.tweenManager.setStartValue(script.dog, "moveWest", curPos);
//    global.tweenManager.setEndValue(script.dog, "moveWest", endPos);
//    
//   
//    global.tweenManager.startTween(script.dog, "moveWest");
//    
//    
////    global.tweenManager.startTween(script.dog, "moveStraight");
//    
//
//    
//    
//}
//
//script.api.moveUp = function (nextBlock) {
////    print("move straight function. Times: " + ++calledTimes);
//    
//    var curPos = script.dog.getTransform().getWorldPosition();
//    var curRot = script.dog.getTransform().getWorldRotation();
////    var newRot = get90DegreeRotation();
////    print("new rot ya: " + newRot);
////    script.dog.getTransform().setWorldRotation(newRot);
//   
//    print("Current position is " + curPos.x + " ," + curPos.y);
//    var endPos = new vec3(curPos.x , curPos.y + 20, curPos.z);
////    print("rot vec: " + curRot.toEulerAngles().toString());
////    endPos = endPos.add(curRot.toEulerAngles()).add(new vec3(5,-5, 0));
//    global.tweenManager.setStartValue(script.dog, "moveUp", curPos);
//    global.tweenManager.setEndValue(script.dog, "moveUp", endPos);
//    
//  
//    global.tweenManager.startTween(script.dog, "moveUp", nextBlock["function"]);
//   
//       
//    
////    global.tweenManager.startTween(script.dog, "moveUp");
//    
//    var finalPos = script.dog.getTransform().getWorldPosition();
//    print(" position is now " + finalPos.x + " ," + finalPos.y + ", " + finalPos.z);
//    
//};
//
//script.api.turnLeft = function(nextBlock){
//    
//        print("Rotating left!");
//     
//            
//            global.tweenManager.startTween(script.dog, "turnLeft", nextBlock["function"]);
//    
//        
//        
////        global.tweenManager.startTween(script.dog, "turnLeft");
//        
//};
//
//script.api.turnRight = function(nextBlock){
//    
//       
//        
//            global.tweenManager.startTween(script.dog, "turnRight", nextBlock["function"]);
//
//        
////        global.tweenManager.startTween(script.dog, "turnRight");
//        
//};

//function rotate90(){
//    var transform = script.dog.getTransform();
//    var rotation = transform.getLocalRotation();
//
//    tweenManager.setStartValue(script.dog, "y_rot_", rotation.y);
//    tweenManager.setEndValue(script.dog, "y_rot_", rotation.y + 90);
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
//    global.dogCodeActions.push({"action": ""});
//    var prevDelay = 0;
//    for(var i = 0; i < global.dogCodeActions.length - 1; i++)
//    {
//        
////         print("start w iteration " + i);
//
//        const block = global.dogCodeActions[i];
////        var nextBlock = global.dogCodeActions[i+1];
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
//   global.dogCodeActions.push(moveStraightBlock);
//   global.dogCodeActions.push(turnRightBlock);
//}
//for(var i = 0; i < 10; i++)
//{
//    print("adding code block");
//    global.dogCodeActions.push(moveStraightBlock);
//    global.dogCodeActions.push(turnLeftBlock);
////    global.dogCodeActions.push(moveUpBlock);
////    global.dogCodeActions.push(turnRightBlock);
//}
//global.dogCodeActions.push(moveStraightBlock);
//global.dogCodeActions.push(moveUpBlock);
//global.dogCodeActions.push(turnRightBlock);
//global.dogCodeActions.push(moveStraightBlock);
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
//    global.dogCodeActions.push(moveStraightBlock);
//    global.dogCodeActions.push(turnLeftBlock);
//    global.dogCodeActions.push(turnLeftBlock);
//    global.dogCodeActions.push(turnLeftBlock);
//    global.dogCodeActions.push(turnLeftBlock);
////    global.dogCodeActions.push(moveEastBlock);
////    global.dogCodeActions.push(moveSouthBlock);
////    global.dogCodeActions.push(turnLeftBlock);
////    global.dogCodeActions.push(moveWestBlock);
////    global.dogCodeActions.push(turnLeftBlock);
//    
//}




				// this will stop the scheduled function
//for(var i = 0; i < global.dogCodeActions.length; i++)
//    print("CODE BLOCK STATUS: " + global.dogCodeActions[i]["action"]);

//executeCodeBlocks();
    

const moveSouthBlock = {'action': "moveSouth", "amount": 0.5, 'type': "movement", "func" : script.api.moveSouth};
const moveNorthBlock = {'action': "moveNorth", "amount": 0.5, 'type': "movement", "func" : script.api.moveNorth};
const moveEastBlock = {'action': "moveEast", "amount": 0.5, 'type': "movement", "func" : script.api.moveWest};
const moveWestBlock = {'action': "moveWest", "amount": 0.5, 'type': "movement", "func" : script.api.moveEast};
const turnCCWBlock = {'action': "turnCCW", "amount": 90, "type": "rotation", "func" : script.api.turnCCW};
const turnCWBlock = {'action': "turnCW", "amount": 90, "type": "rotation", "func" : script.api.turnCW};
const moveUpBlock = {'action': "moveUp", "type": "movement", "func" : script.api.moveUp};





var commandIndex = -1;
//var commands = [ "moveSouth", "moveSouth", "turnCCW", "turnCW" ];
global.dogCodeCommands = [];

// move in square loop for 10 secs
for(var i = 0; i < 4; i++)
{
   
    global.dogCodeCommands.push(moveEastBlock);
//    global.dogCodeCommands.push(turnCWBlock);
    global.dogCodeCommands.push(moveNorthBlock);
//    global.dogCodeCommands.push(turnCCWBlock);
    global.dogCodeCommands.push(moveWestBlock);
//    global.dogCodeCommands.push(turnCCWBlock);
    global.dogCodeCommands.push(moveSouthBlock);
    
}


script.dog.timer = 0;
script.dog.angle = 0;

// update every frame event wont access command until event listed here
// configured to run on start
// later configure to run on some sort of visual/interactive cue trigger
script.createEvent("OnStartEvent").bind(function () {
	script.dog.startNextOperation();
});

script.createEvent("UpdateEvent").bind(function (eventData) {
    if(commandIndex >= global.dogCodeCommands.length)
        return;
    
    var amount = global.dogCodeCommands[commandIndex]["amount"];
    print("ACTION IS: " + global.dogCodeCommands[commandIndex]["action"]);
	switch (global.dogCodeCommands[commandIndex]["action"]) {
 
        
        case "moveNorth": script.dog.moveNorth(eventData, amount); break;
        case "moveSouth": script.dog.moveSouth(eventData, amount); break;
        case "moveEast": script.dog.moveEast(eventData, amount); break;
		case "moveWest": script.dog.moveWest(eventData, amount); break;
		case "turnCCW": script.dog.turnCCW(eventData, amount); break;
        case "turnCW": script.dog.turnCW(eventData, amount); break;
        
		default: print("what?");
	}
});

script.dog.startNextOperation = function() {
	script.dog.timer = 0;
	script.dog.angle = 0;
	commandIndex++;
}

script.dog.moveSouth = function move(eventData, amount) {
	script.dog.timer += eventData.getDeltaTime();
	// move operation
    
    var curPos = script.dog.getTransform().getWorldPosition();
    var endPos = curPos.add(new vec3(0,0,1));
    script.dog.getTransform().setLocalPosition(endPos);
    
	if (script.dog.timer >= amount) {
		script.dog.startNextOperation();
	}
}


script.dog.moveNorth = function move(eventData, amount) {
	script.dog.timer += eventData.getDeltaTime();
	// move operation
    
    var curPos = script.dog.getTransform().getWorldPosition();
    var endPos = curPos.add(new vec3(0,0,-1));
    script.dog.getTransform().setLocalPosition(endPos);
    
	if (script.dog.timer >= amount) {
		script.dog.startNextOperation();
	}
}

script.dog.moveEast = function move(eventData, amount) {
	script.dog.timer += eventData.getDeltaTime();
	// move operation
    
    var curPos = script.dog.getTransform().getWorldPosition();
    var endPos = curPos.add(new vec3(1,0,0));
    script.dog.getTransform().setLocalPosition(endPos);
    
	if (script.dog.timer >= amount) {
		script.dog.startNextOperation();
	}
}

script.dog.moveWest = function move(eventData, amount) {
	script.dog.timer += eventData.getDeltaTime();
	// move operation
    
    var curPos = script.dog.getTransform().getWorldPosition();
    var endPos = curPos.add(new vec3(-1,0,0));
    script.dog.getTransform().setLocalPosition(endPos);
    
	if (script.dog.timer >= amount) {
		script.dog.startNextOperation();
	}
}

//script.dog.turnCCW = function (eventData, amount) {
//	// adjust current angle (be sure to clamp so it's always the exact amount)
//	// set rotation
//    
//    var degrees = 20 * eventData.getDeltaTime();
//    
//    script.dog.angle += degrees;
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
//    var oldRotation = script.dog.getTransform().getWorldRotation();
//
//    // Get the new rotation by rotating the old rotation by rotationToApply
//    var newRotation = rotationToApply.multiply(oldRotation);
//
//    // Set the object's world rotation to the new rotation
//    script.dog.getTransform().setWorldRotation(newRotation);
//    
//    print("dog angle is: " + script.dog.angle + "end amount is " + amount);
//	if (script.dog.angle >= amount) {
//        print("STARTING NEXT OP, ANGLE REACHED")
//		script.dog.startNextOperation();
//	}
//}

script.dog.turnCW = function (eventData, amount) {
	// adjust current angle (be sure to clamp so it's always the exact amount)
	// set rotation
    
    var degrees = 20 * eventData.getDeltaTime();
    
    script.dog.angle += degrees;

    // Convert degrees to radians
    var radians = -1 * degrees * (Math.PI / 180);

    // Axis to rotate around
    var axis = vec3.up();

    // Rotation we will apply to the object's current rotation
    var rotationToApply = quat.angleAxis(radians, axis);

    // Get the object's current world rotation
    var oldRotation = script.dog.getTransform().getWorldRotation();
    
    var qRot = quat.quatFromEuler(0,0,0);

    // Get the new rotation by rotating the old rotation by rotationToApply
    var newRotation = rotationToApply.multiply(oldRotation);

    // Set the object's world rotation to the new rotation
    script.dog.getTransform().setWorldRotation(qRot);
    
    print("dog angle is: " + script.dog.angle + "end amount is " + amount);
	if (script.dog.angle >= amount) {
        print("STARTING NEXT OP, ANGLE REACHED")
		script.dog.startNextOperation();
	}
}



script.dog.turnCCW = function (eventData, amount) {
	// adjust current angle (be sure to clamp so it's always the exact amount)
	// set rotation
    
    var degrees = 50 * eventData.getDeltaTime();
    
    script.dog.angle += degrees;

    // Convert degrees to radians
    var radians = degrees * (Math.PI / 180);

    // Axis to rotate around
    var axis = vec3.up();

    // Rotation we will apply to the object's current rotation
    var rotationToApply = quat.angleAxis(radians, axis);

    // Get the object's current world rotation
    var oldRotation = script.dog.getTransform().getWorldRotation();

    // Get the new rotation by rotating the old rotation by rotationToApply
    var newRotation = rotationToApply.multiply(oldRotation);

    // Set the object's world rotation to the new rotation
    script.dog.getTransform().setWorldRotation(newRotation);
    
    print("cat angle is: " + script.dog.angle + "end amount is " + amount);
	if (script.dog.angle >= amount) {
        print("STARTING NEXT OP, ANGLE REACHED")
		script.dog.startNextOperation();
	}
}


//script.dog.turnCCW = function (eventData, amount) {
//	// adjust current angle (be sure to clamp so it's always the exact amount)
//	// set rotation
//    
//    
//    var looky = quat.lookAt(new vec3(1,0,0), vec3.up());
//    
//    
//    var degrees = 50 * eventData.getDeltaTime();
//    
//    script.dog.angle += degrees;
//
//    // Convert degrees to radians
//    var radians = degrees * (Math.PI / 180);
//    
//    var curRot = script.dog.getTransform().getLocalRotation();
//    
//     var curRotwee = script.dog.getTransform().getLocalRotation().toEulerAngles();
//    var newyy = curRot.multiplyVec3(vec3.up());
//    
//    
//    var pos = script.dog.getTransform().getWorldPosition();
//    
//    var rotToApply = quat.angleAxis(radians, new vec3(0, 1, 0));
//    
//    
//    script.dog.getTransform().setWorldRotation(newyy);
//
//    // Axis to rotate around
////    var axis = vec3.up();
////
////    // Rotation we will apply to the object's current rotation
////    var rotationToApply = quat.angleAxis(radians, axis);
////
////    // Get the object's current world rotation
////    var oldRotation = script.dog.getTransform().getWorldRotation();
////
////    // Get the new rotation by rotating the old rotation by rotationToApply
////    var newRotation = rotationToApply.multiply(oldRotation);
////
////    // Set the object's world rotation to the new rotation
////    script.dog.getTransform().setWorldRotation(newRotation);
//    
//    print("cat angle is: " + script.dog.angle + "end amount is " + amount);
//	if (script.dog.angle >= amount) {
//        print("STARTING NEXT OP, ANGLE REACHED")
//		script.dog.startNextOperation();
//	}
//}




