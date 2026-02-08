gdjs.TitleCode = {};
gdjs.TitleCode.localVariables = [];
gdjs.TitleCode.idToCallbackMap = new Map();
gdjs.TitleCode.GDNewVideoObjects1= [];
gdjs.TitleCode.GDNewVideoObjects2= [];
gdjs.TitleCode.GDNewVideoObjects3= [];
gdjs.TitleCode.GDNewVideoObjects4= [];
gdjs.TitleCode.GDNewVideoObjects5= [];
gdjs.TitleCode.GDNewSpriteObjects1= [];
gdjs.TitleCode.GDNewSpriteObjects2= [];
gdjs.TitleCode.GDNewSpriteObjects3= [];
gdjs.TitleCode.GDNewSpriteObjects4= [];
gdjs.TitleCode.GDNewSpriteObjects5= [];
gdjs.TitleCode.GDNewPanelSpriteObjects1= [];
gdjs.TitleCode.GDNewPanelSpriteObjects2= [];
gdjs.TitleCode.GDNewPanelSpriteObjects3= [];
gdjs.TitleCode.GDNewPanelSpriteObjects4= [];
gdjs.TitleCode.GDNewPanelSpriteObjects5= [];
gdjs.TitleCode.GDNewTextObjects1= [];
gdjs.TitleCode.GDNewTextObjects2= [];
gdjs.TitleCode.GDNewTextObjects3= [];
gdjs.TitleCode.GDNewTextObjects4= [];
gdjs.TitleCode.GDNewTextObjects5= [];
gdjs.TitleCode.GDiconObjects1= [];
gdjs.TitleCode.GDiconObjects2= [];
gdjs.TitleCode.GDiconObjects3= [];
gdjs.TitleCode.GDiconObjects4= [];
gdjs.TitleCode.GDiconObjects5= [];
gdjs.TitleCode.GDCustomLobbiesObjects1= [];
gdjs.TitleCode.GDCustomLobbiesObjects2= [];
gdjs.TitleCode.GDCustomLobbiesObjects3= [];
gdjs.TitleCode.GDCustomLobbiesObjects4= [];
gdjs.TitleCode.GDCustomLobbiesObjects5= [];
gdjs.TitleCode.GDOnlineCheckObjects1= [];
gdjs.TitleCode.GDOnlineCheckObjects2= [];
gdjs.TitleCode.GDOnlineCheckObjects3= [];
gdjs.TitleCode.GDOnlineCheckObjects4= [];
gdjs.TitleCode.GDOnlineCheckObjects5= [];
gdjs.TitleCode.GDCursorObjects1= [];
gdjs.TitleCode.GDCursorObjects2= [];
gdjs.TitleCode.GDCursorObjects3= [];
gdjs.TitleCode.GDCursorObjects4= [];
gdjs.TitleCode.GDCursorObjects5= [];
gdjs.TitleCode.GDBGObjects1= [];
gdjs.TitleCode.GDBGObjects2= [];
gdjs.TitleCode.GDBGObjects3= [];
gdjs.TitleCode.GDBGObjects4= [];
gdjs.TitleCode.GDBGObjects5= [];


gdjs.TitleCode.asyncCallback18203732 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.TitleCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.TitleCode.GDNewTextObjects5);
gdjs.copyArray(runtimeScene.getObjects("icon"), gdjs.TitleCode.GDiconObjects5);
{for(var i = 0, len = gdjs.TitleCode.GDNewTextObjects5.length ;i < len;++i) {
    gdjs.TitleCode.GDNewTextObjects5[i].hide(false);
}
}
{for(var i = 0, len = gdjs.TitleCode.GDiconObjects5.length ;i < len;++i) {
    gdjs.TitleCode.GDiconObjects5[i].hide(false);
}
}
gdjs.TitleCode.localVariables.length = 0;
}
gdjs.TitleCode.idToCallbackMap.set(18203732, gdjs.TitleCode.asyncCallback18203732);
gdjs.TitleCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.TitleCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.TitleCode.asyncCallback18203732(runtimeScene, asyncObjectsList)), 18203732, asyncObjectsList);
}
}

}


};gdjs.TitleCode.asyncCallback18188908 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.TitleCode.localVariables);
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Title.mp3", 0, true, runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber(), 1);
}

{ //Subevents
gdjs.TitleCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.TitleCode.localVariables.length = 0;
}
gdjs.TitleCode.idToCallbackMap.set(18188908, gdjs.TitleCode.asyncCallback18188908);
gdjs.TitleCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.TitleCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.TitleCode.asyncCallback18188908(runtimeScene, asyncObjectsList)), 18188908, asyncObjectsList);
}
}

}


};gdjs.TitleCode.asyncCallback17238652 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.TitleCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewVideo"), gdjs.TitleCode.GDNewVideoObjects3);

{for(var i = 0, len = gdjs.TitleCode.GDNewVideoObjects3.length ;i < len;++i) {
    gdjs.TitleCode.GDNewVideoObjects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.TitleCode.GDNewVideoObjects3.length ;i < len;++i) {
    gdjs.TitleCode.GDNewVideoObjects3[i].play();
}
}

{ //Subevents
gdjs.TitleCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.TitleCode.localVariables.length = 0;
}
gdjs.TitleCode.idToCallbackMap.set(17238652, gdjs.TitleCode.asyncCallback17238652);
gdjs.TitleCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.TitleCode.localVariables);
/* Don't save NewVideo as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.TitleCode.asyncCallback17238652(runtimeScene, asyncObjectsList)), 17238652, asyncObjectsList);
}
}

}


};gdjs.TitleCode.asyncCallback18503300 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.TitleCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.TitleCode.GDNewSpriteObjects2);
{gdjs.evtsExt__CallEvent__CallEvent.func(runtimeScene, "footstep", "", null);
}
{for(var i = 0, len = gdjs.TitleCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.TitleCode.GDNewSpriteObjects2[i].getBehavior("Opacity").setOpacity(60);
}
}
{for(var i = 0, len = gdjs.TitleCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.TitleCode.GDNewSpriteObjects2[i].getBehavior("Tween").addObjectOpacityTween2("opacity", 0, "linear", 1, false);
}
}

{ //Subevents
gdjs.TitleCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.TitleCode.localVariables.length = 0;
}
gdjs.TitleCode.idToCallbackMap.set(18503300, gdjs.TitleCode.asyncCallback18503300);
gdjs.TitleCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.TitleCode.localVariables);
for (const obj of gdjs.TitleCode.GDNewVideoObjects1) asyncObjectsList.addObject("NewVideo", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.TitleCode.asyncCallback18503300(runtimeScene, asyncObjectsList)), 18503300, asyncObjectsList);
}
}

}


};gdjs.TitleCode.asyncCallback49452468 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.TitleCode.localVariables);
{gdjs.evtTools.sound.playSound(runtimeScene, "Walk_Mono_09.wav", false, 20, 1);
}
gdjs.TitleCode.localVariables.length = 0;
}
gdjs.TitleCode.idToCallbackMap.set(49452468, gdjs.TitleCode.asyncCallback49452468);
gdjs.TitleCode.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.TitleCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.TitleCode.asyncCallback49452468(runtimeScene, asyncObjectsList)), 49452468, asyncObjectsList);
}
}

}


};gdjs.TitleCode.asyncCallback49466372 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.TitleCode.localVariables);
{gdjs.evtTools.sound.playSound(runtimeScene, "Walk_Mono_09.wav", false, 40, 1);
}

{ //Subevents
gdjs.TitleCode.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.TitleCode.localVariables.length = 0;
}
gdjs.TitleCode.idToCallbackMap.set(49466372, gdjs.TitleCode.asyncCallback49466372);
gdjs.TitleCode.eventsList5 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.TitleCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.TitleCode.asyncCallback49466372(runtimeScene, asyncObjectsList)), 49466372, asyncObjectsList);
}
}

}


};gdjs.TitleCode.asyncCallback49455628 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.TitleCode.localVariables);
{gdjs.evtTools.sound.playSound(runtimeScene, "Walk_Mono_09.wav", false, 60, 1);
}

{ //Subevents
gdjs.TitleCode.eventsList5(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.TitleCode.localVariables.length = 0;
}
gdjs.TitleCode.idToCallbackMap.set(49455628, gdjs.TitleCode.asyncCallback49455628);
gdjs.TitleCode.eventsList6 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.TitleCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.TitleCode.asyncCallback49455628(runtimeScene, asyncObjectsList)), 49455628, asyncObjectsList);
}
}

}


};gdjs.TitleCode.asyncCallback49450036 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.TitleCode.localVariables);
{gdjs.evtTools.sound.playSound(runtimeScene, "Walk_Mono_09.wav", false, 80, 1);
}

{ //Subevents
gdjs.TitleCode.eventsList6(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.TitleCode.localVariables.length = 0;
}
gdjs.TitleCode.idToCallbackMap.set(49450036, gdjs.TitleCode.asyncCallback49450036);
gdjs.TitleCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.TitleCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.TitleCode.asyncCallback49450036(runtimeScene, asyncObjectsList)), 49450036, asyncObjectsList);
}
}

}


};gdjs.TitleCode.asyncCallback49487852 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.TitleCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}
gdjs.TitleCode.localVariables.length = 0;
}
gdjs.TitleCode.idToCallbackMap.set(49487852, gdjs.TitleCode.asyncCallback49487852);
gdjs.TitleCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.TitleCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.TitleCode.asyncCallback49487852(runtimeScene, asyncObjectsList)), 49487852, asyncObjectsList);
}
}

}


};gdjs.TitleCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.TitleCode.GDNewVideoObjects1);
{for(var i = 0, len = gdjs.TitleCode.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDNewVideoObjects1[i].hide();
}
}

{ //Subevents
gdjs.TitleCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.TitleCode.GDNewVideoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDNewVideoObjects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDNewVideoObjects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDNewVideoObjects1[k] = gdjs.TitleCode.GDNewVideoObjects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDNewVideoObjects1.length = k;
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.TitleCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("icon"), gdjs.TitleCode.GDiconObjects1);
{gdjs.evtTools.sound.preloadMusic(runtimeScene, "Spelunky OST - Title Screen.mp3");
}
{gdjs.evtTools.sound.preloadSound(runtimeScene, "Jump_Land_01.wav");
}
{gdjs.evtTools.sound.preloadSound(runtimeScene, "Confirm_07.aac");
}
{gdjs.evtTools.sound.preloadSound(runtimeScene, "Confirm_01.aac");
}
{gdjs.evtTools.sound.preloadSound(runtimeScene, "Teleport 2.aac");
}
{gdjs.evtTools.sound.preloadSound(runtimeScene, "countfinish");
}
{for(var i = 0, len = gdjs.TitleCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDNewTextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.TitleCode.GDiconObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDiconObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__CallEvent__EventCalled.func(runtimeScene, "footstep", null);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Walk_Mono_09.wav", false, 100, 1);
}

{ //Subevents
gdjs.TitleCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


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
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 0);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Confirm_07.aac", false, 80, 1);
}

{ //Subevents
gdjs.TitleCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ButtonType__Function.func(runtimeScene, null);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("icon"), gdjs.TitleCode.GDiconObjects1);
{for(var i = 0, len = gdjs.TitleCode.GDiconObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDiconObjects1[i].getBehavior("Animation").setAnimationName("controller");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__ButtonType__Function.func(runtimeScene, null));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("icon"), gdjs.TitleCode.GDiconObjects1);
{for(var i = 0, len = gdjs.TitleCode.GDiconObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDiconObjects1[i].getBehavior("Animation").setAnimationName("keyboard");
}
}
}

}


};

gdjs.TitleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TitleCode.GDNewVideoObjects1.length = 0;
gdjs.TitleCode.GDNewVideoObjects2.length = 0;
gdjs.TitleCode.GDNewVideoObjects3.length = 0;
gdjs.TitleCode.GDNewVideoObjects4.length = 0;
gdjs.TitleCode.GDNewVideoObjects5.length = 0;
gdjs.TitleCode.GDNewSpriteObjects1.length = 0;
gdjs.TitleCode.GDNewSpriteObjects2.length = 0;
gdjs.TitleCode.GDNewSpriteObjects3.length = 0;
gdjs.TitleCode.GDNewSpriteObjects4.length = 0;
gdjs.TitleCode.GDNewSpriteObjects5.length = 0;
gdjs.TitleCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.TitleCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.TitleCode.GDNewPanelSpriteObjects3.length = 0;
gdjs.TitleCode.GDNewPanelSpriteObjects4.length = 0;
gdjs.TitleCode.GDNewPanelSpriteObjects5.length = 0;
gdjs.TitleCode.GDNewTextObjects1.length = 0;
gdjs.TitleCode.GDNewTextObjects2.length = 0;
gdjs.TitleCode.GDNewTextObjects3.length = 0;
gdjs.TitleCode.GDNewTextObjects4.length = 0;
gdjs.TitleCode.GDNewTextObjects5.length = 0;
gdjs.TitleCode.GDiconObjects1.length = 0;
gdjs.TitleCode.GDiconObjects2.length = 0;
gdjs.TitleCode.GDiconObjects3.length = 0;
gdjs.TitleCode.GDiconObjects4.length = 0;
gdjs.TitleCode.GDiconObjects5.length = 0;
gdjs.TitleCode.GDCustomLobbiesObjects1.length = 0;
gdjs.TitleCode.GDCustomLobbiesObjects2.length = 0;
gdjs.TitleCode.GDCustomLobbiesObjects3.length = 0;
gdjs.TitleCode.GDCustomLobbiesObjects4.length = 0;
gdjs.TitleCode.GDCustomLobbiesObjects5.length = 0;
gdjs.TitleCode.GDOnlineCheckObjects1.length = 0;
gdjs.TitleCode.GDOnlineCheckObjects2.length = 0;
gdjs.TitleCode.GDOnlineCheckObjects3.length = 0;
gdjs.TitleCode.GDOnlineCheckObjects4.length = 0;
gdjs.TitleCode.GDOnlineCheckObjects5.length = 0;
gdjs.TitleCode.GDCursorObjects1.length = 0;
gdjs.TitleCode.GDCursorObjects2.length = 0;
gdjs.TitleCode.GDCursorObjects3.length = 0;
gdjs.TitleCode.GDCursorObjects4.length = 0;
gdjs.TitleCode.GDCursorObjects5.length = 0;
gdjs.TitleCode.GDBGObjects1.length = 0;
gdjs.TitleCode.GDBGObjects2.length = 0;
gdjs.TitleCode.GDBGObjects3.length = 0;
gdjs.TitleCode.GDBGObjects4.length = 0;
gdjs.TitleCode.GDBGObjects5.length = 0;

gdjs.TitleCode.eventsList9(runtimeScene);
gdjs.TitleCode.GDNewVideoObjects1.length = 0;
gdjs.TitleCode.GDNewVideoObjects2.length = 0;
gdjs.TitleCode.GDNewVideoObjects3.length = 0;
gdjs.TitleCode.GDNewVideoObjects4.length = 0;
gdjs.TitleCode.GDNewVideoObjects5.length = 0;
gdjs.TitleCode.GDNewSpriteObjects1.length = 0;
gdjs.TitleCode.GDNewSpriteObjects2.length = 0;
gdjs.TitleCode.GDNewSpriteObjects3.length = 0;
gdjs.TitleCode.GDNewSpriteObjects4.length = 0;
gdjs.TitleCode.GDNewSpriteObjects5.length = 0;
gdjs.TitleCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.TitleCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.TitleCode.GDNewPanelSpriteObjects3.length = 0;
gdjs.TitleCode.GDNewPanelSpriteObjects4.length = 0;
gdjs.TitleCode.GDNewPanelSpriteObjects5.length = 0;
gdjs.TitleCode.GDNewTextObjects1.length = 0;
gdjs.TitleCode.GDNewTextObjects2.length = 0;
gdjs.TitleCode.GDNewTextObjects3.length = 0;
gdjs.TitleCode.GDNewTextObjects4.length = 0;
gdjs.TitleCode.GDNewTextObjects5.length = 0;
gdjs.TitleCode.GDiconObjects1.length = 0;
gdjs.TitleCode.GDiconObjects2.length = 0;
gdjs.TitleCode.GDiconObjects3.length = 0;
gdjs.TitleCode.GDiconObjects4.length = 0;
gdjs.TitleCode.GDiconObjects5.length = 0;
gdjs.TitleCode.GDCustomLobbiesObjects1.length = 0;
gdjs.TitleCode.GDCustomLobbiesObjects2.length = 0;
gdjs.TitleCode.GDCustomLobbiesObjects3.length = 0;
gdjs.TitleCode.GDCustomLobbiesObjects4.length = 0;
gdjs.TitleCode.GDCustomLobbiesObjects5.length = 0;
gdjs.TitleCode.GDOnlineCheckObjects1.length = 0;
gdjs.TitleCode.GDOnlineCheckObjects2.length = 0;
gdjs.TitleCode.GDOnlineCheckObjects3.length = 0;
gdjs.TitleCode.GDOnlineCheckObjects4.length = 0;
gdjs.TitleCode.GDOnlineCheckObjects5.length = 0;
gdjs.TitleCode.GDCursorObjects1.length = 0;
gdjs.TitleCode.GDCursorObjects2.length = 0;
gdjs.TitleCode.GDCursorObjects3.length = 0;
gdjs.TitleCode.GDCursorObjects4.length = 0;
gdjs.TitleCode.GDCursorObjects5.length = 0;
gdjs.TitleCode.GDBGObjects1.length = 0;
gdjs.TitleCode.GDBGObjects2.length = 0;
gdjs.TitleCode.GDBGObjects3.length = 0;
gdjs.TitleCode.GDBGObjects4.length = 0;
gdjs.TitleCode.GDBGObjects5.length = 0;


return;

}

gdjs['TitleCode'] = gdjs.TitleCode;
