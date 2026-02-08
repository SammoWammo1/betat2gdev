gdjs.lobbyCode = {};
gdjs.lobbyCode.localVariables = [];
gdjs.lobbyCode.idToCallbackMap = new Map();
gdjs.lobbyCode.forEachIndex2 = 0;

gdjs.lobbyCode.forEachObjects2 = [];

gdjs.lobbyCode.forEachTemporary2 = null;

gdjs.lobbyCode.forEachTotalCount2 = 0;

gdjs.lobbyCode.GDCourtObjects1= [];
gdjs.lobbyCode.GDCourtObjects2= [];
gdjs.lobbyCode.GDCourtObjects3= [];
gdjs.lobbyCode.GDCourtObjects4= [];
gdjs.lobbyCode.GDCourtObjects5= [];
gdjs.lobbyCode.GDMidPartObjects1= [];
gdjs.lobbyCode.GDMidPartObjects2= [];
gdjs.lobbyCode.GDMidPartObjects3= [];
gdjs.lobbyCode.GDMidPartObjects4= [];
gdjs.lobbyCode.GDMidPartObjects5= [];
gdjs.lobbyCode.GDPlayerNameObjects1= [];
gdjs.lobbyCode.GDPlayerNameObjects2= [];
gdjs.lobbyCode.GDPlayerNameObjects3= [];
gdjs.lobbyCode.GDPlayerNameObjects4= [];
gdjs.lobbyCode.GDPlayerNameObjects5= [];
gdjs.lobbyCode.GDLobObjects1= [];
gdjs.lobbyCode.GDLobObjects2= [];
gdjs.lobbyCode.GDLobObjects3= [];
gdjs.lobbyCode.GDLobObjects4= [];
gdjs.lobbyCode.GDLobObjects5= [];
gdjs.lobbyCode.GDSliceObjects1= [];
gdjs.lobbyCode.GDSliceObjects2= [];
gdjs.lobbyCode.GDSliceObjects3= [];
gdjs.lobbyCode.GDSliceObjects4= [];
gdjs.lobbyCode.GDSliceObjects5= [];
gdjs.lobbyCode.GDModeObjects1= [];
gdjs.lobbyCode.GDModeObjects2= [];
gdjs.lobbyCode.GDModeObjects3= [];
gdjs.lobbyCode.GDModeObjects4= [];
gdjs.lobbyCode.GDModeObjects5= [];
gdjs.lobbyCode.GDReadyObjects1= [];
gdjs.lobbyCode.GDReadyObjects2= [];
gdjs.lobbyCode.GDReadyObjects3= [];
gdjs.lobbyCode.GDReadyObjects4= [];
gdjs.lobbyCode.GDReadyObjects5= [];
gdjs.lobbyCode.GDHostCodeObjects1= [];
gdjs.lobbyCode.GDHostCodeObjects2= [];
gdjs.lobbyCode.GDHostCodeObjects3= [];
gdjs.lobbyCode.GDHostCodeObjects4= [];
gdjs.lobbyCode.GDHostCodeObjects5= [];
gdjs.lobbyCode.GDCreateLobbyObjects1= [];
gdjs.lobbyCode.GDCreateLobbyObjects2= [];
gdjs.lobbyCode.GDCreateLobbyObjects3= [];
gdjs.lobbyCode.GDCreateLobbyObjects4= [];
gdjs.lobbyCode.GDCreateLobbyObjects5= [];
gdjs.lobbyCode.GDJoinCodeObjects1= [];
gdjs.lobbyCode.GDJoinCodeObjects2= [];
gdjs.lobbyCode.GDJoinCodeObjects3= [];
gdjs.lobbyCode.GDJoinCodeObjects4= [];
gdjs.lobbyCode.GDJoinCodeObjects5= [];
gdjs.lobbyCode.GDMatchmakeObjects1= [];
gdjs.lobbyCode.GDMatchmakeObjects2= [];
gdjs.lobbyCode.GDMatchmakeObjects3= [];
gdjs.lobbyCode.GDMatchmakeObjects4= [];
gdjs.lobbyCode.GDMatchmakeObjects5= [];
gdjs.lobbyCode.GDLoadingObjects1= [];
gdjs.lobbyCode.GDLoadingObjects2= [];
gdjs.lobbyCode.GDLoadingObjects3= [];
gdjs.lobbyCode.GDLoadingObjects4= [];
gdjs.lobbyCode.GDLoadingObjects5= [];
gdjs.lobbyCode.GDReadyPlayersObjects1= [];
gdjs.lobbyCode.GDReadyPlayersObjects2= [];
gdjs.lobbyCode.GDReadyPlayersObjects3= [];
gdjs.lobbyCode.GDReadyPlayersObjects4= [];
gdjs.lobbyCode.GDReadyPlayersObjects5= [];
gdjs.lobbyCode.GDCharacterObjects1= [];
gdjs.lobbyCode.GDCharacterObjects2= [];
gdjs.lobbyCode.GDCharacterObjects3= [];
gdjs.lobbyCode.GDCharacterObjects4= [];
gdjs.lobbyCode.GDCharacterObjects5= [];
gdjs.lobbyCode.GDCharNameObjects1= [];
gdjs.lobbyCode.GDCharNameObjects2= [];
gdjs.lobbyCode.GDCharNameObjects3= [];
gdjs.lobbyCode.GDCharNameObjects4= [];
gdjs.lobbyCode.GDCharNameObjects5= [];
gdjs.lobbyCode.GDCharBackObjects1= [];
gdjs.lobbyCode.GDCharBackObjects2= [];
gdjs.lobbyCode.GDCharBackObjects3= [];
gdjs.lobbyCode.GDCharBackObjects4= [];
gdjs.lobbyCode.GDCharBackObjects5= [];
gdjs.lobbyCode.GDCharEnterObjects1= [];
gdjs.lobbyCode.GDCharEnterObjects2= [];
gdjs.lobbyCode.GDCharEnterObjects3= [];
gdjs.lobbyCode.GDCharEnterObjects4= [];
gdjs.lobbyCode.GDCharEnterObjects5= [];
gdjs.lobbyCode.GDModeSelectorObjects1= [];
gdjs.lobbyCode.GDModeSelectorObjects2= [];
gdjs.lobbyCode.GDModeSelectorObjects3= [];
gdjs.lobbyCode.GDModeSelectorObjects4= [];
gdjs.lobbyCode.GDModeSelectorObjects5= [];
gdjs.lobbyCode.GDMode2Objects1= [];
gdjs.lobbyCode.GDMode2Objects2= [];
gdjs.lobbyCode.GDMode2Objects3= [];
gdjs.lobbyCode.GDMode2Objects4= [];
gdjs.lobbyCode.GDMode2Objects5= [];
gdjs.lobbyCode.GDactiveObjects1= [];
gdjs.lobbyCode.GDactiveObjects2= [];
gdjs.lobbyCode.GDactiveObjects3= [];
gdjs.lobbyCode.GDactiveObjects4= [];
gdjs.lobbyCode.GDactiveObjects5= [];
gdjs.lobbyCode.GDCharNextObjects1= [];
gdjs.lobbyCode.GDCharNextObjects2= [];
gdjs.lobbyCode.GDCharNextObjects3= [];
gdjs.lobbyCode.GDCharNextObjects4= [];
gdjs.lobbyCode.GDCharNextObjects5= [];
gdjs.lobbyCode.GDCharPrevObjects1= [];
gdjs.lobbyCode.GDCharPrevObjects2= [];
gdjs.lobbyCode.GDCharPrevObjects3= [];
gdjs.lobbyCode.GDCharPrevObjects4= [];
gdjs.lobbyCode.GDCharPrevObjects5= [];
gdjs.lobbyCode.GDTimerObjects1= [];
gdjs.lobbyCode.GDTimerObjects2= [];
gdjs.lobbyCode.GDTimerObjects3= [];
gdjs.lobbyCode.GDTimerObjects4= [];
gdjs.lobbyCode.GDTimerObjects5= [];
gdjs.lobbyCode.GDQuitObjects1= [];
gdjs.lobbyCode.GDQuitObjects2= [];
gdjs.lobbyCode.GDQuitObjects3= [];
gdjs.lobbyCode.GDQuitObjects4= [];
gdjs.lobbyCode.GDQuitObjects5= [];
gdjs.lobbyCode.GDNewSpriteObjects1= [];
gdjs.lobbyCode.GDNewSpriteObjects2= [];
gdjs.lobbyCode.GDNewSpriteObjects3= [];
gdjs.lobbyCode.GDNewSpriteObjects4= [];
gdjs.lobbyCode.GDNewSpriteObjects5= [];
gdjs.lobbyCode.GDLobbyNameBrowserObjects1= [];
gdjs.lobbyCode.GDLobbyNameBrowserObjects2= [];
gdjs.lobbyCode.GDLobbyNameBrowserObjects3= [];
gdjs.lobbyCode.GDLobbyNameBrowserObjects4= [];
gdjs.lobbyCode.GDLobbyNameBrowserObjects5= [];
gdjs.lobbyCode.GDLobbyCountObjects1= [];
gdjs.lobbyCode.GDLobbyCountObjects2= [];
gdjs.lobbyCode.GDLobbyCountObjects3= [];
gdjs.lobbyCode.GDLobbyCountObjects4= [];
gdjs.lobbyCode.GDLobbyCountObjects5= [];
gdjs.lobbyCode.GDLobbyModeObjects1= [];
gdjs.lobbyCode.GDLobbyModeObjects2= [];
gdjs.lobbyCode.GDLobbyModeObjects3= [];
gdjs.lobbyCode.GDLobbyModeObjects4= [];
gdjs.lobbyCode.GDLobbyModeObjects5= [];
gdjs.lobbyCode.GDbuttonObjects1= [];
gdjs.lobbyCode.GDbuttonObjects2= [];
gdjs.lobbyCode.GDbuttonObjects3= [];
gdjs.lobbyCode.GDbuttonObjects4= [];
gdjs.lobbyCode.GDbuttonObjects5= [];
gdjs.lobbyCode.GDJoinLobbyButtonObjects1= [];
gdjs.lobbyCode.GDJoinLobbyButtonObjects2= [];
gdjs.lobbyCode.GDJoinLobbyButtonObjects3= [];
gdjs.lobbyCode.GDJoinLobbyButtonObjects4= [];
gdjs.lobbyCode.GDJoinLobbyButtonObjects5= [];
gdjs.lobbyCode.GDBackButtonObjects1= [];
gdjs.lobbyCode.GDBackButtonObjects2= [];
gdjs.lobbyCode.GDBackButtonObjects3= [];
gdjs.lobbyCode.GDBackButtonObjects4= [];
gdjs.lobbyCode.GDBackButtonObjects5= [];
gdjs.lobbyCode.GDCustomLobbiesObjects1= [];
gdjs.lobbyCode.GDCustomLobbiesObjects2= [];
gdjs.lobbyCode.GDCustomLobbiesObjects3= [];
gdjs.lobbyCode.GDCustomLobbiesObjects4= [];
gdjs.lobbyCode.GDCustomLobbiesObjects5= [];
gdjs.lobbyCode.GDOnlineCheckObjects1= [];
gdjs.lobbyCode.GDOnlineCheckObjects2= [];
gdjs.lobbyCode.GDOnlineCheckObjects3= [];
gdjs.lobbyCode.GDOnlineCheckObjects4= [];
gdjs.lobbyCode.GDOnlineCheckObjects5= [];
gdjs.lobbyCode.GDCursorObjects1= [];
gdjs.lobbyCode.GDCursorObjects2= [];
gdjs.lobbyCode.GDCursorObjects3= [];
gdjs.lobbyCode.GDCursorObjects4= [];
gdjs.lobbyCode.GDCursorObjects5= [];
gdjs.lobbyCode.GDBGObjects1= [];
gdjs.lobbyCode.GDBGObjects2= [];
gdjs.lobbyCode.GDBGObjects3= [];
gdjs.lobbyCode.GDBGObjects4= [];
gdjs.lobbyCode.GDBGObjects5= [];


gdjs.lobbyCode.eventsList0 = function(runtimeScene) {

};gdjs.lobbyCode.asyncCallback55937924 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lobbyCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Mode"), gdjs.lobbyCode.GDModeObjects2);
{gdjs.evtTools.p2p.sendDataToAll("playercount", gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber()));
}
{gdjs.evtTools.p2p.sendDataToAll("playercount2", gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber()));
}
{gdjs.evtTools.p2p.sendDataToAll("activeplayers", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(38)));
}
{for(var i = 0, len = gdjs.lobbyCode.GDModeObjects2.length ;i < len;++i) {
    gdjs.lobbyCode.GDModeObjects2[i].getBehavior("Text").setText("Players in lobby: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber()));
}
}
gdjs.lobbyCode.localVariables.length = 0;
}
gdjs.lobbyCode.idToCallbackMap.set(55937924, gdjs.lobbyCode.asyncCallback55937924);
gdjs.lobbyCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lobbyCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.lobbyCode.asyncCallback55937924(runtimeScene, asyncObjectsList)), 55937924, asyncObjectsList);
}
}

}


};gdjs.lobbyCode.asyncCallback55942988 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lobbyCode.localVariables);
{gdjs.evtTools.p2p.sendDataTo(runtimeScene.getGame().getVariables().getFromIndex(42).getAsString(), "hostplayerlistsync", "");
}
gdjs.lobbyCode.localVariables.length = 0;
}
gdjs.lobbyCode.idToCallbackMap.set(55942988, gdjs.lobbyCode.asyncCallback55942988);
gdjs.lobbyCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lobbyCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.lobbyCode.asyncCallback55942988(runtimeScene, asyncObjectsList)), 55942988, asyncObjectsList);
}
}

}


};gdjs.lobbyCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(38).getChild(runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber()).getAsBoolean();
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(38).getChild(runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber()).setBoolean(true);
}
{gdjs.evtTools.p2p.sendDataToAll("activeplayers", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().get("onlineplayers")));
}
}

}


};gdjs.lobbyCode.asyncCallback55963340 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lobbyCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("HostCode"), gdjs.lobbyCode.GDHostCodeObjects5);
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.lobbyCode.GDTimerObjects5);
{gdjs.evtTools.p2p.connect(runtimeScene.getGame().getVariables().getFromIndex(42).getAsString());
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "");
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Matchmaking");
}
{for(var i = 0, len = gdjs.lobbyCode.GDHostCodeObjects5.length ;i < len;++i) {
    gdjs.lobbyCode.GDHostCodeObjects5[i].hide();
}
}
{for(var i = 0, len = gdjs.lobbyCode.GDTimerObjects5.length ;i < len;++i) {
    gdjs.lobbyCode.GDTimerObjects5[i].hide();
}
}
gdjs.lobbyCode.localVariables.length = 0;
}
gdjs.lobbyCode.idToCallbackMap.set(55963340, gdjs.lobbyCode.asyncCallback55963340);
gdjs.lobbyCode.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.lobbyCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2.5), (runtimeScene) => (gdjs.lobbyCode.asyncCallback55963340(runtimeScene, asyncObjectsList)), 55963340, asyncObjectsList);
}
}

}


};gdjs.lobbyCode.asyncCallback55966780 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lobbyCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Matchmake"), gdjs.lobbyCode.GDMatchmakeObjects4);

{for(var i = 0, len = gdjs.lobbyCode.GDMatchmakeObjects4.length ;i < len;++i) {
    gdjs.lobbyCode.GDMatchmakeObjects4[i].Activate(true, null);
}
}
{for(var i = 0, len = gdjs.lobbyCode.GDMatchmakeObjects4.length ;i < len;++i) {
    gdjs.lobbyCode.GDMatchmakeObjects4[i].SetLabelTextOp("Find a Random Lobby", null);
}
}
gdjs.lobbyCode.localVariables.length = 0;
}
gdjs.lobbyCode.idToCallbackMap.set(55966780, gdjs.lobbyCode.asyncCallback55966780);
gdjs.lobbyCode.eventsList5 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.lobbyCode.localVariables);
for (const obj of gdjs.lobbyCode.GDMatchmakeObjects3) asyncObjectsList.addObject("Matchmake", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2.5), (runtimeScene) => (gdjs.lobbyCode.asyncCallback55966780(runtimeScene, asyncObjectsList)), 55966780, asyncObjectsList);
}
}

}


};gdjs.lobbyCode.eventsList6 = function(runtimeScene, asyncObjectsList) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("random", variable);
}
{
const variable = new gdjs.Variable();
variable.setString("");
variables._declare("joincode", variable);
}
gdjs.lobbyCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(9).getChild("size").getAsNumber() > 0);
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (gdjs.lobbyCode.localVariables[0].getFromIndex(0).getAsNumber() == 1);
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(asyncObjectsList.getObjects("Matchmake"), gdjs.lobbyCode.GDMatchmakeObjects4);

{for(var i = 0, len = gdjs.lobbyCode.GDMatchmakeObjects4.length ;i < len;++i) {
    gdjs.lobbyCode.GDMatchmakeObjects4[i].SetLabelTextOp("Joining soon...", null);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(43).setBoolean(false);
}
{gdjs.lobbyCode.localVariables[1].getFromIndex(0).setNumber(gdjs.randomInRange(0, runtimeScene.getScene().getVariables().getFromIndex(9).getChild("size").getAsNumber() - 1));
}
{runtimeScene.getGame().getVariables().getFromIndex(42).setString(runtimeScene.getScene().getVariables().getFromIndex(9).getChild("docs").getChild(gdjs.lobbyCode.localVariables[1].getFromIndex(0).getAsNumber()).getChild("data").getChild("id").getAsString());
}

{ //Subevents
gdjs.lobbyCode.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.lobbyCode.localVariables.pop();

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = !(runtimeScene.getScene().getVariables().getFromIndex(9).getChild("size").getAsNumber() > 0);
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (gdjs.lobbyCode.localVariables[0].getFromIndex(0).getAsNumber() == 1);
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.lobbyCode.localVariables[0].getFromIndex(0).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(9).getChild("size").getAsNumber() == 0);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (gdjs.lobbyCode.localVariables[0].getFromIndex(0).getAsNumber() == 0);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(asyncObjectsList.getObjects("Matchmake"), gdjs.lobbyCode.GDMatchmakeObjects3);

{for(var i = 0, len = gdjs.lobbyCode.GDMatchmakeObjects3.length ;i < len;++i) {
    gdjs.lobbyCode.GDMatchmakeObjects3[i].SetLabelTextOp("No Lobbies.", null);
}
}

{ //Subevents
gdjs.lobbyCode.eventsList5(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.lobbyCode.asyncCallback55960940 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lobbyCode.localVariables);
{gdjs.lobbyCode.localVariables[0].getFromIndex(0).setNumber(gdjs.randomInRange(0, 1));
}

{ //Subevents
gdjs.lobbyCode.eventsList6(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.lobbyCode.localVariables.length = 0;
}
gdjs.lobbyCode.idToCallbackMap.set(55960940, gdjs.lobbyCode.asyncCallback55960940);
gdjs.lobbyCode.eventsList7 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.lobbyCode.localVariables);
/* Don't save Matchmake as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2.5), (runtimeScene) => (gdjs.lobbyCode.asyncCallback55960940(runtimeScene, asyncObjectsList)), 55960940, asyncObjectsList);
}
}

}


};gdjs.lobbyCode.asyncCallback55960556 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lobbyCode.localVariables);
{gdjs.evtTools.firebaseTools.firestore.executeQuery("list", runtimeScene.getScene().getVariables().getFromIndex(9), runtimeScene.getScene().getVariables().getFromIndex(7));
}

{ //Subevents
gdjs.lobbyCode.eventsList7(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.lobbyCode.localVariables.length = 0;
}
gdjs.lobbyCode.idToCallbackMap.set(55960556, gdjs.lobbyCode.asyncCallback55960556);
gdjs.lobbyCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lobbyCode.localVariables);
for (const obj of gdjs.lobbyCode.GDMatchmakeObjects1) asyncObjectsList.addObject("Matchmake", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2.5), (runtimeScene) => (gdjs.lobbyCode.asyncCallback55960556(runtimeScene, asyncObjectsList)), 55960556, asyncObjectsList);
}
}

}


};gdjs.lobbyCode.eventsList9 = function(runtimeScene) {

};gdjs.lobbyCode.eventsList10 = function(runtimeScene) {

};gdjs.lobbyCode.eventsList11 = function(runtimeScene) {

};gdjs.lobbyCode.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayerName"), gdjs.lobbyCode.GDPlayerNameObjects1);

for (gdjs.lobbyCode.forEachIndex2 = 0;gdjs.lobbyCode.forEachIndex2 < gdjs.lobbyCode.GDPlayerNameObjects1.length;++gdjs.lobbyCode.forEachIndex2) {
gdjs.lobbyCode.GDPlayerNameObjects2.length = 0;


gdjs.lobbyCode.forEachTemporary2 = gdjs.lobbyCode.GDPlayerNameObjects1[gdjs.lobbyCode.forEachIndex2];
gdjs.lobbyCode.GDPlayerNameObjects2.push(gdjs.lobbyCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.lobbyCode.GDPlayerNameObjects2.length ;i < len;++i) {
    gdjs.lobbyCode.GDPlayerNameObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(gdjs.lobbyCode.GDPlayerNameObjects2[i].getVariables().getFromIndex(0).getAsNumber() - 1).getAsString());
}
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onConnection();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(43).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(55935724);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "lobbybegin");
}
{gdjs.evtTools.sound.playSound(runtimeScene, "New sound effect", false, 100, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(4).add(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(15).add(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(38).getChild(runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber()).setBoolean(true);
}
{gdjs.evtTools.p2p.sendDataToAll("data", "Players in lobby: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber()));
}
{gdjs.evtTools.p2p.sendDataToAll("list1", runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getAsString());
}
{gdjs.evtTools.p2p.sendDataToAll("list2", runtimeScene.getScene().getVariables().getFromIndex(0).getChild(1).getAsString());
}
{gdjs.evtTools.p2p.sendDataToAll("list3", runtimeScene.getScene().getVariables().getFromIndex(0).getChild(2).getAsString());
}
{gdjs.evtTools.p2p.sendDataToAll("list4", runtimeScene.getScene().getVariables().getFromIndex(0).getChild(3).getAsString());
}

{ //Subevents
gdjs.lobbyCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("data", false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mode"), gdjs.lobbyCode.GDModeObjects1);
{for(var i = 0, len = gdjs.lobbyCode.GDModeObjects1.length ;i < len;++i) {
    gdjs.lobbyCode.GDModeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.p2p.getEventData("data"));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("hostplayerlistsync", false);
if (isConditionTrue_0) {
{gdjs.evtTools.p2p.sendDataToAll("list1", runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getAsString());
}
{gdjs.evtTools.p2p.sendDataToAll("list2", runtimeScene.getScene().getVariables().getFromIndex(0).getChild(1).getAsString());
}
{gdjs.evtTools.p2p.sendDataToAll("list3", runtimeScene.getScene().getVariables().getFromIndex(0).getChild(2).getAsString());
}
{gdjs.evtTools.p2p.sendDataToAll("list4", runtimeScene.getScene().getVariables().getFromIndex(0).getChild(3).getAsString());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("playercount", false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() == -(1));
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerName"), gdjs.lobbyCode.GDPlayerNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("ReadyPlayers"), gdjs.lobbyCode.GDReadyPlayersObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(gdjs.evtTools.common.toNumber(gdjs.evtTools.p2p.getEventData("playercount")));
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() - 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber()).setString(gdjs.evtsExt__GamejoltAPI__Username.func(runtimeScene, null));
}
{runtimeScene.getGame().getVariables().getFromIndex(14).setNumber(runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber());
}
{for(var i = 0, len = gdjs.lobbyCode.GDPlayerNameObjects1.length ;i < len;++i) {
    gdjs.lobbyCode.GDPlayerNameObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(gdjs.lobbyCode.GDPlayerNameObjects1[i].getVariables().getFromIndex(0).getAsNumber() - 1).getAsString());
}
}
{for(var i = 0, len = gdjs.lobbyCode.GDReadyPlayersObjects1.length ;i < len;++i) {
    gdjs.lobbyCode.GDReadyPlayersObjects1[i].getBehavior("Text").setText("Ready Players: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber()) + "/" + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber()));
}
}
{gdjs.evtTools.p2p.sendDataToAll("list" + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() + 1), runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber()).getAsString());
}

{ //Subevents
gdjs.lobbyCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("playercount", false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() >= 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mode"), gdjs.lobbyCode.GDModeObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerName"), gdjs.lobbyCode.GDPlayerNameObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(gdjs.evtTools.common.toNumber(gdjs.evtTools.p2p.getEventData("playercount")));
}
{for(var i = 0, len = gdjs.lobbyCode.GDModeObjects1.length ;i < len;++i) {
    gdjs.lobbyCode.GDModeObjects1[i].getBehavior("Text").setText("Players in lobby: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber()));
}
}
{for(var i = 0, len = gdjs.lobbyCode.GDPlayerNameObjects1.length ;i < len;++i) {
    gdjs.lobbyCode.GDPlayerNameObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(gdjs.lobbyCode.GDPlayerNameObjects1[i].getVariables().getFromIndex(0).getAsNumber() - 1).getAsString());
}
}
{runtimeScene.getGame().getVariables().getFromIndex(14).setNumber(runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("playercount2", false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(gdjs.evtTools.common.toNumber(gdjs.evtTools.p2p.getEventData("playercount2")));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("activeplayers", false);
if (isConditionTrue_0) {
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.p2p.getEventData("activeplayers"), runtimeScene.getGame().getVariables().getFromIndex(38));
}

{ //Subevents
gdjs.lobbyCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("list1", true);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).setString(gdjs.evtTools.p2p.getEventData("list1"));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("list2", true);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild(1).setString(gdjs.evtTools.p2p.getEventData("list2"));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("list3", true);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild(2).setString(gdjs.evtTools.p2p.getEventData("list3"));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("list4", true);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild(3).setString(gdjs.evtTools.p2p.getEventData("list4"));
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("HostCode"), gdjs.lobbyCode.GDHostCodeObjects1);
{for(var i = 0, len = gdjs.lobbyCode.GDHostCodeObjects1.length ;i < len;++i) {
    gdjs.lobbyCode.GDHostCodeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.p2p.getCurrentId());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CreateLobby"), gdjs.lobbyCode.GDCreateLobbyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lobbyCode.GDCreateLobbyObjects1.length;i<l;++i) {
    if ( gdjs.lobbyCode.GDCreateLobbyObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lobbyCode.GDCreateLobbyObjects1[k] = gdjs.lobbyCode.GDCreateLobbyObjects1[i];
        ++k;
    }
}
gdjs.lobbyCode.GDCreateLobbyObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.areSceneAssetsLoaded(runtimeScene, "Game");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.isReady();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Matchmaking");
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(43).setBoolean(true);
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).setString(gdjs.evtsExt__GamejoltAPI__Username.func(runtimeScene, null));
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "");
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Matchmaking");
}
{runtimeScene.getGame().getVariables().getFromIndex(12).setBoolean(true);
}
{runtimeScene.getGame().getVariables().getFromIndex(42).setString(gdjs.evtTools.p2p.getCurrentId());
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "lobbybegin");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "sendtime");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("JoinCode"), gdjs.lobbyCode.GDJoinCodeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lobbyCode.GDJoinCodeObjects1.length;i<l;++i) {
    if ( gdjs.lobbyCode.GDJoinCodeObjects1[i].isSubmitted() ) {
        isConditionTrue_0 = true;
        gdjs.lobbyCode.GDJoinCodeObjects1[k] = gdjs.lobbyCode.GDJoinCodeObjects1[i];
        ++k;
    }
}
gdjs.lobbyCode.GDJoinCodeObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.areSceneAssetsLoaded(runtimeScene, "Game");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.isReady();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Matchmaking");
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("HostCode"), gdjs.lobbyCode.GDHostCodeObjects1);
/* Reuse gdjs.lobbyCode.GDJoinCodeObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.lobbyCode.GDTimerObjects1);
{gdjs.evtTools.p2p.connect((( gdjs.lobbyCode.GDJoinCodeObjects1.length === 0 ) ? "" :gdjs.lobbyCode.GDJoinCodeObjects1[0].getBehavior("Text").getText()));
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "");
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Matchmaking");
}
{for(var i = 0, len = gdjs.lobbyCode.GDHostCodeObjects1.length ;i < len;++i) {
    gdjs.lobbyCode.GDHostCodeObjects1[i].hide();
}
}
{runtimeScene.getGame().getVariables().getFromIndex(42).setString((( gdjs.lobbyCode.GDJoinCodeObjects1.length === 0 ) ? "" :gdjs.lobbyCode.GDJoinCodeObjects1[0].getBehavior("Text").getText()));
}
{runtimeScene.getGame().getVariables().getFromIndex(12).setBoolean(true);
}
{for(var i = 0, len = gdjs.lobbyCode.GDTimerObjects1.length ;i < len;++i) {
    gdjs.lobbyCode.GDTimerObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Matchmake"), gdjs.lobbyCode.GDMatchmakeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lobbyCode.GDMatchmakeObjects1.length;i<l;++i) {
    if ( gdjs.lobbyCode.GDMatchmakeObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lobbyCode.GDMatchmakeObjects1[k] = gdjs.lobbyCode.GDMatchmakeObjects1[i];
        ++k;
    }
}
gdjs.lobbyCode.GDMatchmakeObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.areSceneAssetsLoaded(runtimeScene, "Game");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.isReady();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Matchmaking");
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.lobbyCode.GDMatchmakeObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(8).getChild("id").setString(gdjs.evtTools.p2p.getCurrentId());
}
{for(var i = 0, len = gdjs.lobbyCode.GDMatchmakeObjects1.length ;i < len;++i) {
    gdjs.lobbyCode.GDMatchmakeObjects1[i].SetLabelTextOp("Searching", null);
}
}
{for(var i = 0, len = gdjs.lobbyCode.GDMatchmakeObjects1.length ;i < len;++i) {
    gdjs.lobbyCode.GDMatchmakeObjects1[i].Activate(false, null);
}
}
{gdjs.evtTools.firebaseTools.auth.anonymSignIn(runtimeScene.getScene().getVariables().getFromIndex(7));
}
{runtimeScene.getGame().getVariables().getFromIndex(12).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.isReady();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.areSceneAssetsLoaded(runtimeScene, "Game");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(55958580);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Matchmaking");
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Loading");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Matchmake"), gdjs.lobbyCode.GDMatchmakeObjects1);

{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("random1st", variable);
}
gdjs.lobbyCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.firebaseTools.auth.isAuthenticated();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lobbyCode.GDMatchmakeObjects1.length;i<l;++i) {
    if ( !(gdjs.lobbyCode.GDMatchmakeObjects1[i].IsActivated(null)) ) {
        isConditionTrue_0 = true;
        gdjs.lobbyCode.GDMatchmakeObjects1[k] = gdjs.lobbyCode.GDMatchmakeObjects1[i];
        ++k;
    }
}
gdjs.lobbyCode.GDMatchmakeObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(55960052);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Matchmaking");
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ModeSelector"), gdjs.lobbyCode.GDModeSelectorObjects1);
{gdjs.evtTools.firebaseTools.firestore.startQuery("list", "servers");
}
{gdjs.evtTools.firebaseTools.firestore.queryWhere("list", "mode", "==", runtimeScene.getScene().getVariables().getFromIndex(11).getChild((( gdjs.lobbyCode.GDModeSelectorObjects1.length === 0 ) ? 0 :gdjs.lobbyCode.GDModeSelectorObjects1[0].Value(null))).getAsString());
}

{ //Subevents
gdjs.lobbyCode.eventsList8(runtimeScene);} //End of subevents
}
gdjs.lobbyCode.localVariables.pop();

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.lobbyCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ready"), gdjs.lobbyCode.GDReadyObjects1);
{gdjs.evtTools.p2p.useDefaultBrokerServer();
}
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "Game");
}
{runtimeScene.getGame().getVariables().getFromIndex(12).setBoolean(true);
}
{for(var i = 0, len = gdjs.lobbyCode.GDReadyObjects1.length ;i < len;++i) {
    gdjs.lobbyCode.GDReadyObjects1[i].SetLabelTextOp("Waiting...", null);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(6).getChild("1").setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(6).getChild("2").setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(6).getChild("3").setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(6).getChild("4").setNumber(0);
}
{for(var i = 0, len = gdjs.lobbyCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.lobbyCode.GDNewSpriteObjects1[i].hide();
}
}
{gdjs.evtsExt__GamejoltAPI__SetTestUser.func(runtimeScene, "Tester" + gdjs.evtTools.common.toString(gdjs.randomInRange(1000, 9999)), "Tester" + gdjs.evtTools.common.toString(gdjs.randomInRange(1000, 9999)), null);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ready"), gdjs.lobbyCode.GDReadyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lobbyCode.GDReadyObjects1.length;i<l;++i) {
    if ( gdjs.lobbyCode.GDReadyObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lobbyCode.GDReadyObjects1[k] = gdjs.lobbyCode.GDReadyObjects1[i];
        ++k;
    }
}
gdjs.lobbyCode.GDReadyObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.areSceneAssetsLoaded(runtimeScene, "Game");
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.lobbyCode.GDReadyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("ReadyPlayers"), gdjs.lobbyCode.GDReadyPlayersObjects1);
{for(var i = 0, len = gdjs.lobbyCode.GDReadyObjects1.length ;i < len;++i) {
    gdjs.lobbyCode.GDReadyObjects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs.lobbyCode.GDReadyObjects1.length ;i < len;++i) {
    gdjs.lobbyCode.GDReadyObjects1[i].SetLabelTextOp("Waiting...", null);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(10).add(1);
}
{for(var i = 0, len = gdjs.lobbyCode.GDReadyPlayersObjects1.length ;i < len;++i) {
    gdjs.lobbyCode.GDReadyPlayersObjects1[i].getBehavior("Text").setText("Ready Players: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber()) + "/" + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber()));
}
}
{gdjs.evtTools.p2p.sendDataTo(runtimeScene.getGame().getVariables().getFromIndex(42).getAsString(), "readyincreasehost", "");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("readyincreasehost", false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ReadyPlayers"), gdjs.lobbyCode.GDReadyPlayersObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(10).add(1);
}
{for(var i = 0, len = gdjs.lobbyCode.GDReadyPlayersObjects1.length ;i < len;++i) {
    gdjs.lobbyCode.GDReadyPlayersObjects1[i].getBehavior("Text").setText("Ready Players: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber()) + "/" + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber()));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(10).setNumber(gdjs.evtTools.common.toNumber(gdjs.evtTools.p2p.getEventData("ready")));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("ready", false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(43).getAsBoolean();
}
}
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ReadyPlayers"), gdjs.lobbyCode.GDReadyPlayersObjects1);
{for(var i = 0, len = gdjs.lobbyCode.GDReadyPlayersObjects1.length ;i < len;++i) {
    gdjs.lobbyCode.GDReadyPlayersObjects1[i].getBehavior("Text").setText("Ready Players: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber()) + "/" + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber()));
}
}
{gdjs.evtTools.p2p.sendDataToAll("ready", gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber()));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.lobbyCode.GDQuitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lobbyCode.GDQuitObjects1.length;i<l;++i) {
    if ( gdjs.lobbyCode.GDQuitObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lobbyCode.GDQuitObjects1[k] = gdjs.lobbyCode.GDQuitObjects1[i];
        ++k;
    }
}
gdjs.lobbyCode.GDQuitObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Matchmaking");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MultiplayerTitle", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CharEnter"), gdjs.lobbyCode.GDCharEnterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lobbyCode.GDCharEnterObjects1.length;i<l;++i) {
    if ( gdjs.lobbyCode.GDCharEnterObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lobbyCode.GDCharEnterObjects1[k] = gdjs.lobbyCode.GDCharEnterObjects1[i];
        ++k;
    }
}
gdjs.lobbyCode.GDCharEnterObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CharName"), gdjs.lobbyCode.GDCharNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.lobbyCode.GDCharacterObjects1);
{for(var i = 0, len = gdjs.lobbyCode.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.lobbyCode.GDCharacterObjects1[i].getBehavior("Animation").setAnimationName("Tennis Guy");
}
}
{for(var i = 0, len = gdjs.lobbyCode.GDCharNameObjects1.length ;i < len;++i) {
    gdjs.lobbyCode.GDCharNameObjects1[i].returnVariable(gdjs.lobbyCode.GDCharNameObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(false);
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "");
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "Characterselect");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CharEnter"), gdjs.lobbyCode.GDCharEnterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lobbyCode.GDCharEnterObjects1.length;i<l;++i) {
    if ( gdjs.lobbyCode.GDCharEnterObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lobbyCode.GDCharEnterObjects1[k] = gdjs.lobbyCode.GDCharEnterObjects1[i];
        ++k;
    }
}
gdjs.lobbyCode.GDCharEnterObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "");
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "Characterselect");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CharBack"), gdjs.lobbyCode.GDCharBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lobbyCode.GDCharBackObjects1.length;i<l;++i) {
    if ( gdjs.lobbyCode.GDCharBackObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lobbyCode.GDCharBackObjects1[k] = gdjs.lobbyCode.GDCharBackObjects1[i];
        ++k;
    }
}
gdjs.lobbyCode.GDCharBackObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Characterselect");
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Characterselect");
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "lobbybegin") > 30;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() > 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(55981540);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.p2p.sendDataToAll("sendtime", "");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "lobbybegin") > 30;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(55982764);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "lobbybegin");
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CharName"), gdjs.lobbyCode.GDCharNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.lobbyCode.GDCharacterObjects1);
{for(var i = 0, len = gdjs.lobbyCode.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.lobbyCode.GDCharacterObjects1[i].getBehavior("Animation").setAnimationIndex(((gdjs.lobbyCode.GDCharNameObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.lobbyCode.GDCharNameObjects1[0].getVariables()).getFromIndex(0).getAsNumber() - 1);
}
}
{for(var i = 0, len = gdjs.lobbyCode.GDCharNameObjects1.length ;i < len;++i) {
    gdjs.lobbyCode.GDCharNameObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(gdjs.lobbyCode.GDCharNameObjects1[i].getVariables().getFromIndex(0).getAsNumber()).getAsString());
}
}
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getChild(runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() + 1).getAsNumber());
}
{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber());
}
{runtimeScene.getGame().getVariables().getFromIndex(14).setNumber(runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber());
}
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("CharNext"), gdjs.lobbyCode.GDCharNextObjects1);

{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
{
const variable1 = new gdjs.Variable();
variable1.setNumber(0);
variable._pushVariable(variable1);
}
{
const variable1 = new gdjs.Variable();
variable1.setNumber(0);
variable._pushVariable(variable1);
}
variables._declare("sendtohost", variable);
}
gdjs.lobbyCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lobbyCode.GDCharNextObjects1.length;i<l;++i) {
    if ( gdjs.lobbyCode.GDCharNextObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lobbyCode.GDCharNextObjects1[k] = gdjs.lobbyCode.GDCharNextObjects1[i];
        ++k;
    }
}
gdjs.lobbyCode.GDCharNextObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getGame().getVariables().getFromIndex(6).getChild(runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() + 1).getAsNumber() + 3 >= runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber());
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CharName"), gdjs.lobbyCode.GDCharNameObjects1);
{for(var i = 0, len = gdjs.lobbyCode.GDCharNameObjects1.length ;i < len;++i) {
    gdjs.lobbyCode.GDCharNameObjects1[i].returnVariable(gdjs.lobbyCode.GDCharNameObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(16).add(3);
}
{runtimeScene.getGame().getVariables().getFromIndex(6).getChild(runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber() + 1).setNumber(runtimeScene.getGame().getVariables().getFromIndex(16).getAsNumber());
}
{gdjs.lobbyCode.localVariables[0].getFromIndex(0).getChild(0).setNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber());
}
{gdjs.lobbyCode.localVariables[0].getFromIndex(0).getChild(1).setNumber(runtimeScene.getGame().getVariables().getFromIndex(16).getAsNumber());
}
{gdjs.evtTools.debuggerTools.log(runtimeScene.getGame().getVariables().getFromIndex(6).getChild(runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() + 1).getAsString(), "info", "multiplayerp2p");
}
{gdjs.evtTools.p2p.sendDataToAll("yourchar", gdjs.evtTools.network.variableStructureToJSON(gdjs.lobbyCode.localVariables[0].getFromIndex(0)));
}
}
gdjs.lobbyCode.localVariables.pop();

}


{

gdjs.copyArray(runtimeScene.getObjects("CharPrev"), gdjs.lobbyCode.GDCharPrevObjects1);

{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
{
const variable1 = new gdjs.Variable();
variable1.setNumber(0);
variable._pushVariable(variable1);
}
{
const variable1 = new gdjs.Variable();
variable1.setNumber(0);
variable._pushVariable(variable1);
}
variables._declare("sendtohost", variable);
}
gdjs.lobbyCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lobbyCode.GDCharPrevObjects1.length;i<l;++i) {
    if ( gdjs.lobbyCode.GDCharPrevObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lobbyCode.GDCharPrevObjects1[k] = gdjs.lobbyCode.GDCharPrevObjects1[i];
        ++k;
    }
}
gdjs.lobbyCode.GDCharPrevObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(6).getChild(runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() + 1).getAsNumber() != 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CharName"), gdjs.lobbyCode.GDCharNameObjects1);
{for(var i = 0, len = gdjs.lobbyCode.GDCharNameObjects1.length ;i < len;++i) {
    gdjs.lobbyCode.GDCharNameObjects1[i].returnVariable(gdjs.lobbyCode.GDCharNameObjects1[i].getVariables().getFromIndex(0)).sub(1);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(16).sub(3);
}
{runtimeScene.getGame().getVariables().getFromIndex(6).getChild(runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber() + 1).setNumber(runtimeScene.getGame().getVariables().getFromIndex(16).getAsNumber());
}
{gdjs.lobbyCode.localVariables[0].getFromIndex(0).getChild(0).setNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber());
}
{gdjs.lobbyCode.localVariables[0].getFromIndex(0).getChild(1).setNumber(runtimeScene.getGame().getVariables().getFromIndex(16).getAsNumber());
}
{gdjs.evtTools.debuggerTools.log(runtimeScene.getGame().getVariables().getFromIndex(6).getChild(runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() + 1).getAsString(), "info", "multiplayerp2p");
}
{gdjs.evtTools.p2p.sendDataToAll("yourchar", gdjs.evtTools.network.variableStructureToJSON(gdjs.lobbyCode.localVariables[0].getFromIndex(0)));
}
}
gdjs.lobbyCode.localVariables.pop();

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
{
const variable1 = new gdjs.Variable();
variable1.setNumber(0);
variable._pushVariable(variable1);
}
{
const variable1 = new gdjs.Variable();
variable1.setNumber(0);
variable._pushVariable(variable1);
}
variables._declare("recieved", variable);
}
gdjs.lobbyCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("yourchar", false);
if (isConditionTrue_0) {
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.p2p.getEventData("yourchar"), gdjs.lobbyCode.localVariables[0].getFromIndex(0));
}
{runtimeScene.getGame().getVariables().getFromIndex(6).getChild(gdjs.lobbyCode.localVariables[0].getFromIndex(0).getChild(0).getAsNumber() + 1).setNumber(gdjs.lobbyCode.localVariables[0].getFromIndex(0).getChild(1).getAsNumber());
}
}
gdjs.lobbyCode.localVariables.pop();

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("sendtime", false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Mode2"), gdjs.lobbyCode.GDMode2Objects1);
gdjs.copyArray(runtimeScene.getObjects("ModeSelector"), gdjs.lobbyCode.GDModeSelectorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.lobbyCode.GDTimerObjects1);
gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.lobbyCode.GDbuttonObjects1);
{for(var i = 0, len = gdjs.lobbyCode.GDMode2Objects1.length ;i < len;++i) {
    gdjs.lobbyCode.GDMode2Objects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(11).getChild((( gdjs.lobbyCode.GDModeSelectorObjects1.length === 0 ) ? 0 :gdjs.lobbyCode.GDModeSelectorObjects1[0].Value(null))).getAsString());
}
}
{runtimeScene.getGame().getVariables().getFromIndex(13).setString((( gdjs.lobbyCode.GDMode2Objects1.length === 0 ) ? "" :gdjs.lobbyCode.GDMode2Objects1[0].getBehavior("Text").getText()));
}
{runtimeScene.getGame().getVariables().getFromIndex(38).getChild(0).setBoolean(true);
}
{for(var i = 0, len = gdjs.lobbyCode.GDTimerObjects1.length ;i < len;++i) {
    gdjs.lobbyCode.GDTimerObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(30 - Math.round(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "lobbybegin"))) + "s");
}
}
{for(var i = 0, len = gdjs.lobbyCode.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.lobbyCode.GDbuttonObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.lobbyCode.GDbuttonObjects1[i].getVariables().getFromIndex(0).getAsNumber());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("active"), gdjs.lobbyCode.GDactiveObjects1);

for (gdjs.lobbyCode.forEachIndex2 = 0;gdjs.lobbyCode.forEachIndex2 < gdjs.lobbyCode.GDactiveObjects1.length;++gdjs.lobbyCode.forEachIndex2) {
gdjs.lobbyCode.GDactiveObjects2.length = 0;


gdjs.lobbyCode.forEachTemporary2 = gdjs.lobbyCode.GDactiveObjects1[gdjs.lobbyCode.forEachIndex2];
gdjs.lobbyCode.GDactiveObjects2.push(gdjs.lobbyCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.lobbyCode.GDactiveObjects2.length ;i < len;++i) {
    gdjs.lobbyCode.GDactiveObjects2[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(6).getChild(gdjs.lobbyCode.GDactiveObjects2[i].getVariables().getFromIndex(0).getAsNumber() + 1).getAsNumber()));
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.lobbyCode.GDNewSpriteObjects1);

for (gdjs.lobbyCode.forEachIndex2 = 0;gdjs.lobbyCode.forEachIndex2 < gdjs.lobbyCode.GDNewSpriteObjects1.length;++gdjs.lobbyCode.forEachIndex2) {
gdjs.lobbyCode.GDNewSpriteObjects2.length = 0;


gdjs.lobbyCode.forEachTemporary2 = gdjs.lobbyCode.GDNewSpriteObjects1[gdjs.lobbyCode.forEachIndex2];
gdjs.lobbyCode.GDNewSpriteObjects2.push(gdjs.lobbyCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lobbyCode.GDNewSpriteObjects2.length;i<l;++i) {
    if ( gdjs.lobbyCode.GDNewSpriteObjects2[i].getVariableNumber(gdjs.lobbyCode.GDNewSpriteObjects2[i].getVariables().getFromIndex(0)) == runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.lobbyCode.GDNewSpriteObjects2[k] = gdjs.lobbyCode.GDNewSpriteObjects2[i];
        ++k;
    }
}
gdjs.lobbyCode.GDNewSpriteObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(20).getAsBoolean();
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.lobbyCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.lobbyCode.GDNewSpriteObjects2[i].hide(false);
}
}
{gdjs.evtTools.p2p.sendDataToAll("supporternameplate", gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber()));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.lobbyCode.GDNewSpriteObjects1);

for (gdjs.lobbyCode.forEachIndex2 = 0;gdjs.lobbyCode.forEachIndex2 < gdjs.lobbyCode.GDNewSpriteObjects1.length;++gdjs.lobbyCode.forEachIndex2) {
gdjs.lobbyCode.GDNewSpriteObjects2.length = 0;


gdjs.lobbyCode.forEachTemporary2 = gdjs.lobbyCode.GDNewSpriteObjects1[gdjs.lobbyCode.forEachIndex2];
gdjs.lobbyCode.GDNewSpriteObjects2.push(gdjs.lobbyCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("supporternameplate", false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lobbyCode.GDNewSpriteObjects2.length;i<l;++i) {
    if ( gdjs.lobbyCode.GDNewSpriteObjects2[i].getVariableNumber(gdjs.lobbyCode.GDNewSpriteObjects2[i].getVariables().getFromIndex(0)) == gdjs.evtTools.common.toNumber(gdjs.evtTools.p2p.getEventData("supporternameplate")) ) {
        isConditionTrue_0 = true;
        gdjs.lobbyCode.GDNewSpriteObjects2[k] = gdjs.lobbyCode.GDNewSpriteObjects2[i];
        ++k;
    }
}
gdjs.lobbyCode.GDNewSpriteObjects2.length = k;
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.lobbyCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.lobbyCode.GDNewSpriteObjects2[i].hide(false);
}
}
}
}

}


};

gdjs.lobbyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.lobbyCode.GDCourtObjects1.length = 0;
gdjs.lobbyCode.GDCourtObjects2.length = 0;
gdjs.lobbyCode.GDCourtObjects3.length = 0;
gdjs.lobbyCode.GDCourtObjects4.length = 0;
gdjs.lobbyCode.GDCourtObjects5.length = 0;
gdjs.lobbyCode.GDMidPartObjects1.length = 0;
gdjs.lobbyCode.GDMidPartObjects2.length = 0;
gdjs.lobbyCode.GDMidPartObjects3.length = 0;
gdjs.lobbyCode.GDMidPartObjects4.length = 0;
gdjs.lobbyCode.GDMidPartObjects5.length = 0;
gdjs.lobbyCode.GDPlayerNameObjects1.length = 0;
gdjs.lobbyCode.GDPlayerNameObjects2.length = 0;
gdjs.lobbyCode.GDPlayerNameObjects3.length = 0;
gdjs.lobbyCode.GDPlayerNameObjects4.length = 0;
gdjs.lobbyCode.GDPlayerNameObjects5.length = 0;
gdjs.lobbyCode.GDLobObjects1.length = 0;
gdjs.lobbyCode.GDLobObjects2.length = 0;
gdjs.lobbyCode.GDLobObjects3.length = 0;
gdjs.lobbyCode.GDLobObjects4.length = 0;
gdjs.lobbyCode.GDLobObjects5.length = 0;
gdjs.lobbyCode.GDSliceObjects1.length = 0;
gdjs.lobbyCode.GDSliceObjects2.length = 0;
gdjs.lobbyCode.GDSliceObjects3.length = 0;
gdjs.lobbyCode.GDSliceObjects4.length = 0;
gdjs.lobbyCode.GDSliceObjects5.length = 0;
gdjs.lobbyCode.GDModeObjects1.length = 0;
gdjs.lobbyCode.GDModeObjects2.length = 0;
gdjs.lobbyCode.GDModeObjects3.length = 0;
gdjs.lobbyCode.GDModeObjects4.length = 0;
gdjs.lobbyCode.GDModeObjects5.length = 0;
gdjs.lobbyCode.GDReadyObjects1.length = 0;
gdjs.lobbyCode.GDReadyObjects2.length = 0;
gdjs.lobbyCode.GDReadyObjects3.length = 0;
gdjs.lobbyCode.GDReadyObjects4.length = 0;
gdjs.lobbyCode.GDReadyObjects5.length = 0;
gdjs.lobbyCode.GDHostCodeObjects1.length = 0;
gdjs.lobbyCode.GDHostCodeObjects2.length = 0;
gdjs.lobbyCode.GDHostCodeObjects3.length = 0;
gdjs.lobbyCode.GDHostCodeObjects4.length = 0;
gdjs.lobbyCode.GDHostCodeObjects5.length = 0;
gdjs.lobbyCode.GDCreateLobbyObjects1.length = 0;
gdjs.lobbyCode.GDCreateLobbyObjects2.length = 0;
gdjs.lobbyCode.GDCreateLobbyObjects3.length = 0;
gdjs.lobbyCode.GDCreateLobbyObjects4.length = 0;
gdjs.lobbyCode.GDCreateLobbyObjects5.length = 0;
gdjs.lobbyCode.GDJoinCodeObjects1.length = 0;
gdjs.lobbyCode.GDJoinCodeObjects2.length = 0;
gdjs.lobbyCode.GDJoinCodeObjects3.length = 0;
gdjs.lobbyCode.GDJoinCodeObjects4.length = 0;
gdjs.lobbyCode.GDJoinCodeObjects5.length = 0;
gdjs.lobbyCode.GDMatchmakeObjects1.length = 0;
gdjs.lobbyCode.GDMatchmakeObjects2.length = 0;
gdjs.lobbyCode.GDMatchmakeObjects3.length = 0;
gdjs.lobbyCode.GDMatchmakeObjects4.length = 0;
gdjs.lobbyCode.GDMatchmakeObjects5.length = 0;
gdjs.lobbyCode.GDLoadingObjects1.length = 0;
gdjs.lobbyCode.GDLoadingObjects2.length = 0;
gdjs.lobbyCode.GDLoadingObjects3.length = 0;
gdjs.lobbyCode.GDLoadingObjects4.length = 0;
gdjs.lobbyCode.GDLoadingObjects5.length = 0;
gdjs.lobbyCode.GDReadyPlayersObjects1.length = 0;
gdjs.lobbyCode.GDReadyPlayersObjects2.length = 0;
gdjs.lobbyCode.GDReadyPlayersObjects3.length = 0;
gdjs.lobbyCode.GDReadyPlayersObjects4.length = 0;
gdjs.lobbyCode.GDReadyPlayersObjects5.length = 0;
gdjs.lobbyCode.GDCharacterObjects1.length = 0;
gdjs.lobbyCode.GDCharacterObjects2.length = 0;
gdjs.lobbyCode.GDCharacterObjects3.length = 0;
gdjs.lobbyCode.GDCharacterObjects4.length = 0;
gdjs.lobbyCode.GDCharacterObjects5.length = 0;
gdjs.lobbyCode.GDCharNameObjects1.length = 0;
gdjs.lobbyCode.GDCharNameObjects2.length = 0;
gdjs.lobbyCode.GDCharNameObjects3.length = 0;
gdjs.lobbyCode.GDCharNameObjects4.length = 0;
gdjs.lobbyCode.GDCharNameObjects5.length = 0;
gdjs.lobbyCode.GDCharBackObjects1.length = 0;
gdjs.lobbyCode.GDCharBackObjects2.length = 0;
gdjs.lobbyCode.GDCharBackObjects3.length = 0;
gdjs.lobbyCode.GDCharBackObjects4.length = 0;
gdjs.lobbyCode.GDCharBackObjects5.length = 0;
gdjs.lobbyCode.GDCharEnterObjects1.length = 0;
gdjs.lobbyCode.GDCharEnterObjects2.length = 0;
gdjs.lobbyCode.GDCharEnterObjects3.length = 0;
gdjs.lobbyCode.GDCharEnterObjects4.length = 0;
gdjs.lobbyCode.GDCharEnterObjects5.length = 0;
gdjs.lobbyCode.GDModeSelectorObjects1.length = 0;
gdjs.lobbyCode.GDModeSelectorObjects2.length = 0;
gdjs.lobbyCode.GDModeSelectorObjects3.length = 0;
gdjs.lobbyCode.GDModeSelectorObjects4.length = 0;
gdjs.lobbyCode.GDModeSelectorObjects5.length = 0;
gdjs.lobbyCode.GDMode2Objects1.length = 0;
gdjs.lobbyCode.GDMode2Objects2.length = 0;
gdjs.lobbyCode.GDMode2Objects3.length = 0;
gdjs.lobbyCode.GDMode2Objects4.length = 0;
gdjs.lobbyCode.GDMode2Objects5.length = 0;
gdjs.lobbyCode.GDactiveObjects1.length = 0;
gdjs.lobbyCode.GDactiveObjects2.length = 0;
gdjs.lobbyCode.GDactiveObjects3.length = 0;
gdjs.lobbyCode.GDactiveObjects4.length = 0;
gdjs.lobbyCode.GDactiveObjects5.length = 0;
gdjs.lobbyCode.GDCharNextObjects1.length = 0;
gdjs.lobbyCode.GDCharNextObjects2.length = 0;
gdjs.lobbyCode.GDCharNextObjects3.length = 0;
gdjs.lobbyCode.GDCharNextObjects4.length = 0;
gdjs.lobbyCode.GDCharNextObjects5.length = 0;
gdjs.lobbyCode.GDCharPrevObjects1.length = 0;
gdjs.lobbyCode.GDCharPrevObjects2.length = 0;
gdjs.lobbyCode.GDCharPrevObjects3.length = 0;
gdjs.lobbyCode.GDCharPrevObjects4.length = 0;
gdjs.lobbyCode.GDCharPrevObjects5.length = 0;
gdjs.lobbyCode.GDTimerObjects1.length = 0;
gdjs.lobbyCode.GDTimerObjects2.length = 0;
gdjs.lobbyCode.GDTimerObjects3.length = 0;
gdjs.lobbyCode.GDTimerObjects4.length = 0;
gdjs.lobbyCode.GDTimerObjects5.length = 0;
gdjs.lobbyCode.GDQuitObjects1.length = 0;
gdjs.lobbyCode.GDQuitObjects2.length = 0;
gdjs.lobbyCode.GDQuitObjects3.length = 0;
gdjs.lobbyCode.GDQuitObjects4.length = 0;
gdjs.lobbyCode.GDQuitObjects5.length = 0;
gdjs.lobbyCode.GDNewSpriteObjects1.length = 0;
gdjs.lobbyCode.GDNewSpriteObjects2.length = 0;
gdjs.lobbyCode.GDNewSpriteObjects3.length = 0;
gdjs.lobbyCode.GDNewSpriteObjects4.length = 0;
gdjs.lobbyCode.GDNewSpriteObjects5.length = 0;
gdjs.lobbyCode.GDLobbyNameBrowserObjects1.length = 0;
gdjs.lobbyCode.GDLobbyNameBrowserObjects2.length = 0;
gdjs.lobbyCode.GDLobbyNameBrowserObjects3.length = 0;
gdjs.lobbyCode.GDLobbyNameBrowserObjects4.length = 0;
gdjs.lobbyCode.GDLobbyNameBrowserObjects5.length = 0;
gdjs.lobbyCode.GDLobbyCountObjects1.length = 0;
gdjs.lobbyCode.GDLobbyCountObjects2.length = 0;
gdjs.lobbyCode.GDLobbyCountObjects3.length = 0;
gdjs.lobbyCode.GDLobbyCountObjects4.length = 0;
gdjs.lobbyCode.GDLobbyCountObjects5.length = 0;
gdjs.lobbyCode.GDLobbyModeObjects1.length = 0;
gdjs.lobbyCode.GDLobbyModeObjects2.length = 0;
gdjs.lobbyCode.GDLobbyModeObjects3.length = 0;
gdjs.lobbyCode.GDLobbyModeObjects4.length = 0;
gdjs.lobbyCode.GDLobbyModeObjects5.length = 0;
gdjs.lobbyCode.GDbuttonObjects1.length = 0;
gdjs.lobbyCode.GDbuttonObjects2.length = 0;
gdjs.lobbyCode.GDbuttonObjects3.length = 0;
gdjs.lobbyCode.GDbuttonObjects4.length = 0;
gdjs.lobbyCode.GDbuttonObjects5.length = 0;
gdjs.lobbyCode.GDJoinLobbyButtonObjects1.length = 0;
gdjs.lobbyCode.GDJoinLobbyButtonObjects2.length = 0;
gdjs.lobbyCode.GDJoinLobbyButtonObjects3.length = 0;
gdjs.lobbyCode.GDJoinLobbyButtonObjects4.length = 0;
gdjs.lobbyCode.GDJoinLobbyButtonObjects5.length = 0;
gdjs.lobbyCode.GDBackButtonObjects1.length = 0;
gdjs.lobbyCode.GDBackButtonObjects2.length = 0;
gdjs.lobbyCode.GDBackButtonObjects3.length = 0;
gdjs.lobbyCode.GDBackButtonObjects4.length = 0;
gdjs.lobbyCode.GDBackButtonObjects5.length = 0;
gdjs.lobbyCode.GDCustomLobbiesObjects1.length = 0;
gdjs.lobbyCode.GDCustomLobbiesObjects2.length = 0;
gdjs.lobbyCode.GDCustomLobbiesObjects3.length = 0;
gdjs.lobbyCode.GDCustomLobbiesObjects4.length = 0;
gdjs.lobbyCode.GDCustomLobbiesObjects5.length = 0;
gdjs.lobbyCode.GDOnlineCheckObjects1.length = 0;
gdjs.lobbyCode.GDOnlineCheckObjects2.length = 0;
gdjs.lobbyCode.GDOnlineCheckObjects3.length = 0;
gdjs.lobbyCode.GDOnlineCheckObjects4.length = 0;
gdjs.lobbyCode.GDOnlineCheckObjects5.length = 0;
gdjs.lobbyCode.GDCursorObjects1.length = 0;
gdjs.lobbyCode.GDCursorObjects2.length = 0;
gdjs.lobbyCode.GDCursorObjects3.length = 0;
gdjs.lobbyCode.GDCursorObjects4.length = 0;
gdjs.lobbyCode.GDCursorObjects5.length = 0;
gdjs.lobbyCode.GDBGObjects1.length = 0;
gdjs.lobbyCode.GDBGObjects2.length = 0;
gdjs.lobbyCode.GDBGObjects3.length = 0;
gdjs.lobbyCode.GDBGObjects4.length = 0;
gdjs.lobbyCode.GDBGObjects5.length = 0;

gdjs.lobbyCode.eventsList12(runtimeScene);
gdjs.lobbyCode.GDCourtObjects1.length = 0;
gdjs.lobbyCode.GDCourtObjects2.length = 0;
gdjs.lobbyCode.GDCourtObjects3.length = 0;
gdjs.lobbyCode.GDCourtObjects4.length = 0;
gdjs.lobbyCode.GDCourtObjects5.length = 0;
gdjs.lobbyCode.GDMidPartObjects1.length = 0;
gdjs.lobbyCode.GDMidPartObjects2.length = 0;
gdjs.lobbyCode.GDMidPartObjects3.length = 0;
gdjs.lobbyCode.GDMidPartObjects4.length = 0;
gdjs.lobbyCode.GDMidPartObjects5.length = 0;
gdjs.lobbyCode.GDPlayerNameObjects1.length = 0;
gdjs.lobbyCode.GDPlayerNameObjects2.length = 0;
gdjs.lobbyCode.GDPlayerNameObjects3.length = 0;
gdjs.lobbyCode.GDPlayerNameObjects4.length = 0;
gdjs.lobbyCode.GDPlayerNameObjects5.length = 0;
gdjs.lobbyCode.GDLobObjects1.length = 0;
gdjs.lobbyCode.GDLobObjects2.length = 0;
gdjs.lobbyCode.GDLobObjects3.length = 0;
gdjs.lobbyCode.GDLobObjects4.length = 0;
gdjs.lobbyCode.GDLobObjects5.length = 0;
gdjs.lobbyCode.GDSliceObjects1.length = 0;
gdjs.lobbyCode.GDSliceObjects2.length = 0;
gdjs.lobbyCode.GDSliceObjects3.length = 0;
gdjs.lobbyCode.GDSliceObjects4.length = 0;
gdjs.lobbyCode.GDSliceObjects5.length = 0;
gdjs.lobbyCode.GDModeObjects1.length = 0;
gdjs.lobbyCode.GDModeObjects2.length = 0;
gdjs.lobbyCode.GDModeObjects3.length = 0;
gdjs.lobbyCode.GDModeObjects4.length = 0;
gdjs.lobbyCode.GDModeObjects5.length = 0;
gdjs.lobbyCode.GDReadyObjects1.length = 0;
gdjs.lobbyCode.GDReadyObjects2.length = 0;
gdjs.lobbyCode.GDReadyObjects3.length = 0;
gdjs.lobbyCode.GDReadyObjects4.length = 0;
gdjs.lobbyCode.GDReadyObjects5.length = 0;
gdjs.lobbyCode.GDHostCodeObjects1.length = 0;
gdjs.lobbyCode.GDHostCodeObjects2.length = 0;
gdjs.lobbyCode.GDHostCodeObjects3.length = 0;
gdjs.lobbyCode.GDHostCodeObjects4.length = 0;
gdjs.lobbyCode.GDHostCodeObjects5.length = 0;
gdjs.lobbyCode.GDCreateLobbyObjects1.length = 0;
gdjs.lobbyCode.GDCreateLobbyObjects2.length = 0;
gdjs.lobbyCode.GDCreateLobbyObjects3.length = 0;
gdjs.lobbyCode.GDCreateLobbyObjects4.length = 0;
gdjs.lobbyCode.GDCreateLobbyObjects5.length = 0;
gdjs.lobbyCode.GDJoinCodeObjects1.length = 0;
gdjs.lobbyCode.GDJoinCodeObjects2.length = 0;
gdjs.lobbyCode.GDJoinCodeObjects3.length = 0;
gdjs.lobbyCode.GDJoinCodeObjects4.length = 0;
gdjs.lobbyCode.GDJoinCodeObjects5.length = 0;
gdjs.lobbyCode.GDMatchmakeObjects1.length = 0;
gdjs.lobbyCode.GDMatchmakeObjects2.length = 0;
gdjs.lobbyCode.GDMatchmakeObjects3.length = 0;
gdjs.lobbyCode.GDMatchmakeObjects4.length = 0;
gdjs.lobbyCode.GDMatchmakeObjects5.length = 0;
gdjs.lobbyCode.GDLoadingObjects1.length = 0;
gdjs.lobbyCode.GDLoadingObjects2.length = 0;
gdjs.lobbyCode.GDLoadingObjects3.length = 0;
gdjs.lobbyCode.GDLoadingObjects4.length = 0;
gdjs.lobbyCode.GDLoadingObjects5.length = 0;
gdjs.lobbyCode.GDReadyPlayersObjects1.length = 0;
gdjs.lobbyCode.GDReadyPlayersObjects2.length = 0;
gdjs.lobbyCode.GDReadyPlayersObjects3.length = 0;
gdjs.lobbyCode.GDReadyPlayersObjects4.length = 0;
gdjs.lobbyCode.GDReadyPlayersObjects5.length = 0;
gdjs.lobbyCode.GDCharacterObjects1.length = 0;
gdjs.lobbyCode.GDCharacterObjects2.length = 0;
gdjs.lobbyCode.GDCharacterObjects3.length = 0;
gdjs.lobbyCode.GDCharacterObjects4.length = 0;
gdjs.lobbyCode.GDCharacterObjects5.length = 0;
gdjs.lobbyCode.GDCharNameObjects1.length = 0;
gdjs.lobbyCode.GDCharNameObjects2.length = 0;
gdjs.lobbyCode.GDCharNameObjects3.length = 0;
gdjs.lobbyCode.GDCharNameObjects4.length = 0;
gdjs.lobbyCode.GDCharNameObjects5.length = 0;
gdjs.lobbyCode.GDCharBackObjects1.length = 0;
gdjs.lobbyCode.GDCharBackObjects2.length = 0;
gdjs.lobbyCode.GDCharBackObjects3.length = 0;
gdjs.lobbyCode.GDCharBackObjects4.length = 0;
gdjs.lobbyCode.GDCharBackObjects5.length = 0;
gdjs.lobbyCode.GDCharEnterObjects1.length = 0;
gdjs.lobbyCode.GDCharEnterObjects2.length = 0;
gdjs.lobbyCode.GDCharEnterObjects3.length = 0;
gdjs.lobbyCode.GDCharEnterObjects4.length = 0;
gdjs.lobbyCode.GDCharEnterObjects5.length = 0;
gdjs.lobbyCode.GDModeSelectorObjects1.length = 0;
gdjs.lobbyCode.GDModeSelectorObjects2.length = 0;
gdjs.lobbyCode.GDModeSelectorObjects3.length = 0;
gdjs.lobbyCode.GDModeSelectorObjects4.length = 0;
gdjs.lobbyCode.GDModeSelectorObjects5.length = 0;
gdjs.lobbyCode.GDMode2Objects1.length = 0;
gdjs.lobbyCode.GDMode2Objects2.length = 0;
gdjs.lobbyCode.GDMode2Objects3.length = 0;
gdjs.lobbyCode.GDMode2Objects4.length = 0;
gdjs.lobbyCode.GDMode2Objects5.length = 0;
gdjs.lobbyCode.GDactiveObjects1.length = 0;
gdjs.lobbyCode.GDactiveObjects2.length = 0;
gdjs.lobbyCode.GDactiveObjects3.length = 0;
gdjs.lobbyCode.GDactiveObjects4.length = 0;
gdjs.lobbyCode.GDactiveObjects5.length = 0;
gdjs.lobbyCode.GDCharNextObjects1.length = 0;
gdjs.lobbyCode.GDCharNextObjects2.length = 0;
gdjs.lobbyCode.GDCharNextObjects3.length = 0;
gdjs.lobbyCode.GDCharNextObjects4.length = 0;
gdjs.lobbyCode.GDCharNextObjects5.length = 0;
gdjs.lobbyCode.GDCharPrevObjects1.length = 0;
gdjs.lobbyCode.GDCharPrevObjects2.length = 0;
gdjs.lobbyCode.GDCharPrevObjects3.length = 0;
gdjs.lobbyCode.GDCharPrevObjects4.length = 0;
gdjs.lobbyCode.GDCharPrevObjects5.length = 0;
gdjs.lobbyCode.GDTimerObjects1.length = 0;
gdjs.lobbyCode.GDTimerObjects2.length = 0;
gdjs.lobbyCode.GDTimerObjects3.length = 0;
gdjs.lobbyCode.GDTimerObjects4.length = 0;
gdjs.lobbyCode.GDTimerObjects5.length = 0;
gdjs.lobbyCode.GDQuitObjects1.length = 0;
gdjs.lobbyCode.GDQuitObjects2.length = 0;
gdjs.lobbyCode.GDQuitObjects3.length = 0;
gdjs.lobbyCode.GDQuitObjects4.length = 0;
gdjs.lobbyCode.GDQuitObjects5.length = 0;
gdjs.lobbyCode.GDNewSpriteObjects1.length = 0;
gdjs.lobbyCode.GDNewSpriteObjects2.length = 0;
gdjs.lobbyCode.GDNewSpriteObjects3.length = 0;
gdjs.lobbyCode.GDNewSpriteObjects4.length = 0;
gdjs.lobbyCode.GDNewSpriteObjects5.length = 0;
gdjs.lobbyCode.GDLobbyNameBrowserObjects1.length = 0;
gdjs.lobbyCode.GDLobbyNameBrowserObjects2.length = 0;
gdjs.lobbyCode.GDLobbyNameBrowserObjects3.length = 0;
gdjs.lobbyCode.GDLobbyNameBrowserObjects4.length = 0;
gdjs.lobbyCode.GDLobbyNameBrowserObjects5.length = 0;
gdjs.lobbyCode.GDLobbyCountObjects1.length = 0;
gdjs.lobbyCode.GDLobbyCountObjects2.length = 0;
gdjs.lobbyCode.GDLobbyCountObjects3.length = 0;
gdjs.lobbyCode.GDLobbyCountObjects4.length = 0;
gdjs.lobbyCode.GDLobbyCountObjects5.length = 0;
gdjs.lobbyCode.GDLobbyModeObjects1.length = 0;
gdjs.lobbyCode.GDLobbyModeObjects2.length = 0;
gdjs.lobbyCode.GDLobbyModeObjects3.length = 0;
gdjs.lobbyCode.GDLobbyModeObjects4.length = 0;
gdjs.lobbyCode.GDLobbyModeObjects5.length = 0;
gdjs.lobbyCode.GDbuttonObjects1.length = 0;
gdjs.lobbyCode.GDbuttonObjects2.length = 0;
gdjs.lobbyCode.GDbuttonObjects3.length = 0;
gdjs.lobbyCode.GDbuttonObjects4.length = 0;
gdjs.lobbyCode.GDbuttonObjects5.length = 0;
gdjs.lobbyCode.GDJoinLobbyButtonObjects1.length = 0;
gdjs.lobbyCode.GDJoinLobbyButtonObjects2.length = 0;
gdjs.lobbyCode.GDJoinLobbyButtonObjects3.length = 0;
gdjs.lobbyCode.GDJoinLobbyButtonObjects4.length = 0;
gdjs.lobbyCode.GDJoinLobbyButtonObjects5.length = 0;
gdjs.lobbyCode.GDBackButtonObjects1.length = 0;
gdjs.lobbyCode.GDBackButtonObjects2.length = 0;
gdjs.lobbyCode.GDBackButtonObjects3.length = 0;
gdjs.lobbyCode.GDBackButtonObjects4.length = 0;
gdjs.lobbyCode.GDBackButtonObjects5.length = 0;
gdjs.lobbyCode.GDCustomLobbiesObjects1.length = 0;
gdjs.lobbyCode.GDCustomLobbiesObjects2.length = 0;
gdjs.lobbyCode.GDCustomLobbiesObjects3.length = 0;
gdjs.lobbyCode.GDCustomLobbiesObjects4.length = 0;
gdjs.lobbyCode.GDCustomLobbiesObjects5.length = 0;
gdjs.lobbyCode.GDOnlineCheckObjects1.length = 0;
gdjs.lobbyCode.GDOnlineCheckObjects2.length = 0;
gdjs.lobbyCode.GDOnlineCheckObjects3.length = 0;
gdjs.lobbyCode.GDOnlineCheckObjects4.length = 0;
gdjs.lobbyCode.GDOnlineCheckObjects5.length = 0;
gdjs.lobbyCode.GDCursorObjects1.length = 0;
gdjs.lobbyCode.GDCursorObjects2.length = 0;
gdjs.lobbyCode.GDCursorObjects3.length = 0;
gdjs.lobbyCode.GDCursorObjects4.length = 0;
gdjs.lobbyCode.GDCursorObjects5.length = 0;
gdjs.lobbyCode.GDBGObjects1.length = 0;
gdjs.lobbyCode.GDBGObjects2.length = 0;
gdjs.lobbyCode.GDBGObjects3.length = 0;
gdjs.lobbyCode.GDBGObjects4.length = 0;
gdjs.lobbyCode.GDBGObjects5.length = 0;


return;

}

gdjs['lobbyCode'] = gdjs.lobbyCode;
