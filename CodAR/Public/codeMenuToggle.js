// -----JS CODE-----
// @input SceneObject menu
var obj = script.getSceneObject();
print("toggled");
obj = obj.getChild(1);
obj.enabled = !obj.enabled;
print("toggled");