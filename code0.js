gdjs.TitleCode = {};
gdjs.TitleCode.localVariables = [];
gdjs.TitleCode.idToCallbackMap = new Map();
gdjs.TitleCode.GDBlueButtonObjects1= [];
gdjs.TitleCode.GDBlueButtonObjects2= [];
gdjs.TitleCode.GDNewTextObjects1= [];
gdjs.TitleCode.GDNewTextObjects2= [];
gdjs.TitleCode.GDdescriptionObjects1= [];
gdjs.TitleCode.GDdescriptionObjects2= [];
gdjs.TitleCode.GDNewSpriteObjects1= [];
gdjs.TitleCode.GDNewSpriteObjects2= [];
gdjs.TitleCode.GDBlueButton2Objects1= [];
gdjs.TitleCode.GDBlueButton2Objects2= [];
gdjs.TitleCode.GDBlueButton3Objects1= [];
gdjs.TitleCode.GDBlueButton3Objects2= [];
gdjs.TitleCode.GDBlueButton4Objects1= [];
gdjs.TitleCode.GDBlueButton4Objects2= [];
gdjs.TitleCode.GDCustomLobbiesObjects1= [];
gdjs.TitleCode.GDCustomLobbiesObjects2= [];


gdjs.TitleCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.preloadSound(runtimeScene, "ballbounce.mp3");
}
{gdjs.evtTools.sound.preloadSound(runtimeScene, "pointscored.mp3");
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButton"), gdjs.TitleCode.GDBlueButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDBlueButtonObjects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDBlueButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDBlueButtonObjects1[k] = gdjs.TitleCode.GDBlueButtonObjects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDBlueButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.preloadSound(runtimeScene, "ballbounce.mp3");
}
{gdjs.evtTools.sound.preloadSound(runtimeScene, "pointscored.mp3");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButton3"), gdjs.TitleCode.GDBlueButton3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDBlueButton3Objects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDBlueButton3Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDBlueButton3Objects1[k] = gdjs.TitleCode.GDBlueButton3Objects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDBlueButton3Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.fileSystem.deleteFile("save.json", runtimeScene.getScene().getVariables().getFromIndex(0));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButton2"), gdjs.TitleCode.GDBlueButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDBlueButton2Objects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDBlueButton2Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDBlueButton2Objects1[k] = gdjs.TitleCode.GDBlueButton2Objects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDBlueButton2Objects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Campaign", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButton4"), gdjs.TitleCode.GDBlueButton4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDBlueButton4Objects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDBlueButton4Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDBlueButton4Objects1[k] = gdjs.TitleCode.GDBlueButton4Objects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDBlueButton4Objects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Campaign", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.TitleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TitleCode.GDBlueButtonObjects1.length = 0;
gdjs.TitleCode.GDBlueButtonObjects2.length = 0;
gdjs.TitleCode.GDNewTextObjects1.length = 0;
gdjs.TitleCode.GDNewTextObjects2.length = 0;
gdjs.TitleCode.GDdescriptionObjects1.length = 0;
gdjs.TitleCode.GDdescriptionObjects2.length = 0;
gdjs.TitleCode.GDNewSpriteObjects1.length = 0;
gdjs.TitleCode.GDNewSpriteObjects2.length = 0;
gdjs.TitleCode.GDBlueButton2Objects1.length = 0;
gdjs.TitleCode.GDBlueButton2Objects2.length = 0;
gdjs.TitleCode.GDBlueButton3Objects1.length = 0;
gdjs.TitleCode.GDBlueButton3Objects2.length = 0;
gdjs.TitleCode.GDBlueButton4Objects1.length = 0;
gdjs.TitleCode.GDBlueButton4Objects2.length = 0;
gdjs.TitleCode.GDCustomLobbiesObjects1.length = 0;
gdjs.TitleCode.GDCustomLobbiesObjects2.length = 0;

gdjs.TitleCode.eventsList0(runtimeScene);
gdjs.TitleCode.GDBlueButtonObjects1.length = 0;
gdjs.TitleCode.GDBlueButtonObjects2.length = 0;
gdjs.TitleCode.GDNewTextObjects1.length = 0;
gdjs.TitleCode.GDNewTextObjects2.length = 0;
gdjs.TitleCode.GDdescriptionObjects1.length = 0;
gdjs.TitleCode.GDdescriptionObjects2.length = 0;
gdjs.TitleCode.GDNewSpriteObjects1.length = 0;
gdjs.TitleCode.GDNewSpriteObjects2.length = 0;
gdjs.TitleCode.GDBlueButton2Objects1.length = 0;
gdjs.TitleCode.GDBlueButton2Objects2.length = 0;
gdjs.TitleCode.GDBlueButton3Objects1.length = 0;
gdjs.TitleCode.GDBlueButton3Objects2.length = 0;
gdjs.TitleCode.GDBlueButton4Objects1.length = 0;
gdjs.TitleCode.GDBlueButton4Objects2.length = 0;
gdjs.TitleCode.GDCustomLobbiesObjects1.length = 0;
gdjs.TitleCode.GDCustomLobbiesObjects2.length = 0;


return;

}

gdjs['TitleCode'] = gdjs.TitleCode;
