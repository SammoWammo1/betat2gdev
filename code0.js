gdjs.SplashCode = {};
gdjs.SplashCode.localVariables = [];
gdjs.SplashCode.idToCallbackMap = new Map();
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


gdjs.SplashCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewButton"), gdjs.SplashCode.GDNewButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SplashCode.GDNewButtonObjects1.length;i<l;++i) {
    if ( gdjs.SplashCode.GDNewButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.SplashCode.GDNewButtonObjects1[k] = gdjs.SplashCode.GDNewButtonObjects1[i];
        ++k;
    }
}
gdjs.SplashCode.GDNewButtonObjects1.length = k;
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


return;

}

gdjs['SplashCode'] = gdjs.SplashCode;
