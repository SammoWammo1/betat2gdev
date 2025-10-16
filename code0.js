gdjs.TitleCode = {};
gdjs.TitleCode.localVariables = [];
gdjs.TitleCode.idToCallbackMap = new Map();
gdjs.TitleCode.GDMultiplayerObjects1= [];
gdjs.TitleCode.GDMultiplayerObjects2= [];
gdjs.TitleCode.GDNewTextObjects1= [];
gdjs.TitleCode.GDNewTextObjects2= [];
gdjs.TitleCode.GDdescriptionObjects1= [];
gdjs.TitleCode.GDdescriptionObjects2= [];
gdjs.TitleCode.GDNewSpriteObjects1= [];
gdjs.TitleCode.GDNewSpriteObjects2= [];
gdjs.TitleCode.GDCampaignStartObjects1= [];
gdjs.TitleCode.GDCampaignStartObjects2= [];
gdjs.TitleCode.GDBlueButton3Objects1= [];
gdjs.TitleCode.GDBlueButton3Objects2= [];
gdjs.TitleCode.GDCampaignLoadObjects1= [];
gdjs.TitleCode.GDCampaignLoadObjects2= [];
gdjs.TitleCode.GDverObjects1= [];
gdjs.TitleCode.GDverObjects2= [];
gdjs.TitleCode.GDLobbyMenuObjects1= [];
gdjs.TitleCode.GDLobbyMenuObjects2= [];
gdjs.TitleCode.GDvernameObjects1= [];
gdjs.TitleCode.GDvernameObjects2= [];
gdjs.TitleCode.GDCustomLobbiesObjects1= [];
gdjs.TitleCode.GDCustomLobbiesObjects2= [];
gdjs.TitleCode.GDOnlineCheckObjects1= [];
gdjs.TitleCode.GDOnlineCheckObjects2= [];
gdjs.TitleCode.GDCursorObjects1= [];
gdjs.TitleCode.GDCursorObjects2= [];


gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDCursorObjects1Objects = Hashtable.newFrom({"Cursor": gdjs.TitleCode.GDCursorObjects1});
gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDMultiplayerObjects1Objects = Hashtable.newFrom({"Multiplayer": gdjs.TitleCode.GDMultiplayerObjects1});
gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDCursorObjects1Objects = Hashtable.newFrom({"Cursor": gdjs.TitleCode.GDCursorObjects1});
gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDCampaignStartObjects1Objects = Hashtable.newFrom({"CampaignStart": gdjs.TitleCode.GDCampaignStartObjects1});
gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDCursorObjects1Objects = Hashtable.newFrom({"Cursor": gdjs.TitleCode.GDCursorObjects1});
gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDCampaignLoadObjects1Objects = Hashtable.newFrom({"CampaignLoad": gdjs.TitleCode.GDCampaignLoadObjects1});
gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDCursorObjects1Objects = Hashtable.newFrom({"Cursor": gdjs.TitleCode.GDCursorObjects1});
gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDCursorObjects1Objects = Hashtable.newFrom({"Cursor": gdjs.TitleCode.GDCursorObjects1});
gdjs.TitleCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.TitleCode.GDCursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("ver"), gdjs.TitleCode.GDverObjects1);
{gdjs.evtTools.sound.preloadSound(runtimeScene, "ballbounce.mp3");
}
{gdjs.evtTools.sound.preloadSound(runtimeScene, "pointscored.mp3");
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
{for(var i = 0, len = gdjs.TitleCode.GDverObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDverObjects1[i].getBehavior("Text").setText("v" + gdjs.evtsExt__GetPropertiesData__ReturnGameVersion.func(runtimeScene, null));
}
}
{for(var i = 0, len = gdjs.TitleCode.GDCursorObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDCursorObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Multiplayer"), gdjs.TitleCode.GDMultiplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDMultiplayerObjects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDMultiplayerObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDMultiplayerObjects1[k] = gdjs.TitleCode.GDMultiplayerObjects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDMultiplayerObjects1.length = k;
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

gdjs.copyArray(runtimeScene.getObjects("BlueButton3"), gdjs.TitleCode.GDBlueButton3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDBlueButton3Objects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDBlueButton3Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDBlueButton3Objects1[k] = gdjs.TitleCode.GDBlueButton3Objects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDBlueButton3Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.fileSystem.deleteFile("save.json", runtimeScene.getScene().getVariables().getFromIndex(0));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CampaignStart"), gdjs.TitleCode.GDCampaignStartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDCampaignStartObjects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDCampaignStartObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDCampaignStartObjects1[k] = gdjs.TitleCode.GDCampaignStartObjects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDCampaignStartObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Campaign", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CampaignLoad"), gdjs.TitleCode.GDCampaignLoadObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDCampaignLoadObjects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDCampaignLoadObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDCampaignLoadObjects1[k] = gdjs.TitleCode.GDCampaignLoadObjects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDCampaignLoadObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Campaign", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LobbyMenu"), gdjs.TitleCode.GDLobbyMenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDLobbyMenuObjects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDLobbyMenuObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDLobbyMenuObjects1[k] = gdjs.TitleCode.GDLobbyMenuObjects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDLobbyMenuObjects1.length = k;
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

gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.TitleCode.GDCursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Multiplayer"), gdjs.TitleCode.GDMultiplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDCursorObjects1Objects, gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDMultiplayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", null);
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

gdjs.copyArray(runtimeScene.getObjects("CampaignStart"), gdjs.TitleCode.GDCampaignStartObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.TitleCode.GDCursorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDCursorObjects1Objects, gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDCampaignStartObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", null);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Campaign", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CampaignLoad"), gdjs.TitleCode.GDCampaignLoadObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.TitleCode.GDCursorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDCursorObjects1Objects, gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDCampaignLoadObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", null);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Campaign", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Any", null);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.TitleCode.GDCursorObjects1);
{for(var i = 0, len = gdjs.TitleCode.GDCursorObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDCursorObjects1[i].getBehavior("TopDownMovement").simulateStick(gdjs.evtsExt__Gamepads__StickAngle.func(runtimeScene, 1, "Left", null), gdjs.evtsExt__Gamepads__StickForce.func(runtimeScene, 1, "Left", null));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Controller_X_is_connected.func(runtimeScene, 1, null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17661596);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.TitleCode.GDCursorObjects1);
{for(var i = 0, len = gdjs.TitleCode.GDCursorObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDCursorObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Controller_X_is_connected.func(runtimeScene, 1, null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17662068);
}
}
if (isConditionTrue_0) {
gdjs.TitleCode.GDCursorObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDCursorObjects1Objects, 566, 357, "");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", null);
if (isConditionTrue_0) {
gdjs.TitleCode.GDCursorObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDCursorObjects1Objects, 566, 357, "");
}
}

}


};

gdjs.TitleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TitleCode.GDMultiplayerObjects1.length = 0;
gdjs.TitleCode.GDMultiplayerObjects2.length = 0;
gdjs.TitleCode.GDNewTextObjects1.length = 0;
gdjs.TitleCode.GDNewTextObjects2.length = 0;
gdjs.TitleCode.GDdescriptionObjects1.length = 0;
gdjs.TitleCode.GDdescriptionObjects2.length = 0;
gdjs.TitleCode.GDNewSpriteObjects1.length = 0;
gdjs.TitleCode.GDNewSpriteObjects2.length = 0;
gdjs.TitleCode.GDCampaignStartObjects1.length = 0;
gdjs.TitleCode.GDCampaignStartObjects2.length = 0;
gdjs.TitleCode.GDBlueButton3Objects1.length = 0;
gdjs.TitleCode.GDBlueButton3Objects2.length = 0;
gdjs.TitleCode.GDCampaignLoadObjects1.length = 0;
gdjs.TitleCode.GDCampaignLoadObjects2.length = 0;
gdjs.TitleCode.GDverObjects1.length = 0;
gdjs.TitleCode.GDverObjects2.length = 0;
gdjs.TitleCode.GDLobbyMenuObjects1.length = 0;
gdjs.TitleCode.GDLobbyMenuObjects2.length = 0;
gdjs.TitleCode.GDvernameObjects1.length = 0;
gdjs.TitleCode.GDvernameObjects2.length = 0;
gdjs.TitleCode.GDCustomLobbiesObjects1.length = 0;
gdjs.TitleCode.GDCustomLobbiesObjects2.length = 0;
gdjs.TitleCode.GDOnlineCheckObjects1.length = 0;
gdjs.TitleCode.GDOnlineCheckObjects2.length = 0;
gdjs.TitleCode.GDCursorObjects1.length = 0;
gdjs.TitleCode.GDCursorObjects2.length = 0;

gdjs.TitleCode.eventsList0(runtimeScene);
gdjs.TitleCode.GDMultiplayerObjects1.length = 0;
gdjs.TitleCode.GDMultiplayerObjects2.length = 0;
gdjs.TitleCode.GDNewTextObjects1.length = 0;
gdjs.TitleCode.GDNewTextObjects2.length = 0;
gdjs.TitleCode.GDdescriptionObjects1.length = 0;
gdjs.TitleCode.GDdescriptionObjects2.length = 0;
gdjs.TitleCode.GDNewSpriteObjects1.length = 0;
gdjs.TitleCode.GDNewSpriteObjects2.length = 0;
gdjs.TitleCode.GDCampaignStartObjects1.length = 0;
gdjs.TitleCode.GDCampaignStartObjects2.length = 0;
gdjs.TitleCode.GDBlueButton3Objects1.length = 0;
gdjs.TitleCode.GDBlueButton3Objects2.length = 0;
gdjs.TitleCode.GDCampaignLoadObjects1.length = 0;
gdjs.TitleCode.GDCampaignLoadObjects2.length = 0;
gdjs.TitleCode.GDverObjects1.length = 0;
gdjs.TitleCode.GDverObjects2.length = 0;
gdjs.TitleCode.GDLobbyMenuObjects1.length = 0;
gdjs.TitleCode.GDLobbyMenuObjects2.length = 0;
gdjs.TitleCode.GDvernameObjects1.length = 0;
gdjs.TitleCode.GDvernameObjects2.length = 0;
gdjs.TitleCode.GDCustomLobbiesObjects1.length = 0;
gdjs.TitleCode.GDCustomLobbiesObjects2.length = 0;
gdjs.TitleCode.GDOnlineCheckObjects1.length = 0;
gdjs.TitleCode.GDOnlineCheckObjects2.length = 0;
gdjs.TitleCode.GDCursorObjects1.length = 0;
gdjs.TitleCode.GDCursorObjects2.length = 0;


return;

}

gdjs['TitleCode'] = gdjs.TitleCode;
