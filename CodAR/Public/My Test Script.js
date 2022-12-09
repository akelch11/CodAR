// -----JS CODE-----
// @input SceneObject Dog


print("Hello this is my script");

function onTapped(eventData)
{
    script.Dog.enabled = true;
    print("Tap Position: (" + eventData.getTapPosition().x + ", " + eventData.getTapPosition().y + ")");
    
}

var tapEvent = script.createEvent("TapEvent");
tapEvent.bind(onTapped);
