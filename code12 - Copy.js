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
gdjs.GamejoltCode.GDLoginwithlastaccountObjects1= [];
gdjs.GamejoltCode.GDLoginwithlastaccountObjects2= [];
gdjs.GamejoltCode.GDNewBBTextObjects1= [];
gdjs.GamejoltCode.GDNewBBTextObjects2= [];
gdjs.GamejoltCode.GDNewButtonObjects1= [];
gdjs.GamejoltCode.GDNewButtonObjects2= [];
gdjs.GamejoltCode.GDNewTextObjects1= [];
gdjs.GamejoltCode.GDNewTextObjects2= [];
gdjs.GamejoltCode.GDCustomLobbiesObjects1= [];
gdjs.GamejoltCode.GDCustomLobbiesObjects2= [];
gdjs.GamejoltCode.GDOnlineCheckObjects1= [];
gdjs.GamejoltCode.GDOnlineCheckObjects2= [];
gdjs.GamejoltCode.GDCursorObjects1= [];
gdjs.GamejoltCode.GDCursorObjects2= [];
gdjs.GamejoltCode.GDBGObjects1= [];
gdjs.GamejoltCode.GDBGObjects2= [];


gdjs.GamejoltCode.asyncCallback55811460 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GamejoltCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Password"), gdjs.GamejoltCode.GDPasswordObjects2);
gdjs.copyArray(runtimeScene.getObjects("Username"), gdjs.GamejoltCode.GDUsernameObjects2);
{gdjs.evtTools.storage.writeStringInJSONFile("gjusername", "gamejolt", (( gdjs.GamejoltCode.GDUsernameObjects2.length === 0 ) ? "" :gdjs.GamejoltCode.GDUsernameObjects2[0].getBehavior("Text").getText()));
}
{gdjs.evtTools.storage.writeStringInJSONFile("gjgametoken", "gamejolt", (( gdjs.GamejoltCode.GDPasswordObjects2.length === 0 ) ? "" :gdjs.GamejoltCode.GDPasswordObjects2[0].getBehavior("Text").getText()));
}
gdjs.GamejoltCode.localVariables.length = 0;
}
gdjs.GamejoltCode.idToCallbackMap.set(55811460, gdjs.GamejoltCode.asyncCallback55811460);
gdjs.GamejoltCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Password"), gdjs.GamejoltCode.GDPasswordObjects1);
gdjs.copyArray(runtimeScene.getObjects("Username"), gdjs.GamejoltCode.GDUsernameObjects1);

{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GamejoltCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__GamejoltAPI__AuthenticateUser.func(runtimeScene, (( gdjs.GamejoltCode.GDUsernameObjects1.length === 0 ) ? "" :gdjs.GamejoltCode.GDUsernameObjects1[0].getBehavior("Text").getText()), (( gdjs.GamejoltCode.GDPasswordObjects1.length === 0 ) ? "" :gdjs.GamejoltCode.GDPasswordObjects1[0].getBehavior("Text").getText()), null), (runtimeScene) => (gdjs.GamejoltCode.asyncCallback55811460(runtimeScene, asyncObjectsList)), 55811460, asyncObjectsList);
}
}

}


};gdjs.GamejoltCode.asyncCallback55814764 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GamejoltCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
}
gdjs.GamejoltCode.localVariables.length = 0;
}
gdjs.GamejoltCode.idToCallbackMap.set(55814764, gdjs.GamejoltCode.asyncCallback55814764);
gdjs.GamejoltCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GamejoltCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.GamejoltCode.asyncCallback55814764(runtimeScene, asyncObjectsList)), 55814764, asyncObjectsList);
}
}

}


};gdjs.GamejoltCode.asyncCallback55816940 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GamejoltCode.localVariables);
gdjs.GamejoltCode.localVariables.length = 0;
}
gdjs.GamejoltCode.idToCallbackMap.set(55816940, gdjs.GamejoltCode.asyncCallback55816940);
gdjs.GamejoltCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GamejoltCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__GamejoltAPI__AuthenticateUser.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(1).getAsString(), null), (runtimeScene) => (gdjs.GamejoltCode.asyncCallback55816940(runtimeScene, asyncObjectsList)), 55816940, asyncObjectsList);
}
}

}


};gdjs.GamejoltCode.eventsList3 = function(runtimeScene) {

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

gdjs.copyArray(runtimeScene.getObjects("Loginwithlastaccount"), gdjs.GamejoltCode.GDLoginwithlastaccountObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GamejoltCode.GDLoginwithlastaccountObjects1.length;i<l;++i) {
    if ( gdjs.GamejoltCode.GDLoginwithlastaccountObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GamejoltCode.GDLoginwithlastaccountObjects1[k] = gdjs.GamejoltCode.GDLoginwithlastaccountObjects1[i];
        ++k;
    }
}
gdjs.GamejoltCode.GDLoginwithlastaccountObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Password"), gdjs.GamejoltCode.GDPasswordObjects1);
gdjs.copyArray(runtimeScene.getObjects("Username"), gdjs.GamejoltCode.GDUsernameObjects1);
{gdjs.evtTools.storage.readStringFromJSONFile("gjusername", "gamejolt", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}
{gdjs.evtTools.storage.readStringFromJSONFile("gjgametoken", "gamejolt", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}
{for(var i = 0, len = gdjs.GamejoltCode.GDUsernameObjects1.length ;i < len;++i) {
    gdjs.GamejoltCode.GDUsernameObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}
{for(var i = 0, len = gdjs.GamejoltCode.GDPasswordObjects1.length ;i < len;++i) {
    gdjs.GamejoltCode.GDPasswordObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__GamejoltAPI__Authenticated.func(runtimeScene, null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(55812484);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.GamejoltCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.GamejoltCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.GamejoltCode.GDNewSpriteObjects1[i].getBehavior("Animation").setAnimationName("yay");
}
}
{gdjs.evtTools.firebaseTools.auth.anonymSignIn(runtimeScene.getScene().getVariables().getFromIndex(2));
}

{ //Subevents
gdjs.GamejoltCode.eventsList1(runtimeScene);} //End of subevents
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
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Settings", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__GamejoltAPI__Session.func(runtimeScene, null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(55816196);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readStringFromJSONFile("gjusername", "gamejolt", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}
{gdjs.evtTools.storage.readStringFromJSONFile("gjgametoken", "gamejolt", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}

{ //Subevents
gdjs.GamejoltCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtsExt__GamejoltAPI__RegisterGame.func(runtimeScene, "1006705", "4bacaa725f848a06a458ba4e3690e6c1", null);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewButton"), gdjs.GamejoltCode.GDNewButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GamejoltCode.GDNewButtonObjects1.length;i<l;++i) {
    if ( gdjs.GamejoltCode.GDNewButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GamejoltCode.GDNewButtonObjects1[k] = gdjs.GamejoltCode.GDNewButtonObjects1[i];
        ++k;
    }
}
gdjs.GamejoltCode.GDNewButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("gamejolt.com", runtimeScene);
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.p2p.useDefaultBrokerServer();
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
gdjs.GamejoltCode.GDLoginwithlastaccountObjects1.length = 0;
gdjs.GamejoltCode.GDLoginwithlastaccountObjects2.length = 0;
gdjs.GamejoltCode.GDNewBBTextObjects1.length = 0;
gdjs.GamejoltCode.GDNewBBTextObjects2.length = 0;
gdjs.GamejoltCode.GDNewButtonObjects1.length = 0;
gdjs.GamejoltCode.GDNewButtonObjects2.length = 0;
gdjs.GamejoltCode.GDNewTextObjects1.length = 0;
gdjs.GamejoltCode.GDNewTextObjects2.length = 0;
gdjs.GamejoltCode.GDCustomLobbiesObjects1.length = 0;
gdjs.GamejoltCode.GDCustomLobbiesObjects2.length = 0;
gdjs.GamejoltCode.GDOnlineCheckObjects1.length = 0;
gdjs.GamejoltCode.GDOnlineCheckObjects2.length = 0;
gdjs.GamejoltCode.GDCursorObjects1.length = 0;
gdjs.GamejoltCode.GDCursorObjects2.length = 0;
gdjs.GamejoltCode.GDBGObjects1.length = 0;
gdjs.GamejoltCode.GDBGObjects2.length = 0;

gdjs.GamejoltCode.eventsList3(runtimeScene);
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
gdjs.GamejoltCode.GDLoginwithlastaccountObjects1.length = 0;
gdjs.GamejoltCode.GDLoginwithlastaccountObjects2.length = 0;
gdjs.GamejoltCode.GDNewBBTextObjects1.length = 0;
gdjs.GamejoltCode.GDNewBBTextObjects2.length = 0;
gdjs.GamejoltCode.GDNewButtonObjects1.length = 0;
gdjs.GamejoltCode.GDNewButtonObjects2.length = 0;
gdjs.GamejoltCode.GDNewTextObjects1.length = 0;
gdjs.GamejoltCode.GDNewTextObjects2.length = 0;
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
