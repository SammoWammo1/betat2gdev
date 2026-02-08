gdjs.MainMenuCode = {};
gdjs.MainMenuCode.localVariables = [];
gdjs.MainMenuCode.idToCallbackMap = new Map();
gdjs.MainMenuCode.GDMultiplayerObjects1= [];
gdjs.MainMenuCode.GDMultiplayerObjects2= [];
gdjs.MainMenuCode.GDMultiplayerObjects3= [];
gdjs.MainMenuCode.GDNewTextObjects1= [];
gdjs.MainMenuCode.GDNewTextObjects2= [];
gdjs.MainMenuCode.GDNewTextObjects3= [];
gdjs.MainMenuCode.GDdescriptionObjects1= [];
gdjs.MainMenuCode.GDdescriptionObjects2= [];
gdjs.MainMenuCode.GDdescriptionObjects3= [];
gdjs.MainMenuCode.GDNewSpriteObjects1= [];
gdjs.MainMenuCode.GDNewSpriteObjects2= [];
gdjs.MainMenuCode.GDNewSpriteObjects3= [];
gdjs.MainMenuCode.GDCampaignStartObjects1= [];
gdjs.MainMenuCode.GDCampaignStartObjects2= [];
gdjs.MainMenuCode.GDCampaignStartObjects3= [];
gdjs.MainMenuCode.GDBlueButton3Objects1= [];
gdjs.MainMenuCode.GDBlueButton3Objects2= [];
gdjs.MainMenuCode.GDBlueButton3Objects3= [];
gdjs.MainMenuCode.GDCampaignLoadObjects1= [];
gdjs.MainMenuCode.GDCampaignLoadObjects2= [];
gdjs.MainMenuCode.GDCampaignLoadObjects3= [];
gdjs.MainMenuCode.GDverObjects1= [];
gdjs.MainMenuCode.GDverObjects2= [];
gdjs.MainMenuCode.GDverObjects3= [];
gdjs.MainMenuCode.GDLobbyMenuObjects1= [];
gdjs.MainMenuCode.GDLobbyMenuObjects2= [];
gdjs.MainMenuCode.GDLobbyMenuObjects3= [];
gdjs.MainMenuCode.GDvernameObjects1= [];
gdjs.MainMenuCode.GDvernameObjects2= [];
gdjs.MainMenuCode.GDvernameObjects3= [];
gdjs.MainMenuCode.GDdiscordObjects1= [];
gdjs.MainMenuCode.GDdiscordObjects2= [];
gdjs.MainMenuCode.GDdiscordObjects3= [];
gdjs.MainMenuCode.GDdiscordtextObjects1= [];
gdjs.MainMenuCode.GDdiscordtextObjects2= [];
gdjs.MainMenuCode.GDdiscordtextObjects3= [];
gdjs.MainMenuCode.GDCampaignObjects1= [];
gdjs.MainMenuCode.GDCampaignObjects2= [];
gdjs.MainMenuCode.GDCampaignObjects3= [];
gdjs.MainMenuCode.GDExitObjects1= [];
gdjs.MainMenuCode.GDExitObjects2= [];
gdjs.MainMenuCode.GDExitObjects3= [];
gdjs.MainMenuCode.GDBackObjects1= [];
gdjs.MainMenuCode.GDBackObjects2= [];
gdjs.MainMenuCode.GDBackObjects3= [];
gdjs.MainMenuCode.GDBGObjects1= [];
gdjs.MainMenuCode.GDBGObjects2= [];
gdjs.MainMenuCode.GDBGObjects3= [];
gdjs.MainMenuCode.GDScoreDisplayObjects1= [];
gdjs.MainMenuCode.GDScoreDisplayObjects2= [];
gdjs.MainMenuCode.GDScoreDisplayObjects3= [];
gdjs.MainMenuCode.GDNewSprite2Objects1= [];
gdjs.MainMenuCode.GDNewSprite2Objects2= [];
gdjs.MainMenuCode.GDNewSprite2Objects3= [];
gdjs.MainMenuCode.GDNew3DBoxObjects1= [];
gdjs.MainMenuCode.GDNew3DBoxObjects2= [];
gdjs.MainMenuCode.GDNew3DBoxObjects3= [];
gdjs.MainMenuCode.GDRacketObjects1= [];
gdjs.MainMenuCode.GDRacketObjects2= [];
gdjs.MainMenuCode.GDRacketObjects3= [];
gdjs.MainMenuCode.GDSettingsObjects1= [];
gdjs.MainMenuCode.GDSettingsObjects2= [];
gdjs.MainMenuCode.GDSettingsObjects3= [];
gdjs.MainMenuCode.GDNewSprite3Objects1= [];
gdjs.MainMenuCode.GDNewSprite3Objects2= [];
gdjs.MainMenuCode.GDNewSprite3Objects3= [];
gdjs.MainMenuCode.GDBossinfoObjects1= [];
gdjs.MainMenuCode.GDBossinfoObjects2= [];
gdjs.MainMenuCode.GDBossinfoObjects3= [];
gdjs.MainMenuCode.GDonlineplayhereObjects1= [];
gdjs.MainMenuCode.GDonlineplayhereObjects2= [];
gdjs.MainMenuCode.GDonlineplayhereObjects3= [];
gdjs.MainMenuCode.GDiconObjects1= [];
gdjs.MainMenuCode.GDiconObjects2= [];
gdjs.MainMenuCode.GDiconObjects3= [];
gdjs.MainMenuCode.GDSelectionObjects1= [];
gdjs.MainMenuCode.GDSelectionObjects2= [];
gdjs.MainMenuCode.GDSelectionObjects3= [];
gdjs.MainMenuCode.GDSelection2Objects1= [];
gdjs.MainMenuCode.GDSelection2Objects2= [];
gdjs.MainMenuCode.GDSelection2Objects3= [];
gdjs.MainMenuCode.GDNewText2Objects1= [];
gdjs.MainMenuCode.GDNewText2Objects2= [];
gdjs.MainMenuCode.GDNewText2Objects3= [];
gdjs.MainMenuCode.GDOnlineErrorObjects1= [];
gdjs.MainMenuCode.GDOnlineErrorObjects2= [];
gdjs.MainMenuCode.GDOnlineErrorObjects3= [];
gdjs.MainMenuCode.GDsupportericonObjects1= [];
gdjs.MainMenuCode.GDsupportericonObjects2= [];
gdjs.MainMenuCode.GDsupportericonObjects3= [];
gdjs.MainMenuCode.GDSupporterTextObjects1= [];
gdjs.MainMenuCode.GDSupporterTextObjects2= [];
gdjs.MainMenuCode.GDSupporterTextObjects3= [];
gdjs.MainMenuCode.GDCustomLobbiesObjects1= [];
gdjs.MainMenuCode.GDCustomLobbiesObjects2= [];
gdjs.MainMenuCode.GDCustomLobbiesObjects3= [];
gdjs.MainMenuCode.GDOnlineCheckObjects1= [];
gdjs.MainMenuCode.GDOnlineCheckObjects2= [];
gdjs.MainMenuCode.GDOnlineCheckObjects3= [];
gdjs.MainMenuCode.GDCursorObjects1= [];
gdjs.MainMenuCode.GDCursorObjects2= [];
gdjs.MainMenuCode.GDCursorObjects3= [];
gdjs.MainMenuCode.GDBGObjects1= [];
gdjs.MainMenuCode.GDBGObjects2= [];
gdjs.MainMenuCode.GDBGObjects3= [];


gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__GamejoltAPI__Authenticated.func(runtimeScene, null);
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.auth.anonymSignIn(runtimeScene.getScene().getVariables().getFromIndex(0));
}
}

}


};gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCursorObjects1Objects = Hashtable.newFrom({"Cursor": gdjs.MainMenuCode.GDCursorObjects1});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDMultiplayerObjects1Objects = Hashtable.newFrom({"Multiplayer": gdjs.MainMenuCode.GDMultiplayerObjects1});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCursorObjects1Objects = Hashtable.newFrom({"Cursor": gdjs.MainMenuCode.GDCursorObjects1});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCampaignStartObjects1Objects = Hashtable.newFrom({"CampaignStart": gdjs.MainMenuCode.GDCampaignStartObjects1});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCursorObjects1Objects = Hashtable.newFrom({"Cursor": gdjs.MainMenuCode.GDCursorObjects1});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCampaignLoadObjects1Objects = Hashtable.newFrom({"CampaignLoad": gdjs.MainMenuCode.GDCampaignLoadObjects1});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCursorObjects1Objects = Hashtable.newFrom({"Cursor": gdjs.MainMenuCode.GDCursorObjects1});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCampaignObjects1Objects = Hashtable.newFrom({"Campaign": gdjs.MainMenuCode.GDCampaignObjects1});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCursorObjects1Objects = Hashtable.newFrom({"Cursor": gdjs.MainMenuCode.GDCursorObjects1});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.MainMenuCode.GDBackObjects1});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCursorObjects1Objects = Hashtable.newFrom({"Cursor": gdjs.MainMenuCode.GDCursorObjects1});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDExitObjects1Objects = Hashtable.newFrom({"Exit": gdjs.MainMenuCode.GDExitObjects1});
gdjs.MainMenuCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MainMenuCode.GDSelectionObjects1, gdjs.MainMenuCode.GDSelectionObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDSelectionObjects2.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDSelectionObjects2[i].getVariableNumber(gdjs.MainMenuCode.GDSelectionObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDSelectionObjects2[k] = gdjs.MainMenuCode.GDSelectionObjects2[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDSelectionObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Selection2"), gdjs.MainMenuCode.GDSelection2Objects2);
{for(var i = 0, len = gdjs.MainMenuCode.GDSelection2Objects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSelection2Objects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(5).getChild(0).getAsString());
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDSelection2Objects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSelection2Objects2[i].returnVariable(gdjs.MainMenuCode.GDSelection2Objects2[i].getVariables().getFromIndex(0)).setNumber(0);
}
}
}

}


{

gdjs.copyArray(gdjs.MainMenuCode.GDSelectionObjects1, gdjs.MainMenuCode.GDSelectionObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDSelectionObjects2.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDSelectionObjects2[i].getVariableNumber(gdjs.MainMenuCode.GDSelectionObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDSelectionObjects2[k] = gdjs.MainMenuCode.GDSelectionObjects2[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDSelectionObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Selection2"), gdjs.MainMenuCode.GDSelection2Objects2);
{for(var i = 0, len = gdjs.MainMenuCode.GDSelection2Objects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSelection2Objects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(0).getAsString());
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDSelection2Objects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSelection2Objects2[i].returnVariable(gdjs.MainMenuCode.GDSelection2Objects2[i].getVariables().getFromIndex(0)).setNumber(0);
}
}
}

}


{

gdjs.copyArray(gdjs.MainMenuCode.GDSelectionObjects1, gdjs.MainMenuCode.GDSelectionObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDSelectionObjects2.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDSelectionObjects2[i].getVariableNumber(gdjs.MainMenuCode.GDSelectionObjects2[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDSelectionObjects2[k] = gdjs.MainMenuCode.GDSelectionObjects2[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDSelectionObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Selection2"), gdjs.MainMenuCode.GDSelection2Objects2);
{for(var i = 0, len = gdjs.MainMenuCode.GDSelection2Objects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSelection2Objects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(7).getChild(0).getAsString());
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDSelection2Objects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSelection2Objects2[i].returnVariable(gdjs.MainMenuCode.GDSelection2Objects2[i].getVariables().getFromIndex(0)).setNumber(0);
}
}
}

}


{

/* Reuse gdjs.MainMenuCode.GDSelectionObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDSelectionObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDSelectionObjects1[i].getVariableNumber(gdjs.MainMenuCode.GDSelectionObjects1[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDSelectionObjects1[k] = gdjs.MainMenuCode.GDSelectionObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDSelectionObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Selection2"), gdjs.MainMenuCode.GDSelection2Objects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDSelection2Objects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSelection2Objects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(8).getChild(0).getAsString());
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDSelection2Objects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSelection2Objects1[i].returnVariable(gdjs.MainMenuCode.GDSelection2Objects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}
}

}


};gdjs.MainMenuCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MainMenuCode.GDSelectionObjects1, gdjs.MainMenuCode.GDSelectionObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDSelectionObjects2.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDSelectionObjects2[i].getVariableNumber(gdjs.MainMenuCode.GDSelectionObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDSelectionObjects2[k] = gdjs.MainMenuCode.GDSelectionObjects2[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDSelectionObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Selection2"), gdjs.MainMenuCode.GDSelection2Objects2);
{for(var i = 0, len = gdjs.MainMenuCode.GDSelection2Objects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSelection2Objects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(5).getChild(0).getAsString());
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDSelection2Objects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSelection2Objects2[i].returnVariable(gdjs.MainMenuCode.GDSelection2Objects2[i].getVariables().getFromIndex(0)).setNumber(0);
}
}
}

}


{

gdjs.copyArray(gdjs.MainMenuCode.GDSelectionObjects1, gdjs.MainMenuCode.GDSelectionObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDSelectionObjects2.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDSelectionObjects2[i].getVariableNumber(gdjs.MainMenuCode.GDSelectionObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDSelectionObjects2[k] = gdjs.MainMenuCode.GDSelectionObjects2[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDSelectionObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Selection2"), gdjs.MainMenuCode.GDSelection2Objects2);
{for(var i = 0, len = gdjs.MainMenuCode.GDSelection2Objects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSelection2Objects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(0).getAsString());
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDSelection2Objects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSelection2Objects2[i].returnVariable(gdjs.MainMenuCode.GDSelection2Objects2[i].getVariables().getFromIndex(0)).setNumber(0);
}
}
}

}


{

gdjs.copyArray(gdjs.MainMenuCode.GDSelectionObjects1, gdjs.MainMenuCode.GDSelectionObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDSelectionObjects2.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDSelectionObjects2[i].getVariableNumber(gdjs.MainMenuCode.GDSelectionObjects2[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDSelectionObjects2[k] = gdjs.MainMenuCode.GDSelectionObjects2[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDSelectionObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Selection2"), gdjs.MainMenuCode.GDSelection2Objects2);
{for(var i = 0, len = gdjs.MainMenuCode.GDSelection2Objects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSelection2Objects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(7).getChild(0).getAsString());
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDSelection2Objects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSelection2Objects2[i].returnVariable(gdjs.MainMenuCode.GDSelection2Objects2[i].getVariables().getFromIndex(0)).setNumber(0);
}
}
}

}


{

/* Reuse gdjs.MainMenuCode.GDSelectionObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDSelectionObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDSelectionObjects1[i].getVariableNumber(gdjs.MainMenuCode.GDSelectionObjects1[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDSelectionObjects1[k] = gdjs.MainMenuCode.GDSelectionObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDSelectionObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Selection2"), gdjs.MainMenuCode.GDSelection2Objects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDSelection2Objects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSelection2Objects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(8).getChild(0).getAsString());
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDSelection2Objects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSelection2Objects1[i].returnVariable(gdjs.MainMenuCode.GDSelection2Objects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}
}

}


};gdjs.MainMenuCode.asyncCallback51429628 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainMenuCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "characterselect", false);
}
gdjs.MainMenuCode.localVariables.length = 0;
}
gdjs.MainMenuCode.idToCallbackMap.set(51429628, gdjs.MainMenuCode.asyncCallback51429628);
gdjs.MainMenuCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainMenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.MainMenuCode.asyncCallback51429628(runtimeScene, asyncObjectsList)), 51429628, asyncObjectsList);
}
}

}


};gdjs.MainMenuCode.asyncCallback51432948 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainMenuCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "lobby", false);
}
gdjs.MainMenuCode.localVariables.length = 0;
}
gdjs.MainMenuCode.idToCallbackMap.set(51432948, gdjs.MainMenuCode.asyncCallback51432948);
gdjs.MainMenuCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainMenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.MainMenuCode.asyncCallback51432948(runtimeScene, asyncObjectsList)), 51432948, asyncObjectsList);
}
}

}


};gdjs.MainMenuCode.asyncCallback51434916 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainMenuCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("OnlineError"), gdjs.MainMenuCode.GDOnlineErrorObjects2);

{for(var i = 0, len = gdjs.MainMenuCode.GDOnlineErrorObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDOnlineErrorObjects2[i].hide();
}
}
gdjs.MainMenuCode.localVariables.length = 0;
}
gdjs.MainMenuCode.idToCallbackMap.set(51434916, gdjs.MainMenuCode.asyncCallback51434916);
gdjs.MainMenuCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainMenuCode.localVariables);
for (const obj of gdjs.MainMenuCode.GDOnlineErrorObjects1) asyncObjectsList.addObject("OnlineError", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.MainMenuCode.asyncCallback51434916(runtimeScene, asyncObjectsList)), 51434916, asyncObjectsList);
}
}

}


};gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCursorObjects1Objects = Hashtable.newFrom({"Cursor": gdjs.MainMenuCode.GDCursorObjects1});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCampaignStartObjects1Objects = Hashtable.newFrom({"CampaignStart": gdjs.MainMenuCode.GDCampaignStartObjects1});
gdjs.MainMenuCode.asyncCallback51438028 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainMenuCode.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "difficultyselector", false);
}
gdjs.MainMenuCode.localVariables.length = 0;
}
gdjs.MainMenuCode.idToCallbackMap.set(51438028, gdjs.MainMenuCode.asyncCallback51438028);
gdjs.MainMenuCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainMenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.MainMenuCode.asyncCallback51438028(runtimeScene, asyncObjectsList)), 51438028, asyncObjectsList);
}
}

}


};gdjs.MainMenuCode.asyncCallback51440092 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainMenuCode.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LoadingCampaign", false);
}
gdjs.MainMenuCode.localVariables.length = 0;
}
gdjs.MainMenuCode.idToCallbackMap.set(51440092, gdjs.MainMenuCode.asyncCallback51440092);
gdjs.MainMenuCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainMenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.MainMenuCode.asyncCallback51440092(runtimeScene, asyncObjectsList)), 51440092, asyncObjectsList);
}
}

}


};gdjs.MainMenuCode.asyncCallback15859156 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainMenuCode.localVariables);
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Settings");
}
gdjs.MainMenuCode.localVariables.length = 0;
}
gdjs.MainMenuCode.idToCallbackMap.set(15859156, gdjs.MainMenuCode.asyncCallback15859156);
gdjs.MainMenuCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainMenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.MainMenuCode.asyncCallback15859156(runtimeScene, asyncObjectsList)), 15859156, asyncObjectsList);
}
}

}


};gdjs.MainMenuCode.asyncCallback19904060 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainMenuCode.localVariables);
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
gdjs.MainMenuCode.localVariables.length = 0;
}
gdjs.MainMenuCode.idToCallbackMap.set(19904060, gdjs.MainMenuCode.asyncCallback19904060);
gdjs.MainMenuCode.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainMenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.MainMenuCode.asyncCallback19904060(runtimeScene, asyncObjectsList)), 19904060, asyncObjectsList);
}
}

}


};gdjs.MainMenuCode.eventsList10 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(9).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SupporterText"), gdjs.MainMenuCode.GDSupporterTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("supportericon"), gdjs.MainMenuCode.GDsupportericonObjects2);
{for(var i = 0, len = gdjs.MainMenuCode.GDsupportericonObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDsupportericonObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDSupporterTextObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSupporterTextObjects2[i].hide(false);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(20).setBoolean(true);
}
}

}


};gdjs.MainMenuCode.asyncCallback21970396 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainMenuCode.localVariables);

{ //Subevents
gdjs.MainMenuCode.eventsList10(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.MainMenuCode.localVariables.length = 0;
}
gdjs.MainMenuCode.idToCallbackMap.set(21970396, gdjs.MainMenuCode.asyncCallback21970396);
gdjs.MainMenuCode.eventsList11 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainMenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.MainMenuCode.asyncCallback21970396(runtimeScene, asyncObjectsList)), 21970396, asyncObjectsList);
}
}

}


};gdjs.MainMenuCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.MainMenuCode.GDCursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("OnlineError"), gdjs.MainMenuCode.GDOnlineErrorObjects1);
gdjs.copyArray(runtimeScene.getObjects("SupporterText"), gdjs.MainMenuCode.GDSupporterTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("supportericon"), gdjs.MainMenuCode.GDsupportericonObjects1);
gdjs.copyArray(runtimeScene.getObjects("ver"), gdjs.MainMenuCode.GDverObjects1);
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Title.mp3", 0, true, 100, 1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "buttonduration");
}
{gdjs.evtTools.sound.preloadSound(runtimeScene, "ballbounce.mp3");
}
{gdjs.evtTools.sound.preloadSound(runtimeScene, "pointscored.mp3");
}
{gdjs.evtTools.sound.preloadSound(runtimeScene, "dmg");
}
{gdjs.evtTools.sound.preloadSound(runtimeScene, "dmg2");
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
{for(var i = 0, len = gdjs.MainMenuCode.GDverObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDverObjects1[i].getBehavior("Text").setText("v" + gdjs.evtsExt__GetPropertiesData__ReturnGameVersion.func(runtimeScene, null));
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDCursorObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCursorObjects1[i].hide(false);
}
}
{gdjs.evtTools.network.enableMetrics(runtimeScene, true);
}
{for(var i = 0, len = gdjs.MainMenuCode.GDOnlineErrorObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDOnlineErrorObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDsupportericonObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDsupportericonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDSupporterTextObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSupporterTextObjects1[i].hide();
}
}

{ //Subevents
gdjs.MainMenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Multiplayer"), gdjs.MainMenuCode.GDMultiplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDMultiplayerObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDMultiplayerObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDMultiplayerObjects1[k] = gdjs.MainMenuCode.GDMultiplayerObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDMultiplayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "buttonduration") >= 0.5;
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.preloadSound(runtimeScene, "ballbounce.mp3");
}
{gdjs.evtTools.sound.preloadSound(runtimeScene, "hitball.mp3");
}
{gdjs.evtTools.sound.preloadSound(runtimeScene, "pointscored.mp3");
}
{gdjs.evtTools.sound.preloadSound(runtimeScene, "dmg");
}
{gdjs.evtTools.sound.preloadSound(runtimeScene, "lowhp");
}
{gdjs.evtTools.sound.preloadMusic(runtimeScene, "TennisBattleTheme1.mp3");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MultiplayerTitle", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Settings"), gdjs.MainMenuCode.GDSettingsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDSettingsObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDSettingsObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDSettingsObjects1[k] = gdjs.MainMenuCode.GDSettingsObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDSettingsObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Settings");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.MainMenuCode.GDExitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDExitObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDExitObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDExitObjects1[k] = gdjs.MainMenuCode.GDExitObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDExitObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "buttonduration") >= 0.5;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButton3"), gdjs.MainMenuCode.GDBlueButton3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDBlueButton3Objects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDBlueButton3Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDBlueButton3Objects1[k] = gdjs.MainMenuCode.GDBlueButton3Objects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDBlueButton3Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.fileSystem.deleteFile("save.json", runtimeScene.getScene().getVariables().getFromIndex(0));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Campaign"), gdjs.MainMenuCode.GDCampaignObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDCampaignObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDCampaignObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDCampaignObjects1[k] = gdjs.MainMenuCode.GDCampaignObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDCampaignObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "buttonduration") >= 0.5;
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDCampaignObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.MainMenuCode.GDExitObjects1);
gdjs.copyArray(runtimeScene.getObjects("Multiplayer"), gdjs.MainMenuCode.GDMultiplayerObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "buttonduration");
}
{for(var i = 0, len = gdjs.MainMenuCode.GDMultiplayerObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDMultiplayerObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDMultiplayerObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDMultiplayerObjects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDCampaignObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCampaignObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDCampaignObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCampaignObjects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDExitObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDExitObjects1[i].Activate(false, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.MainMenuCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDBackObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDBackObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDBackObjects1[k] = gdjs.MainMenuCode.GDBackObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDBackObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "buttonduration") >= 0.5;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Campaign"), gdjs.MainMenuCode.GDCampaignObjects1);
gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.MainMenuCode.GDExitObjects1);
gdjs.copyArray(runtimeScene.getObjects("Multiplayer"), gdjs.MainMenuCode.GDMultiplayerObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "buttonduration");
}
{for(var i = 0, len = gdjs.MainMenuCode.GDMultiplayerObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDMultiplayerObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDMultiplayerObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDMultiplayerObjects1[i].Activate(true, null);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDCampaignObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCampaignObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDCampaignObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCampaignObjects1[i].Activate(true, null);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDExitObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDExitObjects1[i].Activate(true, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Campaign"), gdjs.MainMenuCode.GDCampaignObjects1);
gdjs.copyArray(runtimeScene.getObjects("CampaignStart"), gdjs.MainMenuCode.GDCampaignStartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDCampaignStartObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDCampaignStartObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDCampaignStartObjects1[k] = gdjs.MainMenuCode.GDCampaignStartObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDCampaignStartObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "buttonduration") >= 0.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDCampaignObjects1.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDCampaignObjects1[i].IsActivated(null)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDCampaignObjects1[k] = gdjs.MainMenuCode.GDCampaignObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDCampaignObjects1.length = k;
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "difficultyselector", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CampaignLoad"), gdjs.MainMenuCode.GDCampaignLoadObjects1);
gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.MainMenuCode.GDExitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDCampaignLoadObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDCampaignLoadObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDCampaignLoadObjects1[k] = gdjs.MainMenuCode.GDCampaignLoadObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDCampaignLoadObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "buttonduration") >= 0.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDExitObjects1.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDExitObjects1[i].IsActivated(null)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDExitObjects1[k] = gdjs.MainMenuCode.GDExitObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDExitObjects1.length = k;
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LoadingCampaign", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LobbyMenu"), gdjs.MainMenuCode.GDLobbyMenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDLobbyMenuObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDLobbyMenuObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDLobbyMenuObjects1[k] = gdjs.MainMenuCode.GDLobbyMenuObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDLobbyMenuObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.multiplayer.openLobbiesWindow(runtimeScene);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.hasLobbyGameJustStarted();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.MainMenuCode.GDCursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Multiplayer"), gdjs.MainMenuCode.GDMultiplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCursorObjects1Objects, gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDMultiplayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "buttonduration") >= 0.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDMultiplayerObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDMultiplayerObjects1[i].IsActivated(null) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDMultiplayerObjects1[k] = gdjs.MainMenuCode.GDMultiplayerObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDMultiplayerObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.preloadSound(runtimeScene, "ballbounce.mp3");
}
{gdjs.evtTools.sound.preloadSound(runtimeScene, "pointscored.mp3");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MultiplayerTitle", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Campaign"), gdjs.MainMenuCode.GDCampaignObjects1);
gdjs.copyArray(runtimeScene.getObjects("CampaignStart"), gdjs.MainMenuCode.GDCampaignStartObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.MainMenuCode.GDCursorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCursorObjects1Objects, gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCampaignStartObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "buttonduration") >= 0.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDCampaignObjects1.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDCampaignObjects1[i].IsActivated(null)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDCampaignObjects1[k] = gdjs.MainMenuCode.GDCampaignObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDCampaignObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Campaign"), gdjs.MainMenuCode.GDCampaignObjects1);
gdjs.copyArray(runtimeScene.getObjects("CampaignLoad"), gdjs.MainMenuCode.GDCampaignLoadObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.MainMenuCode.GDCursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.MainMenuCode.GDExitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCursorObjects1Objects, gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCampaignLoadObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "buttonduration") >= 0.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDCampaignObjects1.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDCampaignObjects1[i].IsActivated(null)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDCampaignObjects1[k] = gdjs.MainMenuCode.GDCampaignObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDCampaignObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDExitObjects1.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDExitObjects1[i].IsActivated(null)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDExitObjects1[k] = gdjs.MainMenuCode.GDExitObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDExitObjects1.length = k;
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Campaign", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Campaign"), gdjs.MainMenuCode.GDCampaignObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.MainMenuCode.GDCursorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "buttonduration") >= 0.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCursorObjects1Objects, gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCampaignObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDCampaignObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDCampaignObjects1[i].IsActivated(null) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDCampaignObjects1[k] = gdjs.MainMenuCode.GDCampaignObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDCampaignObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDCampaignObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.MainMenuCode.GDExitObjects1);
gdjs.copyArray(runtimeScene.getObjects("Multiplayer"), gdjs.MainMenuCode.GDMultiplayerObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "buttonduration");
}
{for(var i = 0, len = gdjs.MainMenuCode.GDMultiplayerObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDMultiplayerObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDMultiplayerObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDMultiplayerObjects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDCampaignObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCampaignObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDCampaignObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCampaignObjects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDExitObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDExitObjects1[i].Activate(false, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.MainMenuCode.GDBackObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.MainMenuCode.GDCursorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "buttonduration") >= 0.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCursorObjects1Objects, gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDBackObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", null);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Campaign"), gdjs.MainMenuCode.GDCampaignObjects1);
gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.MainMenuCode.GDExitObjects1);
gdjs.copyArray(runtimeScene.getObjects("Multiplayer"), gdjs.MainMenuCode.GDMultiplayerObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "buttonduration");
}
{for(var i = 0, len = gdjs.MainMenuCode.GDMultiplayerObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDMultiplayerObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDMultiplayerObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDMultiplayerObjects1[i].Activate(true, null);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDCampaignObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCampaignObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDCampaignObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCampaignObjects1[i].Activate(true, null);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDExitObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDExitObjects1[i].Activate(true, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.MainMenuCode.GDCursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.MainMenuCode.GDExitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "buttonduration") >= 0.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCursorObjects1Objects, gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDExitObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDExitObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDExitObjects1[i].IsActivated(null) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDExitObjects1[k] = gdjs.MainMenuCode.GDExitObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDExitObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Any", null);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.MainMenuCode.GDCursorObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDCursorObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCursorObjects1[i].getBehavior("TopDownMovement").simulateStick(gdjs.evtsExt__Gamepads__StickAngle.func(runtimeScene, 1, "Left", null), gdjs.evtsExt__Gamepads__StickForce.func(runtimeScene, 1, "Left", null));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "F4");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(51395548);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("discord"), gdjs.MainMenuCode.GDdiscordObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDdiscordObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDdiscordObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDdiscordObjects1[k] = gdjs.MainMenuCode.GDdiscordObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDdiscordObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://discord.gg/9WNkGzcuRp", runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.MainMenuCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDNewSprite2Objects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDNewSprite2Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDNewSprite2Objects1[k] = gdjs.MainMenuCode.GDNewSprite2Objects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDNewSprite2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gamejolt", false);
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


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 0, runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ButtonType__Function.func(runtimeScene, null);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("icon"), gdjs.MainMenuCode.GDiconObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDiconObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDiconObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.MainMenuCode.GDiconObjects1[i].getVariables().getFromIndex(1).getAsNumber());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__ButtonType__Function.func(runtimeScene, null));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("icon"), gdjs.MainMenuCode.GDiconObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDiconObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDiconObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.MainMenuCode.GDiconObjects1[i].getVariables().getFromIndex(1).getAsNumber() + 3);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Selection"), gdjs.MainMenuCode.GDSelectionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Up", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (((gdjs.MainMenuCode.GDSelectionObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDSelectionObjects1[0].getVariables()).getFromIndex(0).getAsNumber() - 1 != -(1));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(51401012);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDSelectionObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDSelectionObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSelectionObjects1[i].returnVariable(gdjs.MainMenuCode.GDSelectionObjects1[i].getVariables().getFromIndex(0)).sub(1);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDSelectionObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSelectionObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(4).getChild(gdjs.MainMenuCode.GDSelectionObjects1[i].getVariables().getFromIndex(0).getAsNumber()).getAsString());
}
}

{ //Subevents
gdjs.MainMenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Selection"), gdjs.MainMenuCode.GDSelectionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Down");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Down", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (((gdjs.MainMenuCode.GDSelectionObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDSelectionObjects1[0].getVariables()).getFromIndex(0).getAsNumber() + 1 != 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(51407156);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDSelectionObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDSelectionObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSelectionObjects1[i].returnVariable(gdjs.MainMenuCode.GDSelectionObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDSelectionObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSelectionObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(4).getChild(gdjs.MainMenuCode.GDSelectionObjects1[i].getVariables().getFromIndex(0).getAsNumber()).getAsString());
}
}

{ //Subevents
gdjs.MainMenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Selection"), gdjs.MainMenuCode.GDSelectionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Selection2"), gdjs.MainMenuCode.GDSelection2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Left", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (((gdjs.MainMenuCode.GDSelection2Objects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDSelection2Objects1[0].getVariables()).getFromIndex(0).getAsNumber() - 1 != -(1));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDSelectionObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDSelectionObjects1[i].getVariableNumber(gdjs.MainMenuCode.GDSelectionObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDSelectionObjects1[k] = gdjs.MainMenuCode.GDSelectionObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDSelectionObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(51413548);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDSelection2Objects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDSelection2Objects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSelection2Objects1[i].returnVariable(gdjs.MainMenuCode.GDSelection2Objects1[i].getVariables().getFromIndex(0)).sub(1);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDSelection2Objects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSelection2Objects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(5).getChild(gdjs.MainMenuCode.GDSelection2Objects1[i].getVariables().getFromIndex(0).getAsNumber()).getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Selection"), gdjs.MainMenuCode.GDSelectionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Selection2"), gdjs.MainMenuCode.GDSelection2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Right");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Right", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (((gdjs.MainMenuCode.GDSelection2Objects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDSelection2Objects1[0].getVariables()).getFromIndex(0).getAsNumber() + 1 != 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(51414812);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDSelectionObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDSelectionObjects1[i].getVariableNumber(gdjs.MainMenuCode.GDSelectionObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDSelectionObjects1[k] = gdjs.MainMenuCode.GDSelectionObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDSelectionObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDSelection2Objects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDSelection2Objects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSelection2Objects1[i].returnVariable(gdjs.MainMenuCode.GDSelection2Objects1[i].getVariables().getFromIndex(0)).add(1);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDSelection2Objects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSelection2Objects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(5).getChild(gdjs.MainMenuCode.GDSelection2Objects1[i].getVariables().getFromIndex(0).getAsNumber()).getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Selection"), gdjs.MainMenuCode.GDSelectionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Selection2"), gdjs.MainMenuCode.GDSelection2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Left", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (((gdjs.MainMenuCode.GDSelection2Objects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDSelection2Objects1[0].getVariables()).getFromIndex(0).getAsNumber() - 1 != -(1));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDSelectionObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDSelectionObjects1[i].getVariableNumber(gdjs.MainMenuCode.GDSelectionObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDSelectionObjects1[k] = gdjs.MainMenuCode.GDSelectionObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDSelectionObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(51417860);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDSelection2Objects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDSelection2Objects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSelection2Objects1[i].returnVariable(gdjs.MainMenuCode.GDSelection2Objects1[i].getVariables().getFromIndex(0)).sub(1);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDSelection2Objects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSelection2Objects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(gdjs.MainMenuCode.GDSelection2Objects1[i].getVariables().getFromIndex(0).getAsNumber()).getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Selection"), gdjs.MainMenuCode.GDSelectionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Selection2"), gdjs.MainMenuCode.GDSelection2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Right");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Right", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (((gdjs.MainMenuCode.GDSelection2Objects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDSelection2Objects1[0].getVariables()).getFromIndex(0).getAsNumber() + 1 != 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(51419124);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDSelectionObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDSelectionObjects1[i].getVariableNumber(gdjs.MainMenuCode.GDSelectionObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDSelectionObjects1[k] = gdjs.MainMenuCode.GDSelectionObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDSelectionObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDSelection2Objects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDSelection2Objects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSelection2Objects1[i].returnVariable(gdjs.MainMenuCode.GDSelection2Objects1[i].getVariables().getFromIndex(0)).add(1);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDSelection2Objects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSelection2Objects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(gdjs.MainMenuCode.GDSelection2Objects1[i].getVariables().getFromIndex(0).getAsNumber()).getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Selection"), gdjs.MainMenuCode.GDSelectionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Selection2"), gdjs.MainMenuCode.GDSelection2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Left", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (((gdjs.MainMenuCode.GDSelection2Objects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDSelection2Objects1[0].getVariables()).getFromIndex(0).getAsNumber() - 1 != -(1));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDSelectionObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDSelectionObjects1[i].getVariableNumber(gdjs.MainMenuCode.GDSelectionObjects1[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDSelectionObjects1[k] = gdjs.MainMenuCode.GDSelectionObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDSelectionObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(51422172);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDSelection2Objects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDSelection2Objects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSelection2Objects1[i].returnVariable(gdjs.MainMenuCode.GDSelection2Objects1[i].getVariables().getFromIndex(0)).sub(1);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDSelection2Objects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSelection2Objects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(7).getChild(gdjs.MainMenuCode.GDSelection2Objects1[i].getVariables().getFromIndex(0).getAsNumber()).getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Selection"), gdjs.MainMenuCode.GDSelectionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Selection2"), gdjs.MainMenuCode.GDSelection2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Right");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Right", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (((gdjs.MainMenuCode.GDSelection2Objects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDSelection2Objects1[0].getVariables()).getFromIndex(0).getAsNumber() + 1 != 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(51423436);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDSelectionObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDSelectionObjects1[i].getVariableNumber(gdjs.MainMenuCode.GDSelectionObjects1[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDSelectionObjects1[k] = gdjs.MainMenuCode.GDSelectionObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDSelectionObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDSelection2Objects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDSelection2Objects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSelection2Objects1[i].returnVariable(gdjs.MainMenuCode.GDSelection2Objects1[i].getVariables().getFromIndex(0)).add(1);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDSelection2Objects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSelection2Objects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(7).getChild(gdjs.MainMenuCode.GDSelection2Objects1[i].getVariables().getFromIndex(0).getAsNumber()).getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Selection"), gdjs.MainMenuCode.GDSelectionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Selection2"), gdjs.MainMenuCode.GDSelection2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Left", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (((gdjs.MainMenuCode.GDSelection2Objects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDSelection2Objects1[0].getVariables()).getFromIndex(0).getAsNumber() - 1 != -(1));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDSelectionObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDSelectionObjects1[i].getVariableNumber(gdjs.MainMenuCode.GDSelectionObjects1[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDSelectionObjects1[k] = gdjs.MainMenuCode.GDSelectionObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDSelectionObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(51426708);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDSelection2Objects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDSelection2Objects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSelection2Objects1[i].returnVariable(gdjs.MainMenuCode.GDSelection2Objects1[i].getVariables().getFromIndex(0)).sub(1);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDSelection2Objects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSelection2Objects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(8).getChild(gdjs.MainMenuCode.GDSelection2Objects1[i].getVariables().getFromIndex(0).getAsNumber()).getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Selection"), gdjs.MainMenuCode.GDSelectionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Selection2"), gdjs.MainMenuCode.GDSelection2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Right");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Right", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (((gdjs.MainMenuCode.GDSelection2Objects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDSelection2Objects1[0].getVariables()).getFromIndex(0).getAsNumber() + 1 != 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(51427996);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDSelectionObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDSelectionObjects1[i].getVariableNumber(gdjs.MainMenuCode.GDSelectionObjects1[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDSelectionObjects1[k] = gdjs.MainMenuCode.GDSelectionObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDSelectionObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDSelection2Objects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDSelection2Objects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSelection2Objects1[i].returnVariable(gdjs.MainMenuCode.GDSelection2Objects1[i].getVariables().getFromIndex(0)).add(1);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDSelection2Objects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSelection2Objects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(8).getChild(gdjs.MainMenuCode.GDSelection2Objects1[i].getVariables().getFromIndex(0).getAsNumber()).getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Selection2"), gdjs.MainMenuCode.GDSelection2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__IsButtonJustPressed.func(runtimeScene, 1, "A", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "z");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDSelection2Objects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDSelection2Objects1[i].getBehavior("Text").getText() == "Local" ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDSelection2Objects1[k] = gdjs.MainMenuCode.GDSelection2Objects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDSelection2Objects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Confirm_07.aac", false, runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber(), 1);
}

{ //Subevents
gdjs.MainMenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Selection2"), gdjs.MainMenuCode.GDSelection2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__IsButtonJustPressed.func(runtimeScene, 1, "A", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "z");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDSelection2Objects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDSelection2Objects1[i].getBehavior("Text").getText() == "Online" ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDSelection2Objects1[k] = gdjs.MainMenuCode.GDSelection2Objects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDSelection2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__GamejoltAPI__Authenticated.func(runtimeScene, null);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Confirm_07.aac", false, runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber(), 1);
}

{ //Subevents
gdjs.MainMenuCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Selection2"), gdjs.MainMenuCode.GDSelection2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__IsButtonJustPressed.func(runtimeScene, 1, "A", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "z");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDSelection2Objects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDSelection2Objects1[i].getBehavior("Text").getText() == "Online" ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDSelection2Objects1[k] = gdjs.MainMenuCode.GDSelection2Objects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDSelection2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__GamejoltAPI__Authenticated.func(runtimeScene, null));
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("OnlineError"), gdjs.MainMenuCode.GDOnlineErrorObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "Confirm_01.aac", false, runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber(), 1);
}
{for(var i = 0, len = gdjs.MainMenuCode.GDOnlineErrorObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDOnlineErrorObjects1[i].hide(false);
}
}

{ //Subevents
gdjs.MainMenuCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Campaign"), gdjs.MainMenuCode.GDCampaignObjects1);
gdjs.copyArray(runtimeScene.getObjects("CampaignStart"), gdjs.MainMenuCode.GDCampaignStartObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.MainMenuCode.GDCursorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCursorObjects1Objects, gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCampaignStartObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "buttonduration") >= 0.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDCampaignObjects1.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDCampaignObjects1[i].IsActivated(null)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDCampaignObjects1[k] = gdjs.MainMenuCode.GDCampaignObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDCampaignObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Selection2"), gdjs.MainMenuCode.GDSelection2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__IsButtonJustPressed.func(runtimeScene, 1, "A", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "z");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDSelection2Objects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDSelection2Objects1[i].getBehavior("Text").getText() == "New Game" ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDSelection2Objects1[k] = gdjs.MainMenuCode.GDSelection2Objects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDSelection2Objects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Confirm_07.aac", false, runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber(), 1);
}

{ //Subevents
gdjs.MainMenuCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Selection2"), gdjs.MainMenuCode.GDSelection2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__IsButtonJustPressed.func(runtimeScene, 1, "A", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "z");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDSelection2Objects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDSelection2Objects1[i].getBehavior("Text").getText() == "Load Game" ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDSelection2Objects1[k] = gdjs.MainMenuCode.GDSelection2Objects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDSelection2Objects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Confirm_07.aac", false, runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber(), 1);
}

{ //Subevents
gdjs.MainMenuCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Selection2"), gdjs.MainMenuCode.GDSelection2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__IsButtonJustPressed.func(runtimeScene, 1, "A", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "z");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDSelection2Objects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDSelection2Objects1[i].getBehavior("Text").getText() == "Enter" ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDSelection2Objects1[k] = gdjs.MainMenuCode.GDSelection2Objects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDSelection2Objects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Confirm_07.aac", false, runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber(), 1);
}

{ //Subevents
gdjs.MainMenuCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Selection2"), gdjs.MainMenuCode.GDSelection2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__IsButtonJustPressed.func(runtimeScene, 1, "A", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "z");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDSelection2Objects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDSelection2Objects1[i].getBehavior("Text").getText() == "Are you sure???" ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDSelection2Objects1[k] = gdjs.MainMenuCode.GDSelection2Objects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDSelection2Objects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Confirm_07.aac", false, runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber(), 1);
}

{ //Subevents
gdjs.MainMenuCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__InternetConnectivity__IsDeviceOnline.func(runtimeScene, null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__GamejoltAPI__Authenticated.func(runtimeScene, null);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.firestore.hasDocument("supporters", gdjs.evtsExt__GamejoltAPI__Username.func(runtimeScene, null), runtimeScene.getScene().getVariables().getFromIndex(9), runtimeScene.getScene().getVariables().getFromIndex(0));
}

{ //Subevents
gdjs.MainMenuCode.eventsList11(runtimeScene);} //End of subevents
}

}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDMultiplayerObjects1.length = 0;
gdjs.MainMenuCode.GDMultiplayerObjects2.length = 0;
gdjs.MainMenuCode.GDMultiplayerObjects3.length = 0;
gdjs.MainMenuCode.GDNewTextObjects1.length = 0;
gdjs.MainMenuCode.GDNewTextObjects2.length = 0;
gdjs.MainMenuCode.GDNewTextObjects3.length = 0;
gdjs.MainMenuCode.GDdescriptionObjects1.length = 0;
gdjs.MainMenuCode.GDdescriptionObjects2.length = 0;
gdjs.MainMenuCode.GDdescriptionObjects3.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects3.length = 0;
gdjs.MainMenuCode.GDCampaignStartObjects1.length = 0;
gdjs.MainMenuCode.GDCampaignStartObjects2.length = 0;
gdjs.MainMenuCode.GDCampaignStartObjects3.length = 0;
gdjs.MainMenuCode.GDBlueButton3Objects1.length = 0;
gdjs.MainMenuCode.GDBlueButton3Objects2.length = 0;
gdjs.MainMenuCode.GDBlueButton3Objects3.length = 0;
gdjs.MainMenuCode.GDCampaignLoadObjects1.length = 0;
gdjs.MainMenuCode.GDCampaignLoadObjects2.length = 0;
gdjs.MainMenuCode.GDCampaignLoadObjects3.length = 0;
gdjs.MainMenuCode.GDverObjects1.length = 0;
gdjs.MainMenuCode.GDverObjects2.length = 0;
gdjs.MainMenuCode.GDverObjects3.length = 0;
gdjs.MainMenuCode.GDLobbyMenuObjects1.length = 0;
gdjs.MainMenuCode.GDLobbyMenuObjects2.length = 0;
gdjs.MainMenuCode.GDLobbyMenuObjects3.length = 0;
gdjs.MainMenuCode.GDvernameObjects1.length = 0;
gdjs.MainMenuCode.GDvernameObjects2.length = 0;
gdjs.MainMenuCode.GDvernameObjects3.length = 0;
gdjs.MainMenuCode.GDdiscordObjects1.length = 0;
gdjs.MainMenuCode.GDdiscordObjects2.length = 0;
gdjs.MainMenuCode.GDdiscordObjects3.length = 0;
gdjs.MainMenuCode.GDdiscordtextObjects1.length = 0;
gdjs.MainMenuCode.GDdiscordtextObjects2.length = 0;
gdjs.MainMenuCode.GDdiscordtextObjects3.length = 0;
gdjs.MainMenuCode.GDCampaignObjects1.length = 0;
gdjs.MainMenuCode.GDCampaignObjects2.length = 0;
gdjs.MainMenuCode.GDCampaignObjects3.length = 0;
gdjs.MainMenuCode.GDExitObjects1.length = 0;
gdjs.MainMenuCode.GDExitObjects2.length = 0;
gdjs.MainMenuCode.GDExitObjects3.length = 0;
gdjs.MainMenuCode.GDBackObjects1.length = 0;
gdjs.MainMenuCode.GDBackObjects2.length = 0;
gdjs.MainMenuCode.GDBackObjects3.length = 0;
gdjs.MainMenuCode.GDBGObjects1.length = 0;
gdjs.MainMenuCode.GDBGObjects2.length = 0;
gdjs.MainMenuCode.GDBGObjects3.length = 0;
gdjs.MainMenuCode.GDScoreDisplayObjects1.length = 0;
gdjs.MainMenuCode.GDScoreDisplayObjects2.length = 0;
gdjs.MainMenuCode.GDScoreDisplayObjects3.length = 0;
gdjs.MainMenuCode.GDNewSprite2Objects1.length = 0;
gdjs.MainMenuCode.GDNewSprite2Objects2.length = 0;
gdjs.MainMenuCode.GDNewSprite2Objects3.length = 0;
gdjs.MainMenuCode.GDNew3DBoxObjects1.length = 0;
gdjs.MainMenuCode.GDNew3DBoxObjects2.length = 0;
gdjs.MainMenuCode.GDNew3DBoxObjects3.length = 0;
gdjs.MainMenuCode.GDRacketObjects1.length = 0;
gdjs.MainMenuCode.GDRacketObjects2.length = 0;
gdjs.MainMenuCode.GDRacketObjects3.length = 0;
gdjs.MainMenuCode.GDSettingsObjects1.length = 0;
gdjs.MainMenuCode.GDSettingsObjects2.length = 0;
gdjs.MainMenuCode.GDSettingsObjects3.length = 0;
gdjs.MainMenuCode.GDNewSprite3Objects1.length = 0;
gdjs.MainMenuCode.GDNewSprite3Objects2.length = 0;
gdjs.MainMenuCode.GDNewSprite3Objects3.length = 0;
gdjs.MainMenuCode.GDBossinfoObjects1.length = 0;
gdjs.MainMenuCode.GDBossinfoObjects2.length = 0;
gdjs.MainMenuCode.GDBossinfoObjects3.length = 0;
gdjs.MainMenuCode.GDonlineplayhereObjects1.length = 0;
gdjs.MainMenuCode.GDonlineplayhereObjects2.length = 0;
gdjs.MainMenuCode.GDonlineplayhereObjects3.length = 0;
gdjs.MainMenuCode.GDiconObjects1.length = 0;
gdjs.MainMenuCode.GDiconObjects2.length = 0;
gdjs.MainMenuCode.GDiconObjects3.length = 0;
gdjs.MainMenuCode.GDSelectionObjects1.length = 0;
gdjs.MainMenuCode.GDSelectionObjects2.length = 0;
gdjs.MainMenuCode.GDSelectionObjects3.length = 0;
gdjs.MainMenuCode.GDSelection2Objects1.length = 0;
gdjs.MainMenuCode.GDSelection2Objects2.length = 0;
gdjs.MainMenuCode.GDSelection2Objects3.length = 0;
gdjs.MainMenuCode.GDNewText2Objects1.length = 0;
gdjs.MainMenuCode.GDNewText2Objects2.length = 0;
gdjs.MainMenuCode.GDNewText2Objects3.length = 0;
gdjs.MainMenuCode.GDOnlineErrorObjects1.length = 0;
gdjs.MainMenuCode.GDOnlineErrorObjects2.length = 0;
gdjs.MainMenuCode.GDOnlineErrorObjects3.length = 0;
gdjs.MainMenuCode.GDsupportericonObjects1.length = 0;
gdjs.MainMenuCode.GDsupportericonObjects2.length = 0;
gdjs.MainMenuCode.GDsupportericonObjects3.length = 0;
gdjs.MainMenuCode.GDSupporterTextObjects1.length = 0;
gdjs.MainMenuCode.GDSupporterTextObjects2.length = 0;
gdjs.MainMenuCode.GDSupporterTextObjects3.length = 0;
gdjs.MainMenuCode.GDCustomLobbiesObjects1.length = 0;
gdjs.MainMenuCode.GDCustomLobbiesObjects2.length = 0;
gdjs.MainMenuCode.GDCustomLobbiesObjects3.length = 0;
gdjs.MainMenuCode.GDOnlineCheckObjects1.length = 0;
gdjs.MainMenuCode.GDOnlineCheckObjects2.length = 0;
gdjs.MainMenuCode.GDOnlineCheckObjects3.length = 0;
gdjs.MainMenuCode.GDCursorObjects1.length = 0;
gdjs.MainMenuCode.GDCursorObjects2.length = 0;
gdjs.MainMenuCode.GDCursorObjects3.length = 0;
gdjs.MainMenuCode.GDBGObjects1.length = 0;
gdjs.MainMenuCode.GDBGObjects2.length = 0;
gdjs.MainMenuCode.GDBGObjects3.length = 0;

gdjs.MainMenuCode.eventsList12(runtimeScene);
gdjs.MainMenuCode.GDMultiplayerObjects1.length = 0;
gdjs.MainMenuCode.GDMultiplayerObjects2.length = 0;
gdjs.MainMenuCode.GDMultiplayerObjects3.length = 0;
gdjs.MainMenuCode.GDNewTextObjects1.length = 0;
gdjs.MainMenuCode.GDNewTextObjects2.length = 0;
gdjs.MainMenuCode.GDNewTextObjects3.length = 0;
gdjs.MainMenuCode.GDdescriptionObjects1.length = 0;
gdjs.MainMenuCode.GDdescriptionObjects2.length = 0;
gdjs.MainMenuCode.GDdescriptionObjects3.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects3.length = 0;
gdjs.MainMenuCode.GDCampaignStartObjects1.length = 0;
gdjs.MainMenuCode.GDCampaignStartObjects2.length = 0;
gdjs.MainMenuCode.GDCampaignStartObjects3.length = 0;
gdjs.MainMenuCode.GDBlueButton3Objects1.length = 0;
gdjs.MainMenuCode.GDBlueButton3Objects2.length = 0;
gdjs.MainMenuCode.GDBlueButton3Objects3.length = 0;
gdjs.MainMenuCode.GDCampaignLoadObjects1.length = 0;
gdjs.MainMenuCode.GDCampaignLoadObjects2.length = 0;
gdjs.MainMenuCode.GDCampaignLoadObjects3.length = 0;
gdjs.MainMenuCode.GDverObjects1.length = 0;
gdjs.MainMenuCode.GDverObjects2.length = 0;
gdjs.MainMenuCode.GDverObjects3.length = 0;
gdjs.MainMenuCode.GDLobbyMenuObjects1.length = 0;
gdjs.MainMenuCode.GDLobbyMenuObjects2.length = 0;
gdjs.MainMenuCode.GDLobbyMenuObjects3.length = 0;
gdjs.MainMenuCode.GDvernameObjects1.length = 0;
gdjs.MainMenuCode.GDvernameObjects2.length = 0;
gdjs.MainMenuCode.GDvernameObjects3.length = 0;
gdjs.MainMenuCode.GDdiscordObjects1.length = 0;
gdjs.MainMenuCode.GDdiscordObjects2.length = 0;
gdjs.MainMenuCode.GDdiscordObjects3.length = 0;
gdjs.MainMenuCode.GDdiscordtextObjects1.length = 0;
gdjs.MainMenuCode.GDdiscordtextObjects2.length = 0;
gdjs.MainMenuCode.GDdiscordtextObjects3.length = 0;
gdjs.MainMenuCode.GDCampaignObjects1.length = 0;
gdjs.MainMenuCode.GDCampaignObjects2.length = 0;
gdjs.MainMenuCode.GDCampaignObjects3.length = 0;
gdjs.MainMenuCode.GDExitObjects1.length = 0;
gdjs.MainMenuCode.GDExitObjects2.length = 0;
gdjs.MainMenuCode.GDExitObjects3.length = 0;
gdjs.MainMenuCode.GDBackObjects1.length = 0;
gdjs.MainMenuCode.GDBackObjects2.length = 0;
gdjs.MainMenuCode.GDBackObjects3.length = 0;
gdjs.MainMenuCode.GDBGObjects1.length = 0;
gdjs.MainMenuCode.GDBGObjects2.length = 0;
gdjs.MainMenuCode.GDBGObjects3.length = 0;
gdjs.MainMenuCode.GDScoreDisplayObjects1.length = 0;
gdjs.MainMenuCode.GDScoreDisplayObjects2.length = 0;
gdjs.MainMenuCode.GDScoreDisplayObjects3.length = 0;
gdjs.MainMenuCode.GDNewSprite2Objects1.length = 0;
gdjs.MainMenuCode.GDNewSprite2Objects2.length = 0;
gdjs.MainMenuCode.GDNewSprite2Objects3.length = 0;
gdjs.MainMenuCode.GDNew3DBoxObjects1.length = 0;
gdjs.MainMenuCode.GDNew3DBoxObjects2.length = 0;
gdjs.MainMenuCode.GDNew3DBoxObjects3.length = 0;
gdjs.MainMenuCode.GDRacketObjects1.length = 0;
gdjs.MainMenuCode.GDRacketObjects2.length = 0;
gdjs.MainMenuCode.GDRacketObjects3.length = 0;
gdjs.MainMenuCode.GDSettingsObjects1.length = 0;
gdjs.MainMenuCode.GDSettingsObjects2.length = 0;
gdjs.MainMenuCode.GDSettingsObjects3.length = 0;
gdjs.MainMenuCode.GDNewSprite3Objects1.length = 0;
gdjs.MainMenuCode.GDNewSprite3Objects2.length = 0;
gdjs.MainMenuCode.GDNewSprite3Objects3.length = 0;
gdjs.MainMenuCode.GDBossinfoObjects1.length = 0;
gdjs.MainMenuCode.GDBossinfoObjects2.length = 0;
gdjs.MainMenuCode.GDBossinfoObjects3.length = 0;
gdjs.MainMenuCode.GDonlineplayhereObjects1.length = 0;
gdjs.MainMenuCode.GDonlineplayhereObjects2.length = 0;
gdjs.MainMenuCode.GDonlineplayhereObjects3.length = 0;
gdjs.MainMenuCode.GDiconObjects1.length = 0;
gdjs.MainMenuCode.GDiconObjects2.length = 0;
gdjs.MainMenuCode.GDiconObjects3.length = 0;
gdjs.MainMenuCode.GDSelectionObjects1.length = 0;
gdjs.MainMenuCode.GDSelectionObjects2.length = 0;
gdjs.MainMenuCode.GDSelectionObjects3.length = 0;
gdjs.MainMenuCode.GDSelection2Objects1.length = 0;
gdjs.MainMenuCode.GDSelection2Objects2.length = 0;
gdjs.MainMenuCode.GDSelection2Objects3.length = 0;
gdjs.MainMenuCode.GDNewText2Objects1.length = 0;
gdjs.MainMenuCode.GDNewText2Objects2.length = 0;
gdjs.MainMenuCode.GDNewText2Objects3.length = 0;
gdjs.MainMenuCode.GDOnlineErrorObjects1.length = 0;
gdjs.MainMenuCode.GDOnlineErrorObjects2.length = 0;
gdjs.MainMenuCode.GDOnlineErrorObjects3.length = 0;
gdjs.MainMenuCode.GDsupportericonObjects1.length = 0;
gdjs.MainMenuCode.GDsupportericonObjects2.length = 0;
gdjs.MainMenuCode.GDsupportericonObjects3.length = 0;
gdjs.MainMenuCode.GDSupporterTextObjects1.length = 0;
gdjs.MainMenuCode.GDSupporterTextObjects2.length = 0;
gdjs.MainMenuCode.GDSupporterTextObjects3.length = 0;
gdjs.MainMenuCode.GDCustomLobbiesObjects1.length = 0;
gdjs.MainMenuCode.GDCustomLobbiesObjects2.length = 0;
gdjs.MainMenuCode.GDCustomLobbiesObjects3.length = 0;
gdjs.MainMenuCode.GDOnlineCheckObjects1.length = 0;
gdjs.MainMenuCode.GDOnlineCheckObjects2.length = 0;
gdjs.MainMenuCode.GDOnlineCheckObjects3.length = 0;
gdjs.MainMenuCode.GDCursorObjects1.length = 0;
gdjs.MainMenuCode.GDCursorObjects2.length = 0;
gdjs.MainMenuCode.GDCursorObjects3.length = 0;
gdjs.MainMenuCode.GDBGObjects1.length = 0;
gdjs.MainMenuCode.GDBGObjects2.length = 0;
gdjs.MainMenuCode.GDBGObjects3.length = 0;


return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
