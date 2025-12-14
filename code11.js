gdjs.GamejoltCode = {};
gdjs.GamejoltCode.localVariables = [];
gdjs.GamejoltCode.idToCallbackMap = new Map();
gdjs.GamejoltCode.GDUsernameObjects1= [];
gdjs.GamejoltCode.GDUsernameObjects2= [];
gdjs.GamejoltCode.GDPasswordObjects1= [];
gdjs.GamejoltCode.GDPasswordObjects2= [];
gdjs.GamejoltCode.GDLoginObjects1= [];
gdjs.GamejoltCode.GDLoginObjects2= [];
gdjs.GamejoltCode.GDNewSpriteObjects1= [];
gdjs.GamejoltCode.GDNewSpriteObjects2= [];
gdjs.GamejoltCode.GDGAMEJOLTTEXTObjects1= [];
gdjs.GamejoltCode.GDGAMEJOLTTEXTObjects2= [];
gdjs.GamejoltCode.GDBackObjects1= [];
gdjs.GamejoltCode.GDBackObjects2= [];
gdjs.GamejoltCode.GDCustomLobbiesObjects1= [];
gdjs.GamejoltCode.GDCustomLobbiesObjects2= [];
gdjs.GamejoltCode.GDOnlineCheckObjects1= [];
gdjs.GamejoltCode.GDOnlineCheckObjects2= [];
gdjs.GamejoltCode.GDCursorObjects1= [];
gdjs.GamejoltCode.GDCursorObjects2= [];
gdjs.GamejoltCode.GDBGObjects1= [];
gdjs.GamejoltCode.GDBGObjects2= [];


gdjs.GamejoltCode.asyncCallback39721836 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GamejoltCode.localVariables);
gdjs.GamejoltCode.localVariables.length = 0;
}
gdjs.GamejoltCode.idToCallbackMap.set(39721836, gdjs.GamejoltCode.asyncCallback39721836);
gdjs.GamejoltCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Password"), gdjs.GamejoltCode.GDPasswordObjects1);
gdjs.copyArray(runtimeScene.getObjects("Username"), gdjs.GamejoltCode.GDUsernameObjects1);

{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GamejoltCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__GamejoltAPI__AuthenticateUser.func(runtimeScene, (( gdjs.GamejoltCode.GDUsernameObjects1.length === 0 ) ? "" :gdjs.GamejoltCode.GDUsernameObjects1[0].getBehavior("Text").getText()), (( gdjs.GamejoltCode.GDPasswordObjects1.length === 0 ) ? "" :gdjs.GamejoltCode.GDPasswordObjects1[0].getBehavior("Text").getText()), null), (runtimeScene) => (gdjs.GamejoltCode.asyncCallback39721836(runtimeScene, asyncObjectsList)), 39721836, asyncObjectsList);
}
}

}


};gdjs.GamejoltCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Login"), gdjs.GamejoltCode.GDLoginObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GamejoltCode.GDLoginObjects1.length;i<l;++i) {
    if ( gdjs.GamejoltCode.GDLoginObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GamejoltCode.GDLoginObjects1[k] = gdjs.GamejoltCode.GDLoginObjects1[i];
        ++k;
    }
}
gdjs.GamejoltCode.GDLoginObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GamejoltCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__GamejoltAPI__Authenticated.func(runtimeScene, null);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.GamejoltCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GamejoltCode.GDBackObjects1.length;i<l;++i) {
    if ( gdjs.GamejoltCode.GDBackObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GamejoltCode.GDBackObjects1[k] = gdjs.GamejoltCode.GDBackObjects1[i];
        ++k;
    }
}
gdjs.GamejoltCode.GDBackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
}
}

}


};

gdjs.GamejoltCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GamejoltCode.GDUsernameObjects1.length = 0;
gdjs.GamejoltCode.GDUsernameObjects2.length = 0;
gdjs.GamejoltCode.GDPasswordObjects1.length = 0;
gdjs.GamejoltCode.GDPasswordObjects2.length = 0;
gdjs.GamejoltCode.GDLoginObjects1.length = 0;
gdjs.GamejoltCode.GDLoginObjects2.length = 0;
gdjs.GamejoltCode.GDNewSpriteObjects1.length = 0;
gdjs.GamejoltCode.GDNewSpriteObjects2.length = 0;
gdjs.GamejoltCode.GDGAMEJOLTTEXTObjects1.length = 0;
gdjs.GamejoltCode.GDGAMEJOLTTEXTObjects2.length = 0;
gdjs.GamejoltCode.GDBackObjects1.length = 0;
gdjs.GamejoltCode.GDBackObjects2.length = 0;
gdjs.GamejoltCode.GDCustomLobbiesObjects1.length = 0;
gdjs.GamejoltCode.GDCustomLobbiesObjects2.length = 0;
gdjs.GamejoltCode.GDOnlineCheckObjects1.length = 0;
gdjs.GamejoltCode.GDOnlineCheckObjects2.length = 0;
gdjs.GamejoltCode.GDCursorObjects1.length = 0;
gdjs.GamejoltCode.GDCursorObjects2.length = 0;
gdjs.GamejoltCode.GDBGObjects1.length = 0;
gdjs.GamejoltCode.GDBGObjects2.length = 0;

gdjs.GamejoltCode.eventsList1(runtimeScene);
gdjs.GamejoltCode.GDUsernameObjects1.length = 0;
gdjs.GamejoltCode.GDUsernameObjects2.length = 0;
gdjs.GamejoltCode.GDPasswordObjects1.length = 0;
gdjs.GamejoltCode.GDPasswordObjects2.length = 0;
gdjs.GamejoltCode.GDLoginObjects1.length = 0;
gdjs.GamejoltCode.GDLoginObjects2.length = 0;
gdjs.GamejoltCode.GDNewSpriteObjects1.length = 0;
gdjs.GamejoltCode.GDNewSpriteObjects2.length = 0;
gdjs.GamejoltCode.GDGAMEJOLTTEXTObjects1.length = 0;
gdjs.GamejoltCode.GDGAMEJOLTTEXTObjects2.length = 0;
gdjs.GamejoltCode.GDBackObjects1.length = 0;
gdjs.GamejoltCode.GDBackObjects2.length = 0;
gdjs.GamejoltCode.GDCustomLobbiesObjects1.length = 0;
gdjs.GamejoltCode.GDCustomLobbiesObjects2.length = 0;
gdjs.GamejoltCode.GDOnlineCheckObjects1.length = 0;
gdjs.GamejoltCode.GDOnlineCheckObjects2.length = 0;
gdjs.GamejoltCode.GDCursorObjects1.length = 0;
gdjs.GamejoltCode.GDCursorObjects2.length = 0;
gdjs.GamejoltCode.GDBGObjects1.length = 0;
gdjs.GamejoltCode.GDBGObjects2.length = 0;


return;

}

gdjs['GamejoltCode'] = gdjs.GamejoltCode;
