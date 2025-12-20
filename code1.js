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
gdjs.TitleCode.GDdiscordObjects1= [];
gdjs.TitleCode.GDdiscordObjects2= [];
gdjs.TitleCode.GDdiscordtextObjects1= [];
gdjs.TitleCode.GDdiscordtextObjects2= [];
gdjs.TitleCode.GDCampaignObjects1= [];
gdjs.TitleCode.GDCampaignObjects2= [];
gdjs.TitleCode.GDExitObjects1= [];
gdjs.TitleCode.GDExitObjects2= [];
gdjs.TitleCode.GDBackObjects1= [];
gdjs.TitleCode.GDBackObjects2= [];
gdjs.TitleCode.GDBGObjects1= [];
gdjs.TitleCode.GDBGObjects2= [];
gdjs.TitleCode.GDScoreDisplayObjects1= [];
gdjs.TitleCode.GDScoreDisplayObjects2= [];
gdjs.TitleCode.GDcopyrightObjects1= [];
gdjs.TitleCode.GDcopyrightObjects2= [];
gdjs.TitleCode.GDNewSprite2Objects1= [];
gdjs.TitleCode.GDNewSprite2Objects2= [];
gdjs.TitleCode.GDNew3DBoxObjects1= [];
gdjs.TitleCode.GDNew3DBoxObjects2= [];
gdjs.TitleCode.GDRacketObjects1= [];
gdjs.TitleCode.GDRacketObjects2= [];
gdjs.TitleCode.GDSettingsObjects1= [];
gdjs.TitleCode.GDSettingsObjects2= [];
gdjs.TitleCode.GDCustomLobbiesObjects1= [];
gdjs.TitleCode.GDCustomLobbiesObjects2= [];
gdjs.TitleCode.GDOnlineCheckObjects1= [];
gdjs.TitleCode.GDOnlineCheckObjects2= [];
gdjs.TitleCode.GDCursorObjects1= [];
gdjs.TitleCode.GDCursorObjects2= [];
gdjs.TitleCode.GDBGObjects1= [];
gdjs.TitleCode.GDBGObjects2= [];


gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDCursorObjects1Objects = Hashtable.newFrom({"Cursor": gdjs.TitleCode.GDCursorObjects1});
gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDMultiplayerObjects1Objects = Hashtable.newFrom({"Multiplayer": gdjs.TitleCode.GDMultiplayerObjects1});
gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDCursorObjects1Objects = Hashtable.newFrom({"Cursor": gdjs.TitleCode.GDCursorObjects1});
gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDCampaignStartObjects1Objects = Hashtable.newFrom({"CampaignStart": gdjs.TitleCode.GDCampaignStartObjects1});
gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDCursorObjects1Objects = Hashtable.newFrom({"Cursor": gdjs.TitleCode.GDCursorObjects1});
gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDCampaignLoadObjects1Objects = Hashtable.newFrom({"CampaignLoad": gdjs.TitleCode.GDCampaignLoadObjects1});
gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDCursorObjects1Objects = Hashtable.newFrom({"Cursor": gdjs.TitleCode.GDCursorObjects1});
gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDCampaignObjects1Objects = Hashtable.newFrom({"Campaign": gdjs.TitleCode.GDCampaignObjects1});
gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDCursorObjects1Objects = Hashtable.newFrom({"Cursor": gdjs.TitleCode.GDCursorObjects1});
gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.TitleCode.GDBackObjects1});
gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDCursorObjects1Objects = Hashtable.newFrom({"Cursor": gdjs.TitleCode.GDCursorObjects1});
gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDExitObjects1Objects = Hashtable.newFrom({"Exit": gdjs.TitleCode.GDExitObjects1});
gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDCursorObjects1Objects = Hashtable.newFrom({"Cursor": gdjs.TitleCode.GDCursorObjects1});
gdjs.TitleCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.TitleCode.GDCursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("ver"), gdjs.TitleCode.GDverObjects1);
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
{for(var i = 0, len = gdjs.TitleCode.GDverObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDverObjects1[i].getBehavior("Text").setText("v" + gdjs.evtsExt__GetPropertiesData__ReturnGameVersion.func(runtimeScene, null));
}
}
{for(var i = 0, len = gdjs.TitleCode.GDCursorObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDCursorObjects1[i].hide(false);
}
}
{gdjs.evtTools.network.enableMetrics(runtimeScene, true);
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

gdjs.copyArray(runtimeScene.getObjects("Settings"), gdjs.TitleCode.GDSettingsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDSettingsObjects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDSettingsObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDSettingsObjects1[k] = gdjs.TitleCode.GDSettingsObjects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDSettingsObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Settings");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.TitleCode.GDExitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDExitObjects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDExitObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDExitObjects1[k] = gdjs.TitleCode.GDExitObjects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDExitObjects1.length = k;
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

gdjs.copyArray(runtimeScene.getObjects("Campaign"), gdjs.TitleCode.GDCampaignObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDCampaignObjects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDCampaignObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDCampaignObjects1[k] = gdjs.TitleCode.GDCampaignObjects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDCampaignObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "buttonduration") >= 0.5;
}
if (isConditionTrue_0) {
/* Reuse gdjs.TitleCode.GDCampaignObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.TitleCode.GDExitObjects1);
gdjs.copyArray(runtimeScene.getObjects("Multiplayer"), gdjs.TitleCode.GDMultiplayerObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "buttonduration");
}
{for(var i = 0, len = gdjs.TitleCode.GDMultiplayerObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDMultiplayerObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.TitleCode.GDMultiplayerObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDMultiplayerObjects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs.TitleCode.GDCampaignObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDCampaignObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.TitleCode.GDCampaignObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDCampaignObjects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs.TitleCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDExitObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.TitleCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDExitObjects1[i].Activate(false, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.TitleCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDBackObjects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDBackObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDBackObjects1[k] = gdjs.TitleCode.GDBackObjects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDBackObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "buttonduration") >= 0.5;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Campaign"), gdjs.TitleCode.GDCampaignObjects1);
gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.TitleCode.GDExitObjects1);
gdjs.copyArray(runtimeScene.getObjects("Multiplayer"), gdjs.TitleCode.GDMultiplayerObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "buttonduration");
}
{for(var i = 0, len = gdjs.TitleCode.GDMultiplayerObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDMultiplayerObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.TitleCode.GDMultiplayerObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDMultiplayerObjects1[i].Activate(true, null);
}
}
{for(var i = 0, len = gdjs.TitleCode.GDCampaignObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDCampaignObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.TitleCode.GDCampaignObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDCampaignObjects1[i].Activate(true, null);
}
}
{for(var i = 0, len = gdjs.TitleCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDExitObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.TitleCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDExitObjects1[i].Activate(true, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Campaign"), gdjs.TitleCode.GDCampaignObjects1);
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
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "buttonduration") >= 0.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDCampaignObjects1.length;i<l;++i) {
    if ( !(gdjs.TitleCode.GDCampaignObjects1[i].IsActivated(null)) ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDCampaignObjects1[k] = gdjs.TitleCode.GDCampaignObjects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDCampaignObjects1.length = k;
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

gdjs.copyArray(runtimeScene.getObjects("CampaignLoad"), gdjs.TitleCode.GDCampaignLoadObjects1);
gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.TitleCode.GDExitObjects1);

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
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "buttonduration") >= 0.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDExitObjects1.length;i<l;++i) {
    if ( !(gdjs.TitleCode.GDExitObjects1[i].IsActivated(null)) ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDExitObjects1[k] = gdjs.TitleCode.GDExitObjects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDExitObjects1.length = k;
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
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "buttonduration") >= 0.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDMultiplayerObjects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDMultiplayerObjects1[i].IsActivated(null) ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDMultiplayerObjects1[k] = gdjs.TitleCode.GDMultiplayerObjects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDMultiplayerObjects1.length = k;
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

gdjs.copyArray(runtimeScene.getObjects("Campaign"), gdjs.TitleCode.GDCampaignObjects1);
gdjs.copyArray(runtimeScene.getObjects("CampaignStart"), gdjs.TitleCode.GDCampaignStartObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.TitleCode.GDCursorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDCursorObjects1Objects, gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDCampaignStartObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "buttonduration") >= 0.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDCampaignObjects1.length;i<l;++i) {
    if ( !(gdjs.TitleCode.GDCampaignObjects1[i].IsActivated(null)) ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDCampaignObjects1[k] = gdjs.TitleCode.GDCampaignObjects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDCampaignObjects1.length = k;
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

gdjs.copyArray(runtimeScene.getObjects("Campaign"), gdjs.TitleCode.GDCampaignObjects1);
gdjs.copyArray(runtimeScene.getObjects("CampaignLoad"), gdjs.TitleCode.GDCampaignLoadObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.TitleCode.GDCursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.TitleCode.GDExitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDCursorObjects1Objects, gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDCampaignLoadObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "buttonduration") >= 0.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDCampaignObjects1.length;i<l;++i) {
    if ( !(gdjs.TitleCode.GDCampaignObjects1[i].IsActivated(null)) ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDCampaignObjects1[k] = gdjs.TitleCode.GDCampaignObjects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDCampaignObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDExitObjects1.length;i<l;++i) {
    if ( !(gdjs.TitleCode.GDExitObjects1[i].IsActivated(null)) ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDExitObjects1[k] = gdjs.TitleCode.GDExitObjects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDExitObjects1.length = k;
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

gdjs.copyArray(runtimeScene.getObjects("Campaign"), gdjs.TitleCode.GDCampaignObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.TitleCode.GDCursorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "buttonduration") >= 0.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDCursorObjects1Objects, gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDCampaignObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDCampaignObjects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDCampaignObjects1[i].IsActivated(null) ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDCampaignObjects1[k] = gdjs.TitleCode.GDCampaignObjects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDCampaignObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.TitleCode.GDCampaignObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.TitleCode.GDExitObjects1);
gdjs.copyArray(runtimeScene.getObjects("Multiplayer"), gdjs.TitleCode.GDMultiplayerObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "buttonduration");
}
{for(var i = 0, len = gdjs.TitleCode.GDMultiplayerObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDMultiplayerObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.TitleCode.GDMultiplayerObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDMultiplayerObjects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs.TitleCode.GDCampaignObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDCampaignObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.TitleCode.GDCampaignObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDCampaignObjects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs.TitleCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDExitObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.TitleCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDExitObjects1[i].Activate(false, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.TitleCode.GDBackObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.TitleCode.GDCursorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "buttonduration") >= 0.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDCursorObjects1Objects, gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDBackObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", null);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Campaign"), gdjs.TitleCode.GDCampaignObjects1);
gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.TitleCode.GDExitObjects1);
gdjs.copyArray(runtimeScene.getObjects("Multiplayer"), gdjs.TitleCode.GDMultiplayerObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "buttonduration");
}
{for(var i = 0, len = gdjs.TitleCode.GDMultiplayerObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDMultiplayerObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.TitleCode.GDMultiplayerObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDMultiplayerObjects1[i].Activate(true, null);
}
}
{for(var i = 0, len = gdjs.TitleCode.GDCampaignObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDCampaignObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.TitleCode.GDCampaignObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDCampaignObjects1[i].Activate(true, null);
}
}
{for(var i = 0, len = gdjs.TitleCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDExitObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.TitleCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDExitObjects1[i].Activate(true, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.TitleCode.GDCursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.TitleCode.GDExitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "buttonduration") >= 0.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDCursorObjects1Objects, gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDExitObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDExitObjects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDExitObjects1[i].IsActivated(null) ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDExitObjects1[k] = gdjs.TitleCode.GDExitObjects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDExitObjects1.length = k;
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(42272948);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(42273876);
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
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "F4");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(42274756);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("discord"), gdjs.TitleCode.GDdiscordObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDdiscordObjects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDdiscordObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDdiscordObjects1[k] = gdjs.TitleCode.GDdiscordObjects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDdiscordObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://discord.gg/9WNkGzcuRp", runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.TitleCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDNewSprite2Objects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDNewSprite2Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDNewSprite2Objects1[k] = gdjs.TitleCode.GDNewSprite2Objects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDNewSprite2Objects1.length = k;
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
gdjs.TitleCode.GDdiscordObjects1.length = 0;
gdjs.TitleCode.GDdiscordObjects2.length = 0;
gdjs.TitleCode.GDdiscordtextObjects1.length = 0;
gdjs.TitleCode.GDdiscordtextObjects2.length = 0;
gdjs.TitleCode.GDCampaignObjects1.length = 0;
gdjs.TitleCode.GDCampaignObjects2.length = 0;
gdjs.TitleCode.GDExitObjects1.length = 0;
gdjs.TitleCode.GDExitObjects2.length = 0;
gdjs.TitleCode.GDBackObjects1.length = 0;
gdjs.TitleCode.GDBackObjects2.length = 0;
gdjs.TitleCode.GDBGObjects1.length = 0;
gdjs.TitleCode.GDBGObjects2.length = 0;
gdjs.TitleCode.GDScoreDisplayObjects1.length = 0;
gdjs.TitleCode.GDScoreDisplayObjects2.length = 0;
gdjs.TitleCode.GDcopyrightObjects1.length = 0;
gdjs.TitleCode.GDcopyrightObjects2.length = 0;
gdjs.TitleCode.GDNewSprite2Objects1.length = 0;
gdjs.TitleCode.GDNewSprite2Objects2.length = 0;
gdjs.TitleCode.GDNew3DBoxObjects1.length = 0;
gdjs.TitleCode.GDNew3DBoxObjects2.length = 0;
gdjs.TitleCode.GDRacketObjects1.length = 0;
gdjs.TitleCode.GDRacketObjects2.length = 0;
gdjs.TitleCode.GDSettingsObjects1.length = 0;
gdjs.TitleCode.GDSettingsObjects2.length = 0;
gdjs.TitleCode.GDCustomLobbiesObjects1.length = 0;
gdjs.TitleCode.GDCustomLobbiesObjects2.length = 0;
gdjs.TitleCode.GDOnlineCheckObjects1.length = 0;
gdjs.TitleCode.GDOnlineCheckObjects2.length = 0;
gdjs.TitleCode.GDCursorObjects1.length = 0;
gdjs.TitleCode.GDCursorObjects2.length = 0;
gdjs.TitleCode.GDBGObjects1.length = 0;
gdjs.TitleCode.GDBGObjects2.length = 0;

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
gdjs.TitleCode.GDdiscordObjects1.length = 0;
gdjs.TitleCode.GDdiscordObjects2.length = 0;
gdjs.TitleCode.GDdiscordtextObjects1.length = 0;
gdjs.TitleCode.GDdiscordtextObjects2.length = 0;
gdjs.TitleCode.GDCampaignObjects1.length = 0;
gdjs.TitleCode.GDCampaignObjects2.length = 0;
gdjs.TitleCode.GDExitObjects1.length = 0;
gdjs.TitleCode.GDExitObjects2.length = 0;
gdjs.TitleCode.GDBackObjects1.length = 0;
gdjs.TitleCode.GDBackObjects2.length = 0;
gdjs.TitleCode.GDBGObjects1.length = 0;
gdjs.TitleCode.GDBGObjects2.length = 0;
gdjs.TitleCode.GDScoreDisplayObjects1.length = 0;
gdjs.TitleCode.GDScoreDisplayObjects2.length = 0;
gdjs.TitleCode.GDcopyrightObjects1.length = 0;
gdjs.TitleCode.GDcopyrightObjects2.length = 0;
gdjs.TitleCode.GDNewSprite2Objects1.length = 0;
gdjs.TitleCode.GDNewSprite2Objects2.length = 0;
gdjs.TitleCode.GDNew3DBoxObjects1.length = 0;
gdjs.TitleCode.GDNew3DBoxObjects2.length = 0;
gdjs.TitleCode.GDRacketObjects1.length = 0;
gdjs.TitleCode.GDRacketObjects2.length = 0;
gdjs.TitleCode.GDSettingsObjects1.length = 0;
gdjs.TitleCode.GDSettingsObjects2.length = 0;
gdjs.TitleCode.GDCustomLobbiesObjects1.length = 0;
gdjs.TitleCode.GDCustomLobbiesObjects2.length = 0;
gdjs.TitleCode.GDOnlineCheckObjects1.length = 0;
gdjs.TitleCode.GDOnlineCheckObjects2.length = 0;
gdjs.TitleCode.GDCursorObjects1.length = 0;
gdjs.TitleCode.GDCursorObjects2.length = 0;
gdjs.TitleCode.GDBGObjects1.length = 0;
gdjs.TitleCode.GDBGObjects2.length = 0;


return;

}

gdjs['TitleCode'] = gdjs.TitleCode;
