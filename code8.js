gdjs.SettingsCode = {};
gdjs.SettingsCode.localVariables = [];
gdjs.SettingsCode.idToCallbackMap = new Map();
gdjs.SettingsCode.GDBackObjects1= [];
gdjs.SettingsCode.GDBackObjects2= [];
gdjs.SettingsCode.GDBGObjects1= [];
gdjs.SettingsCode.GDBGObjects2= [];
gdjs.SettingsCode.GDSoundObjects1= [];
gdjs.SettingsCode.GDSoundObjects2= [];
gdjs.SettingsCode.GDBackSelectObjects1= [];
gdjs.SettingsCode.GDBackSelectObjects2= [];
gdjs.SettingsCode.GDMusicObjects1= [];
gdjs.SettingsCode.GDMusicObjects2= [];
gdjs.SettingsCode.GDMusicTextObjects1= [];
gdjs.SettingsCode.GDMusicTextObjects2= [];
gdjs.SettingsCode.GDVisualObjects1= [];
gdjs.SettingsCode.GDVisualObjects2= [];
gdjs.SettingsCode.GDControlsObjects1= [];
gdjs.SettingsCode.GDControlsObjects2= [];
gdjs.SettingsCode.GDCreditsObjects1= [];
gdjs.SettingsCode.GDCreditsObjects2= [];
gdjs.SettingsCode.GDCreditsTextObjects1= [];
gdjs.SettingsCode.GDCreditsTextObjects2= [];
gdjs.SettingsCode.GDNewSprite2Objects1= [];
gdjs.SettingsCode.GDNewSprite2Objects2= [];
gdjs.SettingsCode.GDNewSpriteObjects1= [];
gdjs.SettingsCode.GDNewSpriteObjects2= [];
gdjs.SettingsCode.GDNewTextObjects1= [];
gdjs.SettingsCode.GDNewTextObjects2= [];
gdjs.SettingsCode.GDNewSprite3Objects1= [];
gdjs.SettingsCode.GDNewSprite3Objects2= [];
gdjs.SettingsCode.GDNewText2Objects1= [];
gdjs.SettingsCode.GDNewText2Objects2= [];
gdjs.SettingsCode.GDnoticeObjects1= [];
gdjs.SettingsCode.GDnoticeObjects2= [];
gdjs.SettingsCode.GDNewToggleSwitchObjects1= [];
gdjs.SettingsCode.GDNewToggleSwitchObjects2= [];
gdjs.SettingsCode.GDSquareWhiteToggleObjects1= [];
gdjs.SettingsCode.GDSquareWhiteToggleObjects2= [];
gdjs.SettingsCode.GDNewText3Objects1= [];
gdjs.SettingsCode.GDNewText3Objects2= [];
gdjs.SettingsCode.GDSFXObjects1= [];
gdjs.SettingsCode.GDSFXObjects2= [];
gdjs.SettingsCode.GDSFXTextObjects1= [];
gdjs.SettingsCode.GDSFXTextObjects2= [];
gdjs.SettingsCode.GDCustomLobbiesObjects1= [];
gdjs.SettingsCode.GDCustomLobbiesObjects2= [];
gdjs.SettingsCode.GDOnlineCheckObjects1= [];
gdjs.SettingsCode.GDOnlineCheckObjects2= [];
gdjs.SettingsCode.GDCursorObjects1= [];
gdjs.SettingsCode.GDCursorObjects2= [];
gdjs.SettingsCode.GDBGObjects1= [];
gdjs.SettingsCode.GDBGObjects2= [];


gdjs.SettingsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.SettingsCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDBackObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDBackObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDBackObjects1[k] = gdjs.SettingsCode.GDBackObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDBackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Music"), gdjs.SettingsCode.GDMusicObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber((( gdjs.SettingsCode.GDMusicObjects1.length === 0 ) ? 0 :gdjs.SettingsCode.GDMusicObjects1[0].Value(null)));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackSelect"), gdjs.SettingsCode.GDBackSelectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDBackSelectObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDBackSelectObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDBackSelectObjects1[k] = gdjs.SettingsCode.GDBackSelectObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDBackSelectObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "");
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Sound");
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Credits");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sound"), gdjs.SettingsCode.GDSoundObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDSoundObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDSoundObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDSoundObjects1[k] = gdjs.SettingsCode.GDSoundObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDSoundObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "");
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "Sound");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Credits"), gdjs.SettingsCode.GDCreditsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDCreditsObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDCreditsObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDCreditsObjects1[k] = gdjs.SettingsCode.GDCreditsObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDCreditsObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "");
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "Credits");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Controls"), gdjs.SettingsCode.GDControlsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDControlsObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDControlsObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDControlsObjects1[k] = gdjs.SettingsCode.GDControlsObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDControlsObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "");
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "Gameplay");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.SettingsCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDNewSprite2Objects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDNewSprite2Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDNewSprite2Objects1[k] = gdjs.SettingsCode.GDNewSprite2Objects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDNewSprite2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gamejolt", false);
}
}

}


};

gdjs.SettingsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SettingsCode.GDBackObjects1.length = 0;
gdjs.SettingsCode.GDBackObjects2.length = 0;
gdjs.SettingsCode.GDBGObjects1.length = 0;
gdjs.SettingsCode.GDBGObjects2.length = 0;
gdjs.SettingsCode.GDSoundObjects1.length = 0;
gdjs.SettingsCode.GDSoundObjects2.length = 0;
gdjs.SettingsCode.GDBackSelectObjects1.length = 0;
gdjs.SettingsCode.GDBackSelectObjects2.length = 0;
gdjs.SettingsCode.GDMusicObjects1.length = 0;
gdjs.SettingsCode.GDMusicObjects2.length = 0;
gdjs.SettingsCode.GDMusicTextObjects1.length = 0;
gdjs.SettingsCode.GDMusicTextObjects2.length = 0;
gdjs.SettingsCode.GDVisualObjects1.length = 0;
gdjs.SettingsCode.GDVisualObjects2.length = 0;
gdjs.SettingsCode.GDControlsObjects1.length = 0;
gdjs.SettingsCode.GDControlsObjects2.length = 0;
gdjs.SettingsCode.GDCreditsObjects1.length = 0;
gdjs.SettingsCode.GDCreditsObjects2.length = 0;
gdjs.SettingsCode.GDCreditsTextObjects1.length = 0;
gdjs.SettingsCode.GDCreditsTextObjects2.length = 0;
gdjs.SettingsCode.GDNewSprite2Objects1.length = 0;
gdjs.SettingsCode.GDNewSprite2Objects2.length = 0;
gdjs.SettingsCode.GDNewSpriteObjects1.length = 0;
gdjs.SettingsCode.GDNewSpriteObjects2.length = 0;
gdjs.SettingsCode.GDNewTextObjects1.length = 0;
gdjs.SettingsCode.GDNewTextObjects2.length = 0;
gdjs.SettingsCode.GDNewSprite3Objects1.length = 0;
gdjs.SettingsCode.GDNewSprite3Objects2.length = 0;
gdjs.SettingsCode.GDNewText2Objects1.length = 0;
gdjs.SettingsCode.GDNewText2Objects2.length = 0;
gdjs.SettingsCode.GDnoticeObjects1.length = 0;
gdjs.SettingsCode.GDnoticeObjects2.length = 0;
gdjs.SettingsCode.GDNewToggleSwitchObjects1.length = 0;
gdjs.SettingsCode.GDNewToggleSwitchObjects2.length = 0;
gdjs.SettingsCode.GDSquareWhiteToggleObjects1.length = 0;
gdjs.SettingsCode.GDSquareWhiteToggleObjects2.length = 0;
gdjs.SettingsCode.GDNewText3Objects1.length = 0;
gdjs.SettingsCode.GDNewText3Objects2.length = 0;
gdjs.SettingsCode.GDSFXObjects1.length = 0;
gdjs.SettingsCode.GDSFXObjects2.length = 0;
gdjs.SettingsCode.GDSFXTextObjects1.length = 0;
gdjs.SettingsCode.GDSFXTextObjects2.length = 0;
gdjs.SettingsCode.GDCustomLobbiesObjects1.length = 0;
gdjs.SettingsCode.GDCustomLobbiesObjects2.length = 0;
gdjs.SettingsCode.GDOnlineCheckObjects1.length = 0;
gdjs.SettingsCode.GDOnlineCheckObjects2.length = 0;
gdjs.SettingsCode.GDCursorObjects1.length = 0;
gdjs.SettingsCode.GDCursorObjects2.length = 0;
gdjs.SettingsCode.GDBGObjects1.length = 0;
gdjs.SettingsCode.GDBGObjects2.length = 0;

gdjs.SettingsCode.eventsList0(runtimeScene);
gdjs.SettingsCode.GDBackObjects1.length = 0;
gdjs.SettingsCode.GDBackObjects2.length = 0;
gdjs.SettingsCode.GDBGObjects1.length = 0;
gdjs.SettingsCode.GDBGObjects2.length = 0;
gdjs.SettingsCode.GDSoundObjects1.length = 0;
gdjs.SettingsCode.GDSoundObjects2.length = 0;
gdjs.SettingsCode.GDBackSelectObjects1.length = 0;
gdjs.SettingsCode.GDBackSelectObjects2.length = 0;
gdjs.SettingsCode.GDMusicObjects1.length = 0;
gdjs.SettingsCode.GDMusicObjects2.length = 0;
gdjs.SettingsCode.GDMusicTextObjects1.length = 0;
gdjs.SettingsCode.GDMusicTextObjects2.length = 0;
gdjs.SettingsCode.GDVisualObjects1.length = 0;
gdjs.SettingsCode.GDVisualObjects2.length = 0;
gdjs.SettingsCode.GDControlsObjects1.length = 0;
gdjs.SettingsCode.GDControlsObjects2.length = 0;
gdjs.SettingsCode.GDCreditsObjects1.length = 0;
gdjs.SettingsCode.GDCreditsObjects2.length = 0;
gdjs.SettingsCode.GDCreditsTextObjects1.length = 0;
gdjs.SettingsCode.GDCreditsTextObjects2.length = 0;
gdjs.SettingsCode.GDNewSprite2Objects1.length = 0;
gdjs.SettingsCode.GDNewSprite2Objects2.length = 0;
gdjs.SettingsCode.GDNewSpriteObjects1.length = 0;
gdjs.SettingsCode.GDNewSpriteObjects2.length = 0;
gdjs.SettingsCode.GDNewTextObjects1.length = 0;
gdjs.SettingsCode.GDNewTextObjects2.length = 0;
gdjs.SettingsCode.GDNewSprite3Objects1.length = 0;
gdjs.SettingsCode.GDNewSprite3Objects2.length = 0;
gdjs.SettingsCode.GDNewText2Objects1.length = 0;
gdjs.SettingsCode.GDNewText2Objects2.length = 0;
gdjs.SettingsCode.GDnoticeObjects1.length = 0;
gdjs.SettingsCode.GDnoticeObjects2.length = 0;
gdjs.SettingsCode.GDNewToggleSwitchObjects1.length = 0;
gdjs.SettingsCode.GDNewToggleSwitchObjects2.length = 0;
gdjs.SettingsCode.GDSquareWhiteToggleObjects1.length = 0;
gdjs.SettingsCode.GDSquareWhiteToggleObjects2.length = 0;
gdjs.SettingsCode.GDNewText3Objects1.length = 0;
gdjs.SettingsCode.GDNewText3Objects2.length = 0;
gdjs.SettingsCode.GDSFXObjects1.length = 0;
gdjs.SettingsCode.GDSFXObjects2.length = 0;
gdjs.SettingsCode.GDSFXTextObjects1.length = 0;
gdjs.SettingsCode.GDSFXTextObjects2.length = 0;
gdjs.SettingsCode.GDCustomLobbiesObjects1.length = 0;
gdjs.SettingsCode.GDCustomLobbiesObjects2.length = 0;
gdjs.SettingsCode.GDOnlineCheckObjects1.length = 0;
gdjs.SettingsCode.GDOnlineCheckObjects2.length = 0;
gdjs.SettingsCode.GDCursorObjects1.length = 0;
gdjs.SettingsCode.GDCursorObjects2.length = 0;
gdjs.SettingsCode.GDBGObjects1.length = 0;
gdjs.SettingsCode.GDBGObjects2.length = 0;


return;

}

gdjs['SettingsCode'] = gdjs.SettingsCode;
