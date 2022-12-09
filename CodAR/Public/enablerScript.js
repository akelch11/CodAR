// -----JS CODE-----
// @input SceneObject cat
// @input SceneObject catCodeMenu


print("CALLING ENABLER SCRIPT");
var sceneObj = script.getSceneObject();
//var comps = script.getSceneObject().getComponents("SceneObject");

var catSphere = "";
for(var i=0; i<sceneObj.getChildrenCount(); i++)
{
    var child = sceneObj.getChild(i);
    print(child.name);
    if (child.name == "codeMenu")
        child.enabled = !child.enabled;
        
}

//sceneObj.enabled = false;
print("TOGGLED SCENE COMPONENT");


