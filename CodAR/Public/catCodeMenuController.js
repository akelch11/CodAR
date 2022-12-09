// -----JS CODE-----
// @input Component.Text text
// @input string myText

script.text.text = "TESTYYYY";


script.createEvent("UpdateEvent").bind(function() {
    
    var obj = script.getSceneObject();
//    print(script.getSceneObject().getChildrenCount());
//    script.catCodeMenu.text = "";
    var codeText = "";
    for(var i = 0; i <Math.min(global.catCodeCommands.length, 10); i++)
    {
        var block_type = global.catCodeCommands[i]["action"]+"()";
        codeText += (block_type + "\n");
    }
  

    script.text.text = codeText;
//    
})