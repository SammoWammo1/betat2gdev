gdjs.CreditsCode = {};
gdjs.CreditsCode.localVariables = [];
gdjs.CreditsCode.idToCallbackMap = new Map();
gdjs.CreditsCode.GDEndObjects1_1final = [];

gdjs.CreditsCode.GDNewSpriteObjects1_1final = [];

gdjs.CreditsCode.GDNewTextObjects1= [];
gdjs.CreditsCode.GDNewTextObjects2= [];
gdjs.CreditsCode.GDNewSpriteObjects1= [];
gdjs.CreditsCode.GDNewSpriteObjects2= [];
gdjs.CreditsCode.GDEndObjects1= [];
gdjs.CreditsCode.GDEndObjects2= [];
gdjs.CreditsCode.GDlegalstuffObjects1= [];
gdjs.CreditsCode.GDlegalstuffObjects2= [];
gdjs.CreditsCode.GDCustomLobbiesObjects1= [];
gdjs.CreditsCode.GDCustomLobbiesObjects2= [];
gdjs.CreditsCode.GDOnlineCheckObjects1= [];
gdjs.CreditsCode.GDOnlineCheckObjects2= [];
gdjs.CreditsCode.GDCursorObjects1= [];
gdjs.CreditsCode.GDCursorObjects2= [];
gdjs.CreditsCode.GDBGObjects1= [];
gdjs.CreditsCode.GDBGObjects2= [];


gdjs.CreditsCode.mapOfGDgdjs_9546CreditsCode_9546GDEndObjects2Objects = Hashtable.newFrom({"End": gdjs.CreditsCode.GDEndObjects2});
gdjs.CreditsCode.mapOfGDgdjs_9546CreditsCode_9546GDNewSpriteObjects2Objects = Hashtable.newFrom({"NewSprite": gdjs.CreditsCode.GDNewSpriteObjects2});
gdjs.CreditsCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.CreditsCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.CreditsCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("legalstuff"), gdjs.CreditsCode.GDlegalstuffObjects1);
{for(var i = 0, len = gdjs.CreditsCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDNewTextObjects1[i].setY(gdjs.CreditsCode.GDNewTextObjects1[i].getY() - (2));
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDlegalstuffObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDlegalstuffObjects1[i].setY(gdjs.CreditsCode.GDlegalstuffObjects1[i].getY() - (2));
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDNewSpriteObjects1[i].setY(gdjs.CreditsCode.GDNewSpriteObjects1[i].getY() - (2));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.CreditsCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.CreditsCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDNewTextObjects1[i].getBehavior("Text").setText(gdjs.CreditsCode.GDNewTextObjects1[i].getVariables().getFromIndex(0).getAsString());
}
}
}

}


{

gdjs.CreditsCode.GDEndObjects1.length = 0;

gdjs.CreditsCode.GDNewSpriteObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.CreditsCode.GDEndObjects1_1final.length = 0;
gdjs.CreditsCode.GDNewSpriteObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("End"), gdjs.CreditsCode.GDEndObjects2);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.CreditsCode.GDNewSpriteObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.CreditsCode.mapOfGDgdjs_9546CreditsCode_9546GDEndObjects2Objects, gdjs.CreditsCode.mapOfGDgdjs_9546CreditsCode_9546GDNewSpriteObjects2Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.CreditsCode.GDEndObjects2.length; j < jLen ; ++j) {
        if ( gdjs.CreditsCode.GDEndObjects1_1final.indexOf(gdjs.CreditsCode.GDEndObjects2[j]) === -1 )
            gdjs.CreditsCode.GDEndObjects1_1final.push(gdjs.CreditsCode.GDEndObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.CreditsCode.GDNewSpriteObjects2.length; j < jLen ; ++j) {
        if ( gdjs.CreditsCode.GDNewSpriteObjects1_1final.indexOf(gdjs.CreditsCode.GDNewSpriteObjects2[j]) === -1 )
            gdjs.CreditsCode.GDNewSpriteObjects1_1final.push(gdjs.CreditsCode.GDNewSpriteObjects2[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Any_Button_pressed.func(runtimeScene, 1, null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.CreditsCode.GDEndObjects1_1final, gdjs.CreditsCode.GDEndObjects1);
gdjs.copyArray(gdjs.CreditsCode.GDNewSpriteObjects1_1final, gdjs.CreditsCode.GDNewSpriteObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


};

gdjs.CreditsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CreditsCode.GDNewTextObjects1.length = 0;
gdjs.CreditsCode.GDNewTextObjects2.length = 0;
gdjs.CreditsCode.GDNewSpriteObjects1.length = 0;
gdjs.CreditsCode.GDNewSpriteObjects2.length = 0;
gdjs.CreditsCode.GDEndObjects1.length = 0;
gdjs.CreditsCode.GDEndObjects2.length = 0;
gdjs.CreditsCode.GDlegalstuffObjects1.length = 0;
gdjs.CreditsCode.GDlegalstuffObjects2.length = 0;
gdjs.CreditsCode.GDCustomLobbiesObjects1.length = 0;
gdjs.CreditsCode.GDCustomLobbiesObjects2.length = 0;
gdjs.CreditsCode.GDOnlineCheckObjects1.length = 0;
gdjs.CreditsCode.GDOnlineCheckObjects2.length = 0;
gdjs.CreditsCode.GDCursorObjects1.length = 0;
gdjs.CreditsCode.GDCursorObjects2.length = 0;
gdjs.CreditsCode.GDBGObjects1.length = 0;
gdjs.CreditsCode.GDBGObjects2.length = 0;

gdjs.CreditsCode.eventsList0(runtimeScene);
gdjs.CreditsCode.GDNewTextObjects1.length = 0;
gdjs.CreditsCode.GDNewTextObjects2.length = 0;
gdjs.CreditsCode.GDNewSpriteObjects1.length = 0;
gdjs.CreditsCode.GDNewSpriteObjects2.length = 0;
gdjs.CreditsCode.GDEndObjects1.length = 0;
gdjs.CreditsCode.GDEndObjects2.length = 0;
gdjs.CreditsCode.GDlegalstuffObjects1.length = 0;
gdjs.CreditsCode.GDlegalstuffObjects2.length = 0;
gdjs.CreditsCode.GDCustomLobbiesObjects1.length = 0;
gdjs.CreditsCode.GDCustomLobbiesObjects2.length = 0;
gdjs.CreditsCode.GDOnlineCheckObjects1.length = 0;
gdjs.CreditsCode.GDOnlineCheckObjects2.length = 0;
gdjs.CreditsCode.GDCursorObjects1.length = 0;
gdjs.CreditsCode.GDCursorObjects2.length = 0;
gdjs.CreditsCode.GDBGObjects1.length = 0;
gdjs.CreditsCode.GDBGObjects2.length = 0;


return;

}

gdjs['CreditsCode'] = gdjs.CreditsCode;
