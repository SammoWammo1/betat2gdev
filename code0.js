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
gdjs.SplashCode.GDCustomLobbiesObjects1= [];
gdjs.SplashCode.GDCustomLobbiesObjects2= [];
gdjs.SplashCode.GDOnlineCheckObjects1= [];
gdjs.SplashCode.GDOnlineCheckObjects2= [];
gdjs.SplashCode.GDCursorObjects1= [];
gdjs.SplashCode.GDCursorObjects2= [];


gdjs.SplashCode.asyncCallback22246860 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SplashCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
}
{gdjs.evtTools.network.enableMetrics(runtimeScene, false);
}
gdjs.SplashCode.localVariables.length = 0;
}
gdjs.SplashCode.idToCallbackMap.set(22246860, gdjs.SplashCode.asyncCallback22246860);
gdjs.SplashCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SplashCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.SplashCode.asyncCallback22246860(runtimeScene, asyncObjectsList)), 22246860, asyncObjectsList);
}
}

}


};gdjs.SplashCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.SplashCode.eventsList0(runtimeScene);} //End of subevents
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
gdjs.SplashCode.GDCustomLobbiesObjects1.length = 0;
gdjs.SplashCode.GDCustomLobbiesObjects2.length = 0;
gdjs.SplashCode.GDOnlineCheckObjects1.length = 0;
gdjs.SplashCode.GDOnlineCheckObjects2.length = 0;
gdjs.SplashCode.GDCursorObjects1.length = 0;
gdjs.SplashCode.GDCursorObjects2.length = 0;

gdjs.SplashCode.eventsList1(runtimeScene);
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
gdjs.SplashCode.GDCustomLobbiesObjects1.length = 0;
gdjs.SplashCode.GDCustomLobbiesObjects2.length = 0;
gdjs.SplashCode.GDOnlineCheckObjects1.length = 0;
gdjs.SplashCode.GDOnlineCheckObjects2.length = 0;
gdjs.SplashCode.GDCursorObjects1.length = 0;
gdjs.SplashCode.GDCursorObjects2.length = 0;


return;

}

gdjs['SplashCode'] = gdjs.SplashCode;
