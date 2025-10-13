gdjs.CampaignCode = {};
gdjs.CampaignCode.localVariables = [];
gdjs.CampaignCode.idToCallbackMap = new Map();
gdjs.CampaignCode.GDPlayerObjects1= [];
gdjs.CampaignCode.GDPlayerObjects2= [];
gdjs.CampaignCode.GDWallObjects1= [];
gdjs.CampaignCode.GDWallObjects2= [];
gdjs.CampaignCode.GDIsland1Objects1= [];
gdjs.CampaignCode.GDIsland1Objects2= [];
gdjs.CampaignCode.GDNewSpriteObjects1= [];
gdjs.CampaignCode.GDNewSpriteObjects2= [];
gdjs.CampaignCode.GDCustomLobbiesObjects1= [];
gdjs.CampaignCode.GDCustomLobbiesObjects2= [];


gdjs.CampaignCode.mapOfGDgdjs_9546CampaignCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.CampaignCode.GDPlayerObjects1});
gdjs.CampaignCode.mapOfGDgdjs_9546CampaignCode_9546GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.CampaignCode.GDWallObjects1});
gdjs.CampaignCode.mapOfGDgdjs_9546CampaignCode_9546GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.CampaignCode.GDWallObjects1});
gdjs.CampaignCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Delete");
if (isConditionTrue_0) {
{gdjs.saveState.createGameSaveStateInStorage(runtimeScene, "save", "");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
{gdjs.saveState.restoreGameSaveStateFromStorage(runtimeScene, "save", "default", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
{gdjs.saveState.createGameSaveStateInStorage(runtimeScene, "save", "");
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.CampaignCode.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.CampaignCode.GDPlayerObjects1.length !== 0 ? gdjs.CampaignCode.GDPlayerObjects1[0] : null), true, "", 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.CampaignCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.CampaignCode.GDWallObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.CampaignCode.mapOfGDgdjs_9546CampaignCode_9546GDPlayerObjects1Objects, gdjs.CampaignCode.mapOfGDgdjs_9546CampaignCode_9546GDWallObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.CampaignCode.GDPlayerObjects1 */
/* Reuse gdjs.CampaignCode.GDWallObjects1 */
{for(var i = 0, len = gdjs.CampaignCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CampaignCode.GDPlayerObjects1[i].separateFromObjectsList(gdjs.CampaignCode.mapOfGDgdjs_9546CampaignCode_9546GDWallObjects1Objects, false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.CampaignCode.GDWallObjects1);
{for(var i = 0, len = gdjs.CampaignCode.GDWallObjects1.length ;i < len;++i) {
    gdjs.CampaignCode.GDWallObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.CampaignCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.CampaignCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CampaignCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").simulateUpKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.CampaignCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.CampaignCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CampaignCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").simulateDownKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.CampaignCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.CampaignCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CampaignCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.CampaignCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.CampaignCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CampaignCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").simulateRightKey();
}
}
}

}


};

gdjs.CampaignCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CampaignCode.GDPlayerObjects1.length = 0;
gdjs.CampaignCode.GDPlayerObjects2.length = 0;
gdjs.CampaignCode.GDWallObjects1.length = 0;
gdjs.CampaignCode.GDWallObjects2.length = 0;
gdjs.CampaignCode.GDIsland1Objects1.length = 0;
gdjs.CampaignCode.GDIsland1Objects2.length = 0;
gdjs.CampaignCode.GDNewSpriteObjects1.length = 0;
gdjs.CampaignCode.GDNewSpriteObjects2.length = 0;
gdjs.CampaignCode.GDCustomLobbiesObjects1.length = 0;
gdjs.CampaignCode.GDCustomLobbiesObjects2.length = 0;

gdjs.CampaignCode.eventsList0(runtimeScene);
gdjs.CampaignCode.GDPlayerObjects1.length = 0;
gdjs.CampaignCode.GDPlayerObjects2.length = 0;
gdjs.CampaignCode.GDWallObjects1.length = 0;
gdjs.CampaignCode.GDWallObjects2.length = 0;
gdjs.CampaignCode.GDIsland1Objects1.length = 0;
gdjs.CampaignCode.GDIsland1Objects2.length = 0;
gdjs.CampaignCode.GDNewSpriteObjects1.length = 0;
gdjs.CampaignCode.GDNewSpriteObjects2.length = 0;
gdjs.CampaignCode.GDCustomLobbiesObjects1.length = 0;
gdjs.CampaignCode.GDCustomLobbiesObjects2.length = 0;


return;

}

gdjs['CampaignCode'] = gdjs.CampaignCode;
