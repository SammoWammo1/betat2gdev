gdjs.MultiplayerTitleCode = {};
gdjs.MultiplayerTitleCode.localVariables = [];
gdjs.MultiplayerTitleCode.idToCallbackMap = new Map();
gdjs.MultiplayerTitleCode.GDBlackSquareDecoratedButtonObjects1= [];
gdjs.MultiplayerTitleCode.GDBlackSquareDecoratedButtonObjects2= [];
gdjs.MultiplayerTitleCode.GDLocalObjects1= [];
gdjs.MultiplayerTitleCode.GDLocalObjects2= [];
gdjs.MultiplayerTitleCode.GDBackObjects1= [];
gdjs.MultiplayerTitleCode.GDBackObjects2= [];
gdjs.MultiplayerTitleCode.GDCustomLobbiesObjects1= [];
gdjs.MultiplayerTitleCode.GDCustomLobbiesObjects2= [];
gdjs.MultiplayerTitleCode.GDOnlineCheckObjects1= [];
gdjs.MultiplayerTitleCode.GDOnlineCheckObjects2= [];
gdjs.MultiplayerTitleCode.GDCursorObjects1= [];
gdjs.MultiplayerTitleCode.GDCursorObjects2= [];


gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDOnlineCheckObjects1Objects = Hashtable.newFrom({"OnlineCheck": gdjs.MultiplayerTitleCode.GDOnlineCheckObjects1});
gdjs.MultiplayerTitleCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Local"), gdjs.MultiplayerTitleCode.GDLocalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MultiplayerTitleCode.GDLocalObjects1.length;i<l;++i) {
    if ( gdjs.MultiplayerTitleCode.GDLocalObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MultiplayerTitleCode.GDLocalObjects1[k] = gdjs.MultiplayerTitleCode.GDLocalObjects1[i];
        ++k;
    }
}
gdjs.MultiplayerTitleCode.GDLocalObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlackSquareDecoratedButton"), gdjs.MultiplayerTitleCode.GDBlackSquareDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MultiplayerTitleCode.GDBlackSquareDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.MultiplayerTitleCode.GDBlackSquareDecoratedButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MultiplayerTitleCode.GDBlackSquareDecoratedButtonObjects1[k] = gdjs.MultiplayerTitleCode.GDBlackSquareDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.MultiplayerTitleCode.GDBlackSquareDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.MultiplayerTitleCode.GDOnlineCheckObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDOnlineCheckObjects1Objects, 315, 381, "");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("OnlineCheck"), gdjs.MultiplayerTitleCode.GDOnlineCheckObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MultiplayerTitleCode.GDOnlineCheckObjects1.length;i<l;++i) {
    if ( gdjs.MultiplayerTitleCode.GDOnlineCheckObjects1[i].IsYesClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MultiplayerTitleCode.GDOnlineCheckObjects1[k] = gdjs.MultiplayerTitleCode.GDOnlineCheckObjects1[i];
        ++k;
    }
}
gdjs.MultiplayerTitleCode.GDOnlineCheckObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.playerAuthentication.isAuthenticated();
}
if (isConditionTrue_0) {
/* Reuse gdjs.MultiplayerTitleCode.GDOnlineCheckObjects1 */
{gdjs.multiplayer.openLobbiesWindow(runtimeScene);
}
{for(var i = 0, len = gdjs.MultiplayerTitleCode.GDOnlineCheckObjects1.length ;i < len;++i) {
    gdjs.MultiplayerTitleCode.GDOnlineCheckObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("OnlineCheck"), gdjs.MultiplayerTitleCode.GDOnlineCheckObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MultiplayerTitleCode.GDOnlineCheckObjects1.length;i<l;++i) {
    if ( gdjs.MultiplayerTitleCode.GDOnlineCheckObjects1[i].IsYesClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MultiplayerTitleCode.GDOnlineCheckObjects1[k] = gdjs.MultiplayerTitleCode.GDOnlineCheckObjects1[i];
        ++k;
    }
}
gdjs.MultiplayerTitleCode.GDOnlineCheckObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.playerAuthentication.isAuthenticated());
}
if (isConditionTrue_0) {
/* Reuse gdjs.MultiplayerTitleCode.GDOnlineCheckObjects1 */
{gdjs.playerAuthentication.openAuthenticationWindow(runtimeScene);
}
{for(var i = 0, len = gdjs.MultiplayerTitleCode.GDOnlineCheckObjects1.length ;i < len;++i) {
    gdjs.MultiplayerTitleCode.GDOnlineCheckObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("OnlineCheck"), gdjs.MultiplayerTitleCode.GDOnlineCheckObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MultiplayerTitleCode.GDOnlineCheckObjects1.length;i<l;++i) {
    if ( gdjs.MultiplayerTitleCode.GDOnlineCheckObjects1[i].IsNoClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MultiplayerTitleCode.GDOnlineCheckObjects1[k] = gdjs.MultiplayerTitleCode.GDOnlineCheckObjects1[i];
        ++k;
    }
}
gdjs.MultiplayerTitleCode.GDOnlineCheckObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MultiplayerTitleCode.GDOnlineCheckObjects1 */
{for(var i = 0, len = gdjs.MultiplayerTitleCode.GDOnlineCheckObjects1.length ;i < len;++i) {
    gdjs.MultiplayerTitleCode.GDOnlineCheckObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.MultiplayerTitleCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MultiplayerTitleCode.GDBackObjects1.length;i<l;++i) {
    if ( gdjs.MultiplayerTitleCode.GDBackObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MultiplayerTitleCode.GDBackObjects1[k] = gdjs.MultiplayerTitleCode.GDBackObjects1[i];
        ++k;
    }
}
gdjs.MultiplayerTitleCode.GDBackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Controller_X_is_connected.func(runtimeScene, 1, null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.MultiplayerTitleCode.GDCursorObjects1);
{for(var i = 0, len = gdjs.MultiplayerTitleCode.GDCursorObjects1.length ;i < len;++i) {
    gdjs.MultiplayerTitleCode.GDCursorObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Any", null);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.MultiplayerTitleCode.GDCursorObjects1);
{for(var i = 0, len = gdjs.MultiplayerTitleCode.GDCursorObjects1.length ;i < len;++i) {
    gdjs.MultiplayerTitleCode.GDCursorObjects1[i].getBehavior("TopDownMovement").simulateStick(gdjs.evtsExt__Gamepads__StickAngle.func(runtimeScene, 1, "Left", null), gdjs.evtsExt__Gamepads__StickForce.func(runtimeScene, 1, "Left", null));
}
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


};

gdjs.MultiplayerTitleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MultiplayerTitleCode.GDBlackSquareDecoratedButtonObjects1.length = 0;
gdjs.MultiplayerTitleCode.GDBlackSquareDecoratedButtonObjects2.length = 0;
gdjs.MultiplayerTitleCode.GDLocalObjects1.length = 0;
gdjs.MultiplayerTitleCode.GDLocalObjects2.length = 0;
gdjs.MultiplayerTitleCode.GDBackObjects1.length = 0;
gdjs.MultiplayerTitleCode.GDBackObjects2.length = 0;
gdjs.MultiplayerTitleCode.GDCustomLobbiesObjects1.length = 0;
gdjs.MultiplayerTitleCode.GDCustomLobbiesObjects2.length = 0;
gdjs.MultiplayerTitleCode.GDOnlineCheckObjects1.length = 0;
gdjs.MultiplayerTitleCode.GDOnlineCheckObjects2.length = 0;
gdjs.MultiplayerTitleCode.GDCursorObjects1.length = 0;
gdjs.MultiplayerTitleCode.GDCursorObjects2.length = 0;

gdjs.MultiplayerTitleCode.eventsList0(runtimeScene);
gdjs.MultiplayerTitleCode.GDBlackSquareDecoratedButtonObjects1.length = 0;
gdjs.MultiplayerTitleCode.GDBlackSquareDecoratedButtonObjects2.length = 0;
gdjs.MultiplayerTitleCode.GDLocalObjects1.length = 0;
gdjs.MultiplayerTitleCode.GDLocalObjects2.length = 0;
gdjs.MultiplayerTitleCode.GDBackObjects1.length = 0;
gdjs.MultiplayerTitleCode.GDBackObjects2.length = 0;
gdjs.MultiplayerTitleCode.GDCustomLobbiesObjects1.length = 0;
gdjs.MultiplayerTitleCode.GDCustomLobbiesObjects2.length = 0;
gdjs.MultiplayerTitleCode.GDOnlineCheckObjects1.length = 0;
gdjs.MultiplayerTitleCode.GDOnlineCheckObjects2.length = 0;
gdjs.MultiplayerTitleCode.GDCursorObjects1.length = 0;
gdjs.MultiplayerTitleCode.GDCursorObjects2.length = 0;


return;

}

gdjs['MultiplayerTitleCode'] = gdjs.MultiplayerTitleCode;
