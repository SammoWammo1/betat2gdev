gdjs.SplashCode = {};
gdjs.SplashCode.localVariables = [];
gdjs.SplashCode.idToCallbackMap = new Map();
gdjs.SplashCode.GDCursorObjects1_1final = [];

gdjs.SplashCode.GDNewButtonObjects1_1final = [];

gdjs.SplashCode.GDNewSpriteObjects1= [];
gdjs.SplashCode.GDNewSpriteObjects2= [];
gdjs.SplashCode.GDTextObjects1= [];
gdjs.SplashCode.GDTextObjects2= [];
gdjs.SplashCode.GDGamepadTextObjects1= [];
gdjs.SplashCode.GDGamepadTextObjects2= [];
gdjs.SplashCode.GDGamepadObjects1= [];
gdjs.SplashCode.GDGamepadObjects2= [];
gdjs.SplashCode.GDWarningObjects1= [];
gdjs.SplashCode.GDWarningObjects2= [];
gdjs.SplashCode.GDNewButtonObjects1= [];
gdjs.SplashCode.GDNewButtonObjects2= [];
gdjs.SplashCode.GDCustomLobbiesObjects1= [];
gdjs.SplashCode.GDCustomLobbiesObjects2= [];
gdjs.SplashCode.GDOnlineCheckObjects1= [];
gdjs.SplashCode.GDOnlineCheckObjects2= [];
gdjs.SplashCode.GDCursorObjects1= [];
gdjs.SplashCode.GDCursorObjects2= [];
gdjs.SplashCode.GDBGObjects1= [];
gdjs.SplashCode.GDBGObjects2= [];


gdjs.SplashCode.mapOfGDgdjs_9546SplashCode_9546GDCursorObjects2Objects = Hashtable.newFrom({"Cursor": gdjs.SplashCode.GDCursorObjects2});
gdjs.SplashCode.mapOfGDgdjs_9546SplashCode_9546GDNewButtonObjects2Objects = Hashtable.newFrom({"NewButton": gdjs.SplashCode.GDNewButtonObjects2});
gdjs.SplashCode.eventsList0 = function(runtimeScene) {

{

gdjs.SplashCode.GDCursorObjects1.length = 0;

gdjs.SplashCode.GDNewButtonObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.SplashCode.GDCursorObjects1_1final.length = 0;
gdjs.SplashCode.GDNewButtonObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewButton"), gdjs.SplashCode.GDNewButtonObjects2);
for (var i = 0, k = 0, l = gdjs.SplashCode.GDNewButtonObjects2.length;i<l;++i) {
    if ( gdjs.SplashCode.GDNewButtonObjects2[i].IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.SplashCode.GDNewButtonObjects2[k] = gdjs.SplashCode.GDNewButtonObjects2[i];
        ++k;
    }
}
gdjs.SplashCode.GDNewButtonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.SplashCode.GDNewButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.SplashCode.GDNewButtonObjects1_1final.indexOf(gdjs.SplashCode.GDNewButtonObjects2[j]) === -1 )
            gdjs.SplashCode.GDNewButtonObjects1_1final.push(gdjs.SplashCode.GDNewButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.SplashCode.GDCursorObjects2);
gdjs.copyArray(runtimeScene.getObjects("NewButton"), gdjs.SplashCode.GDNewButtonObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SplashCode.mapOfGDgdjs_9546SplashCode_9546GDCursorObjects2Objects, gdjs.SplashCode.mapOfGDgdjs_9546SplashCode_9546GDNewButtonObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__Gamepads__IsButtonJustPressed.func(runtimeScene, 1, "A", null);
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.SplashCode.GDCursorObjects2.length; j < jLen ; ++j) {
        if ( gdjs.SplashCode.GDCursorObjects1_1final.indexOf(gdjs.SplashCode.GDCursorObjects2[j]) === -1 )
            gdjs.SplashCode.GDCursorObjects1_1final.push(gdjs.SplashCode.GDCursorObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.SplashCode.GDNewButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.SplashCode.GDNewButtonObjects1_1final.indexOf(gdjs.SplashCode.GDNewButtonObjects2[j]) === -1 )
            gdjs.SplashCode.GDNewButtonObjects1_1final.push(gdjs.SplashCode.GDNewButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.SplashCode.GDCursorObjects1_1final, gdjs.SplashCode.GDCursorObjects1);
gdjs.copyArray(gdjs.SplashCode.GDNewButtonObjects1_1final, gdjs.SplashCode.GDNewButtonObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
}
{gdjs.evtTools.network.enableMetrics(runtimeScene, true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.network.enableMetrics(runtimeScene, false);
}
{gdjs.evtsExt__GamejoltAPI__RegisterGame.func(runtimeScene, "1006705", "4bacaa725f848a06a458ba4e3690e6c1", null);
}
{gdjs.evtTools.advancedWindow.setFullScreenable(true, runtimeScene);
}
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "F4");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.window.isFullScreen(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "wait") <= 0;
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "wait");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "F4");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.window.isFullScreen(runtimeScene));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "wait") <= 0;
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "wait");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "wait") >= 0.5;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "wait");
}
}

}


};

gdjs.SplashCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SplashCode.GDNewSpriteObjects1.length = 0;
gdjs.SplashCode.GDNewSpriteObjects2.length = 0;
gdjs.SplashCode.GDTextObjects1.length = 0;
gdjs.SplashCode.GDTextObjects2.length = 0;
gdjs.SplashCode.GDGamepadTextObjects1.length = 0;
gdjs.SplashCode.GDGamepadTextObjects2.length = 0;
gdjs.SplashCode.GDGamepadObjects1.length = 0;
gdjs.SplashCode.GDGamepadObjects2.length = 0;
gdjs.SplashCode.GDWarningObjects1.length = 0;
gdjs.SplashCode.GDWarningObjects2.length = 0;
gdjs.SplashCode.GDNewButtonObjects1.length = 0;
gdjs.SplashCode.GDNewButtonObjects2.length = 0;
gdjs.SplashCode.GDCustomLobbiesObjects1.length = 0;
gdjs.SplashCode.GDCustomLobbiesObjects2.length = 0;
gdjs.SplashCode.GDOnlineCheckObjects1.length = 0;
gdjs.SplashCode.GDOnlineCheckObjects2.length = 0;
gdjs.SplashCode.GDCursorObjects1.length = 0;
gdjs.SplashCode.GDCursorObjects2.length = 0;
gdjs.SplashCode.GDBGObjects1.length = 0;
gdjs.SplashCode.GDBGObjects2.length = 0;

gdjs.SplashCode.eventsList0(runtimeScene);
gdjs.SplashCode.GDNewSpriteObjects1.length = 0;
gdjs.SplashCode.GDNewSpriteObjects2.length = 0;
gdjs.SplashCode.GDTextObjects1.length = 0;
gdjs.SplashCode.GDTextObjects2.length = 0;
gdjs.SplashCode.GDGamepadTextObjects1.length = 0;
gdjs.SplashCode.GDGamepadTextObjects2.length = 0;
gdjs.SplashCode.GDGamepadObjects1.length = 0;
gdjs.SplashCode.GDGamepadObjects2.length = 0;
gdjs.SplashCode.GDWarningObjects1.length = 0;
gdjs.SplashCode.GDWarningObjects2.length = 0;
gdjs.SplashCode.GDNewButtonObjects1.length = 0;
gdjs.SplashCode.GDNewButtonObjects2.length = 0;
gdjs.SplashCode.GDCustomLobbiesObjects1.length = 0;
gdjs.SplashCode.GDCustomLobbiesObjects2.length = 0;
gdjs.SplashCode.GDOnlineCheckObjects1.length = 0;
gdjs.SplashCode.GDOnlineCheckObjects2.length = 0;
gdjs.SplashCode.GDCursorObjects1.length = 0;
gdjs.SplashCode.GDCursorObjects2.length = 0;
gdjs.SplashCode.GDBGObjects1.length = 0;
gdjs.SplashCode.GDBGObjects2.length = 0;


return;

}

gdjs['SplashCode'] = gdjs.SplashCode;
