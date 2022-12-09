// -----JS CODE-----
// @input SceneObject sphere

var x_range = 10;
var y_range = 20;
var Z = -40;


function genRandom(range) {
    return range * Math.random();
}

function moveBall()
{
    print("in move func");
    var randX = genRandom(x_range);
    var randY = genRandom(y_range);
    var endPos = new vec3(randX, randY, Z);
    print("moved to (" + randX + "," + randY+")");
    global.tweenManager.setEndValue(script.sphere, "in_and_out", endPos);
    // last parameter is a call back function; this will trigger this function again
    global.tweenManager.startTween(script.sphere, "in_and_out", moveBall);
}
//
//moveBall();

function moveStraight()
{
    print("move straight function");
    
    var curPos = script.sphere.getTransform().getWorldPosition();
    print("Current position is " + curPos.x + " ," + curPos.y);
    var endPos = new vec3(curPos.x + 10, curPos.y + 10, curPos.z);
    global.tweenManager.setEndValue(script.sphere, "in_and_out", endPos);
    global.tweenManager.startTween(script.sphere, "in_and_out", moveStraight);
}


moveStraight();