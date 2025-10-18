gdjs.GameCode = {};
gdjs.GameCode.localVariables = [];
gdjs.GameCode.idToCallbackMap = new Map();
gdjs.GameCode.GDLobObjects3_1final = [];

gdjs.GameCode.GDNormalObjects3_1final = [];

gdjs.GameCode.GDPowershotObjects3_1final = [];

gdjs.GameCode.GDSliceObjects3_1final = [];

gdjs.GameCode.forEachIndex2 = 0;

gdjs.GameCode.forEachIndex3 = 0;

gdjs.GameCode.forEachIndex4 = 0;

gdjs.GameCode.forEachIndex5 = 0;

gdjs.GameCode.forEachObjects2 = [];

gdjs.GameCode.forEachObjects3 = [];

gdjs.GameCode.forEachObjects4 = [];

gdjs.GameCode.forEachObjects5 = [];

gdjs.GameCode.forEachTemporary2 = null;

gdjs.GameCode.forEachTemporary3 = null;

gdjs.GameCode.forEachTemporary4 = null;

gdjs.GameCode.forEachTemporary5 = null;

gdjs.GameCode.forEachTotalCount2 = 0;

gdjs.GameCode.forEachTotalCount3 = 0;

gdjs.GameCode.forEachTotalCount4 = 0;

gdjs.GameCode.forEachTotalCount5 = 0;

gdjs.GameCode.GDCourtObjects1= [];
gdjs.GameCode.GDCourtObjects2= [];
gdjs.GameCode.GDCourtObjects3= [];
gdjs.GameCode.GDCourtObjects4= [];
gdjs.GameCode.GDCourtObjects5= [];
gdjs.GameCode.GDCourtObjects6= [];
gdjs.GameCode.GDPlayerObjects1= [];
gdjs.GameCode.GDPlayerObjects2= [];
gdjs.GameCode.GDPlayerObjects3= [];
gdjs.GameCode.GDPlayerObjects4= [];
gdjs.GameCode.GDPlayerObjects5= [];
gdjs.GameCode.GDPlayerObjects6= [];
gdjs.GameCode.GDWallObjects1= [];
gdjs.GameCode.GDWallObjects2= [];
gdjs.GameCode.GDWallObjects3= [];
gdjs.GameCode.GDWallObjects4= [];
gdjs.GameCode.GDWallObjects5= [];
gdjs.GameCode.GDWallObjects6= [];
gdjs.GameCode.GDMidPointObjects1= [];
gdjs.GameCode.GDMidPointObjects2= [];
gdjs.GameCode.GDMidPointObjects3= [];
gdjs.GameCode.GDMidPointObjects4= [];
gdjs.GameCode.GDMidPointObjects5= [];
gdjs.GameCode.GDMidPointObjects6= [];
gdjs.GameCode.GDBallObjects1= [];
gdjs.GameCode.GDBallObjects2= [];
gdjs.GameCode.GDBallObjects3= [];
gdjs.GameCode.GDBallObjects4= [];
gdjs.GameCode.GDBallObjects5= [];
gdjs.GameCode.GDBallObjects6= [];
gdjs.GameCode.GDPlayerWallObjects1= [];
gdjs.GameCode.GDPlayerWallObjects2= [];
gdjs.GameCode.GDPlayerWallObjects3= [];
gdjs.GameCode.GDPlayerWallObjects4= [];
gdjs.GameCode.GDPlayerWallObjects5= [];
gdjs.GameCode.GDPlayerWallObjects6= [];
gdjs.GameCode.GDMetalRedBarObjects1= [];
gdjs.GameCode.GDMetalRedBarObjects2= [];
gdjs.GameCode.GDMetalRedBarObjects3= [];
gdjs.GameCode.GDMetalRedBarObjects4= [];
gdjs.GameCode.GDMetalRedBarObjects5= [];
gdjs.GameCode.GDMetalRedBarObjects6= [];
gdjs.GameCode.GDPCardObjects1= [];
gdjs.GameCode.GDPCardObjects2= [];
gdjs.GameCode.GDPCardObjects3= [];
gdjs.GameCode.GDPCardObjects4= [];
gdjs.GameCode.GDPCardObjects5= [];
gdjs.GameCode.GDPCardObjects6= [];
gdjs.GameCode.GDHPBarObjects1= [];
gdjs.GameCode.GDHPBarObjects2= [];
gdjs.GameCode.GDHPBarObjects3= [];
gdjs.GameCode.GDHPBarObjects4= [];
gdjs.GameCode.GDHPBarObjects5= [];
gdjs.GameCode.GDHPBarObjects6= [];
gdjs.GameCode.GDPTextObjects1= [];
gdjs.GameCode.GDPTextObjects2= [];
gdjs.GameCode.GDPTextObjects3= [];
gdjs.GameCode.GDPTextObjects4= [];
gdjs.GameCode.GDPTextObjects5= [];
gdjs.GameCode.GDPTextObjects6= [];
gdjs.GameCode.GDP2TextObjects1= [];
gdjs.GameCode.GDP2TextObjects2= [];
gdjs.GameCode.GDP2TextObjects3= [];
gdjs.GameCode.GDP2TextObjects4= [];
gdjs.GameCode.GDP2TextObjects5= [];
gdjs.GameCode.GDP2TextObjects6= [];
gdjs.GameCode.GDShadedDarkJoystickObjects1= [];
gdjs.GameCode.GDShadedDarkJoystickObjects2= [];
gdjs.GameCode.GDShadedDarkJoystickObjects3= [];
gdjs.GameCode.GDShadedDarkJoystickObjects4= [];
gdjs.GameCode.GDShadedDarkJoystickObjects5= [];
gdjs.GameCode.GDShadedDarkJoystickObjects6= [];
gdjs.GameCode.GDOnScreenControlsButtonObjects1= [];
gdjs.GameCode.GDOnScreenControlsButtonObjects2= [];
gdjs.GameCode.GDOnScreenControlsButtonObjects3= [];
gdjs.GameCode.GDOnScreenControlsButtonObjects4= [];
gdjs.GameCode.GDOnScreenControlsButtonObjects5= [];
gdjs.GameCode.GDOnScreenControlsButtonObjects6= [];
gdjs.GameCode.GDHITObjects1= [];
gdjs.GameCode.GDHITObjects2= [];
gdjs.GameCode.GDHITObjects3= [];
gdjs.GameCode.GDHITObjects4= [];
gdjs.GameCode.GDHITObjects5= [];
gdjs.GameCode.GDHITObjects6= [];
gdjs.GameCode.GDScoreCardObjects1= [];
gdjs.GameCode.GDScoreCardObjects2= [];
gdjs.GameCode.GDScoreCardObjects3= [];
gdjs.GameCode.GDScoreCardObjects4= [];
gdjs.GameCode.GDScoreCardObjects5= [];
gdjs.GameCode.GDScoreCardObjects6= [];
gdjs.GameCode.GDgroundledObjects1= [];
gdjs.GameCode.GDgroundledObjects2= [];
gdjs.GameCode.GDgroundledObjects3= [];
gdjs.GameCode.GDgroundledObjects4= [];
gdjs.GameCode.GDgroundledObjects5= [];
gdjs.GameCode.GDgroundledObjects6= [];
gdjs.GameCode.GDLobsScoreObjects1= [];
gdjs.GameCode.GDLobsScoreObjects2= [];
gdjs.GameCode.GDLobsScoreObjects3= [];
gdjs.GameCode.GDLobsScoreObjects4= [];
gdjs.GameCode.GDLobsScoreObjects5= [];
gdjs.GameCode.GDLobsScoreObjects6= [];
gdjs.GameCode.GDSlicersScoreObjects1= [];
gdjs.GameCode.GDSlicersScoreObjects2= [];
gdjs.GameCode.GDSlicersScoreObjects3= [];
gdjs.GameCode.GDSlicersScoreObjects4= [];
gdjs.GameCode.GDSlicersScoreObjects5= [];
gdjs.GameCode.GDSlicersScoreObjects6= [];
gdjs.GameCode.GDLobsIconObjects1= [];
gdjs.GameCode.GDLobsIconObjects2= [];
gdjs.GameCode.GDLobsIconObjects3= [];
gdjs.GameCode.GDLobsIconObjects4= [];
gdjs.GameCode.GDLobsIconObjects5= [];
gdjs.GameCode.GDLobsIconObjects6= [];
gdjs.GameCode.GDLobsSpriteObjects1= [];
gdjs.GameCode.GDLobsSpriteObjects2= [];
gdjs.GameCode.GDLobsSpriteObjects3= [];
gdjs.GameCode.GDLobsSpriteObjects4= [];
gdjs.GameCode.GDLobsSpriteObjects5= [];
gdjs.GameCode.GDLobsSpriteObjects6= [];
gdjs.GameCode.GDBallHitboxObjects1= [];
gdjs.GameCode.GDBallHitboxObjects2= [];
gdjs.GameCode.GDBallHitboxObjects3= [];
gdjs.GameCode.GDBallHitboxObjects4= [];
gdjs.GameCode.GDBallHitboxObjects5= [];
gdjs.GameCode.GDBallHitboxObjects6= [];
gdjs.GameCode.GDP3TextObjects1= [];
gdjs.GameCode.GDP3TextObjects2= [];
gdjs.GameCode.GDP3TextObjects3= [];
gdjs.GameCode.GDP3TextObjects4= [];
gdjs.GameCode.GDP3TextObjects5= [];
gdjs.GameCode.GDP3TextObjects6= [];
gdjs.GameCode.GDScoreDisplayObjects1= [];
gdjs.GameCode.GDScoreDisplayObjects2= [];
gdjs.GameCode.GDScoreDisplayObjects3= [];
gdjs.GameCode.GDScoreDisplayObjects4= [];
gdjs.GameCode.GDScoreDisplayObjects5= [];
gdjs.GameCode.GDScoreDisplayObjects6= [];
gdjs.GameCode.GDscore_9595Objects1= [];
gdjs.GameCode.GDscore_9595Objects2= [];
gdjs.GameCode.GDscore_9595Objects3= [];
gdjs.GameCode.GDscore_9595Objects4= [];
gdjs.GameCode.GDscore_9595Objects5= [];
gdjs.GameCode.GDscore_9595Objects6= [];
gdjs.GameCode.GDScoreTextIconLObjects1= [];
gdjs.GameCode.GDScoreTextIconLObjects2= [];
gdjs.GameCode.GDScoreTextIconLObjects3= [];
gdjs.GameCode.GDScoreTextIconLObjects4= [];
gdjs.GameCode.GDScoreTextIconLObjects5= [];
gdjs.GameCode.GDScoreTextIconLObjects6= [];
gdjs.GameCode.GDScoreTextIconSObjects1= [];
gdjs.GameCode.GDScoreTextIconSObjects2= [];
gdjs.GameCode.GDScoreTextIconSObjects3= [];
gdjs.GameCode.GDScoreTextIconSObjects4= [];
gdjs.GameCode.GDScoreTextIconSObjects5= [];
gdjs.GameCode.GDScoreTextIconSObjects6= [];
gdjs.GameCode.GDPSHOTObjects1= [];
gdjs.GameCode.GDPSHOTObjects2= [];
gdjs.GameCode.GDPSHOTObjects3= [];
gdjs.GameCode.GDPSHOTObjects4= [];
gdjs.GameCode.GDPSHOTObjects5= [];
gdjs.GameCode.GDPSHOTObjects6= [];
gdjs.GameCode.GDlobObjects1= [];
gdjs.GameCode.GDlobObjects2= [];
gdjs.GameCode.GDlobObjects3= [];
gdjs.GameCode.GDlobObjects4= [];
gdjs.GameCode.GDlobObjects5= [];
gdjs.GameCode.GDlobObjects6= [];
gdjs.GameCode.GDsliceObjects1= [];
gdjs.GameCode.GDsliceObjects2= [];
gdjs.GameCode.GDsliceObjects3= [];
gdjs.GameCode.GDsliceObjects4= [];
gdjs.GameCode.GDsliceObjects5= [];
gdjs.GameCode.GDsliceObjects6= [];
gdjs.GameCode.GDNormal_9595ButtonObjects1= [];
gdjs.GameCode.GDNormal_9595ButtonObjects2= [];
gdjs.GameCode.GDNormal_9595ButtonObjects3= [];
gdjs.GameCode.GDNormal_9595ButtonObjects4= [];
gdjs.GameCode.GDNormal_9595ButtonObjects5= [];
gdjs.GameCode.GDNormal_9595ButtonObjects6= [];
gdjs.GameCode.GDNormalObjects1= [];
gdjs.GameCode.GDNormalObjects2= [];
gdjs.GameCode.GDNormalObjects3= [];
gdjs.GameCode.GDNormalObjects4= [];
gdjs.GameCode.GDNormalObjects5= [];
gdjs.GameCode.GDNormalObjects6= [];
gdjs.GameCode.GDPowershotObjects1= [];
gdjs.GameCode.GDPowershotObjects2= [];
gdjs.GameCode.GDPowershotObjects3= [];
gdjs.GameCode.GDPowershotObjects4= [];
gdjs.GameCode.GDPowershotObjects5= [];
gdjs.GameCode.GDPowershotObjects6= [];
gdjs.GameCode.GDSliceObjects1= [];
gdjs.GameCode.GDSliceObjects2= [];
gdjs.GameCode.GDSliceObjects3= [];
gdjs.GameCode.GDSliceObjects4= [];
gdjs.GameCode.GDSliceObjects5= [];
gdjs.GameCode.GDSliceObjects6= [];
gdjs.GameCode.GDLobObjects1= [];
gdjs.GameCode.GDLobObjects2= [];
gdjs.GameCode.GDLobObjects3= [];
gdjs.GameCode.GDLobObjects4= [];
gdjs.GameCode.GDLobObjects5= [];
gdjs.GameCode.GDLobObjects6= [];
gdjs.GameCode.GDPaddleObjects1= [];
gdjs.GameCode.GDPaddleObjects2= [];
gdjs.GameCode.GDPaddleObjects3= [];
gdjs.GameCode.GDPaddleObjects4= [];
gdjs.GameCode.GDPaddleObjects5= [];
gdjs.GameCode.GDPaddleObjects6= [];
gdjs.GameCode.GDScoreObjects1= [];
gdjs.GameCode.GDScoreObjects2= [];
gdjs.GameCode.GDScoreObjects3= [];
gdjs.GameCode.GDScoreObjects4= [];
gdjs.GameCode.GDScoreObjects5= [];
gdjs.GameCode.GDScoreObjects6= [];
gdjs.GameCode.GDPShotObjects1= [];
gdjs.GameCode.GDPShotObjects2= [];
gdjs.GameCode.GDPShotObjects3= [];
gdjs.GameCode.GDPShotObjects4= [];
gdjs.GameCode.GDPShotObjects5= [];
gdjs.GameCode.GDPShotObjects6= [];
gdjs.GameCode.GDsetstextObjects1= [];
gdjs.GameCode.GDsetstextObjects2= [];
gdjs.GameCode.GDsetstextObjects3= [];
gdjs.GameCode.GDsetstextObjects4= [];
gdjs.GameCode.GDsetstextObjects5= [];
gdjs.GameCode.GDsetstextObjects6= [];
gdjs.GameCode.GDSetsLobsObjects1= [];
gdjs.GameCode.GDSetsLobsObjects2= [];
gdjs.GameCode.GDSetsLobsObjects3= [];
gdjs.GameCode.GDSetsLobsObjects4= [];
gdjs.GameCode.GDSetsLobsObjects5= [];
gdjs.GameCode.GDSetsLobsObjects6= [];
gdjs.GameCode.GDSetsSlicersObjects1= [];
gdjs.GameCode.GDSetsSlicersObjects2= [];
gdjs.GameCode.GDSetsSlicersObjects3= [];
gdjs.GameCode.GDSetsSlicersObjects4= [];
gdjs.GameCode.GDSetsSlicersObjects5= [];
gdjs.GameCode.GDSetsSlicersObjects6= [];
gdjs.GameCode.GDCustomLobbiesObjects1= [];
gdjs.GameCode.GDCustomLobbiesObjects2= [];
gdjs.GameCode.GDCustomLobbiesObjects3= [];
gdjs.GameCode.GDCustomLobbiesObjects4= [];
gdjs.GameCode.GDCustomLobbiesObjects5= [];
gdjs.GameCode.GDCustomLobbiesObjects6= [];
gdjs.GameCode.GDOnlineCheckObjects1= [];
gdjs.GameCode.GDOnlineCheckObjects2= [];
gdjs.GameCode.GDOnlineCheckObjects3= [];
gdjs.GameCode.GDOnlineCheckObjects4= [];
gdjs.GameCode.GDOnlineCheckObjects5= [];
gdjs.GameCode.GDOnlineCheckObjects6= [];
gdjs.GameCode.GDCursorObjects1= [];
gdjs.GameCode.GDCursorObjects2= [];
gdjs.GameCode.GDCursorObjects3= [];
gdjs.GameCode.GDCursorObjects4= [];
gdjs.GameCode.GDCursorObjects5= [];
gdjs.GameCode.GDCursorObjects6= [];


gdjs.GameCode.eventsList0 = function(runtimeScene) {

};gdjs.GameCode.eventsList1 = function(runtimeScene) {

};gdjs.GameCode.eventsList2 = function(runtimeScene) {

};gdjs.GameCode.eventsList3 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects5});
gdjs.GameCode.eventsList4 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects5});
gdjs.GameCode.eventsList5 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects5});
gdjs.GameCode.eventsList6 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects5});
gdjs.GameCode.eventsList7 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects5});
gdjs.GameCode.eventsList8 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects5});
gdjs.GameCode.eventsList9 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects5});
gdjs.GameCode.eventsList10 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects5});
gdjs.GameCode.eventsList11 = function(runtimeScene) {

};gdjs.GameCode.eventsList12 = function(runtimeScene) {

};gdjs.GameCode.eventsList13 = function(runtimeScene) {

};gdjs.GameCode.eventsList14 = function(runtimeScene) {

};gdjs.GameCode.eventsList15 = function(runtimeScene) {

};gdjs.GameCode.eventsList16 = function(runtimeScene) {

};gdjs.GameCode.eventsList17 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ShadedDarkJoystick"), gdjs.GameCode.GDShadedDarkJoystickObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDShadedDarkJoystickObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDShadedDarkJoystickObjects4[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDShadedDarkJoystickObjects4[k] = gdjs.GameCode.GDShadedDarkJoystickObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDShadedDarkJoystickObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbyGameRunning());
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);
/* Reuse gdjs.GameCode.GDShadedDarkJoystickObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects4[i].getBehavior("TopDownMovement").simulateStick((( gdjs.GameCode.GDShadedDarkJoystickObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDShadedDarkJoystickObjects4[0].StickAngle(null)), 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects4[i].returnVariable(gdjs.GameCode.GDPlayerObjects4[i].getVariables().getFromIndex(2)).setNumber((( gdjs.GameCode.GDShadedDarkJoystickObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDShadedDarkJoystickObjects4[0].StickForceX(null)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects4[i].returnVariable(gdjs.GameCode.GDPlayerObjects4[i].getVariables().getFromIndex(3)).setNumber((( gdjs.GameCode.GDShadedDarkJoystickObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDShadedDarkJoystickObjects4[0].StickForceY(null)));
}
}
}

}


{



}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDPlayerObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects5);
gdjs.copyArray(runtimeScene.getObjects("BallHitbox"), gdjs.GameCode.GDBallHitboxObjects5);
gdjs.GameCode.GDPlayerObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDPlayerObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDPlayerObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbyGameRunning());
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].getBehavior("Animation").setAnimationName("hitball");
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].clearForces();
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].addForce(((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(2).getAsNumber() * 200, ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(3).getAsNumber() * 200, 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").setScale(1);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(1);
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("qc", "255;255;255", "linear", 0.0000001, false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectScaleTween3("bouncein", (gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").getScale()) / 2, "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("bounceinhue", "145;145;145", "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDPlayerObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects5);
gdjs.copyArray(runtimeScene.getObjects("BallHitbox"), gdjs.GameCode.GDBallHitboxObjects5);
gdjs.GameCode.GDPlayerObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDPlayerObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDPlayerObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbyGameRunning());
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].getBehavior("Animation").setAnimationName("hitball");
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].clearForces();
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].addForce(((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(2).getAsNumber() * 250, ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(3).getAsNumber() * 250, 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").setScale(1);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(2);
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("qc", "255;255;255", "linear", 0.0000001, false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectScaleTween3("bouncein", (gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").getScale()) / 2, "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("bounceinhue", "145;145;145", "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDPlayerObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects5);
gdjs.copyArray(runtimeScene.getObjects("BallHitbox"), gdjs.GameCode.GDBallHitboxObjects5);
gdjs.GameCode.GDPlayerObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDPlayerObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDPlayerObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbyGameRunning());
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].getBehavior("Animation").setAnimationName("hitball");
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].clearForces();
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].addForce(((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(2).getAsNumber() * 150, ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(3).getAsNumber() * 150, 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").setScale(1);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(0.5);
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("qc", "255;255;255", "linear", 0.0000001, false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectScaleTween3("bouncein", (gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").getScale()) / 2, "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("bounceinhue", "145;145;145", "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDPlayerObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects5);
gdjs.copyArray(runtimeScene.getObjects("BallHitbox"), gdjs.GameCode.GDBallHitboxObjects5);
gdjs.GameCode.GDPlayerObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDPlayerObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDPlayerObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbyGameRunning());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(4)) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].returnVariable(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(5)).setNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(4).getAsNumber() * 3);
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].returnVariable(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(4)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].getBehavior("Animation").setAnimationName("hitball");
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].clearForces();
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].addForce(((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(2).getAsNumber() * ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(5).getAsNumber(), ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(3).getAsNumber() * ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(5).getAsNumber(), 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").setScale(1);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(0.5);
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("qc", "255;255;255", "linear", 0.0000001, false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectScaleTween3("bouncein", (gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").getScale()) / 2, "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("bounceinhue", "145;145;145", "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDPlayerObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects5);
gdjs.copyArray(runtimeScene.getObjects("BallHitbox"), gdjs.GameCode.GDBallHitboxObjects5);
gdjs.copyArray(runtimeScene.getObjects("Normal"), gdjs.GameCode.GDNormalObjects5);
gdjs.GameCode.GDPlayerObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDPlayerObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDPlayerObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbyGameRunning());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDNormalObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDNormalObjects5[i].getBehavior("MultitouchButton").IsJustPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDNormalObjects5[k] = gdjs.GameCode.GDNormalObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDNormalObjects5.length = k;
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].getBehavior("Animation").setAnimationName("hitball");
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].clearForces();
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].addForce(((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(2).getAsNumber() * 200, ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(3).getAsNumber() * 200, 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").setScale(1);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(1);
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("qc", "255;255;255", "linear", 0.0000001, false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectScaleTween3("bouncein", (gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").getScale()) / 2, "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("bounceinhue", "145;145;145", "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDPlayerObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects5);
gdjs.copyArray(runtimeScene.getObjects("BallHitbox"), gdjs.GameCode.GDBallHitboxObjects5);
gdjs.copyArray(runtimeScene.getObjects("Lob"), gdjs.GameCode.GDLobObjects5);
gdjs.GameCode.GDPlayerObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDPlayerObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDPlayerObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbyGameRunning());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDLobObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDLobObjects5[i].getBehavior("MultitouchButton").IsJustPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDLobObjects5[k] = gdjs.GameCode.GDLobObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDLobObjects5.length = k;
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].getBehavior("Animation").setAnimationName("hitball");
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].clearForces();
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].addForce(((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(2).getAsNumber() * 250, ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(3).getAsNumber() * 250, 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").setScale(1);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(2);
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("qc", "255;255;255", "linear", 0.0000001, false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectScaleTween3("bouncein", (gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").getScale()) / 2, "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("bounceinhue", "145;145;145", "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDPlayerObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects5);
gdjs.copyArray(runtimeScene.getObjects("BallHitbox"), gdjs.GameCode.GDBallHitboxObjects5);
gdjs.copyArray(runtimeScene.getObjects("Slice"), gdjs.GameCode.GDSliceObjects5);
gdjs.GameCode.GDPlayerObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDPlayerObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDPlayerObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbyGameRunning());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDSliceObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDSliceObjects5[i].getBehavior("MultitouchButton").IsJustPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDSliceObjects5[k] = gdjs.GameCode.GDSliceObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDSliceObjects5.length = k;
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].getBehavior("Animation").setAnimationName("hitball");
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].clearForces();
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].addForce(((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(2).getAsNumber() * 150, ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(3).getAsNumber() * 150, 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").setScale(1);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(0.5);
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("qc", "255;255;255", "linear", 0.0000001, false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectScaleTween3("bouncein", (gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").getScale()) / 2, "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("bounceinhue", "145;145;145", "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDPlayerObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects5);
gdjs.copyArray(runtimeScene.getObjects("BallHitbox"), gdjs.GameCode.GDBallHitboxObjects5);
gdjs.copyArray(runtimeScene.getObjects("Powershot"), gdjs.GameCode.GDPowershotObjects5);
gdjs.GameCode.GDPlayerObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDPlayerObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDPlayerObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbyGameRunning());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPowershotObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPowershotObjects5[i].getBehavior("MultitouchButton").IsJustPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPowershotObjects5[k] = gdjs.GameCode.GDPowershotObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPowershotObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(4)) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].returnVariable(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(5)).setNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(4).getAsNumber() * 3);
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].returnVariable(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(4)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].getBehavior("Animation").setAnimationName("hitball");
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].clearForces();
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].addForce(((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(2).getAsNumber() * ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(5).getAsNumber(), ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(3).getAsNumber() * ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(5).getAsNumber(), 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").setScale(1);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(0.5);
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("qc", "255;255;255", "linear", 0.0000001, false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectScaleTween3("bouncein", (gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").getScale()) / 2, "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("bounceinhue", "145;145;145", "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDPlayerObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.GameCode.GDPlayerObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDPlayerObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDPlayerObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "a"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "d"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].returnVariable(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(2)).setNumber(0);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDPlayerObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.GameCode.GDPlayerObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDPlayerObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDPlayerObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbyGameRunning());
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].returnVariable(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(2)).setNumber(-(1));
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDPlayerObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.GameCode.GDPlayerObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDPlayerObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDPlayerObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbyGameRunning());
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].getBehavior("TopDownMovement").simulateRightKey();
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].returnVariable(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(2)).setNumber(1);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDPlayerObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.GameCode.GDPlayerObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDPlayerObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDPlayerObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbyGameRunning());
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].getBehavior("TopDownMovement").simulateDownKey();
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].returnVariable(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(3)).setNumber(1);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);

for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.GDPlayerObjects3.length;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDPlayerObjects4.length = 0;


gdjs.GameCode.forEachTemporary4 = gdjs.GameCode.GDPlayerObjects3[gdjs.GameCode.forEachIndex4];
gdjs.GameCode.GDPlayerObjects4.push(gdjs.GameCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects4[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects4[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects4[k] = gdjs.GameCode.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbyGameRunning());
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects4[i].getBehavior("TopDownMovement").simulateUpKey();
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects4[i].returnVariable(gdjs.GameCode.GDPlayerObjects4[i].getVariables().getFromIndex(3)).setNumber(-(1));
}
}
}
}

}


};gdjs.GameCode.eventsList18 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects5});
gdjs.GameCode.eventsList19 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects5});
gdjs.GameCode.eventsList20 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects5});
gdjs.GameCode.eventsList21 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects5});
gdjs.GameCode.eventsList22 = function(runtimeScene) {

};gdjs.GameCode.eventsList23 = function(runtimeScene) {

};gdjs.GameCode.eventsList24 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDPlayerObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.GameCode.GDPlayerObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDPlayerObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDPlayerObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbyGameRunning());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Any", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p1").getChild("x").setNumber(gdjs.evtsExt__Gamepads__StickForceX.func(runtimeScene, 1, "Left", null));
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p1").getChild("y").setNumber(gdjs.evtsExt__Gamepads__StickForceY.func(runtimeScene, 1, "Left", null));
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].returnVariable(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(2)).setNumber(gdjs.evtsExt__Gamepads__StickForceX.func(runtimeScene, 1, "Left", null));
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].returnVariable(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(3)).setNumber(gdjs.evtsExt__Gamepads__StickForceY.func(runtimeScene, 1, "Left", null));
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDPlayerObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects5);
gdjs.copyArray(runtimeScene.getObjects("BallHitbox"), gdjs.GameCode.GDBallHitboxObjects5);
gdjs.GameCode.GDPlayerObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDPlayerObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDPlayerObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "X", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbyGameRunning());
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].getBehavior("Animation").setAnimationName("hitball");
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].clearForces();
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].addForce(((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(2).getAsNumber() * 150, ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(3).getAsNumber() * 150, 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").setScale(1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("qc", "255;255;255", "linear", 0.0000001, false, true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(1);
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectScaleTween3("bouncein", (gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").getScale()) / 2, "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("bounceinhue", "145;145;145", "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDPlayerObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects5);
gdjs.copyArray(runtimeScene.getObjects("BallHitbox"), gdjs.GameCode.GDBallHitboxObjects5);
gdjs.GameCode.GDPlayerObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDPlayerObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDPlayerObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbyGameRunning());
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].getBehavior("Animation").setAnimationName("hitball");
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].clearForces();
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].addForce(((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(2).getAsNumber() * 200, ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(3).getAsNumber() * 200, 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").setScale(1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("qc", "255;255;255", "linear", 0.0000001, false, true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(0.5);
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectScaleTween3("bouncein", (gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").getScale()) / 2, "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("bounceinhue", "145;145;145", "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDPlayerObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects5);
gdjs.copyArray(runtimeScene.getObjects("BallHitbox"), gdjs.GameCode.GDBallHitboxObjects5);
gdjs.GameCode.GDPlayerObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDPlayerObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDPlayerObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Y", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbyGameRunning());
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].getBehavior("Animation").setAnimationName("hitball");
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].clearForces();
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].addForce(((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(2).getAsNumber() * 250, ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(3).getAsNumber() * 250, 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").setScale(1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("qc", "255;255;255", "linear", 0.0000001, false, true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(2);
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectScaleTween3("bouncein", (gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").getScale()) / 2, "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("bounceinhue", "145;145;145", "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDPlayerObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects5);
gdjs.copyArray(runtimeScene.getObjects("BallHitbox"), gdjs.GameCode.GDBallHitboxObjects5);
gdjs.GameCode.GDPlayerObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDPlayerObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDPlayerObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbyGameRunning());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(4)) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "B", null);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].returnVariable(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(5)).setNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(4).getAsNumber() * 3);
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].returnVariable(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(4)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].getBehavior("Animation").setAnimationName("hitball");
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].clearForces();
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].addForce(((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(2).getAsNumber() * ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(5).getAsNumber(), ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(3).getAsNumber() * ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(5).getAsNumber(), 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").setScale(1);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(0.5);
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("qc", "255;255;255", "linear", 0.0000001, false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectScaleTween3("bouncein", (gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").getScale()) / 2, "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("bounceinhue", "145;145;145", "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);

for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.GDPlayerObjects3.length;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDPlayerObjects4.length = 0;


gdjs.GameCode.forEachTemporary4 = gdjs.GameCode.GDPlayerObjects3[gdjs.GameCode.forEachIndex4];
gdjs.GameCode.GDPlayerObjects4.push(gdjs.GameCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects4[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects4[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects4[k] = gdjs.GameCode.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Any", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbyGameRunning());
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects4[i].getBehavior("TopDownMovement").simulateStick(gdjs.evtsExt__Gamepads__StickAngle.func(runtimeScene, 1, "Left", null), gdjs.evtsExt__Gamepads__StickForce.func(runtimeScene, 1, "Left", null));
}
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects5});
gdjs.GameCode.eventsList25 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects5});
gdjs.GameCode.eventsList26 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects5});
gdjs.GameCode.eventsList27 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects5});
gdjs.GameCode.eventsList28 = function(runtimeScene) {

};gdjs.GameCode.eventsList29 = function(runtimeScene) {

};gdjs.GameCode.eventsList30 = function(runtimeScene) {

};gdjs.GameCode.eventsList31 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDPlayerObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects5);
gdjs.copyArray(runtimeScene.getObjects("BallHitbox"), gdjs.GameCode.GDBallHitboxObjects5);
gdjs.GameCode.GDPlayerObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDPlayerObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDPlayerObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 2, "Y", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbyGameRunning());
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].getBehavior("Animation").setAnimationName("hitball");
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].clearForces();
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].addForce(((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(2).getAsNumber() * 250, ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(3).getAsNumber() * 250, 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").setScale(1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("qc", "255;255;255", "linear", 0.0000001, false, true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(2);
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectScaleTween3("bouncein", (gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").getScale()) / 2, "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("bounceinhue", "145;145;145", "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDPlayerObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects5);
gdjs.copyArray(runtimeScene.getObjects("BallHitbox"), gdjs.GameCode.GDBallHitboxObjects5);
gdjs.GameCode.GDPlayerObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDPlayerObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDPlayerObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 2, "A", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbyGameRunning());
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].getBehavior("Animation").setAnimationName("hitball");
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].clearForces();
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].addForce(((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(2).getAsNumber() * 200, ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(3).getAsNumber() * 200, 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").setScale(1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("qc", "255;255;255", "linear", 0.0000001, false, true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(0.5);
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectScaleTween3("bouncein", (gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").getScale()) / 2, "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("bounceinhue", "145;145;145", "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDPlayerObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects5);
gdjs.copyArray(runtimeScene.getObjects("BallHitbox"), gdjs.GameCode.GDBallHitboxObjects5);
gdjs.GameCode.GDPlayerObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDPlayerObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDPlayerObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 2, "X", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbyGameRunning());
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].getBehavior("Animation").setAnimationName("hitball");
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].clearForces();
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].addForce(((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(2).getAsNumber() * 150, ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(3).getAsNumber() * 150, 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").setScale(1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("qc", "255;255;255", "linear", 0.0000001, false, true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(1);
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectScaleTween3("bouncein", (gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").getScale()) / 2, "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("bounceinhue", "145;145;145", "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDPlayerObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects5);
gdjs.copyArray(runtimeScene.getObjects("BallHitbox"), gdjs.GameCode.GDBallHitboxObjects5);
gdjs.GameCode.GDPlayerObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDPlayerObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDPlayerObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbyGameRunning());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(4)) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 2, "B", null);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].returnVariable(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(5)).setNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(4).getAsNumber() * 3);
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].returnVariable(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(4)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].getBehavior("Animation").setAnimationName("hitball");
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].clearForces();
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].addForce(((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(2).getAsNumber() * ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(5).getAsNumber(), ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(3).getAsNumber() * ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(5).getAsNumber(), 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").setScale(1);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(0.5);
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("qc", "255;255;255", "linear", 0.0000001, false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectScaleTween3("bouncein", (gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").getScale()) / 2, "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("bounceinhue", "145;145;145", "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDPlayerObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.GameCode.GDPlayerObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDPlayerObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDPlayerObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbyGameRunning());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 2, "Left", "Any", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbyGameRunning());
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].returnVariable(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(2)).setNumber(gdjs.evtsExt__Gamepads__StickForceX.func(runtimeScene, 2, "Left", null));
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].returnVariable(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(3)).setNumber(gdjs.evtsExt__Gamepads__StickForceY.func(runtimeScene, 2, "Left", null));
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);

for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.GDPlayerObjects3.length;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDPlayerObjects4.length = 0;


gdjs.GameCode.forEachTemporary4 = gdjs.GameCode.GDPlayerObjects3[gdjs.GameCode.forEachIndex4];
gdjs.GameCode.GDPlayerObjects4.push(gdjs.GameCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects4[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects4[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects4[k] = gdjs.GameCode.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 2, "Left", "Any", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbyGameRunning());
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects4[i].getBehavior("TopDownMovement").simulateStick(gdjs.evtsExt__Gamepads__StickAngle.func(runtimeScene, 2, "Left", null), gdjs.evtsExt__Gamepads__StickForce.func(runtimeScene, 2, "Left", null));
}
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects5});
gdjs.GameCode.eventsList32 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects5});
gdjs.GameCode.eventsList33 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects5});
gdjs.GameCode.eventsList34 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects5});
gdjs.GameCode.eventsList35 = function(runtimeScene) {

};gdjs.GameCode.eventsList36 = function(runtimeScene) {

};gdjs.GameCode.eventsList37 = function(runtimeScene) {

};gdjs.GameCode.eventsList38 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDPlayerObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects5);
gdjs.copyArray(runtimeScene.getObjects("BallHitbox"), gdjs.GameCode.GDBallHitboxObjects5);
gdjs.GameCode.GDPlayerObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDPlayerObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDPlayerObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 3, "X", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbyGameRunning());
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].getBehavior("Animation").setAnimationName("hitball");
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].clearForces();
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].addForce(((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(2).getAsNumber() * 150, ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(3).getAsNumber() * 150, 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").setScale(1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("qc", "255;255;255", "linear", 0.0000001, false, true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(1);
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectScaleTween3("bouncein", (gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").getScale()) / 2, "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("bounceinhue", "145;145;145", "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDPlayerObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects5);
gdjs.copyArray(runtimeScene.getObjects("BallHitbox"), gdjs.GameCode.GDBallHitboxObjects5);
gdjs.GameCode.GDPlayerObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDPlayerObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDPlayerObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 3, "A", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbyGameRunning());
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].getBehavior("Animation").setAnimationName("hitball");
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].clearForces();
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].addForce(((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(2).getAsNumber() * 200, ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(3).getAsNumber() * 200, 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").setScale(1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("qc", "255;255;255", "linear", 0.0000001, false, true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(0.5);
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectScaleTween3("bouncein", (gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").getScale()) / 2, "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("bounceinhue", "145;145;145", "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDPlayerObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects5);
gdjs.copyArray(runtimeScene.getObjects("BallHitbox"), gdjs.GameCode.GDBallHitboxObjects5);
gdjs.GameCode.GDPlayerObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDPlayerObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDPlayerObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 3, "Y", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbyGameRunning());
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].getBehavior("Animation").setAnimationName("hitball");
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].clearForces();
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].addForce(((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(2).getAsNumber() * 250, ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(3).getAsNumber() * 250, 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").setScale(1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("qc", "255;255;255", "linear", 0.0000001, false, true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(2);
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectScaleTween3("bouncein", (gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").getScale()) / 2, "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("bounceinhue", "145;145;145", "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDPlayerObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects5);
gdjs.copyArray(runtimeScene.getObjects("BallHitbox"), gdjs.GameCode.GDBallHitboxObjects5);
gdjs.GameCode.GDPlayerObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDPlayerObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDPlayerObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbyGameRunning());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(4)) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 3, "B", null);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].returnVariable(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(5)).setNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(4).getAsNumber() * 3);
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].returnVariable(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(4)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].getBehavior("Animation").setAnimationName("hitball");
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].clearForces();
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].addForce(((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(2).getAsNumber() * ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(5).getAsNumber(), ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(3).getAsNumber() * ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(5).getAsNumber(), 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").setScale(1);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(0.5);
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("qc", "255;255;255", "linear", 0.0000001, false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectScaleTween3("bouncein", (gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").getScale()) / 2, "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("bounceinhue", "145;145;145", "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDPlayerObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.GameCode.GDPlayerObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDPlayerObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDPlayerObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbyGameRunning());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 3, "Left", "Any", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].returnVariable(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(2)).setNumber(gdjs.evtsExt__Gamepads__StickForceX.func(runtimeScene, 3, "Left", null));
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].returnVariable(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(3)).setNumber(gdjs.evtsExt__Gamepads__StickForceY.func(runtimeScene, 3, "Left", null));
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);

for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.GDPlayerObjects3.length;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDPlayerObjects4.length = 0;


gdjs.GameCode.forEachTemporary4 = gdjs.GameCode.GDPlayerObjects3[gdjs.GameCode.forEachIndex4];
gdjs.GameCode.GDPlayerObjects4.push(gdjs.GameCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects4[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects4[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects4[k] = gdjs.GameCode.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 3, "Left", "Any", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbyGameRunning());
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects4[i].getBehavior("TopDownMovement").simulateStick(gdjs.evtsExt__Gamepads__StickAngle.func(runtimeScene, 3, "Left", null), gdjs.evtsExt__Gamepads__StickForce.func(runtimeScene, 3, "Left", null));
}
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects5});
gdjs.GameCode.eventsList39 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects5});
gdjs.GameCode.eventsList40 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects5});
gdjs.GameCode.eventsList41 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects5});
gdjs.GameCode.eventsList42 = function(runtimeScene) {

};gdjs.GameCode.eventsList43 = function(runtimeScene) {

};gdjs.GameCode.eventsList44 = function(runtimeScene) {

};gdjs.GameCode.eventsList45 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDPlayerObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects5);
gdjs.copyArray(runtimeScene.getObjects("BallHitbox"), gdjs.GameCode.GDBallHitboxObjects5);
gdjs.GameCode.GDPlayerObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDPlayerObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDPlayerObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 4, "X", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbyGameRunning());
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].getBehavior("Animation").setAnimationName("hitball");
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].clearForces();
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].addForce(((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(2).getAsNumber() * 150, ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(3).getAsNumber() * 150, 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").setScale(1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("qc", "255;255;255", "linear", 0.0000001, false, true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(1);
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectScaleTween3("bouncein", (gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").getScale()) / 2, "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("bounceinhue", "145;145;145", "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDPlayerObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects5);
gdjs.copyArray(runtimeScene.getObjects("BallHitbox"), gdjs.GameCode.GDBallHitboxObjects5);
gdjs.GameCode.GDPlayerObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDPlayerObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDPlayerObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 4, "A", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbyGameRunning());
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].getBehavior("Animation").setAnimationName("hitball");
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].clearForces();
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].addForce(((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(2).getAsNumber() * 200, ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(3).getAsNumber() * 200, 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").setScale(1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("qc", "255;255;255", "linear", 0.0000001, false, true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(0.5);
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectScaleTween3("bouncein", (gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").getScale()) / 2, "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("bounceinhue", "145;145;145", "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDPlayerObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects5);
gdjs.copyArray(runtimeScene.getObjects("BallHitbox"), gdjs.GameCode.GDBallHitboxObjects5);
gdjs.GameCode.GDPlayerObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDPlayerObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDPlayerObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 4, "Y", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbyGameRunning());
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].getBehavior("Animation").setAnimationName("hitball");
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].clearForces();
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].addForce(((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(2).getAsNumber() * 250, ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(3).getAsNumber() * 250, 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").setScale(1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("qc", "255;255;255", "linear", 0.0000001, false, true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(2);
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectScaleTween3("bouncein", (gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").getScale()) / 2, "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("bounceinhue", "145;145;145", "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDPlayerObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects5);
gdjs.copyArray(runtimeScene.getObjects("BallHitbox"), gdjs.GameCode.GDBallHitboxObjects5);
gdjs.GameCode.GDPlayerObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDPlayerObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDPlayerObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbyGameRunning());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(4)) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 4, "B", null);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].returnVariable(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(5)).setNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(4).getAsNumber() * 3);
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].returnVariable(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(4)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].getBehavior("Animation").setAnimationName("hitball");
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].clearForces();
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].addForce(((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(2).getAsNumber() * ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(5).getAsNumber(), ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(3).getAsNumber() * ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(5).getAsNumber(), 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").setScale(1);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(0.5);
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("qc", "255;255;255", "linear", 0.0000001, false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectScaleTween3("bouncein", (gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").getScale()) / 2, "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("bounceinhue", "145;145;145", "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDPlayerObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.GameCode.GDPlayerObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDPlayerObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDPlayerObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbyGameRunning());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 4, "Left", "Any", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].returnVariable(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(2)).setNumber(gdjs.evtsExt__Gamepads__StickForceX.func(runtimeScene, 4, "Left", null));
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].returnVariable(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(3)).setNumber(gdjs.evtsExt__Gamepads__StickForceY.func(runtimeScene, 4, "Left", null));
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);

for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.GDPlayerObjects3.length;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDPlayerObjects4.length = 0;


gdjs.GameCode.forEachTemporary4 = gdjs.GameCode.GDPlayerObjects3[gdjs.GameCode.forEachIndex4];
gdjs.GameCode.GDPlayerObjects4.push(gdjs.GameCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects4[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects4[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects4[k] = gdjs.GameCode.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 4, "Left", "Any", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbyGameRunning());
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects4[i].getBehavior("TopDownMovement").simulateStick(gdjs.evtsExt__Gamepads__StickAngle.func(runtimeScene, 4, "Left", null), gdjs.evtsExt__Gamepads__StickForce.func(runtimeScene, 4, "Left", null));
}
}
}
}

}


};gdjs.GameCode.eventsList46 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects5});
gdjs.GameCode.eventsList47 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects5});
gdjs.GameCode.eventsList48 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects5});
gdjs.GameCode.eventsList49 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects5});
gdjs.GameCode.eventsList50 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects5});
gdjs.GameCode.eventsList51 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects5});
gdjs.GameCode.eventsList52 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects5});
gdjs.GameCode.eventsList53 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects5});
gdjs.GameCode.eventsList54 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects5});
gdjs.GameCode.eventsList55 = function(runtimeScene) {

};gdjs.GameCode.eventsList56 = function(runtimeScene) {

};gdjs.GameCode.eventsList57 = function(runtimeScene) {

};gdjs.GameCode.eventsList58 = function(runtimeScene) {

};gdjs.GameCode.eventsList59 = function(runtimeScene) {

};gdjs.GameCode.eventsList60 = function(runtimeScene) {

};gdjs.GameCode.eventsList61 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDPlayerObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.copyArray(runtimeScene.getObjects("ShadedDarkJoystick"), gdjs.GameCode.GDShadedDarkJoystickObjects5);
gdjs.GameCode.GDPlayerObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDPlayerObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDPlayerObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDShadedDarkJoystickObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDShadedDarkJoystickObjects5[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDShadedDarkJoystickObjects5[k] = gdjs.GameCode.GDShadedDarkJoystickObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDShadedDarkJoystickObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.isLobbyGameRunning();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(0)) == gdjs.multiplayer.getCurrentPlayerNumber() - 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].getBehavior("TopDownMovement").simulateStick((( gdjs.GameCode.GDShadedDarkJoystickObjects5.length === 0 ) ? 0 :gdjs.GameCode.GDShadedDarkJoystickObjects5[0].StickAngle(null)), 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].returnVariable(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(2)).setNumber((( gdjs.GameCode.GDShadedDarkJoystickObjects5.length === 0 ) ? 0 :gdjs.GameCode.GDShadedDarkJoystickObjects5[0].StickForceX(null)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].returnVariable(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(3)).setNumber((( gdjs.GameCode.GDShadedDarkJoystickObjects5.length === 0 ) ? 0 :gdjs.GameCode.GDShadedDarkJoystickObjects5[0].StickForceY(null)));
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDPlayerObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects5);
gdjs.copyArray(runtimeScene.getObjects("BallHitbox"), gdjs.GameCode.GDBallHitboxObjects5);
gdjs.copyArray(runtimeScene.getObjects("HIT"), gdjs.GameCode.GDHITObjects5);
gdjs.GameCode.GDPlayerObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDPlayerObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDPlayerObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDHITObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDHITObjects5[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDHITObjects5[k] = gdjs.GameCode.GDHITObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDHITObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(0)) == gdjs.multiplayer.getCurrentPlayerNumber() - 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18846740);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.isLobbyGameRunning();
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("MultiplayerObject").takeObjectOwnership();
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].getBehavior("Animation").setAnimationName("hitball");
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].clearForces();
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].addForce(((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(2).getAsNumber() * 200, ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(2).getAsNumber() * 200, 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").setScale(1);
}
}
{gdjs.multiplayerVariablesManager.setPlayerVariableOwnership(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(6), gdjs.multiplayer.getCurrentPlayerNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("qc", "255;255;255", "linear", 0.0000001, false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectScaleTween3("bouncein", (gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").getScale()) / 2, "linear", 1, false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("bounceinhue", "145;145;145", "linear", 1, false, true);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDPlayerObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects5);
gdjs.copyArray(runtimeScene.getObjects("BallHitbox"), gdjs.GameCode.GDBallHitboxObjects5);
gdjs.GameCode.GDPlayerObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDPlayerObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDPlayerObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(0)) == gdjs.multiplayer.getCurrentPlayerNumber() - 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.isLobbyGameRunning();
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("MultiplayerObject").takeObjectOwnership();
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].getBehavior("Animation").setAnimationName("hitball");
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].clearForces();
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].addForce(((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(2).getAsNumber() * 200, ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(3).getAsNumber() * 200, 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").setScale(1);
}
}
{gdjs.multiplayerVariablesManager.setPlayerVariableOwnership(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(6), gdjs.multiplayer.getCurrentPlayerNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(1);
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("qc", "255;255;255", "linear", 0.0000001, false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectScaleTween3("bouncein", (gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").getScale()) / 2, "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("bounceinhue", "145;145;145", "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDPlayerObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects5);
gdjs.copyArray(runtimeScene.getObjects("BallHitbox"), gdjs.GameCode.GDBallHitboxObjects5);
gdjs.GameCode.GDPlayerObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDPlayerObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDPlayerObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(0)) == gdjs.multiplayer.getCurrentPlayerNumber() - 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.isLobbyGameRunning();
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("MultiplayerObject").takeObjectOwnership();
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].getBehavior("Animation").setAnimationName("hitball");
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].clearForces();
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].addForce(((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(2).getAsNumber() * 250, ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(3).getAsNumber() * 250, 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").setScale(1);
}
}
{gdjs.multiplayerVariablesManager.setPlayerVariableOwnership(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(6), gdjs.multiplayer.getCurrentPlayerNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(2);
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("qc", "255;255;255", "linear", 0.0000001, false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectScaleTween3("bouncein", (gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").getScale()) / 2, "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("bounceinhue", "145;145;145", "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDPlayerObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects5);
gdjs.copyArray(runtimeScene.getObjects("BallHitbox"), gdjs.GameCode.GDBallHitboxObjects5);
gdjs.GameCode.GDPlayerObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDPlayerObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDPlayerObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(0)) == gdjs.multiplayer.getCurrentPlayerNumber() - 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.isLobbyGameRunning();
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("MultiplayerObject").takeObjectOwnership();
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].getBehavior("Animation").setAnimationName("hitball");
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].clearForces();
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].addForce(((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(2).getAsNumber() * 150, ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(3).getAsNumber() * 150, 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").setScale(1);
}
}
{gdjs.multiplayerVariablesManager.setPlayerVariableOwnership(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(6), gdjs.multiplayer.getCurrentPlayerNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(0.5);
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("qc", "255;255;255", "linear", 0.0000001, false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectScaleTween3("bouncein", (gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").getScale()) / 2, "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("bounceinhue", "145;145;145", "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDPlayerObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects5);
gdjs.copyArray(runtimeScene.getObjects("BallHitbox"), gdjs.GameCode.GDBallHitboxObjects5);
gdjs.GameCode.GDPlayerObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDPlayerObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDPlayerObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(0)) == gdjs.multiplayer.getCurrentPlayerNumber() - 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.isLobbyGameRunning();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(4)) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("MultiplayerObject").takeObjectOwnership();
}
}
{gdjs.multiplayerVariablesManager.setPlayerVariableOwnership(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(6), gdjs.multiplayer.getCurrentPlayerNumber());
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].returnVariable(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(5)).setNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(4).getAsNumber() * 3);
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].returnVariable(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(4)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].getBehavior("Animation").setAnimationName("hitball");
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].clearForces();
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].addForce(((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(2).getAsNumber() * ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(5).getAsNumber(), ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(3).getAsNumber() * ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(5).getAsNumber(), 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").setScale(1);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(0.5);
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("qc", "255;255;255", "linear", 0.0000001, false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectScaleTween3("bouncein", (gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").getScale()) / 2, "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("bounceinhue", "145;145;145", "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDPlayerObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects5);
gdjs.copyArray(runtimeScene.getObjects("BallHitbox"), gdjs.GameCode.GDBallHitboxObjects5);
gdjs.copyArray(runtimeScene.getObjects("Powershot"), gdjs.GameCode.GDPowershotObjects5);
gdjs.GameCode.GDPlayerObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDPlayerObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDPlayerObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(0)) == gdjs.multiplayer.getCurrentPlayerNumber() - 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.isLobbyGameRunning();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPowershotObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPowershotObjects5[i].getBehavior("MultitouchButton").IsJustPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPowershotObjects5[k] = gdjs.GameCode.GDPowershotObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPowershotObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(4)) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("MultiplayerObject").takeObjectOwnership();
}
}
{gdjs.multiplayerVariablesManager.setPlayerVariableOwnership(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(6), gdjs.multiplayer.getCurrentPlayerNumber());
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].returnVariable(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(5)).setNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(4).getAsNumber() * 3);
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].returnVariable(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(4)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].getBehavior("Animation").setAnimationName("hitball");
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].clearForces();
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].addForce(((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(2).getAsNumber() * ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(5).getAsNumber(), ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(3).getAsNumber() * ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(5).getAsNumber(), 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").setScale(1);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(0.5);
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("qc", "255;255;255", "linear", 0.0000001, false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectScaleTween3("bouncein", (gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").getScale()) / 2, "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("bounceinhue", "145;145;145", "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDPlayerObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects5);
gdjs.copyArray(runtimeScene.getObjects("BallHitbox"), gdjs.GameCode.GDBallHitboxObjects5);
gdjs.copyArray(runtimeScene.getObjects("Normal"), gdjs.GameCode.GDNormalObjects5);
gdjs.GameCode.GDPlayerObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDPlayerObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDPlayerObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(0)) == gdjs.multiplayer.getCurrentPlayerNumber() - 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.isLobbyGameRunning();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDNormalObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDNormalObjects5[i].getBehavior("MultitouchButton").IsJustPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDNormalObjects5[k] = gdjs.GameCode.GDNormalObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDNormalObjects5.length = k;
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].getBehavior("Animation").setAnimationName("hitball");
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("MultiplayerObject").takeObjectOwnership();
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].clearForces();
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].addForce(((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(2).getAsNumber() * 200, ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(3).getAsNumber() * 200, 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").setScale(1);
}
}
{gdjs.multiplayerVariablesManager.setPlayerVariableOwnership(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(6), gdjs.multiplayer.getCurrentPlayerNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(1);
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("qc", "255;255;255", "linear", 0.0000001, false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectScaleTween3("bouncein", (gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").getScale()) / 2, "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("bounceinhue", "145;145;145", "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDPlayerObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects5);
gdjs.copyArray(runtimeScene.getObjects("BallHitbox"), gdjs.GameCode.GDBallHitboxObjects5);
gdjs.copyArray(runtimeScene.getObjects("Slice"), gdjs.GameCode.GDSliceObjects5);
gdjs.GameCode.GDPlayerObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDPlayerObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDPlayerObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(0)) == gdjs.multiplayer.getCurrentPlayerNumber() - 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.isLobbyGameRunning();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDSliceObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDSliceObjects5[i].getBehavior("MultitouchButton").IsJustPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDSliceObjects5[k] = gdjs.GameCode.GDSliceObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDSliceObjects5.length = k;
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].getBehavior("Animation").setAnimationName("hitball");
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("MultiplayerObject").takeObjectOwnership();
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].clearForces();
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].addForce(((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(2).getAsNumber() * 200, ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(3).getAsNumber() * 200, 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").setScale(1);
}
}
{gdjs.multiplayerVariablesManager.setPlayerVariableOwnership(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(6), gdjs.multiplayer.getCurrentPlayerNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(0.5);
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("qc", "255;255;255", "linear", 0.0000001, false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectScaleTween3("bouncein", (gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").getScale()) / 2, "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("bounceinhue", "145;145;145", "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDPlayerObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects5);
gdjs.copyArray(runtimeScene.getObjects("BallHitbox"), gdjs.GameCode.GDBallHitboxObjects5);
gdjs.copyArray(runtimeScene.getObjects("Lob"), gdjs.GameCode.GDLobObjects5);
gdjs.GameCode.GDPlayerObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDPlayerObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDPlayerObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(0)) == gdjs.multiplayer.getCurrentPlayerNumber() - 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.isLobbyGameRunning();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDLobObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDLobObjects5[i].getBehavior("MultitouchButton").IsJustPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDLobObjects5[k] = gdjs.GameCode.GDLobObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDLobObjects5.length = k;
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].getBehavior("Animation").setAnimationName("hitball");
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("MultiplayerObject").takeObjectOwnership();
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].clearForces();
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].addForce(((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(2).getAsNumber() * 200, ((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(3).getAsNumber() * 200, 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").setScale(1);
}
}
{gdjs.multiplayerVariablesManager.setPlayerVariableOwnership(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(6), gdjs.multiplayer.getCurrentPlayerNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(0.5);
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("qc", "255;255;255", "linear", 0.0000001, false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectScaleTween3("bouncein", (gdjs.GameCode.GDBallObjects5[i].getBehavior("Scale").getScale()) / 2, "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects5[i].getBehavior("Tween").addObjectColorTween2("bounceinhue", "145;145;145", "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDPlayerObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.GameCode.GDPlayerObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDPlayerObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDPlayerObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(0)) == gdjs.multiplayer.getCurrentPlayerNumber() - 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.isLobbyGameRunning();
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].getBehavior("TopDownMovement").simulateUpKey();
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].returnVariable(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(3)).setNumber(-(1));
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDPlayerObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.GameCode.GDPlayerObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDPlayerObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDPlayerObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(0)) == gdjs.multiplayer.getCurrentPlayerNumber() - 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.isLobbyGameRunning();
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].getBehavior("TopDownMovement").simulateDownKey();
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].returnVariable(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(3)).setNumber(1);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDPlayerObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.GameCode.GDPlayerObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDPlayerObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDPlayerObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(0)) == gdjs.multiplayer.getCurrentPlayerNumber() - 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.isLobbyGameRunning();
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].getBehavior("TopDownMovement").simulateRightKey();
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].returnVariable(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(2)).setNumber(1);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDPlayerObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.GameCode.GDPlayerObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDPlayerObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDPlayerObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(0)) == gdjs.multiplayer.getCurrentPlayerNumber() - 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.isLobbyGameRunning();
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].returnVariable(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(2)).setNumber(-(1));
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);

for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.GDPlayerObjects3.length;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDPlayerObjects4.length = 0;


gdjs.GameCode.forEachTemporary4 = gdjs.GameCode.GDPlayerObjects3[gdjs.GameCode.forEachIndex4];
gdjs.GameCode.GDPlayerObjects4.push(gdjs.GameCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "a"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.isLobbyGameRunning();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "d"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects4[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects4[i].getVariables().getFromIndex(0)) == gdjs.multiplayer.getCurrentPlayerNumber() - 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects4[k] = gdjs.GameCode.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects4.length = k;
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects4[i].returnVariable(gdjs.GameCode.GDPlayerObjects4[i].getVariables().getFromIndex(2)).setNumber(0);
}
}
}
}

}


};gdjs.GameCode.eventsList62 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects4Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects4Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects4});
gdjs.GameCode.eventsList63 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects4Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects4Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects4});
gdjs.GameCode.eventsList64 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects4Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects4Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects4});
gdjs.GameCode.eventsList65 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects3Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects3});
gdjs.GameCode.eventsList66 = function(runtimeScene) {

};gdjs.GameCode.eventsList67 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);

for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.GDPlayerObjects3.length;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDPlayerObjects4.length = 0;


gdjs.GameCode.forEachTemporary4 = gdjs.GameCode.GDPlayerObjects3[gdjs.GameCode.forEachIndex4];
gdjs.GameCode.GDPlayerObjects4.push(gdjs.GameCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects4[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects4[i].getVariables().getFromIndex(0)) == gdjs.multiplayer.getCurrentPlayerNumber() - 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects4[k] = gdjs.GameCode.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Any", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.isLobbyGameRunning();
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects4[i].getBehavior("TopDownMovement").simulateStick(gdjs.evtsExt__Gamepads__StickAngle.func(runtimeScene, 1, "Left", null), gdjs.evtsExt__Gamepads__StickForce.func(runtimeScene, 1, "Left", null));
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects4[i].returnVariable(gdjs.GameCode.GDPlayerObjects4[i].getVariables().getFromIndex(2)).setNumber(gdjs.evtsExt__Gamepads__StickForceX.func(runtimeScene, 1, "Left", null));
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects4[i].returnVariable(gdjs.GameCode.GDPlayerObjects4[i].getVariables().getFromIndex(3)).setNumber(gdjs.evtsExt__Gamepads__StickForceY.func(runtimeScene, 1, "Left", null));
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);

for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.GDPlayerObjects3.length;++gdjs.GameCode.forEachIndex4) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects4);
gdjs.copyArray(runtimeScene.getObjects("BallHitbox"), gdjs.GameCode.GDBallHitboxObjects4);
gdjs.GameCode.GDPlayerObjects4.length = 0;


gdjs.GameCode.forEachTemporary4 = gdjs.GameCode.GDPlayerObjects3[gdjs.GameCode.forEachIndex4];
gdjs.GameCode.GDPlayerObjects4.push(gdjs.GameCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Y", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects4[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects4[i].getVariables().getFromIndex(0)) == gdjs.multiplayer.getCurrentPlayerNumber() - 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects4[k] = gdjs.GameCode.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects4Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects4Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.isLobbyGameRunning();
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects4[i].getBehavior("MultiplayerObject").takeObjectOwnership();
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects4[i].getBehavior("Animation").setAnimationName("hitball");
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects4[i].clearForces();
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects4[i].addForce(((gdjs.GameCode.GDPlayerObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects4[0].getVariables()).getFromIndex(2).getAsNumber() * 250, ((gdjs.GameCode.GDPlayerObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects4[0].getVariables()).getFromIndex(3).getAsNumber() * 250, 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects4[i].getBehavior("Scale").setScale(1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects4[i].getBehavior("Tween").addObjectColorTween2("qc", "255;255;255", "linear", 0.0000001, false, true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(2);
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects4[i].getBehavior("Tween").addObjectScaleTween3("bouncein", (gdjs.GameCode.GDBallObjects4[i].getBehavior("Scale").getScale()) / 2, "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects4[i].getBehavior("Tween").addObjectColorTween2("bounceinhue", "145;145;145", "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{gdjs.multiplayerVariablesManager.setPlayerVariableOwnership(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(6), gdjs.multiplayer.getCurrentPlayerNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);

for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.GDPlayerObjects3.length;++gdjs.GameCode.forEachIndex4) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects4);
gdjs.copyArray(runtimeScene.getObjects("BallHitbox"), gdjs.GameCode.GDBallHitboxObjects4);
gdjs.GameCode.GDPlayerObjects4.length = 0;


gdjs.GameCode.forEachTemporary4 = gdjs.GameCode.GDPlayerObjects3[gdjs.GameCode.forEachIndex4];
gdjs.GameCode.GDPlayerObjects4.push(gdjs.GameCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects4[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects4[i].getVariables().getFromIndex(0)) == gdjs.multiplayer.getCurrentPlayerNumber() - 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects4[k] = gdjs.GameCode.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects4Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects4Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.isLobbyGameRunning();
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects4[i].getBehavior("MultiplayerObject").takeObjectOwnership();
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects4[i].getBehavior("Animation").setAnimationName("hitball");
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects4[i].clearForces();
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects4[i].addForce(((gdjs.GameCode.GDPlayerObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects4[0].getVariables()).getFromIndex(2).getAsNumber() * 200, ((gdjs.GameCode.GDPlayerObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects4[0].getVariables()).getFromIndex(3).getAsNumber() * 200, 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects4[i].getBehavior("Scale").setScale(1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects4[i].getBehavior("Tween").addObjectColorTween2("qc", "255;255;255", "linear", 0.0000001, false, true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(0.5);
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects4[i].getBehavior("Tween").addObjectScaleTween3("bouncein", (gdjs.GameCode.GDBallObjects4[i].getBehavior("Scale").getScale()) / 2, "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects4[i].getBehavior("Tween").addObjectColorTween2("bounceinhue", "145;145;145", "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{gdjs.multiplayerVariablesManager.setPlayerVariableOwnership(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(6), gdjs.multiplayer.getCurrentPlayerNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);

for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.GDPlayerObjects3.length;++gdjs.GameCode.forEachIndex4) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects4);
gdjs.copyArray(runtimeScene.getObjects("BallHitbox"), gdjs.GameCode.GDBallHitboxObjects4);
gdjs.GameCode.GDPlayerObjects4.length = 0;


gdjs.GameCode.forEachTemporary4 = gdjs.GameCode.GDPlayerObjects3[gdjs.GameCode.forEachIndex4];
gdjs.GameCode.GDPlayerObjects4.push(gdjs.GameCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "X", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects4[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects4[i].getVariables().getFromIndex(0)) == gdjs.multiplayer.getCurrentPlayerNumber() - 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects4[k] = gdjs.GameCode.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects4Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects4Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.isLobbyGameRunning();
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects4[i].getBehavior("MultiplayerObject").takeObjectOwnership();
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects4[i].getBehavior("Animation").setAnimationName("hitball");
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects4[i].clearForces();
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects4[i].addForce(((gdjs.GameCode.GDPlayerObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects4[0].getVariables()).getFromIndex(2).getAsNumber() * 150, ((gdjs.GameCode.GDPlayerObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects4[0].getVariables()).getFromIndex(3).getAsNumber() * 150, 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects4[i].getBehavior("Scale").setScale(1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects4[i].getBehavior("Tween").addObjectColorTween2("qc", "255;255;255", "linear", 0.0000001, false, true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(1);
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects4[i].getBehavior("Tween").addObjectScaleTween3("bouncein", (gdjs.GameCode.GDBallObjects4[i].getBehavior("Scale").getScale()) / 2, "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects4[i].getBehavior("Tween").addObjectColorTween2("bounceinhue", "145;145;145", "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{gdjs.multiplayerVariablesManager.setPlayerVariableOwnership(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(6), gdjs.multiplayer.getCurrentPlayerNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

for (gdjs.GameCode.forEachIndex3 = 0;gdjs.GameCode.forEachIndex3 < gdjs.GameCode.GDPlayerObjects2.length;++gdjs.GameCode.forEachIndex3) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects3);
gdjs.copyArray(runtimeScene.getObjects("BallHitbox"), gdjs.GameCode.GDBallHitboxObjects3);
gdjs.GameCode.GDPlayerObjects3.length = 0;


gdjs.GameCode.forEachTemporary3 = gdjs.GameCode.GDPlayerObjects2[gdjs.GameCode.forEachIndex3];
gdjs.GameCode.GDPlayerObjects3.push(gdjs.GameCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects3[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects3[i].getVariables().getFromIndex(0)) == gdjs.multiplayer.getCurrentPlayerNumber() - 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects3[k] = gdjs.GameCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects3Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.isLobbyGameRunning();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects3[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects3[i].getVariables().getFromIndex(4)) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects3[k] = gdjs.GameCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "B", null);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDBallObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects3[i].getBehavior("MultiplayerObject").takeObjectOwnership();
}
}
{gdjs.multiplayerVariablesManager.setPlayerVariableOwnership(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(6), gdjs.multiplayer.getCurrentPlayerNumber());
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].returnVariable(gdjs.GameCode.GDPlayerObjects3[i].getVariables().getFromIndex(5)).setNumber(gdjs.GameCode.GDPlayerObjects3[i].getVariables().getFromIndex(4).getAsNumber() * 3);
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].returnVariable(gdjs.GameCode.GDPlayerObjects3[i].getVariables().getFromIndex(4)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].getBehavior("Animation").setAnimationName("hitball");
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects3[i].clearForces();
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects3[i].addForce(((gdjs.GameCode.GDPlayerObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects3[0].getVariables()).getFromIndex(2).getAsNumber() * ((gdjs.GameCode.GDPlayerObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects3[0].getVariables()).getFromIndex(5).getAsNumber(), ((gdjs.GameCode.GDPlayerObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects3[0].getVariables()).getFromIndex(3).getAsNumber() * ((gdjs.GameCode.GDPlayerObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects3[0].getVariables()).getFromIndex(5).getAsNumber(), 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects3[i].getBehavior("Scale").setScale(1);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(0.5);
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects3[i].getBehavior("Tween").addObjectColorTween2("qc", "255;255;255", "linear", 0.0000001, false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects3[i].getBehavior("Tween").addObjectScaleTween3("bouncein", (gdjs.GameCode.GDBallObjects3[i].getBehavior("Scale").getScale()) / 2, "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects3[i].getBehavior("Tween").addObjectColorTween2("bounceinhue", "145;145;145", "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
}
}

}


};gdjs.GameCode.eventsList68 = function(runtimeScene) {

{


gdjs.GameCode.eventsList17(runtimeScene);
}


{


gdjs.GameCode.eventsList24(runtimeScene);
}


{


gdjs.GameCode.eventsList31(runtimeScene);
}


{


gdjs.GameCode.eventsList38(runtimeScene);
}


{


gdjs.GameCode.eventsList45(runtimeScene);
}


{


gdjs.GameCode.eventsList61(runtimeScene);
}


{


gdjs.GameCode.eventsList67(runtimeScene);
}


};gdjs.GameCode.eventsList69 = function(runtimeScene) {

};gdjs.GameCode.eventsList70 = function(runtimeScene) {

};gdjs.GameCode.eventsList71 = function(runtimeScene) {

};gdjs.GameCode.eventsList72 = function(runtimeScene) {

};gdjs.GameCode.eventsList73 = function(runtimeScene) {

};gdjs.GameCode.eventsList74 = function(runtimeScene) {

};gdjs.GameCode.eventsList75 = function(runtimeScene) {

};gdjs.GameCode.eventsList76 = function(runtimeScene) {

};gdjs.GameCode.eventsList77 = function(runtimeScene) {

};gdjs.GameCode.eventsList78 = function(runtimeScene) {

};gdjs.GameCode.eventsList79 = function(runtimeScene) {

};gdjs.GameCode.eventsList80 = function(runtimeScene) {

};gdjs.GameCode.eventsList81 = function(runtimeScene) {

};gdjs.GameCode.eventsList82 = function(runtimeScene) {

};gdjs.GameCode.eventsList83 = function(runtimeScene) {

};gdjs.GameCode.eventsList84 = function(runtimeScene) {

};gdjs.GameCode.eventsList85 = function(runtimeScene) {

};gdjs.GameCode.eventsList86 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("HPBar"), gdjs.GameCode.GDHPBarObjects3);

for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.GDHPBarObjects3.length;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDHPBarObjects4.length = 0;


gdjs.GameCode.forEachTemporary4 = gdjs.GameCode.GDHPBarObjects3[gdjs.GameCode.forEachIndex4];
gdjs.GameCode.GDHPBarObjects4.push(gdjs.GameCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDHPBarObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDHPBarObjects4[i].getVariableNumber(gdjs.GameCode.GDHPBarObjects4[i].getVariables().getFromIndex(0)) == runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDHPBarObjects4[k] = gdjs.GameCode.GDHPBarObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDHPBarObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() != -(1));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18910612);
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDHPBarObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDHPBarObjects4[i].SetValue(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber(), null);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(-(1));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);

for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.GDPlayerObjects3.length;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDPlayerObjects4.length = 0;


gdjs.GameCode.forEachTemporary4 = gdjs.GameCode.GDPlayerObjects3[gdjs.GameCode.forEachIndex4];
gdjs.GameCode.GDPlayerObjects4.push(gdjs.GameCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects4[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects4[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects4[k] = gdjs.GameCode.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects4.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("p1").getChild("x").setNumber((( gdjs.GameCode.GDPlayerObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects4[0].getPointX("")));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("p1").getChild("y").setNumber((( gdjs.GameCode.GDPlayerObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects4[0].getPointY("")));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("HPBar"), gdjs.GameCode.GDHPBarObjects3);

for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.GDHPBarObjects3.length;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDHPBarObjects4.length = 0;


gdjs.GameCode.forEachTemporary4 = gdjs.GameCode.GDHPBarObjects3[gdjs.GameCode.forEachIndex4];
gdjs.GameCode.GDHPBarObjects4.push(gdjs.GameCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDHPBarObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDHPBarObjects4[i].getVariableNumber(gdjs.GameCode.GDHPBarObjects4[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDHPBarObjects4[k] = gdjs.GameCode.GDHPBarObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDHPBarObjects4.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDHPBarObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDHPBarObjects4[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("p1").getChild("x").getAsNumber() - 30.5,runtimeScene.getScene().getVariables().getFromIndex(1).getChild("p1").getChild("y").getAsNumber() - 61);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);

for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.GDPlayerObjects3.length;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDPlayerObjects4.length = 0;


gdjs.GameCode.forEachTemporary4 = gdjs.GameCode.GDPlayerObjects3[gdjs.GameCode.forEachIndex4];
gdjs.GameCode.GDPlayerObjects4.push(gdjs.GameCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects4[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects4[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects4[k] = gdjs.GameCode.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects4.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(10).setNumber(((gdjs.GameCode.GDPlayerObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects4[0].getVariables()).getFromIndex(4).getAsNumber());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PShot"), gdjs.GameCode.GDPShotObjects3);

for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.GDPShotObjects3.length;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDPShotObjects4.length = 0;


gdjs.GameCode.forEachTemporary4 = gdjs.GameCode.GDPShotObjects3[gdjs.GameCode.forEachIndex4];
gdjs.GameCode.GDPShotObjects4.push(gdjs.GameCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPShotObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDPShotObjects4[i].getVariableNumber(gdjs.GameCode.GDPShotObjects4[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPShotObjects4[k] = gdjs.GameCode.GDPShotObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDPShotObjects4.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPShotObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPShotObjects4[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("p1").getChild("x").getAsNumber() - 30.5,runtimeScene.getScene().getVariables().getFromIndex(1).getChild("p1").getChild("y").getAsNumber() - 78);
}
}
{for(var i = 0, len = gdjs.GameCode.GDPShotObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPShotObjects4[i].SetValue(runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber(), null);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);

for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.GDPlayerObjects3.length;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDPlayerObjects4.length = 0;


gdjs.GameCode.forEachTemporary4 = gdjs.GameCode.GDPlayerObjects3[gdjs.GameCode.forEachIndex4];
gdjs.GameCode.GDPlayerObjects4.push(gdjs.GameCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects4[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects4[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects4[k] = gdjs.GameCode.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects4.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("p2").getChild("x").setNumber((( gdjs.GameCode.GDPlayerObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects4[0].getPointX("")));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("p2").getChild("y").setNumber((( gdjs.GameCode.GDPlayerObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects4[0].getPointY("")));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("HPBar"), gdjs.GameCode.GDHPBarObjects3);

for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.GDHPBarObjects3.length;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDHPBarObjects4.length = 0;


gdjs.GameCode.forEachTemporary4 = gdjs.GameCode.GDHPBarObjects3[gdjs.GameCode.forEachIndex4];
gdjs.GameCode.GDHPBarObjects4.push(gdjs.GameCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDHPBarObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDHPBarObjects4[i].getVariableNumber(gdjs.GameCode.GDHPBarObjects4[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDHPBarObjects4[k] = gdjs.GameCode.GDHPBarObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDHPBarObjects4.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDHPBarObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDHPBarObjects4[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("p2").getChild("x").getAsNumber() - 30.5,runtimeScene.getScene().getVariables().getFromIndex(1).getChild("p2").getChild("y").getAsNumber() - 61);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);

for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.GDPlayerObjects3.length;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDPlayerObjects4.length = 0;


gdjs.GameCode.forEachTemporary4 = gdjs.GameCode.GDPlayerObjects3[gdjs.GameCode.forEachIndex4];
gdjs.GameCode.GDPlayerObjects4.push(gdjs.GameCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects4[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects4[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects4[k] = gdjs.GameCode.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects4.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(10).setNumber(((gdjs.GameCode.GDPlayerObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects4[0].getVariables()).getFromIndex(4).getAsNumber());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PShot"), gdjs.GameCode.GDPShotObjects3);

for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.GDPShotObjects3.length;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDPShotObjects4.length = 0;


gdjs.GameCode.forEachTemporary4 = gdjs.GameCode.GDPShotObjects3[gdjs.GameCode.forEachIndex4];
gdjs.GameCode.GDPShotObjects4.push(gdjs.GameCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPShotObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDPShotObjects4[i].getVariableNumber(gdjs.GameCode.GDPShotObjects4[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPShotObjects4[k] = gdjs.GameCode.GDPShotObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDPShotObjects4.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPShotObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPShotObjects4[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("p2").getChild("x").getAsNumber() - 30.5,runtimeScene.getScene().getVariables().getFromIndex(1).getChild("p2").getChild("y").getAsNumber() - 78);
}
}
{for(var i = 0, len = gdjs.GameCode.GDPShotObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPShotObjects4[i].SetValue(runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber(), null);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);

for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.GDPlayerObjects3.length;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDPlayerObjects4.length = 0;


gdjs.GameCode.forEachTemporary4 = gdjs.GameCode.GDPlayerObjects3[gdjs.GameCode.forEachIndex4];
gdjs.GameCode.GDPlayerObjects4.push(gdjs.GameCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects4[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects4[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects4[k] = gdjs.GameCode.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects4.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("p3").getChild("x").setNumber((( gdjs.GameCode.GDPlayerObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects4[0].getPointX("")));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("p3").getChild("y").setNumber((( gdjs.GameCode.GDPlayerObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects4[0].getPointY("")));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("HPBar"), gdjs.GameCode.GDHPBarObjects3);

for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.GDHPBarObjects3.length;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDHPBarObjects4.length = 0;


gdjs.GameCode.forEachTemporary4 = gdjs.GameCode.GDHPBarObjects3[gdjs.GameCode.forEachIndex4];
gdjs.GameCode.GDHPBarObjects4.push(gdjs.GameCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDHPBarObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDHPBarObjects4[i].getVariableNumber(gdjs.GameCode.GDHPBarObjects4[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDHPBarObjects4[k] = gdjs.GameCode.GDHPBarObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDHPBarObjects4.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDHPBarObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDHPBarObjects4[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("p3").getChild("x").getAsNumber() - 30.5,runtimeScene.getScene().getVariables().getFromIndex(1).getChild("p3").getChild("y").getAsNumber() - 61);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);

for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.GDPlayerObjects3.length;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDPlayerObjects4.length = 0;


gdjs.GameCode.forEachTemporary4 = gdjs.GameCode.GDPlayerObjects3[gdjs.GameCode.forEachIndex4];
gdjs.GameCode.GDPlayerObjects4.push(gdjs.GameCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects4[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects4[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects4[k] = gdjs.GameCode.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects4.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(10).setNumber(((gdjs.GameCode.GDPlayerObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects4[0].getVariables()).getFromIndex(4).getAsNumber());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PShot"), gdjs.GameCode.GDPShotObjects3);

for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.GDPShotObjects3.length;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDPShotObjects4.length = 0;


gdjs.GameCode.forEachTemporary4 = gdjs.GameCode.GDPShotObjects3[gdjs.GameCode.forEachIndex4];
gdjs.GameCode.GDPShotObjects4.push(gdjs.GameCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPShotObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDPShotObjects4[i].getVariableNumber(gdjs.GameCode.GDPShotObjects4[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPShotObjects4[k] = gdjs.GameCode.GDPShotObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDPShotObjects4.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPShotObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPShotObjects4[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("p3").getChild("x").getAsNumber() - 30.5,runtimeScene.getScene().getVariables().getFromIndex(1).getChild("p3").getChild("y").getAsNumber() - 78);
}
}
{for(var i = 0, len = gdjs.GameCode.GDPShotObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPShotObjects4[i].SetValue(runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber(), null);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);

for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.GDPlayerObjects3.length;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDPlayerObjects4.length = 0;


gdjs.GameCode.forEachTemporary4 = gdjs.GameCode.GDPlayerObjects3[gdjs.GameCode.forEachIndex4];
gdjs.GameCode.GDPlayerObjects4.push(gdjs.GameCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects4[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects4[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects4[k] = gdjs.GameCode.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects4.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("p4").getChild("x").setNumber((( gdjs.GameCode.GDPlayerObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects4[0].getPointX("")));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("p4").getChild("y").setNumber((( gdjs.GameCode.GDPlayerObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects4[0].getPointY("")));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("HPBar"), gdjs.GameCode.GDHPBarObjects3);

for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.GDHPBarObjects3.length;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDHPBarObjects4.length = 0;


gdjs.GameCode.forEachTemporary4 = gdjs.GameCode.GDHPBarObjects3[gdjs.GameCode.forEachIndex4];
gdjs.GameCode.GDHPBarObjects4.push(gdjs.GameCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDHPBarObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDHPBarObjects4[i].getVariableNumber(gdjs.GameCode.GDHPBarObjects4[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDHPBarObjects4[k] = gdjs.GameCode.GDHPBarObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDHPBarObjects4.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDHPBarObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDHPBarObjects4[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("p4").getChild("x").getAsNumber() - 30.5,runtimeScene.getScene().getVariables().getFromIndex(1).getChild("p4").getChild("y").getAsNumber() - 61);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);

for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.GDPlayerObjects3.length;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDPlayerObjects4.length = 0;


gdjs.GameCode.forEachTemporary4 = gdjs.GameCode.GDPlayerObjects3[gdjs.GameCode.forEachIndex4];
gdjs.GameCode.GDPlayerObjects4.push(gdjs.GameCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects4[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects4[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects4[k] = gdjs.GameCode.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects4.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(10).setNumber(((gdjs.GameCode.GDPlayerObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects4[0].getVariables()).getFromIndex(4).getAsNumber());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PShot"), gdjs.GameCode.GDPShotObjects2);

for (gdjs.GameCode.forEachIndex3 = 0;gdjs.GameCode.forEachIndex3 < gdjs.GameCode.GDPShotObjects2.length;++gdjs.GameCode.forEachIndex3) {
gdjs.GameCode.GDPShotObjects3.length = 0;


gdjs.GameCode.forEachTemporary3 = gdjs.GameCode.GDPShotObjects2[gdjs.GameCode.forEachIndex3];
gdjs.GameCode.GDPShotObjects3.push(gdjs.GameCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPShotObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDPShotObjects3[i].getVariableNumber(gdjs.GameCode.GDPShotObjects3[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPShotObjects3[k] = gdjs.GameCode.GDPShotObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDPShotObjects3.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPShotObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPShotObjects3[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("p4").getChild("x").getAsNumber() - 30.5,runtimeScene.getScene().getVariables().getFromIndex(1).getChild("p4").getChild("y").getAsNumber() - 78);
}
}
{for(var i = 0, len = gdjs.GameCode.GDPShotObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPShotObjects3[i].SetValue(runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber(), null);
}
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects4Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallObjects4Objects = Hashtable.newFrom({"Ball": gdjs.GameCode.GDBallObjects4});
gdjs.GameCode.eventsList87 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects4Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallObjects4Objects = Hashtable.newFrom({"Ball": gdjs.GameCode.GDBallObjects4});
gdjs.GameCode.eventsList88 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDPlayerObjects4, gdjs.GameCode.GDPlayerObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects5[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(1)) < 20 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects5[k] = gdjs.GameCode.GDPlayerObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10589804);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "lowhp", false, 100, 1);
}
}

}


};gdjs.GameCode.eventsList89 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallObjects3Objects = Hashtable.newFrom({"Ball": gdjs.GameCode.GDBallObjects3});
gdjs.GameCode.eventsList90 = function(runtimeScene) {

};gdjs.GameCode.eventsList91 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);

for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.GDPlayerObjects3.length;++gdjs.GameCode.forEachIndex4) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects4);
gdjs.GameCode.GDPlayerObjects4.length = 0;


gdjs.GameCode.forEachTemporary4 = gdjs.GameCode.GDPlayerObjects3[gdjs.GameCode.forEachIndex4];
gdjs.GameCode.GDPlayerObjects4.push(gdjs.GameCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects4Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallObjects4Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects4[i].getVariableBoolean(gdjs.GameCode.GDPlayerObjects4[i].getVariables().getFromIndex(7), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects4[k] = gdjs.GameCode.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects4.length = k;
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects4[i].returnVariable(gdjs.GameCode.GDPlayerObjects4[i].getVariables().getFromIndex(6)).setBoolean(true);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);

for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.GDPlayerObjects3.length;++gdjs.GameCode.forEachIndex4) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects4);
gdjs.GameCode.GDPlayerObjects4.length = 0;


gdjs.GameCode.forEachTemporary4 = gdjs.GameCode.GDPlayerObjects3[gdjs.GameCode.forEachIndex4];
gdjs.GameCode.GDPlayerObjects4.push(gdjs.GameCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects4Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallObjects4Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects4[i].getVariableBoolean(gdjs.GameCode.GDPlayerObjects4[i].getVariables().getFromIndex(7), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects4[k] = gdjs.GameCode.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects4[i].getVariableBoolean(gdjs.GameCode.GDPlayerObjects4[i].getVariables().getFromIndex(6), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects4[k] = gdjs.GameCode.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(11).getAsNumber() != ((gdjs.GameCode.GDPlayerObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects4[0].getVariables()).getFromIndex(0).getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18927676);
}
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects4[i].returnVariable(gdjs.GameCode.GDPlayerObjects4[i].getVariables().getFromIndex(6)).setBoolean(false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects4[i].returnVariable(gdjs.GameCode.GDPlayerObjects4[i].getVariables().getFromIndex(1)).sub(gdjs.randomInRange(10, 20));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(((gdjs.GameCode.GDPlayerObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects4[0].getVariables()).getFromIndex(1).getAsNumber());
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects4[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 5, 5, 5, 0.08, false, null);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "dmg", false, 100, 1);
}

{ //Subevents: 
gdjs.GameCode.eventsList88(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);

for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.GDPlayerObjects3.length;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDPlayerObjects4.length = 0;


gdjs.GameCode.forEachTemporary4 = gdjs.GameCode.GDPlayerObjects3[gdjs.GameCode.forEachIndex4];
gdjs.GameCode.GDPlayerObjects4.push(gdjs.GameCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "p" + gdjs.evtTools.common.toString(((gdjs.GameCode.GDPlayerObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects4[0].getVariables()).getFromIndex(0).getAsNumber()) + "wait") >= 0.5;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects4[i].returnVariable(gdjs.GameCode.GDPlayerObjects4[i].getVariables().getFromIndex(7)).setBoolean(false);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

for (gdjs.GameCode.forEachIndex3 = 0;gdjs.GameCode.forEachIndex3 < gdjs.GameCode.GDPlayerObjects2.length;++gdjs.GameCode.forEachIndex3) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects3);
gdjs.GameCode.GDLobObjects3.length = 0;

gdjs.GameCode.GDNormalObjects3.length = 0;

gdjs.GameCode.GDPowershotObjects3.length = 0;

gdjs.GameCode.GDSliceObjects3.length = 0;

gdjs.GameCode.GDPlayerObjects3.length = 0;


gdjs.GameCode.forEachTemporary3 = gdjs.GameCode.GDPlayerObjects2[gdjs.GameCode.forEachIndex3];
gdjs.GameCode.GDPlayerObjects3.push(gdjs.GameCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects3Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.GameCode.GDLobObjects3_1final.length = 0;
gdjs.GameCode.GDNormalObjects3_1final.length = 0;
gdjs.GameCode.GDPowershotObjects3_1final.length = 0;
gdjs.GameCode.GDSliceObjects3_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Right");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Down");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "B", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "X", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Y", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Normal"), gdjs.GameCode.GDNormalObjects4);
for (var i = 0, k = 0, l = gdjs.GameCode.GDNormalObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDNormalObjects4[i].getBehavior("MultitouchButton").IsJustPressed(null) ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDNormalObjects4[k] = gdjs.GameCode.GDNormalObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDNormalObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDNormalObjects4.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDNormalObjects3_1final.indexOf(gdjs.GameCode.GDNormalObjects4[j]) === -1 )
            gdjs.GameCode.GDNormalObjects3_1final.push(gdjs.GameCode.GDNormalObjects4[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Slice"), gdjs.GameCode.GDSliceObjects4);
for (var i = 0, k = 0, l = gdjs.GameCode.GDSliceObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDSliceObjects4[i].getBehavior("MultitouchButton").IsJustPressed(null) ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDSliceObjects4[k] = gdjs.GameCode.GDSliceObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDSliceObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDSliceObjects4.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDSliceObjects3_1final.indexOf(gdjs.GameCode.GDSliceObjects4[j]) === -1 )
            gdjs.GameCode.GDSliceObjects3_1final.push(gdjs.GameCode.GDSliceObjects4[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Lob"), gdjs.GameCode.GDLobObjects4);
for (var i = 0, k = 0, l = gdjs.GameCode.GDLobObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDLobObjects4[i].getBehavior("MultitouchButton").IsJustPressed(null) ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDLobObjects4[k] = gdjs.GameCode.GDLobObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDLobObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDLobObjects4.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDLobObjects3_1final.indexOf(gdjs.GameCode.GDLobObjects4[j]) === -1 )
            gdjs.GameCode.GDLobObjects3_1final.push(gdjs.GameCode.GDLobObjects4[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Powershot"), gdjs.GameCode.GDPowershotObjects4);
for (var i = 0, k = 0, l = gdjs.GameCode.GDPowershotObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDPowershotObjects4[i].getBehavior("MultitouchButton").IsJustPressed(null) ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDPowershotObjects4[k] = gdjs.GameCode.GDPowershotObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDPowershotObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDPowershotObjects4.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDPowershotObjects3_1final.indexOf(gdjs.GameCode.GDPowershotObjects4[j]) === -1 )
            gdjs.GameCode.GDPowershotObjects3_1final.push(gdjs.GameCode.GDPowershotObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDLobObjects3_1final, gdjs.GameCode.GDLobObjects3);
gdjs.copyArray(gdjs.GameCode.GDNormalObjects3_1final, gdjs.GameCode.GDNormalObjects3);
gdjs.copyArray(gdjs.GameCode.GDPowershotObjects3_1final, gdjs.GameCode.GDPowershotObjects3);
gdjs.copyArray(gdjs.GameCode.GDSliceObjects3_1final, gdjs.GameCode.GDSliceObjects3);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "hitball.mp3", false, 50, gdjs.randomFloatInRange(1, 1.5));
}
{gdjs.multiplayerVariablesManager.takeVariableOwnership(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(11));
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].returnVariable(gdjs.GameCode.GDPlayerObjects3[i].getVariables().getFromIndex(7)).setBoolean(true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].returnVariable(gdjs.GameCode.GDPlayerObjects3[i].getVariables().getFromIndex(6)).setBoolean(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "p" + gdjs.evtTools.common.toString(((gdjs.GameCode.GDPlayerObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects3[0].getVariables()).getFromIndex(0).getAsNumber()) + "wait");
}
{runtimeScene.getScene().getVariables().getFromIndex(11).setNumber(((gdjs.GameCode.GDPlayerObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects3[0].getVariables()).getFromIndex(0).getAsNumber());
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWallObjects2Objects = Hashtable.newFrom({"Wall": gdjs.GameCode.GDWallObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWallObjects2Objects = Hashtable.newFrom({"Wall": gdjs.GameCode.GDWallObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerWallObjects2Objects = Hashtable.newFrom({"PlayerWall": gdjs.GameCode.GDPlayerWallObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerWallObjects2Objects = Hashtable.newFrom({"PlayerWall": gdjs.GameCode.GDPlayerWallObjects2});
gdjs.GameCode.eventsList92 = function(runtimeScene) {

{


gdjs.GameCode.eventsList68(runtimeScene);
}


{


gdjs.GameCode.eventsList86(runtimeScene);
}


{


gdjs.GameCode.eventsList91(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.GameCode.GDWallObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWallObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
/* Reuse gdjs.GameCode.GDWallObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].separateFromObjectsList(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWallObjects2Objects, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("PlayerWall"), gdjs.GameCode.GDPlayerWallObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerWallObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
/* Reuse gdjs.GameCode.GDPlayerWallObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].separateFromObjectsList(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerWallObjects2Objects, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getBehavior("Animation").getAnimationName() != "hitball" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDPlayerObjects2[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getBehavior("Animation").getAnimationName() != "hitball" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationIndex(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects1[i].getBehavior("Animation").getAnimationName() == "hitball" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects1[k] = gdjs.GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects1[k] = gdjs.GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("afk");
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.GameCode.GDBallObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWallObjects2Objects = Hashtable.newFrom({"Wall": gdjs.GameCode.GDWallObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWallObjects2Objects = Hashtable.newFrom({"Wall": gdjs.GameCode.GDWallObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.GameCode.GDBallObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPaddleObjects2Objects = Hashtable.newFrom({"Paddle": gdjs.GameCode.GDPaddleObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPaddleObjects2Objects = Hashtable.newFrom({"Paddle": gdjs.GameCode.GDPaddleObjects2});
gdjs.GameCode.eventsList93 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDPaddleObjects2, gdjs.GameCode.GDPaddleObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPaddleObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDPaddleObjects3[i].getBehavior("Animation").getAnimationIndex() == 3 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPaddleObjects3[k] = gdjs.GameCode.GDPaddleObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDPaddleObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPaddleObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDPaddleObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPaddleObjects3[i].hide();
}
}
}

}


{

/* Reuse gdjs.GameCode.GDPaddleObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPaddleObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPaddleObjects2[i].getBehavior("Animation").getAnimationIndex() != 3 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPaddleObjects2[k] = gdjs.GameCode.GDPaddleObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPaddleObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPaddleObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPaddleObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPaddleObjects2[i].getBehavior("Animation").setAnimationIndex((gdjs.GameCode.GDPaddleObjects2[i].getBehavior("Animation").getAnimationIndex()) + 1);
}
}
}

}


};gdjs.GameCode.asyncCallback18949220 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Paddle"), gdjs.GameCode.GDPaddleObjects4);
gdjs.copyArray(asyncObjectsList.getObjects("ScoreDisplay"), gdjs.GameCode.GDScoreDisplayObjects4);

gdjs.copyArray(asyncObjectsList.getObjects("ScoreTextIconL"), gdjs.GameCode.GDScoreTextIconLObjects4);

gdjs.copyArray(asyncObjectsList.getObjects("ScoreTextIconS"), gdjs.GameCode.GDScoreTextIconSObjects4);

gdjs.copyArray(asyncObjectsList.getObjects("score_"), gdjs.GameCode.GDscore_9595Objects4);

{for(var i = 0, len = gdjs.GameCode.GDScoreTextIconLObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextIconLObjects4[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDScoreTextIconSObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextIconSObjects4[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDScoreDisplayObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDScoreDisplayObjects4[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDscore_9595Objects4.length ;i < len;++i) {
    gdjs.GameCode.GDscore_9595Objects4[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDPaddleObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPaddleObjects4[i].getBehavior("MultiplayerObject").takeObjectOwnership();
}
}
{for(var i = 0, len = gdjs.GameCode.GDPaddleObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPaddleObjects4[i].getBehavior("Animation").setAnimationIndex(0);
}
}
{for(var i = 0, len = gdjs.GameCode.GDPaddleObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPaddleObjects4[i].hide(false);
}
}
gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.idToCallbackMap.set(18949220, gdjs.GameCode.asyncCallback18949220);
gdjs.GameCode.eventsList94 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
for (const obj of gdjs.GameCode.GDScoreDisplayObjects3) asyncObjectsList.addObject("ScoreDisplay", obj);
for (const obj of gdjs.GameCode.GDScoreTextIconLObjects3) asyncObjectsList.addObject("ScoreTextIconL", obj);
for (const obj of gdjs.GameCode.GDScoreTextIconSObjects3) asyncObjectsList.addObject("ScoreTextIconS", obj);
for (const obj of gdjs.GameCode.GDscore_9595Objects3) asyncObjectsList.addObject("score_", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GameCode.asyncCallback18949220(runtimeScene, asyncObjectsList)), 18949220, asyncObjectsList);
}
}

}


};gdjs.GameCode.asyncCallback18954708 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Paddle"), gdjs.GameCode.GDPaddleObjects3);
gdjs.copyArray(asyncObjectsList.getObjects("ScoreDisplay"), gdjs.GameCode.GDScoreDisplayObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("ScoreTextIconL"), gdjs.GameCode.GDScoreTextIconLObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("ScoreTextIconS"), gdjs.GameCode.GDScoreTextIconSObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("score_"), gdjs.GameCode.GDscore_9595Objects3);

{for(var i = 0, len = gdjs.GameCode.GDScoreTextIconLObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextIconLObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDScoreTextIconSObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextIconSObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDScoreDisplayObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDScoreDisplayObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDscore_9595Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDscore_9595Objects3[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDPaddleObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPaddleObjects3[i].getBehavior("MultiplayerObject").takeObjectOwnership();
}
}
{for(var i = 0, len = gdjs.GameCode.GDPaddleObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPaddleObjects3[i].getBehavior("Animation").setAnimationIndex(0);
}
}
{for(var i = 0, len = gdjs.GameCode.GDPaddleObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPaddleObjects3[i].hide(false);
}
}
gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.idToCallbackMap.set(18954708, gdjs.GameCode.asyncCallback18954708);
gdjs.GameCode.eventsList95 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
for (const obj of gdjs.GameCode.GDScoreDisplayObjects2) asyncObjectsList.addObject("ScoreDisplay", obj);
for (const obj of gdjs.GameCode.GDScoreTextIconLObjects2) asyncObjectsList.addObject("ScoreTextIconL", obj);
for (const obj of gdjs.GameCode.GDScoreTextIconSObjects2) asyncObjectsList.addObject("ScoreTextIconS", obj);
for (const obj of gdjs.GameCode.GDscore_9595Objects2) asyncObjectsList.addObject("score_", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GameCode.asyncCallback18954708(runtimeScene, asyncObjectsList)), 18954708, asyncObjectsList);
}
}

}


};gdjs.GameCode.eventsList96 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDBallObjects2, gdjs.GameCode.GDBallObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDBallObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDBallObjects3[i].getY() > 367 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDBallObjects3[k] = gdjs.GameCode.GDBallObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDBallObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18946180);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ScoreDisplay"), gdjs.GameCode.GDScoreDisplayObjects3);
gdjs.copyArray(runtimeScene.getObjects("ScoreTextIconL"), gdjs.GameCode.GDScoreTextIconLObjects3);
gdjs.copyArray(runtimeScene.getObjects("ScoreTextIconS"), gdjs.GameCode.GDScoreTextIconSObjects3);
gdjs.copyArray(runtimeScene.getObjects("score_"), gdjs.GameCode.GDscore_9595Objects3);
{gdjs.multiplayerVariablesManager.takeVariableOwnership(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(6));
}
{gdjs.evtTools.sound.playSound(runtimeScene, "pointscored.mp3", false, 10, 1);
}
{gdjs.multiplayerVariablesManager.takeVariableOwnership(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(4));
}
{runtimeScene.getScene().getVariables().getFromIndex(4).add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
{for(var i = 0, len = gdjs.GameCode.GDScoreTextIconLObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextIconLObjects3[i].getBehavior("MultiplayerObject").takeObjectOwnership();
}
}
{for(var i = 0, len = gdjs.GameCode.GDScoreTextIconSObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextIconSObjects3[i].getBehavior("MultiplayerObject").takeObjectOwnership();
}
}
{for(var i = 0, len = gdjs.GameCode.GDScoreDisplayObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDScoreDisplayObjects3[i].getBehavior("MultiplayerObject").takeObjectOwnership();
}
}
{for(var i = 0, len = gdjs.GameCode.GDscore_9595Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDscore_9595Objects3[i].getBehavior("MultiplayerObject").takeObjectOwnership();
}
}
{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 1, 0, 0, null);
}
{for(var i = 0, len = gdjs.GameCode.GDScoreTextIconLObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextIconLObjects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDScoreTextIconSObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextIconSObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDScoreDisplayObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDScoreDisplayObjects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDscore_9595Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDscore_9595Objects3[i].hide(false);
}
}

{ //Subevents
gdjs.GameCode.eventsList94(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13132772);
}
}
if (isConditionTrue_0) {
{gdjs.multiplayerVariablesManager.takeVariableOwnership(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(8));
}
{gdjs.multiplayerVariablesManager.takeVariableOwnership(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(9));
}
{gdjs.multiplayerVariablesManager.takeVariableOwnership(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(4));
}
{runtimeScene.getScene().getVariables().getFromIndex(8).add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() == 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9317028);
}
}
if (isConditionTrue_0) {
{gdjs.multiplayerVariablesManager.takeVariableOwnership(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(9));
}
{gdjs.multiplayerVariablesManager.takeVariableOwnership(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(4));
}
{gdjs.multiplayerVariablesManager.takeVariableOwnership(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(5));
}
{runtimeScene.getScene().getVariables().getFromIndex(9).add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(0);
}
}

}


{

/* Reuse gdjs.GameCode.GDBallObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDBallObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDBallObjects2[i].getY() <= 367 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDBallObjects2[k] = gdjs.GameCode.GDBallObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDBallObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18951532);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayerVariablesManager.getPlayerVariableOwnership(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(6)) == gdjs.multiplayer.getCurrentPlayerNumber();
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ScoreDisplay"), gdjs.GameCode.GDScoreDisplayObjects2);
gdjs.copyArray(runtimeScene.getObjects("ScoreTextIconL"), gdjs.GameCode.GDScoreTextIconLObjects2);
gdjs.copyArray(runtimeScene.getObjects("ScoreTextIconS"), gdjs.GameCode.GDScoreTextIconSObjects2);
gdjs.copyArray(runtimeScene.getObjects("score_"), gdjs.GameCode.GDscore_9595Objects2);
{gdjs.multiplayerVariablesManager.takeVariableOwnership(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(6));
}
{gdjs.evtTools.sound.playSound(runtimeScene, "pointscored.mp3", false, 10, 1);
}
{gdjs.multiplayerVariablesManager.takeVariableOwnership(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(5));
}
{runtimeScene.getScene().getVariables().getFromIndex(5).add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
{for(var i = 0, len = gdjs.GameCode.GDScoreTextIconLObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextIconLObjects2[i].getBehavior("MultiplayerObject").takeObjectOwnership();
}
}
{for(var i = 0, len = gdjs.GameCode.GDScoreTextIconSObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextIconSObjects2[i].getBehavior("MultiplayerObject").takeObjectOwnership();
}
}
{for(var i = 0, len = gdjs.GameCode.GDScoreDisplayObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDScoreDisplayObjects2[i].getBehavior("MultiplayerObject").takeObjectOwnership();
}
}
{for(var i = 0, len = gdjs.GameCode.GDscore_9595Objects2.length ;i < len;++i) {
    gdjs.GameCode.GDscore_9595Objects2[i].getBehavior("MultiplayerObject").takeObjectOwnership();
}
}
{for(var i = 0, len = gdjs.GameCode.GDScoreTextIconLObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextIconLObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDScoreDisplayObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDScoreDisplayObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDScoreTextIconSObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextIconSObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDscore_9595Objects2.length ;i < len;++i) {
    gdjs.GameCode.GDscore_9595Objects2[i].hide(false);
}
}
{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 1, 0, 0, null);
}

{ //Subevents
gdjs.GameCode.eventsList95(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.GameCode.GDBallObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDScoreObjects2Objects = Hashtable.newFrom({"Score": gdjs.GameCode.GDScoreObjects2});
gdjs.GameCode.asyncCallback18959620 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Paddle"), gdjs.GameCode.GDPaddleObjects3);
gdjs.copyArray(asyncObjectsList.getObjects("ScoreDisplay"), gdjs.GameCode.GDScoreDisplayObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("ScoreTextIconL"), gdjs.GameCode.GDScoreTextIconLObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("ScoreTextIconS"), gdjs.GameCode.GDScoreTextIconSObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("score_"), gdjs.GameCode.GDscore_9595Objects3);

{for(var i = 0, len = gdjs.GameCode.GDScoreTextIconSObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextIconSObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDScoreTextIconLObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextIconLObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDScoreDisplayObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDScoreDisplayObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDscore_9595Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDscore_9595Objects3[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDPaddleObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPaddleObjects3[i].getBehavior("Animation").setAnimationIndex(0);
}
}
{for(var i = 0, len = gdjs.GameCode.GDPaddleObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPaddleObjects3[i].hide(false);
}
}
gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.idToCallbackMap.set(18959620, gdjs.GameCode.asyncCallback18959620);
gdjs.GameCode.eventsList97 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
for (const obj of gdjs.GameCode.GDScoreDisplayObjects2) asyncObjectsList.addObject("ScoreDisplay", obj);
for (const obj of gdjs.GameCode.GDScoreTextIconLObjects2) asyncObjectsList.addObject("ScoreTextIconL", obj);
for (const obj of gdjs.GameCode.GDScoreTextIconSObjects2) asyncObjectsList.addObject("ScoreTextIconS", obj);
for (const obj of gdjs.GameCode.GDscore_9595Objects2) asyncObjectsList.addObject("score_", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GameCode.asyncCallback18959620(runtimeScene, asyncObjectsList)), 18959620, asyncObjectsList);
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.GameCode.GDBallObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDScoreObjects1Objects = Hashtable.newFrom({"Score": gdjs.GameCode.GDScoreObjects1});
gdjs.GameCode.asyncCallback18963420 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Paddle"), gdjs.GameCode.GDPaddleObjects2);
gdjs.copyArray(asyncObjectsList.getObjects("ScoreDisplay"), gdjs.GameCode.GDScoreDisplayObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("ScoreTextIconL"), gdjs.GameCode.GDScoreTextIconLObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("ScoreTextIconS"), gdjs.GameCode.GDScoreTextIconSObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("score_"), gdjs.GameCode.GDscore_9595Objects2);

{for(var i = 0, len = gdjs.GameCode.GDScoreTextIconLObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextIconLObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDScoreTextIconSObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextIconSObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDScoreDisplayObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDScoreDisplayObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDscore_9595Objects2.length ;i < len;++i) {
    gdjs.GameCode.GDscore_9595Objects2[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDPaddleObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPaddleObjects2[i].getBehavior("Animation").setAnimationIndex(0);
}
}
{for(var i = 0, len = gdjs.GameCode.GDPaddleObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPaddleObjects2[i].hide(false);
}
}
gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.idToCallbackMap.set(18963420, gdjs.GameCode.asyncCallback18963420);
gdjs.GameCode.eventsList98 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
for (const obj of gdjs.GameCode.GDScoreDisplayObjects1) asyncObjectsList.addObject("ScoreDisplay", obj);
for (const obj of gdjs.GameCode.GDScoreTextIconLObjects1) asyncObjectsList.addObject("ScoreTextIconL", obj);
for (const obj of gdjs.GameCode.GDScoreTextIconSObjects1) asyncObjectsList.addObject("ScoreTextIconS", obj);
for (const obj of gdjs.GameCode.GDscore_9595Objects1) asyncObjectsList.addObject("score_", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GameCode.asyncCallback18963420(runtimeScene, asyncObjectsList)), 18963420, asyncObjectsList);
}
}

}


};gdjs.GameCode.eventsList99 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.GameCode.GDWallObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWallObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBallObjects2 */
/* Reuse gdjs.GameCode.GDWallObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects2[i].getBehavior("Bounce").BounceOff(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWallObjects2Objects, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("Paddle"), gdjs.GameCode.GDPaddleObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPaddleObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPaddleObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPaddleObjects2[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPaddleObjects2[k] = gdjs.GameCode.GDPaddleObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPaddleObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBallObjects2 */
/* Reuse gdjs.GameCode.GDPaddleObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects2[i].getBehavior("Bounce").BounceOff(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPaddleObjects2Objects, null);
}
}

{ //Subevents
gdjs.GameCode.eventsList93(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() == 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10614908);
}
}
if (isConditionTrue_0) {
{gdjs.multiplayerVariablesManager.takeVariableOwnership(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(9));
}
{gdjs.multiplayerVariablesManager.takeVariableOwnership(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(4));
}
{gdjs.multiplayerVariablesManager.takeVariableOwnership(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(5));
}
{runtimeScene.getScene().getVariables().getFromIndex(9).add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17061956);
}
}
if (isConditionTrue_0) {
{gdjs.multiplayerVariablesManager.takeVariableOwnership(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(8));
}
{gdjs.multiplayerVariablesManager.takeVariableOwnership(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(9));
}
{gdjs.multiplayerVariablesManager.takeVariableOwnership(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(4));
}
{runtimeScene.getScene().getVariables().getFromIndex(8).add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("BallHitbox"), gdjs.GameCode.GDBallHitboxObjects2);
gdjs.copyArray(runtimeScene.getObjects("LobsScore"), gdjs.GameCode.GDLobsScoreObjects2);
gdjs.copyArray(runtimeScene.getObjects("SetsLobs"), gdjs.GameCode.GDSetsLobsObjects2);
gdjs.copyArray(runtimeScene.getObjects("SetsSlicers"), gdjs.GameCode.GDSetsSlicersObjects2);
gdjs.copyArray(runtimeScene.getObjects("SlicersScore"), gdjs.GameCode.GDSlicersScoreObjects2);
{for(var i = 0, len = gdjs.GameCode.GDLobsScoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDLobsScoreObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(4).getAsString());
}
}
{for(var i = 0, len = gdjs.GameCode.GDSlicersScoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDSlicersScoreObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString());
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallHitboxObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBallHitboxObjects2[i].setPosition((( gdjs.GameCode.GDBallObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDBallObjects2[0].getPointX("")),(( gdjs.GameCode.GDBallObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDBallObjects2[0].getPointY("")));
}
}
{for(var i = 0, len = gdjs.GameCode.GDSetsLobsObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDSetsLobsObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(8).getAsString());
}
}
{for(var i = 0, len = gdjs.GameCode.GDSetsSlicersObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDSetsSlicersObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(9).getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDBallObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDBallObjects2[i].getBehavior("Tween").hasFinished("bouncein") ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDBallObjects2[k] = gdjs.GameCode.GDBallObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDBallObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18944308);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBallObjects2 */
{runtimeScene.getScene().getVariables().getFromIndex(6).add(1);
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects2[i].getBehavior("Tween").addObjectScaleTween3("bounceout", 1, "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects2[i].getBehavior("Tween").addObjectColorTween2("bounceouthue", "255;255;255", "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "ballbounce.mp3", false, 50, gdjs.randomFloatInRange(0.5, 1.5));
}

{ //Subevents
gdjs.GameCode.eventsList96(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDBallObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDBallObjects2[i].getBehavior("Tween").hasFinished("bounceout") ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDBallObjects2[k] = gdjs.GameCode.GDBallObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDBallObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18956644);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBallObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects2[i].getBehavior("Tween").addObjectScaleTween3("bouncein", (gdjs.GameCode.GDBallObjects2[i].getBehavior("Scale").getScale()) / 2, "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects2[i].getBehavior("Tween").addObjectColorTween2("bounceinhue", "145;145;145", "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.GameCode.GDScoreObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDScoreObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDScoreObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDScoreObjects2[i].getVariableNumber(gdjs.GameCode.GDScoreObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDScoreObjects2[k] = gdjs.GameCode.GDScoreObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDScoreObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayerVariablesManager.getPlayerVariableOwnership(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(6)) == gdjs.multiplayer.getCurrentPlayerNumber();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18958332);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ScoreDisplay"), gdjs.GameCode.GDScoreDisplayObjects2);
gdjs.copyArray(runtimeScene.getObjects("ScoreTextIconL"), gdjs.GameCode.GDScoreTextIconLObjects2);
gdjs.copyArray(runtimeScene.getObjects("ScoreTextIconS"), gdjs.GameCode.GDScoreTextIconSObjects2);
gdjs.copyArray(runtimeScene.getObjects("score_"), gdjs.GameCode.GDscore_9595Objects2);
{gdjs.evtTools.sound.playSound(runtimeScene, "pointscored.mp3", false, 10, 1);
}
{gdjs.multiplayerVariablesManager.takeVariableOwnership(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(5));
}
{runtimeScene.getScene().getVariables().getFromIndex(5).add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
{for(var i = 0, len = gdjs.GameCode.GDScoreTextIconLObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextIconLObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDScoreDisplayObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDScoreDisplayObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDScoreTextIconSObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextIconSObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDscore_9595Objects2.length ;i < len;++i) {
    gdjs.GameCode.GDscore_9595Objects2[i].hide(false);
}
}
{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 1, 0, 0, null);
}

{ //Subevents
gdjs.GameCode.eventsList97(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.GameCode.GDScoreObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDScoreObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDScoreObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDScoreObjects1[i].getVariableNumber(gdjs.GameCode.GDScoreObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDScoreObjects1[k] = gdjs.GameCode.GDScoreObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDScoreObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayerVariablesManager.getPlayerVariableOwnership(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(6)) == gdjs.multiplayer.getCurrentPlayerNumber();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18962084);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ScoreDisplay"), gdjs.GameCode.GDScoreDisplayObjects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreTextIconL"), gdjs.GameCode.GDScoreTextIconLObjects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreTextIconS"), gdjs.GameCode.GDScoreTextIconSObjects1);
gdjs.copyArray(runtimeScene.getObjects("score_"), gdjs.GameCode.GDscore_9595Objects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "pointscored.mp3", false, 10, 1);
}
{gdjs.multiplayerVariablesManager.takeVariableOwnership(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(4));
}
{runtimeScene.getScene().getVariables().getFromIndex(4).add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
{for(var i = 0, len = gdjs.GameCode.GDScoreTextIconLObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextIconLObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDScoreTextIconSObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextIconSObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDScoreDisplayObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDScoreDisplayObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDscore_9595Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDscore_9595Objects1[i].hide(false);
}
}
{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 1, 0, 0, null);
}

{ //Subevents
gdjs.GameCode.eventsList98(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList100 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("BallHitbox"), gdjs.GameCode.GDBallHitboxObjects1);
gdjs.copyArray(runtimeScene.getObjects("PShot"), gdjs.GameCode.GDPShotObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerWall"), gdjs.GameCode.GDPlayerWallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.GameCode.GDScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreCard"), gdjs.GameCode.GDScoreCardObjects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreDisplay"), gdjs.GameCode.GDScoreDisplayObjects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreTextIconL"), gdjs.GameCode.GDScoreTextIconLObjects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreTextIconS"), gdjs.GameCode.GDScoreTextIconSObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.GameCode.GDWallObjects1);
gdjs.copyArray(runtimeScene.getObjects("score_"), gdjs.GameCode.GDscore_9595Objects1);
{gdjs.evtTools.sound.preloadSound(runtimeScene, "ballbounce.mp3");
}
{gdjs.evtTools.sound.preloadSound(runtimeScene, "pointscored.mp3");
}
{gdjs.evtTools.sound.preloadSound(runtimeScene, "dmg");
}
{gdjs.evtTools.sound.preloadSound(runtimeScene, "lowhp");
}
{gdjs.evtTools.sound.preloadSound(runtimeScene, "hitball.mp3");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(-(1));
}
{for(var i = 0, len = gdjs.GameCode.GDWallObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDWallObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerWallObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerWallObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDScoreCardObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDScoreCardObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallHitboxObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBallHitboxObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDScoreTextIconLObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextIconLObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDScoreTextIconSObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextIconSObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDScoreDisplayObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDScoreDisplayObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDscore_9595Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDscore_9595Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDScoreObjects1[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(1);
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects1[i].getBehavior("Tween").addObjectScaleTween3("bouncein", (gdjs.GameCode.GDBallObjects1[i].getBehavior("Scale").getScale()) / 2, "linear", 1, false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects1[i].getBehavior("Tween").addObjectColorTween2("bounceinhue", "145;145;145", "linear", 1, false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDPShotObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPShotObjects1[i].SetValue(100, null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("HIT"), gdjs.GameCode.GDHITObjects1);
gdjs.copyArray(runtimeScene.getObjects("OnScreenControlsButton"), gdjs.GameCode.GDOnScreenControlsButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("ShadedDarkJoystick"), gdjs.GameCode.GDShadedDarkJoystickObjects1);
{for(var i = 0, len = gdjs.GameCode.GDShadedDarkJoystickObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDShadedDarkJoystickObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDOnScreenControlsButtonObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDOnScreenControlsButtonObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDHITObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHITObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Lob"), gdjs.GameCode.GDLobObjects1);
gdjs.copyArray(runtimeScene.getObjects("Normal"), gdjs.GameCode.GDNormalObjects1);
gdjs.copyArray(runtimeScene.getObjects("Powershot"), gdjs.GameCode.GDPowershotObjects1);
gdjs.copyArray(runtimeScene.getObjects("ShadedDarkJoystick"), gdjs.GameCode.GDShadedDarkJoystickObjects1);
gdjs.copyArray(runtimeScene.getObjects("Slice"), gdjs.GameCode.GDSliceObjects1);
{for(var i = 0, len = gdjs.GameCode.GDShadedDarkJoystickObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDShadedDarkJoystickObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameCode.GDNormalObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDNormalObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameCode.GDLobObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDLobObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameCode.GDSliceObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDSliceObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameCode.GDPowershotObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPowershotObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("MultiplayerObject").setPlayerObjectOwnership(gdjs.GameCode.GDPlayerObjects1[i].getVariables().getFromIndex(0).getAsNumber() + 1);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Escape");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbyGameRunning());
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "PauseGame");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

for (gdjs.GameCode.forEachIndex2 = 0;gdjs.GameCode.forEachIndex2 < gdjs.GameCode.GDPlayerObjects1.length;++gdjs.GameCode.forEachIndex2) {
gdjs.GameCode.GDPlayerObjects2.length = 0;


gdjs.GameCode.forEachTemporary2 = gdjs.GameCode.GDPlayerObjects1[gdjs.GameCode.forEachIndex2];
gdjs.GameCode.GDPlayerObjects2.push(gdjs.GameCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Controller_X_is_connected.func(runtimeScene, ((gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects2[0].getVariables()).getFromIndex(0).getAsNumber() + 1, null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)) != 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbyGameRunning());
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].deleteFromScene(runtimeScene);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("HPBar"), gdjs.GameCode.GDHPBarObjects1);

for (gdjs.GameCode.forEachIndex2 = 0;gdjs.GameCode.forEachIndex2 < gdjs.GameCode.GDHPBarObjects1.length;++gdjs.GameCode.forEachIndex2) {
gdjs.GameCode.GDHPBarObjects2.length = 0;


gdjs.GameCode.forEachTemporary2 = gdjs.GameCode.GDHPBarObjects1[gdjs.GameCode.forEachIndex2];
gdjs.GameCode.GDHPBarObjects2.push(gdjs.GameCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Controller_X_is_connected.func(runtimeScene, ((gdjs.GameCode.GDHPBarObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDHPBarObjects2[0].getVariables()).getFromIndex(0).getAsNumber() + 1, null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDHPBarObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDHPBarObjects2[i].getVariableNumber(gdjs.GameCode.GDHPBarObjects2[i].getVariables().getFromIndex(0)) != 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDHPBarObjects2[k] = gdjs.GameCode.GDHPBarObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDHPBarObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbyGameRunning());
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDHPBarObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDHPBarObjects2[i].deleteFromScene(runtimeScene);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

for (gdjs.GameCode.forEachIndex2 = 0;gdjs.GameCode.forEachIndex2 < gdjs.GameCode.GDPlayerObjects1.length;++gdjs.GameCode.forEachIndex2) {
gdjs.GameCode.GDPlayerObjects2.length = 0;


gdjs.GameCode.forEachTemporary2 = gdjs.GameCode.GDPlayerObjects1[gdjs.GameCode.forEachIndex2];
gdjs.GameCode.GDPlayerObjects2.push(gdjs.GameCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isPlayerConnected(((gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects2[0].getVariables()).getFromIndex(0).getAsNumber() + 1));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)) != 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.isLobbyGameRunning();
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].deleteFromScene(runtimeScene);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("HPBar"), gdjs.GameCode.GDHPBarObjects1);

for (gdjs.GameCode.forEachIndex2 = 0;gdjs.GameCode.forEachIndex2 < gdjs.GameCode.GDHPBarObjects1.length;++gdjs.GameCode.forEachIndex2) {
gdjs.GameCode.GDHPBarObjects2.length = 0;


gdjs.GameCode.forEachTemporary2 = gdjs.GameCode.GDHPBarObjects1[gdjs.GameCode.forEachIndex2];
gdjs.GameCode.GDHPBarObjects2.push(gdjs.GameCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDHPBarObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDHPBarObjects2[i].getVariableNumber(gdjs.GameCode.GDHPBarObjects2[i].getVariables().getFromIndex(0)) != 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDHPBarObjects2[k] = gdjs.GameCode.GDHPBarObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDHPBarObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.isLobbyGameRunning();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isPlayerConnected(((gdjs.GameCode.GDHPBarObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDHPBarObjects2[0].getVariables()).getFromIndex(0).getAsNumber() + 1));
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDHPBarObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDHPBarObjects2[i].deleteFromScene(runtimeScene);
}
}
}
}

}


{


gdjs.GameCode.eventsList92(runtimeScene);
}


{


gdjs.GameCode.eventsList99(runtimeScene);
}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDCourtObjects1.length = 0;
gdjs.GameCode.GDCourtObjects2.length = 0;
gdjs.GameCode.GDCourtObjects3.length = 0;
gdjs.GameCode.GDCourtObjects4.length = 0;
gdjs.GameCode.GDCourtObjects5.length = 0;
gdjs.GameCode.GDCourtObjects6.length = 0;
gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects3.length = 0;
gdjs.GameCode.GDPlayerObjects4.length = 0;
gdjs.GameCode.GDPlayerObjects5.length = 0;
gdjs.GameCode.GDPlayerObjects6.length = 0;
gdjs.GameCode.GDWallObjects1.length = 0;
gdjs.GameCode.GDWallObjects2.length = 0;
gdjs.GameCode.GDWallObjects3.length = 0;
gdjs.GameCode.GDWallObjects4.length = 0;
gdjs.GameCode.GDWallObjects5.length = 0;
gdjs.GameCode.GDWallObjects6.length = 0;
gdjs.GameCode.GDMidPointObjects1.length = 0;
gdjs.GameCode.GDMidPointObjects2.length = 0;
gdjs.GameCode.GDMidPointObjects3.length = 0;
gdjs.GameCode.GDMidPointObjects4.length = 0;
gdjs.GameCode.GDMidPointObjects5.length = 0;
gdjs.GameCode.GDMidPointObjects6.length = 0;
gdjs.GameCode.GDBallObjects1.length = 0;
gdjs.GameCode.GDBallObjects2.length = 0;
gdjs.GameCode.GDBallObjects3.length = 0;
gdjs.GameCode.GDBallObjects4.length = 0;
gdjs.GameCode.GDBallObjects5.length = 0;
gdjs.GameCode.GDBallObjects6.length = 0;
gdjs.GameCode.GDPlayerWallObjects1.length = 0;
gdjs.GameCode.GDPlayerWallObjects2.length = 0;
gdjs.GameCode.GDPlayerWallObjects3.length = 0;
gdjs.GameCode.GDPlayerWallObjects4.length = 0;
gdjs.GameCode.GDPlayerWallObjects5.length = 0;
gdjs.GameCode.GDPlayerWallObjects6.length = 0;
gdjs.GameCode.GDMetalRedBarObjects1.length = 0;
gdjs.GameCode.GDMetalRedBarObjects2.length = 0;
gdjs.GameCode.GDMetalRedBarObjects3.length = 0;
gdjs.GameCode.GDMetalRedBarObjects4.length = 0;
gdjs.GameCode.GDMetalRedBarObjects5.length = 0;
gdjs.GameCode.GDMetalRedBarObjects6.length = 0;
gdjs.GameCode.GDPCardObjects1.length = 0;
gdjs.GameCode.GDPCardObjects2.length = 0;
gdjs.GameCode.GDPCardObjects3.length = 0;
gdjs.GameCode.GDPCardObjects4.length = 0;
gdjs.GameCode.GDPCardObjects5.length = 0;
gdjs.GameCode.GDPCardObjects6.length = 0;
gdjs.GameCode.GDHPBarObjects1.length = 0;
gdjs.GameCode.GDHPBarObjects2.length = 0;
gdjs.GameCode.GDHPBarObjects3.length = 0;
gdjs.GameCode.GDHPBarObjects4.length = 0;
gdjs.GameCode.GDHPBarObjects5.length = 0;
gdjs.GameCode.GDHPBarObjects6.length = 0;
gdjs.GameCode.GDPTextObjects1.length = 0;
gdjs.GameCode.GDPTextObjects2.length = 0;
gdjs.GameCode.GDPTextObjects3.length = 0;
gdjs.GameCode.GDPTextObjects4.length = 0;
gdjs.GameCode.GDPTextObjects5.length = 0;
gdjs.GameCode.GDPTextObjects6.length = 0;
gdjs.GameCode.GDP2TextObjects1.length = 0;
gdjs.GameCode.GDP2TextObjects2.length = 0;
gdjs.GameCode.GDP2TextObjects3.length = 0;
gdjs.GameCode.GDP2TextObjects4.length = 0;
gdjs.GameCode.GDP2TextObjects5.length = 0;
gdjs.GameCode.GDP2TextObjects6.length = 0;
gdjs.GameCode.GDShadedDarkJoystickObjects1.length = 0;
gdjs.GameCode.GDShadedDarkJoystickObjects2.length = 0;
gdjs.GameCode.GDShadedDarkJoystickObjects3.length = 0;
gdjs.GameCode.GDShadedDarkJoystickObjects4.length = 0;
gdjs.GameCode.GDShadedDarkJoystickObjects5.length = 0;
gdjs.GameCode.GDShadedDarkJoystickObjects6.length = 0;
gdjs.GameCode.GDOnScreenControlsButtonObjects1.length = 0;
gdjs.GameCode.GDOnScreenControlsButtonObjects2.length = 0;
gdjs.GameCode.GDOnScreenControlsButtonObjects3.length = 0;
gdjs.GameCode.GDOnScreenControlsButtonObjects4.length = 0;
gdjs.GameCode.GDOnScreenControlsButtonObjects5.length = 0;
gdjs.GameCode.GDOnScreenControlsButtonObjects6.length = 0;
gdjs.GameCode.GDHITObjects1.length = 0;
gdjs.GameCode.GDHITObjects2.length = 0;
gdjs.GameCode.GDHITObjects3.length = 0;
gdjs.GameCode.GDHITObjects4.length = 0;
gdjs.GameCode.GDHITObjects5.length = 0;
gdjs.GameCode.GDHITObjects6.length = 0;
gdjs.GameCode.GDScoreCardObjects1.length = 0;
gdjs.GameCode.GDScoreCardObjects2.length = 0;
gdjs.GameCode.GDScoreCardObjects3.length = 0;
gdjs.GameCode.GDScoreCardObjects4.length = 0;
gdjs.GameCode.GDScoreCardObjects5.length = 0;
gdjs.GameCode.GDScoreCardObjects6.length = 0;
gdjs.GameCode.GDgroundledObjects1.length = 0;
gdjs.GameCode.GDgroundledObjects2.length = 0;
gdjs.GameCode.GDgroundledObjects3.length = 0;
gdjs.GameCode.GDgroundledObjects4.length = 0;
gdjs.GameCode.GDgroundledObjects5.length = 0;
gdjs.GameCode.GDgroundledObjects6.length = 0;
gdjs.GameCode.GDLobsScoreObjects1.length = 0;
gdjs.GameCode.GDLobsScoreObjects2.length = 0;
gdjs.GameCode.GDLobsScoreObjects3.length = 0;
gdjs.GameCode.GDLobsScoreObjects4.length = 0;
gdjs.GameCode.GDLobsScoreObjects5.length = 0;
gdjs.GameCode.GDLobsScoreObjects6.length = 0;
gdjs.GameCode.GDSlicersScoreObjects1.length = 0;
gdjs.GameCode.GDSlicersScoreObjects2.length = 0;
gdjs.GameCode.GDSlicersScoreObjects3.length = 0;
gdjs.GameCode.GDSlicersScoreObjects4.length = 0;
gdjs.GameCode.GDSlicersScoreObjects5.length = 0;
gdjs.GameCode.GDSlicersScoreObjects6.length = 0;
gdjs.GameCode.GDLobsIconObjects1.length = 0;
gdjs.GameCode.GDLobsIconObjects2.length = 0;
gdjs.GameCode.GDLobsIconObjects3.length = 0;
gdjs.GameCode.GDLobsIconObjects4.length = 0;
gdjs.GameCode.GDLobsIconObjects5.length = 0;
gdjs.GameCode.GDLobsIconObjects6.length = 0;
gdjs.GameCode.GDLobsSpriteObjects1.length = 0;
gdjs.GameCode.GDLobsSpriteObjects2.length = 0;
gdjs.GameCode.GDLobsSpriteObjects3.length = 0;
gdjs.GameCode.GDLobsSpriteObjects4.length = 0;
gdjs.GameCode.GDLobsSpriteObjects5.length = 0;
gdjs.GameCode.GDLobsSpriteObjects6.length = 0;
gdjs.GameCode.GDBallHitboxObjects1.length = 0;
gdjs.GameCode.GDBallHitboxObjects2.length = 0;
gdjs.GameCode.GDBallHitboxObjects3.length = 0;
gdjs.GameCode.GDBallHitboxObjects4.length = 0;
gdjs.GameCode.GDBallHitboxObjects5.length = 0;
gdjs.GameCode.GDBallHitboxObjects6.length = 0;
gdjs.GameCode.GDP3TextObjects1.length = 0;
gdjs.GameCode.GDP3TextObjects2.length = 0;
gdjs.GameCode.GDP3TextObjects3.length = 0;
gdjs.GameCode.GDP3TextObjects4.length = 0;
gdjs.GameCode.GDP3TextObjects5.length = 0;
gdjs.GameCode.GDP3TextObjects6.length = 0;
gdjs.GameCode.GDScoreDisplayObjects1.length = 0;
gdjs.GameCode.GDScoreDisplayObjects2.length = 0;
gdjs.GameCode.GDScoreDisplayObjects3.length = 0;
gdjs.GameCode.GDScoreDisplayObjects4.length = 0;
gdjs.GameCode.GDScoreDisplayObjects5.length = 0;
gdjs.GameCode.GDScoreDisplayObjects6.length = 0;
gdjs.GameCode.GDscore_9595Objects1.length = 0;
gdjs.GameCode.GDscore_9595Objects2.length = 0;
gdjs.GameCode.GDscore_9595Objects3.length = 0;
gdjs.GameCode.GDscore_9595Objects4.length = 0;
gdjs.GameCode.GDscore_9595Objects5.length = 0;
gdjs.GameCode.GDscore_9595Objects6.length = 0;
gdjs.GameCode.GDScoreTextIconLObjects1.length = 0;
gdjs.GameCode.GDScoreTextIconLObjects2.length = 0;
gdjs.GameCode.GDScoreTextIconLObjects3.length = 0;
gdjs.GameCode.GDScoreTextIconLObjects4.length = 0;
gdjs.GameCode.GDScoreTextIconLObjects5.length = 0;
gdjs.GameCode.GDScoreTextIconLObjects6.length = 0;
gdjs.GameCode.GDScoreTextIconSObjects1.length = 0;
gdjs.GameCode.GDScoreTextIconSObjects2.length = 0;
gdjs.GameCode.GDScoreTextIconSObjects3.length = 0;
gdjs.GameCode.GDScoreTextIconSObjects4.length = 0;
gdjs.GameCode.GDScoreTextIconSObjects5.length = 0;
gdjs.GameCode.GDScoreTextIconSObjects6.length = 0;
gdjs.GameCode.GDPSHOTObjects1.length = 0;
gdjs.GameCode.GDPSHOTObjects2.length = 0;
gdjs.GameCode.GDPSHOTObjects3.length = 0;
gdjs.GameCode.GDPSHOTObjects4.length = 0;
gdjs.GameCode.GDPSHOTObjects5.length = 0;
gdjs.GameCode.GDPSHOTObjects6.length = 0;
gdjs.GameCode.GDlobObjects1.length = 0;
gdjs.GameCode.GDlobObjects2.length = 0;
gdjs.GameCode.GDlobObjects3.length = 0;
gdjs.GameCode.GDlobObjects4.length = 0;
gdjs.GameCode.GDlobObjects5.length = 0;
gdjs.GameCode.GDlobObjects6.length = 0;
gdjs.GameCode.GDsliceObjects1.length = 0;
gdjs.GameCode.GDsliceObjects2.length = 0;
gdjs.GameCode.GDsliceObjects3.length = 0;
gdjs.GameCode.GDsliceObjects4.length = 0;
gdjs.GameCode.GDsliceObjects5.length = 0;
gdjs.GameCode.GDsliceObjects6.length = 0;
gdjs.GameCode.GDNormal_9595ButtonObjects1.length = 0;
gdjs.GameCode.GDNormal_9595ButtonObjects2.length = 0;
gdjs.GameCode.GDNormal_9595ButtonObjects3.length = 0;
gdjs.GameCode.GDNormal_9595ButtonObjects4.length = 0;
gdjs.GameCode.GDNormal_9595ButtonObjects5.length = 0;
gdjs.GameCode.GDNormal_9595ButtonObjects6.length = 0;
gdjs.GameCode.GDNormalObjects1.length = 0;
gdjs.GameCode.GDNormalObjects2.length = 0;
gdjs.GameCode.GDNormalObjects3.length = 0;
gdjs.GameCode.GDNormalObjects4.length = 0;
gdjs.GameCode.GDNormalObjects5.length = 0;
gdjs.GameCode.GDNormalObjects6.length = 0;
gdjs.GameCode.GDPowershotObjects1.length = 0;
gdjs.GameCode.GDPowershotObjects2.length = 0;
gdjs.GameCode.GDPowershotObjects3.length = 0;
gdjs.GameCode.GDPowershotObjects4.length = 0;
gdjs.GameCode.GDPowershotObjects5.length = 0;
gdjs.GameCode.GDPowershotObjects6.length = 0;
gdjs.GameCode.GDSliceObjects1.length = 0;
gdjs.GameCode.GDSliceObjects2.length = 0;
gdjs.GameCode.GDSliceObjects3.length = 0;
gdjs.GameCode.GDSliceObjects4.length = 0;
gdjs.GameCode.GDSliceObjects5.length = 0;
gdjs.GameCode.GDSliceObjects6.length = 0;
gdjs.GameCode.GDLobObjects1.length = 0;
gdjs.GameCode.GDLobObjects2.length = 0;
gdjs.GameCode.GDLobObjects3.length = 0;
gdjs.GameCode.GDLobObjects4.length = 0;
gdjs.GameCode.GDLobObjects5.length = 0;
gdjs.GameCode.GDLobObjects6.length = 0;
gdjs.GameCode.GDPaddleObjects1.length = 0;
gdjs.GameCode.GDPaddleObjects2.length = 0;
gdjs.GameCode.GDPaddleObjects3.length = 0;
gdjs.GameCode.GDPaddleObjects4.length = 0;
gdjs.GameCode.GDPaddleObjects5.length = 0;
gdjs.GameCode.GDPaddleObjects6.length = 0;
gdjs.GameCode.GDScoreObjects1.length = 0;
gdjs.GameCode.GDScoreObjects2.length = 0;
gdjs.GameCode.GDScoreObjects3.length = 0;
gdjs.GameCode.GDScoreObjects4.length = 0;
gdjs.GameCode.GDScoreObjects5.length = 0;
gdjs.GameCode.GDScoreObjects6.length = 0;
gdjs.GameCode.GDPShotObjects1.length = 0;
gdjs.GameCode.GDPShotObjects2.length = 0;
gdjs.GameCode.GDPShotObjects3.length = 0;
gdjs.GameCode.GDPShotObjects4.length = 0;
gdjs.GameCode.GDPShotObjects5.length = 0;
gdjs.GameCode.GDPShotObjects6.length = 0;
gdjs.GameCode.GDsetstextObjects1.length = 0;
gdjs.GameCode.GDsetstextObjects2.length = 0;
gdjs.GameCode.GDsetstextObjects3.length = 0;
gdjs.GameCode.GDsetstextObjects4.length = 0;
gdjs.GameCode.GDsetstextObjects5.length = 0;
gdjs.GameCode.GDsetstextObjects6.length = 0;
gdjs.GameCode.GDSetsLobsObjects1.length = 0;
gdjs.GameCode.GDSetsLobsObjects2.length = 0;
gdjs.GameCode.GDSetsLobsObjects3.length = 0;
gdjs.GameCode.GDSetsLobsObjects4.length = 0;
gdjs.GameCode.GDSetsLobsObjects5.length = 0;
gdjs.GameCode.GDSetsLobsObjects6.length = 0;
gdjs.GameCode.GDSetsSlicersObjects1.length = 0;
gdjs.GameCode.GDSetsSlicersObjects2.length = 0;
gdjs.GameCode.GDSetsSlicersObjects3.length = 0;
gdjs.GameCode.GDSetsSlicersObjects4.length = 0;
gdjs.GameCode.GDSetsSlicersObjects5.length = 0;
gdjs.GameCode.GDSetsSlicersObjects6.length = 0;
gdjs.GameCode.GDCustomLobbiesObjects1.length = 0;
gdjs.GameCode.GDCustomLobbiesObjects2.length = 0;
gdjs.GameCode.GDCustomLobbiesObjects3.length = 0;
gdjs.GameCode.GDCustomLobbiesObjects4.length = 0;
gdjs.GameCode.GDCustomLobbiesObjects5.length = 0;
gdjs.GameCode.GDCustomLobbiesObjects6.length = 0;
gdjs.GameCode.GDOnlineCheckObjects1.length = 0;
gdjs.GameCode.GDOnlineCheckObjects2.length = 0;
gdjs.GameCode.GDOnlineCheckObjects3.length = 0;
gdjs.GameCode.GDOnlineCheckObjects4.length = 0;
gdjs.GameCode.GDOnlineCheckObjects5.length = 0;
gdjs.GameCode.GDOnlineCheckObjects6.length = 0;
gdjs.GameCode.GDCursorObjects1.length = 0;
gdjs.GameCode.GDCursorObjects2.length = 0;
gdjs.GameCode.GDCursorObjects3.length = 0;
gdjs.GameCode.GDCursorObjects4.length = 0;
gdjs.GameCode.GDCursorObjects5.length = 0;
gdjs.GameCode.GDCursorObjects6.length = 0;

gdjs.GameCode.eventsList100(runtimeScene);
gdjs.GameCode.GDCourtObjects1.length = 0;
gdjs.GameCode.GDCourtObjects2.length = 0;
gdjs.GameCode.GDCourtObjects3.length = 0;
gdjs.GameCode.GDCourtObjects4.length = 0;
gdjs.GameCode.GDCourtObjects5.length = 0;
gdjs.GameCode.GDCourtObjects6.length = 0;
gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects3.length = 0;
gdjs.GameCode.GDPlayerObjects4.length = 0;
gdjs.GameCode.GDPlayerObjects5.length = 0;
gdjs.GameCode.GDPlayerObjects6.length = 0;
gdjs.GameCode.GDWallObjects1.length = 0;
gdjs.GameCode.GDWallObjects2.length = 0;
gdjs.GameCode.GDWallObjects3.length = 0;
gdjs.GameCode.GDWallObjects4.length = 0;
gdjs.GameCode.GDWallObjects5.length = 0;
gdjs.GameCode.GDWallObjects6.length = 0;
gdjs.GameCode.GDMidPointObjects1.length = 0;
gdjs.GameCode.GDMidPointObjects2.length = 0;
gdjs.GameCode.GDMidPointObjects3.length = 0;
gdjs.GameCode.GDMidPointObjects4.length = 0;
gdjs.GameCode.GDMidPointObjects5.length = 0;
gdjs.GameCode.GDMidPointObjects6.length = 0;
gdjs.GameCode.GDBallObjects1.length = 0;
gdjs.GameCode.GDBallObjects2.length = 0;
gdjs.GameCode.GDBallObjects3.length = 0;
gdjs.GameCode.GDBallObjects4.length = 0;
gdjs.GameCode.GDBallObjects5.length = 0;
gdjs.GameCode.GDBallObjects6.length = 0;
gdjs.GameCode.GDPlayerWallObjects1.length = 0;
gdjs.GameCode.GDPlayerWallObjects2.length = 0;
gdjs.GameCode.GDPlayerWallObjects3.length = 0;
gdjs.GameCode.GDPlayerWallObjects4.length = 0;
gdjs.GameCode.GDPlayerWallObjects5.length = 0;
gdjs.GameCode.GDPlayerWallObjects6.length = 0;
gdjs.GameCode.GDMetalRedBarObjects1.length = 0;
gdjs.GameCode.GDMetalRedBarObjects2.length = 0;
gdjs.GameCode.GDMetalRedBarObjects3.length = 0;
gdjs.GameCode.GDMetalRedBarObjects4.length = 0;
gdjs.GameCode.GDMetalRedBarObjects5.length = 0;
gdjs.GameCode.GDMetalRedBarObjects6.length = 0;
gdjs.GameCode.GDPCardObjects1.length = 0;
gdjs.GameCode.GDPCardObjects2.length = 0;
gdjs.GameCode.GDPCardObjects3.length = 0;
gdjs.GameCode.GDPCardObjects4.length = 0;
gdjs.GameCode.GDPCardObjects5.length = 0;
gdjs.GameCode.GDPCardObjects6.length = 0;
gdjs.GameCode.GDHPBarObjects1.length = 0;
gdjs.GameCode.GDHPBarObjects2.length = 0;
gdjs.GameCode.GDHPBarObjects3.length = 0;
gdjs.GameCode.GDHPBarObjects4.length = 0;
gdjs.GameCode.GDHPBarObjects5.length = 0;
gdjs.GameCode.GDHPBarObjects6.length = 0;
gdjs.GameCode.GDPTextObjects1.length = 0;
gdjs.GameCode.GDPTextObjects2.length = 0;
gdjs.GameCode.GDPTextObjects3.length = 0;
gdjs.GameCode.GDPTextObjects4.length = 0;
gdjs.GameCode.GDPTextObjects5.length = 0;
gdjs.GameCode.GDPTextObjects6.length = 0;
gdjs.GameCode.GDP2TextObjects1.length = 0;
gdjs.GameCode.GDP2TextObjects2.length = 0;
gdjs.GameCode.GDP2TextObjects3.length = 0;
gdjs.GameCode.GDP2TextObjects4.length = 0;
gdjs.GameCode.GDP2TextObjects5.length = 0;
gdjs.GameCode.GDP2TextObjects6.length = 0;
gdjs.GameCode.GDShadedDarkJoystickObjects1.length = 0;
gdjs.GameCode.GDShadedDarkJoystickObjects2.length = 0;
gdjs.GameCode.GDShadedDarkJoystickObjects3.length = 0;
gdjs.GameCode.GDShadedDarkJoystickObjects4.length = 0;
gdjs.GameCode.GDShadedDarkJoystickObjects5.length = 0;
gdjs.GameCode.GDShadedDarkJoystickObjects6.length = 0;
gdjs.GameCode.GDOnScreenControlsButtonObjects1.length = 0;
gdjs.GameCode.GDOnScreenControlsButtonObjects2.length = 0;
gdjs.GameCode.GDOnScreenControlsButtonObjects3.length = 0;
gdjs.GameCode.GDOnScreenControlsButtonObjects4.length = 0;
gdjs.GameCode.GDOnScreenControlsButtonObjects5.length = 0;
gdjs.GameCode.GDOnScreenControlsButtonObjects6.length = 0;
gdjs.GameCode.GDHITObjects1.length = 0;
gdjs.GameCode.GDHITObjects2.length = 0;
gdjs.GameCode.GDHITObjects3.length = 0;
gdjs.GameCode.GDHITObjects4.length = 0;
gdjs.GameCode.GDHITObjects5.length = 0;
gdjs.GameCode.GDHITObjects6.length = 0;
gdjs.GameCode.GDScoreCardObjects1.length = 0;
gdjs.GameCode.GDScoreCardObjects2.length = 0;
gdjs.GameCode.GDScoreCardObjects3.length = 0;
gdjs.GameCode.GDScoreCardObjects4.length = 0;
gdjs.GameCode.GDScoreCardObjects5.length = 0;
gdjs.GameCode.GDScoreCardObjects6.length = 0;
gdjs.GameCode.GDgroundledObjects1.length = 0;
gdjs.GameCode.GDgroundledObjects2.length = 0;
gdjs.GameCode.GDgroundledObjects3.length = 0;
gdjs.GameCode.GDgroundledObjects4.length = 0;
gdjs.GameCode.GDgroundledObjects5.length = 0;
gdjs.GameCode.GDgroundledObjects6.length = 0;
gdjs.GameCode.GDLobsScoreObjects1.length = 0;
gdjs.GameCode.GDLobsScoreObjects2.length = 0;
gdjs.GameCode.GDLobsScoreObjects3.length = 0;
gdjs.GameCode.GDLobsScoreObjects4.length = 0;
gdjs.GameCode.GDLobsScoreObjects5.length = 0;
gdjs.GameCode.GDLobsScoreObjects6.length = 0;
gdjs.GameCode.GDSlicersScoreObjects1.length = 0;
gdjs.GameCode.GDSlicersScoreObjects2.length = 0;
gdjs.GameCode.GDSlicersScoreObjects3.length = 0;
gdjs.GameCode.GDSlicersScoreObjects4.length = 0;
gdjs.GameCode.GDSlicersScoreObjects5.length = 0;
gdjs.GameCode.GDSlicersScoreObjects6.length = 0;
gdjs.GameCode.GDLobsIconObjects1.length = 0;
gdjs.GameCode.GDLobsIconObjects2.length = 0;
gdjs.GameCode.GDLobsIconObjects3.length = 0;
gdjs.GameCode.GDLobsIconObjects4.length = 0;
gdjs.GameCode.GDLobsIconObjects5.length = 0;
gdjs.GameCode.GDLobsIconObjects6.length = 0;
gdjs.GameCode.GDLobsSpriteObjects1.length = 0;
gdjs.GameCode.GDLobsSpriteObjects2.length = 0;
gdjs.GameCode.GDLobsSpriteObjects3.length = 0;
gdjs.GameCode.GDLobsSpriteObjects4.length = 0;
gdjs.GameCode.GDLobsSpriteObjects5.length = 0;
gdjs.GameCode.GDLobsSpriteObjects6.length = 0;
gdjs.GameCode.GDBallHitboxObjects1.length = 0;
gdjs.GameCode.GDBallHitboxObjects2.length = 0;
gdjs.GameCode.GDBallHitboxObjects3.length = 0;
gdjs.GameCode.GDBallHitboxObjects4.length = 0;
gdjs.GameCode.GDBallHitboxObjects5.length = 0;
gdjs.GameCode.GDBallHitboxObjects6.length = 0;
gdjs.GameCode.GDP3TextObjects1.length = 0;
gdjs.GameCode.GDP3TextObjects2.length = 0;
gdjs.GameCode.GDP3TextObjects3.length = 0;
gdjs.GameCode.GDP3TextObjects4.length = 0;
gdjs.GameCode.GDP3TextObjects5.length = 0;
gdjs.GameCode.GDP3TextObjects6.length = 0;
gdjs.GameCode.GDScoreDisplayObjects1.length = 0;
gdjs.GameCode.GDScoreDisplayObjects2.length = 0;
gdjs.GameCode.GDScoreDisplayObjects3.length = 0;
gdjs.GameCode.GDScoreDisplayObjects4.length = 0;
gdjs.GameCode.GDScoreDisplayObjects5.length = 0;
gdjs.GameCode.GDScoreDisplayObjects6.length = 0;
gdjs.GameCode.GDscore_9595Objects1.length = 0;
gdjs.GameCode.GDscore_9595Objects2.length = 0;
gdjs.GameCode.GDscore_9595Objects3.length = 0;
gdjs.GameCode.GDscore_9595Objects4.length = 0;
gdjs.GameCode.GDscore_9595Objects5.length = 0;
gdjs.GameCode.GDscore_9595Objects6.length = 0;
gdjs.GameCode.GDScoreTextIconLObjects1.length = 0;
gdjs.GameCode.GDScoreTextIconLObjects2.length = 0;
gdjs.GameCode.GDScoreTextIconLObjects3.length = 0;
gdjs.GameCode.GDScoreTextIconLObjects4.length = 0;
gdjs.GameCode.GDScoreTextIconLObjects5.length = 0;
gdjs.GameCode.GDScoreTextIconLObjects6.length = 0;
gdjs.GameCode.GDScoreTextIconSObjects1.length = 0;
gdjs.GameCode.GDScoreTextIconSObjects2.length = 0;
gdjs.GameCode.GDScoreTextIconSObjects3.length = 0;
gdjs.GameCode.GDScoreTextIconSObjects4.length = 0;
gdjs.GameCode.GDScoreTextIconSObjects5.length = 0;
gdjs.GameCode.GDScoreTextIconSObjects6.length = 0;
gdjs.GameCode.GDPSHOTObjects1.length = 0;
gdjs.GameCode.GDPSHOTObjects2.length = 0;
gdjs.GameCode.GDPSHOTObjects3.length = 0;
gdjs.GameCode.GDPSHOTObjects4.length = 0;
gdjs.GameCode.GDPSHOTObjects5.length = 0;
gdjs.GameCode.GDPSHOTObjects6.length = 0;
gdjs.GameCode.GDlobObjects1.length = 0;
gdjs.GameCode.GDlobObjects2.length = 0;
gdjs.GameCode.GDlobObjects3.length = 0;
gdjs.GameCode.GDlobObjects4.length = 0;
gdjs.GameCode.GDlobObjects5.length = 0;
gdjs.GameCode.GDlobObjects6.length = 0;
gdjs.GameCode.GDsliceObjects1.length = 0;
gdjs.GameCode.GDsliceObjects2.length = 0;
gdjs.GameCode.GDsliceObjects3.length = 0;
gdjs.GameCode.GDsliceObjects4.length = 0;
gdjs.GameCode.GDsliceObjects5.length = 0;
gdjs.GameCode.GDsliceObjects6.length = 0;
gdjs.GameCode.GDNormal_9595ButtonObjects1.length = 0;
gdjs.GameCode.GDNormal_9595ButtonObjects2.length = 0;
gdjs.GameCode.GDNormal_9595ButtonObjects3.length = 0;
gdjs.GameCode.GDNormal_9595ButtonObjects4.length = 0;
gdjs.GameCode.GDNormal_9595ButtonObjects5.length = 0;
gdjs.GameCode.GDNormal_9595ButtonObjects6.length = 0;
gdjs.GameCode.GDNormalObjects1.length = 0;
gdjs.GameCode.GDNormalObjects2.length = 0;
gdjs.GameCode.GDNormalObjects3.length = 0;
gdjs.GameCode.GDNormalObjects4.length = 0;
gdjs.GameCode.GDNormalObjects5.length = 0;
gdjs.GameCode.GDNormalObjects6.length = 0;
gdjs.GameCode.GDPowershotObjects1.length = 0;
gdjs.GameCode.GDPowershotObjects2.length = 0;
gdjs.GameCode.GDPowershotObjects3.length = 0;
gdjs.GameCode.GDPowershotObjects4.length = 0;
gdjs.GameCode.GDPowershotObjects5.length = 0;
gdjs.GameCode.GDPowershotObjects6.length = 0;
gdjs.GameCode.GDSliceObjects1.length = 0;
gdjs.GameCode.GDSliceObjects2.length = 0;
gdjs.GameCode.GDSliceObjects3.length = 0;
gdjs.GameCode.GDSliceObjects4.length = 0;
gdjs.GameCode.GDSliceObjects5.length = 0;
gdjs.GameCode.GDSliceObjects6.length = 0;
gdjs.GameCode.GDLobObjects1.length = 0;
gdjs.GameCode.GDLobObjects2.length = 0;
gdjs.GameCode.GDLobObjects3.length = 0;
gdjs.GameCode.GDLobObjects4.length = 0;
gdjs.GameCode.GDLobObjects5.length = 0;
gdjs.GameCode.GDLobObjects6.length = 0;
gdjs.GameCode.GDPaddleObjects1.length = 0;
gdjs.GameCode.GDPaddleObjects2.length = 0;
gdjs.GameCode.GDPaddleObjects3.length = 0;
gdjs.GameCode.GDPaddleObjects4.length = 0;
gdjs.GameCode.GDPaddleObjects5.length = 0;
gdjs.GameCode.GDPaddleObjects6.length = 0;
gdjs.GameCode.GDScoreObjects1.length = 0;
gdjs.GameCode.GDScoreObjects2.length = 0;
gdjs.GameCode.GDScoreObjects3.length = 0;
gdjs.GameCode.GDScoreObjects4.length = 0;
gdjs.GameCode.GDScoreObjects5.length = 0;
gdjs.GameCode.GDScoreObjects6.length = 0;
gdjs.GameCode.GDPShotObjects1.length = 0;
gdjs.GameCode.GDPShotObjects2.length = 0;
gdjs.GameCode.GDPShotObjects3.length = 0;
gdjs.GameCode.GDPShotObjects4.length = 0;
gdjs.GameCode.GDPShotObjects5.length = 0;
gdjs.GameCode.GDPShotObjects6.length = 0;
gdjs.GameCode.GDsetstextObjects1.length = 0;
gdjs.GameCode.GDsetstextObjects2.length = 0;
gdjs.GameCode.GDsetstextObjects3.length = 0;
gdjs.GameCode.GDsetstextObjects4.length = 0;
gdjs.GameCode.GDsetstextObjects5.length = 0;
gdjs.GameCode.GDsetstextObjects6.length = 0;
gdjs.GameCode.GDSetsLobsObjects1.length = 0;
gdjs.GameCode.GDSetsLobsObjects2.length = 0;
gdjs.GameCode.GDSetsLobsObjects3.length = 0;
gdjs.GameCode.GDSetsLobsObjects4.length = 0;
gdjs.GameCode.GDSetsLobsObjects5.length = 0;
gdjs.GameCode.GDSetsLobsObjects6.length = 0;
gdjs.GameCode.GDSetsSlicersObjects1.length = 0;
gdjs.GameCode.GDSetsSlicersObjects2.length = 0;
gdjs.GameCode.GDSetsSlicersObjects3.length = 0;
gdjs.GameCode.GDSetsSlicersObjects4.length = 0;
gdjs.GameCode.GDSetsSlicersObjects5.length = 0;
gdjs.GameCode.GDSetsSlicersObjects6.length = 0;
gdjs.GameCode.GDCustomLobbiesObjects1.length = 0;
gdjs.GameCode.GDCustomLobbiesObjects2.length = 0;
gdjs.GameCode.GDCustomLobbiesObjects3.length = 0;
gdjs.GameCode.GDCustomLobbiesObjects4.length = 0;
gdjs.GameCode.GDCustomLobbiesObjects5.length = 0;
gdjs.GameCode.GDCustomLobbiesObjects6.length = 0;
gdjs.GameCode.GDOnlineCheckObjects1.length = 0;
gdjs.GameCode.GDOnlineCheckObjects2.length = 0;
gdjs.GameCode.GDOnlineCheckObjects3.length = 0;
gdjs.GameCode.GDOnlineCheckObjects4.length = 0;
gdjs.GameCode.GDOnlineCheckObjects5.length = 0;
gdjs.GameCode.GDOnlineCheckObjects6.length = 0;
gdjs.GameCode.GDCursorObjects1.length = 0;
gdjs.GameCode.GDCursorObjects2.length = 0;
gdjs.GameCode.GDCursorObjects3.length = 0;
gdjs.GameCode.GDCursorObjects4.length = 0;
gdjs.GameCode.GDCursorObjects5.length = 0;
gdjs.GameCode.GDCursorObjects6.length = 0;


return;

}

gdjs['GameCode'] = gdjs.GameCode;
