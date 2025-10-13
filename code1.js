gdjs.GameCode = {};
gdjs.GameCode.localVariables = [];
gdjs.GameCode.idToCallbackMap = new Map();
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
gdjs.GameCode.GDPlayerObjects1= [];
gdjs.GameCode.GDPlayerObjects2= [];
gdjs.GameCode.GDPlayerObjects3= [];
gdjs.GameCode.GDPlayerObjects4= [];
gdjs.GameCode.GDPlayerObjects5= [];
gdjs.GameCode.GDWallObjects1= [];
gdjs.GameCode.GDWallObjects2= [];
gdjs.GameCode.GDWallObjects3= [];
gdjs.GameCode.GDWallObjects4= [];
gdjs.GameCode.GDWallObjects5= [];
gdjs.GameCode.GDMidPointObjects1= [];
gdjs.GameCode.GDMidPointObjects2= [];
gdjs.GameCode.GDMidPointObjects3= [];
gdjs.GameCode.GDMidPointObjects4= [];
gdjs.GameCode.GDMidPointObjects5= [];
gdjs.GameCode.GDBallObjects1= [];
gdjs.GameCode.GDBallObjects2= [];
gdjs.GameCode.GDBallObjects3= [];
gdjs.GameCode.GDBallObjects4= [];
gdjs.GameCode.GDBallObjects5= [];
gdjs.GameCode.GDPlayerWallObjects1= [];
gdjs.GameCode.GDPlayerWallObjects2= [];
gdjs.GameCode.GDPlayerWallObjects3= [];
gdjs.GameCode.GDPlayerWallObjects4= [];
gdjs.GameCode.GDPlayerWallObjects5= [];
gdjs.GameCode.GDMetalRedBarObjects1= [];
gdjs.GameCode.GDMetalRedBarObjects2= [];
gdjs.GameCode.GDMetalRedBarObjects3= [];
gdjs.GameCode.GDMetalRedBarObjects4= [];
gdjs.GameCode.GDMetalRedBarObjects5= [];
gdjs.GameCode.GDPCardObjects1= [];
gdjs.GameCode.GDPCardObjects2= [];
gdjs.GameCode.GDPCardObjects3= [];
gdjs.GameCode.GDPCardObjects4= [];
gdjs.GameCode.GDPCardObjects5= [];
gdjs.GameCode.GDHPBarObjects1= [];
gdjs.GameCode.GDHPBarObjects2= [];
gdjs.GameCode.GDHPBarObjects3= [];
gdjs.GameCode.GDHPBarObjects4= [];
gdjs.GameCode.GDHPBarObjects5= [];
gdjs.GameCode.GDPTextObjects1= [];
gdjs.GameCode.GDPTextObjects2= [];
gdjs.GameCode.GDPTextObjects3= [];
gdjs.GameCode.GDPTextObjects4= [];
gdjs.GameCode.GDPTextObjects5= [];
gdjs.GameCode.GDP2TextObjects1= [];
gdjs.GameCode.GDP2TextObjects2= [];
gdjs.GameCode.GDP2TextObjects3= [];
gdjs.GameCode.GDP2TextObjects4= [];
gdjs.GameCode.GDP2TextObjects5= [];
gdjs.GameCode.GDShadedDarkJoystickObjects1= [];
gdjs.GameCode.GDShadedDarkJoystickObjects2= [];
gdjs.GameCode.GDShadedDarkJoystickObjects3= [];
gdjs.GameCode.GDShadedDarkJoystickObjects4= [];
gdjs.GameCode.GDShadedDarkJoystickObjects5= [];
gdjs.GameCode.GDOnScreenControlsButtonObjects1= [];
gdjs.GameCode.GDOnScreenControlsButtonObjects2= [];
gdjs.GameCode.GDOnScreenControlsButtonObjects3= [];
gdjs.GameCode.GDOnScreenControlsButtonObjects4= [];
gdjs.GameCode.GDOnScreenControlsButtonObjects5= [];
gdjs.GameCode.GDHITObjects1= [];
gdjs.GameCode.GDHITObjects2= [];
gdjs.GameCode.GDHITObjects3= [];
gdjs.GameCode.GDHITObjects4= [];
gdjs.GameCode.GDHITObjects5= [];
gdjs.GameCode.GDScoreCardObjects1= [];
gdjs.GameCode.GDScoreCardObjects2= [];
gdjs.GameCode.GDScoreCardObjects3= [];
gdjs.GameCode.GDScoreCardObjects4= [];
gdjs.GameCode.GDScoreCardObjects5= [];
gdjs.GameCode.GDgroundledObjects1= [];
gdjs.GameCode.GDgroundledObjects2= [];
gdjs.GameCode.GDgroundledObjects3= [];
gdjs.GameCode.GDgroundledObjects4= [];
gdjs.GameCode.GDgroundledObjects5= [];
gdjs.GameCode.GDLobsScoreObjects1= [];
gdjs.GameCode.GDLobsScoreObjects2= [];
gdjs.GameCode.GDLobsScoreObjects3= [];
gdjs.GameCode.GDLobsScoreObjects4= [];
gdjs.GameCode.GDLobsScoreObjects5= [];
gdjs.GameCode.GDSlicersScoreObjects1= [];
gdjs.GameCode.GDSlicersScoreObjects2= [];
gdjs.GameCode.GDSlicersScoreObjects3= [];
gdjs.GameCode.GDSlicersScoreObjects4= [];
gdjs.GameCode.GDSlicersScoreObjects5= [];
gdjs.GameCode.GDLobsIconObjects1= [];
gdjs.GameCode.GDLobsIconObjects2= [];
gdjs.GameCode.GDLobsIconObjects3= [];
gdjs.GameCode.GDLobsIconObjects4= [];
gdjs.GameCode.GDLobsIconObjects5= [];
gdjs.GameCode.GDLobsSpriteObjects1= [];
gdjs.GameCode.GDLobsSpriteObjects2= [];
gdjs.GameCode.GDLobsSpriteObjects3= [];
gdjs.GameCode.GDLobsSpriteObjects4= [];
gdjs.GameCode.GDLobsSpriteObjects5= [];
gdjs.GameCode.GDBallHitboxObjects1= [];
gdjs.GameCode.GDBallHitboxObjects2= [];
gdjs.GameCode.GDBallHitboxObjects3= [];
gdjs.GameCode.GDBallHitboxObjects4= [];
gdjs.GameCode.GDBallHitboxObjects5= [];
gdjs.GameCode.GDP3TextObjects1= [];
gdjs.GameCode.GDP3TextObjects2= [];
gdjs.GameCode.GDP3TextObjects3= [];
gdjs.GameCode.GDP3TextObjects4= [];
gdjs.GameCode.GDP3TextObjects5= [];
gdjs.GameCode.GDScoreDisplayObjects1= [];
gdjs.GameCode.GDScoreDisplayObjects2= [];
gdjs.GameCode.GDScoreDisplayObjects3= [];
gdjs.GameCode.GDScoreDisplayObjects4= [];
gdjs.GameCode.GDScoreDisplayObjects5= [];
gdjs.GameCode.GDscore_9595Objects1= [];
gdjs.GameCode.GDscore_9595Objects2= [];
gdjs.GameCode.GDscore_9595Objects3= [];
gdjs.GameCode.GDscore_9595Objects4= [];
gdjs.GameCode.GDscore_9595Objects5= [];
gdjs.GameCode.GDScoreTextIconLObjects1= [];
gdjs.GameCode.GDScoreTextIconLObjects2= [];
gdjs.GameCode.GDScoreTextIconLObjects3= [];
gdjs.GameCode.GDScoreTextIconLObjects4= [];
gdjs.GameCode.GDScoreTextIconLObjects5= [];
gdjs.GameCode.GDScoreTextIconSObjects1= [];
gdjs.GameCode.GDScoreTextIconSObjects2= [];
gdjs.GameCode.GDScoreTextIconSObjects3= [];
gdjs.GameCode.GDScoreTextIconSObjects4= [];
gdjs.GameCode.GDScoreTextIconSObjects5= [];
gdjs.GameCode.GDCustomLobbiesObjects1= [];
gdjs.GameCode.GDCustomLobbiesObjects2= [];
gdjs.GameCode.GDCustomLobbiesObjects3= [];
gdjs.GameCode.GDCustomLobbiesObjects4= [];
gdjs.GameCode.GDCustomLobbiesObjects5= [];


gdjs.GameCode.eventsList0 = function(runtimeScene) {

};gdjs.GameCode.eventsList1 = function(runtimeScene) {

};gdjs.GameCode.eventsList2 = function(runtimeScene) {

};gdjs.GameCode.eventsList3 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects4Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects4Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects5});
gdjs.GameCode.eventsList4 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects5});
gdjs.GameCode.eventsList5 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects5});
gdjs.GameCode.eventsList6 = function(runtimeScene) {

};gdjs.GameCode.eventsList7 = function(runtimeScene) {

};gdjs.GameCode.eventsList8 = function(runtimeScene) {

};gdjs.GameCode.eventsList9 = function(runtimeScene) {

};gdjs.GameCode.eventsList10 = function(runtimeScene) {

};gdjs.GameCode.eventsList11 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);
/* Reuse gdjs.GameCode.GDShadedDarkJoystickObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects4[i].getBehavior("TopDownMovement").simulateStick((( gdjs.GameCode.GDShadedDarkJoystickObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDShadedDarkJoystickObjects4[0].StickAngle(null)), 1);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p1").getChild("x").setNumber((( gdjs.GameCode.GDShadedDarkJoystickObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDShadedDarkJoystickObjects4[0].StickForceX(null)));
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p1").getChild("y").setNumber((( gdjs.GameCode.GDShadedDarkJoystickObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDShadedDarkJoystickObjects4[0].StickForceY(null)));
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
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Delete");
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11199796);
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].returnVariable(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(1)).sub(50);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(1).getAsNumber());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDPlayerObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.copyArray(runtimeScene.getObjects("OnScreenControlsButton"), gdjs.GameCode.GDOnScreenControlsButtonObjects5);
gdjs.GameCode.GDPlayerObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDPlayerObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDPlayerObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDOnScreenControlsButtonObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDOnScreenControlsButtonObjects5[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDOnScreenControlsButtonObjects5[k] = gdjs.GameCode.GDOnScreenControlsButtonObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDOnScreenControlsButtonObjects5.length = k;
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13498540);
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].returnVariable(gdjs.GameCode.GDPlayerObjects5[i].getVariables().getFromIndex(1)).sub(50);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(((gdjs.GameCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects5[0].getVariables()).getFromIndex(1).getAsNumber());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BallHitbox"), gdjs.GameCode.GDBallHitboxObjects4);
gdjs.copyArray(runtimeScene.getObjects("HIT"), gdjs.GameCode.GDHITObjects4);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDHITObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDHITObjects4[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDHITObjects4[k] = gdjs.GameCode.GDHITObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDHITObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects4Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects4Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10709972);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects4);
/* Reuse gdjs.GameCode.GDPlayerObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects4[i].getBehavior("Animation").setAnimationName("hitball");
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects4[i].clearForces();
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects4[i].addForce(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p1").getChild("x").getAsNumber() * 200, runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p1").getChild("y").getAsNumber() * 200, 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects4[i].getBehavior("Scale").setScale(1);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects4[i].getBehavior("Tween").addObjectColorTween2("qc", "255;255;255", "linear", 0.0000001, false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects4[i].getBehavior("Tween").addObjectScaleTween3("bouncein", (gdjs.GameCode.GDBallObjects4[i].getBehavior("Scale").getScale()) / 2, "linear", 1, false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects4[i].getBehavior("Tween").addObjectColorTween2("bounceinhue", "145;145;145", "linear", 1, false, true);
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
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects, false, runtimeScene, false);
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
    gdjs.GameCode.GDBallObjects5[i].addForce(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p1").getChild("x").getAsNumber() * 200, runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p1").getChild("y").getAsNumber() * 200, 1);
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
    gdjs.GameCode.GDBallObjects5[i].addForce(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p1").getChild("x").getAsNumber() * 250, runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p1").getChild("y").getAsNumber() * 250, 1);
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
    gdjs.GameCode.GDBallObjects5[i].addForce(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p1").getChild("x").getAsNumber() * 150, runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p1").getChild("y").getAsNumber() * 150, 1);
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
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p1").getChild("x").setNumber(-(1));
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
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].getBehavior("TopDownMovement").simulateUpKey();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p1").getChild("y").setNumber(-(1));
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
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].getBehavior("TopDownMovement").simulateDownKey();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p1").getChild("y").setNumber(1);
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
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects5[i].getBehavior("TopDownMovement").simulateRightKey();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p1").getChild("x").setNumber(1);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "a"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "d"));
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p1").getChild("x").setNumber(0);
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects5});
gdjs.GameCode.eventsList12 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects5});
gdjs.GameCode.eventsList13 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects5});
gdjs.GameCode.eventsList14 = function(runtimeScene) {

};gdjs.GameCode.eventsList15 = function(runtimeScene) {

};gdjs.GameCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Any", null);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p1").getChild("x").setNumber(gdjs.evtsExt__Gamepads__StickForceX.func(runtimeScene, 1, "Left", null));
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p1").getChild("y").setNumber(gdjs.evtsExt__Gamepads__StickForceY.func(runtimeScene, 1, "Left", null));
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
    gdjs.GameCode.GDBallObjects5[i].addForce(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p1").getChild("x").getAsNumber() * 150, runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p1").getChild("y").getAsNumber() * 150, 1);
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
    gdjs.GameCode.GDBallObjects5[i].addForce(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p1").getChild("x").getAsNumber() * 200, runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p1").getChild("y").getAsNumber() * 200, 1);
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
    gdjs.GameCode.GDBallObjects5[i].addForce(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p1").getChild("x").getAsNumber() * 250, runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p1").getChild("y").getAsNumber() * 250, 1);
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
gdjs.GameCode.eventsList17 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects5});
gdjs.GameCode.eventsList18 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects5});
gdjs.GameCode.eventsList19 = function(runtimeScene) {

};gdjs.GameCode.eventsList20 = function(runtimeScene) {

};gdjs.GameCode.eventsList21 = function(runtimeScene) {

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
    gdjs.GameCode.GDBallObjects5[i].addForce(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p2").getChild("x").getAsNumber() * 250, runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p2").getChild("y").getAsNumber() * 250, 1);
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
    gdjs.GameCode.GDBallObjects5[i].addForce(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p2").getChild("x").getAsNumber() * 200, runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p2").getChild("y").getAsNumber() * 200, 1);
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
    gdjs.GameCode.GDBallObjects5[i].addForce(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p2").getChild("x").getAsNumber() * 150, runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p2").getChild("y").getAsNumber() * 150, 1);
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


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 2, "Left", "Any", null);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p2").getChild("x").setNumber(gdjs.evtsExt__Gamepads__StickForceX.func(runtimeScene, 2, "Left", null));
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p2").getChild("y").setNumber(gdjs.evtsExt__Gamepads__StickForceY.func(runtimeScene, 2, "Left", null));
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
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 2, "Left", "Any", null);
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
gdjs.GameCode.eventsList22 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects5});
gdjs.GameCode.eventsList23 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects5Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects5Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects5});
gdjs.GameCode.eventsList24 = function(runtimeScene) {

};gdjs.GameCode.eventsList25 = function(runtimeScene) {

};gdjs.GameCode.eventsList26 = function(runtimeScene) {

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
    gdjs.GameCode.GDBallObjects5[i].addForce(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p3").getChild("x").getAsNumber() * 150, runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p3").getChild("y").getAsNumber() * 150, 1);
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
    gdjs.GameCode.GDBallObjects5[i].addForce(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p3").getChild("x").getAsNumber() * 200, runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p3").getChild("y").getAsNumber() * 200, 1);
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
    gdjs.GameCode.GDBallObjects5[i].addForce(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p3").getChild("x").getAsNumber() * 250, runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p3").getChild("y").getAsNumber() * 250, 1);
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


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 3, "Left", "Any", null);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p3").getChild("x").setNumber(gdjs.evtsExt__Gamepads__StickForceX.func(runtimeScene, 3, "Left", null));
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p3").getChild("y").setNumber(gdjs.evtsExt__Gamepads__StickForceY.func(runtimeScene, 3, "Left", null));
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
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 3, "Left", "Any", null);
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects4[i].getBehavior("TopDownMovement").simulateStick(gdjs.evtsExt__Gamepads__StickAngle.func(runtimeScene, 3, "Left", null), gdjs.evtsExt__Gamepads__StickForce.func(runtimeScene, 3, "Left", null));
}
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects4Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects4Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects4});
gdjs.GameCode.eventsList27 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects4Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects4Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects4});
gdjs.GameCode.eventsList28 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects4Objects = Hashtable.newFrom({"BallHitbox": gdjs.GameCode.GDBallHitboxObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects4Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects4});
gdjs.GameCode.eventsList29 = function(runtimeScene) {

};gdjs.GameCode.eventsList30 = function(runtimeScene) {

};gdjs.GameCode.eventsList31 = function(runtimeScene) {

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
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 4, "X", null);
if (isConditionTrue_0) {
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
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects4Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects4Objects, false, runtimeScene, false);
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects4[i].getBehavior("Animation").setAnimationName("hitball");
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects4[i].clearForces();
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects4[i].addForce(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p4").getChild("x").getAsNumber() * 150, runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p4").getChild("y").getAsNumber() * 150, 1);
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
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 4, "A", null);
if (isConditionTrue_0) {
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
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects4Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects4Objects, false, runtimeScene, false);
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects4[i].getBehavior("Animation").setAnimationName("hitball");
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects4[i].clearForces();
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects4[i].addForce(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p4").getChild("x").getAsNumber() * 200, runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p4").getChild("y").getAsNumber() * 200, 1);
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
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 4, "Y", null);
if (isConditionTrue_0) {
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
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallHitboxObjects4Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects4Objects, false, runtimeScene, false);
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects4[i].getBehavior("Animation").setAnimationName("hitball");
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects4[i].clearForces();
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects4[i].addForce(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p4").getChild("x").getAsNumber() * 250, runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p4").getChild("y").getAsNumber() * 250, 1);
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
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 4, "Left", "Any", null);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p1").getChild("x").setNumber(gdjs.evtsExt__Gamepads__StickForceX.func(runtimeScene, 4, "Left", null));
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("p1").getChild("y").setNumber(gdjs.evtsExt__Gamepads__StickForceY.func(runtimeScene, 4, "Left", null));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

for (gdjs.GameCode.forEachIndex3 = 0;gdjs.GameCode.forEachIndex3 < gdjs.GameCode.GDPlayerObjects2.length;++gdjs.GameCode.forEachIndex3) {
gdjs.GameCode.GDPlayerObjects3.length = 0;


gdjs.GameCode.forEachTemporary3 = gdjs.GameCode.GDPlayerObjects2[gdjs.GameCode.forEachIndex3];
gdjs.GameCode.GDPlayerObjects3.push(gdjs.GameCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects3[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects3[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects3[k] = gdjs.GameCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 4, "Left", "Any", null);
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].getBehavior("TopDownMovement").simulateStick(gdjs.evtsExt__Gamepads__StickAngle.func(runtimeScene, 4, "Left", null), gdjs.evtsExt__Gamepads__StickForce.func(runtimeScene, 4, "Left", null));
}
}
}
}

}


};gdjs.GameCode.eventsList32 = function(runtimeScene) {

{


gdjs.GameCode.eventsList11(runtimeScene);
}


{


gdjs.GameCode.eventsList16(runtimeScene);
}


{


gdjs.GameCode.eventsList21(runtimeScene);
}


{


gdjs.GameCode.eventsList26(runtimeScene);
}


{


gdjs.GameCode.eventsList31(runtimeScene);
}


};gdjs.GameCode.eventsList33 = function(runtimeScene) {

};gdjs.GameCode.eventsList34 = function(runtimeScene) {

};gdjs.GameCode.eventsList35 = function(runtimeScene) {

};gdjs.GameCode.eventsList36 = function(runtimeScene) {

};gdjs.GameCode.eventsList37 = function(runtimeScene) {

};gdjs.GameCode.eventsList38 = function(runtimeScene) {

};gdjs.GameCode.eventsList39 = function(runtimeScene) {

};gdjs.GameCode.eventsList40 = function(runtimeScene) {

};gdjs.GameCode.eventsList41 = function(runtimeScene) {

};gdjs.GameCode.eventsList42 = function(runtimeScene) {

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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12914460);
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

gdjs.copyArray(runtimeScene.getObjects("HPBar"), gdjs.GameCode.GDHPBarObjects2);

for (gdjs.GameCode.forEachIndex3 = 0;gdjs.GameCode.forEachIndex3 < gdjs.GameCode.GDHPBarObjects2.length;++gdjs.GameCode.forEachIndex3) {
gdjs.GameCode.GDHPBarObjects3.length = 0;


gdjs.GameCode.forEachTemporary3 = gdjs.GameCode.GDHPBarObjects2[gdjs.GameCode.forEachIndex3];
gdjs.GameCode.GDHPBarObjects3.push(gdjs.GameCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDHPBarObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDHPBarObjects3[i].getVariableNumber(gdjs.GameCode.GDHPBarObjects3[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDHPBarObjects3[k] = gdjs.GameCode.GDHPBarObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDHPBarObjects3.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDHPBarObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDHPBarObjects3[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("p4").getChild("x").getAsNumber() - 30.5,runtimeScene.getScene().getVariables().getFromIndex(1).getChild("p4").getChild("y").getAsNumber() - 61);
}
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
gdjs.GameCode.eventsList43 = function(runtimeScene) {

{


gdjs.GameCode.eventsList32(runtimeScene);
}


{


gdjs.GameCode.eventsList42(runtimeScene);
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
gdjs.GameCode.asyncCallback14131956 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
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
gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.idToCallbackMap.set(14131956, gdjs.GameCode.asyncCallback14131956);
gdjs.GameCode.eventsList44 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
for (const obj of gdjs.GameCode.GDScoreDisplayObjects3) asyncObjectsList.addObject("ScoreDisplay", obj);
for (const obj of gdjs.GameCode.GDScoreTextIconLObjects3) asyncObjectsList.addObject("ScoreTextIconL", obj);
for (const obj of gdjs.GameCode.GDScoreTextIconSObjects3) asyncObjectsList.addObject("ScoreTextIconS", obj);
for (const obj of gdjs.GameCode.GDscore_9595Objects3) asyncObjectsList.addObject("score_", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GameCode.asyncCallback14131956(runtimeScene, asyncObjectsList)), 14131956, asyncObjectsList);
}
}

}


};gdjs.GameCode.asyncCallback13757404 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
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
gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.idToCallbackMap.set(13757404, gdjs.GameCode.asyncCallback13757404);
gdjs.GameCode.eventsList45 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
for (const obj of gdjs.GameCode.GDScoreDisplayObjects2) asyncObjectsList.addObject("ScoreDisplay", obj);
for (const obj of gdjs.GameCode.GDScoreTextIconLObjects2) asyncObjectsList.addObject("ScoreTextIconL", obj);
for (const obj of gdjs.GameCode.GDScoreTextIconSObjects2) asyncObjectsList.addObject("ScoreTextIconS", obj);
for (const obj of gdjs.GameCode.GDscore_9595Objects2) asyncObjectsList.addObject("score_", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GameCode.asyncCallback13757404(runtimeScene, asyncObjectsList)), 13757404, asyncObjectsList);
}
}

}


};gdjs.GameCode.eventsList46 = function(runtimeScene) {

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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15799260);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ScoreDisplay"), gdjs.GameCode.GDScoreDisplayObjects3);
gdjs.copyArray(runtimeScene.getObjects("ScoreTextIconL"), gdjs.GameCode.GDScoreTextIconLObjects3);
gdjs.copyArray(runtimeScene.getObjects("ScoreTextIconS"), gdjs.GameCode.GDScoreTextIconSObjects3);
gdjs.copyArray(runtimeScene.getObjects("score_"), gdjs.GameCode.GDscore_9595Objects3);
{gdjs.evtTools.sound.playSound(runtimeScene, "pointscored.mp3", false, 10, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(4).add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
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
gdjs.GameCode.eventsList44(runtimeScene);} //End of subevents
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14291596);
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

{ //Subevents
gdjs.GameCode.eventsList45(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList47 = function(runtimeScene) {

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


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("BallHitbox"), gdjs.GameCode.GDBallHitboxObjects2);
gdjs.copyArray(runtimeScene.getObjects("LobsScore"), gdjs.GameCode.GDLobsScoreObjects2);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16147812);
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
gdjs.GameCode.eventsList46(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDBallObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBallObjects1[i].getBehavior("Tween").hasFinished("bounceout") ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDBallObjects1[k] = gdjs.GameCode.GDBallObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBallObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14240932);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBallObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects1[i].getBehavior("Tween").addObjectScaleTween3("bouncein", (gdjs.GameCode.GDBallObjects1[i].getBehavior("Scale").getScale()) / 2, "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects1[i].getBehavior("Tween").addObjectColorTween2("bounceinhue", "145;145;145", "linear", runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), false, true);
}
}
}

}


};gdjs.GameCode.eventsList48 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("BallHitbox"), gdjs.GameCode.GDBallHitboxObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerWall"), gdjs.GameCode.GDPlayerWallObjects1);
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
gdjs.copyArray(runtimeScene.getObjects("HIT"), gdjs.GameCode.GDHITObjects1);
gdjs.copyArray(runtimeScene.getObjects("OnScreenControlsButton"), gdjs.GameCode.GDOnScreenControlsButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("ShadedDarkJoystick"), gdjs.GameCode.GDShadedDarkJoystickObjects1);
{for(var i = 0, len = gdjs.GameCode.GDShadedDarkJoystickObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDShadedDarkJoystickObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameCode.GDOnScreenControlsButtonObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDOnScreenControlsButtonObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameCode.GDHITObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHITObjects1[i].deleteFromScene(runtimeScene);
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
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
gdjs.GameCode.GDHPBarObjects2.length = 0;


gdjs.GameCode.forEachTemporary2 = gdjs.GameCode.GDHPBarObjects1[gdjs.GameCode.forEachIndex2];
gdjs.GameCode.GDHPBarObjects2.push(gdjs.GameCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Controller_X_is_connected.func(runtimeScene, ((gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects2[0].getVariables()).getFromIndex(0).getAsNumber() + 1, null));
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


gdjs.GameCode.eventsList43(runtimeScene);
}


{


gdjs.GameCode.eventsList47(runtimeScene);
}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDCourtObjects1.length = 0;
gdjs.GameCode.GDCourtObjects2.length = 0;
gdjs.GameCode.GDCourtObjects3.length = 0;
gdjs.GameCode.GDCourtObjects4.length = 0;
gdjs.GameCode.GDCourtObjects5.length = 0;
gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects3.length = 0;
gdjs.GameCode.GDPlayerObjects4.length = 0;
gdjs.GameCode.GDPlayerObjects5.length = 0;
gdjs.GameCode.GDWallObjects1.length = 0;
gdjs.GameCode.GDWallObjects2.length = 0;
gdjs.GameCode.GDWallObjects3.length = 0;
gdjs.GameCode.GDWallObjects4.length = 0;
gdjs.GameCode.GDWallObjects5.length = 0;
gdjs.GameCode.GDMidPointObjects1.length = 0;
gdjs.GameCode.GDMidPointObjects2.length = 0;
gdjs.GameCode.GDMidPointObjects3.length = 0;
gdjs.GameCode.GDMidPointObjects4.length = 0;
gdjs.GameCode.GDMidPointObjects5.length = 0;
gdjs.GameCode.GDBallObjects1.length = 0;
gdjs.GameCode.GDBallObjects2.length = 0;
gdjs.GameCode.GDBallObjects3.length = 0;
gdjs.GameCode.GDBallObjects4.length = 0;
gdjs.GameCode.GDBallObjects5.length = 0;
gdjs.GameCode.GDPlayerWallObjects1.length = 0;
gdjs.GameCode.GDPlayerWallObjects2.length = 0;
gdjs.GameCode.GDPlayerWallObjects3.length = 0;
gdjs.GameCode.GDPlayerWallObjects4.length = 0;
gdjs.GameCode.GDPlayerWallObjects5.length = 0;
gdjs.GameCode.GDMetalRedBarObjects1.length = 0;
gdjs.GameCode.GDMetalRedBarObjects2.length = 0;
gdjs.GameCode.GDMetalRedBarObjects3.length = 0;
gdjs.GameCode.GDMetalRedBarObjects4.length = 0;
gdjs.GameCode.GDMetalRedBarObjects5.length = 0;
gdjs.GameCode.GDPCardObjects1.length = 0;
gdjs.GameCode.GDPCardObjects2.length = 0;
gdjs.GameCode.GDPCardObjects3.length = 0;
gdjs.GameCode.GDPCardObjects4.length = 0;
gdjs.GameCode.GDPCardObjects5.length = 0;
gdjs.GameCode.GDHPBarObjects1.length = 0;
gdjs.GameCode.GDHPBarObjects2.length = 0;
gdjs.GameCode.GDHPBarObjects3.length = 0;
gdjs.GameCode.GDHPBarObjects4.length = 0;
gdjs.GameCode.GDHPBarObjects5.length = 0;
gdjs.GameCode.GDPTextObjects1.length = 0;
gdjs.GameCode.GDPTextObjects2.length = 0;
gdjs.GameCode.GDPTextObjects3.length = 0;
gdjs.GameCode.GDPTextObjects4.length = 0;
gdjs.GameCode.GDPTextObjects5.length = 0;
gdjs.GameCode.GDP2TextObjects1.length = 0;
gdjs.GameCode.GDP2TextObjects2.length = 0;
gdjs.GameCode.GDP2TextObjects3.length = 0;
gdjs.GameCode.GDP2TextObjects4.length = 0;
gdjs.GameCode.GDP2TextObjects5.length = 0;
gdjs.GameCode.GDShadedDarkJoystickObjects1.length = 0;
gdjs.GameCode.GDShadedDarkJoystickObjects2.length = 0;
gdjs.GameCode.GDShadedDarkJoystickObjects3.length = 0;
gdjs.GameCode.GDShadedDarkJoystickObjects4.length = 0;
gdjs.GameCode.GDShadedDarkJoystickObjects5.length = 0;
gdjs.GameCode.GDOnScreenControlsButtonObjects1.length = 0;
gdjs.GameCode.GDOnScreenControlsButtonObjects2.length = 0;
gdjs.GameCode.GDOnScreenControlsButtonObjects3.length = 0;
gdjs.GameCode.GDOnScreenControlsButtonObjects4.length = 0;
gdjs.GameCode.GDOnScreenControlsButtonObjects5.length = 0;
gdjs.GameCode.GDHITObjects1.length = 0;
gdjs.GameCode.GDHITObjects2.length = 0;
gdjs.GameCode.GDHITObjects3.length = 0;
gdjs.GameCode.GDHITObjects4.length = 0;
gdjs.GameCode.GDHITObjects5.length = 0;
gdjs.GameCode.GDScoreCardObjects1.length = 0;
gdjs.GameCode.GDScoreCardObjects2.length = 0;
gdjs.GameCode.GDScoreCardObjects3.length = 0;
gdjs.GameCode.GDScoreCardObjects4.length = 0;
gdjs.GameCode.GDScoreCardObjects5.length = 0;
gdjs.GameCode.GDgroundledObjects1.length = 0;
gdjs.GameCode.GDgroundledObjects2.length = 0;
gdjs.GameCode.GDgroundledObjects3.length = 0;
gdjs.GameCode.GDgroundledObjects4.length = 0;
gdjs.GameCode.GDgroundledObjects5.length = 0;
gdjs.GameCode.GDLobsScoreObjects1.length = 0;
gdjs.GameCode.GDLobsScoreObjects2.length = 0;
gdjs.GameCode.GDLobsScoreObjects3.length = 0;
gdjs.GameCode.GDLobsScoreObjects4.length = 0;
gdjs.GameCode.GDLobsScoreObjects5.length = 0;
gdjs.GameCode.GDSlicersScoreObjects1.length = 0;
gdjs.GameCode.GDSlicersScoreObjects2.length = 0;
gdjs.GameCode.GDSlicersScoreObjects3.length = 0;
gdjs.GameCode.GDSlicersScoreObjects4.length = 0;
gdjs.GameCode.GDSlicersScoreObjects5.length = 0;
gdjs.GameCode.GDLobsIconObjects1.length = 0;
gdjs.GameCode.GDLobsIconObjects2.length = 0;
gdjs.GameCode.GDLobsIconObjects3.length = 0;
gdjs.GameCode.GDLobsIconObjects4.length = 0;
gdjs.GameCode.GDLobsIconObjects5.length = 0;
gdjs.GameCode.GDLobsSpriteObjects1.length = 0;
gdjs.GameCode.GDLobsSpriteObjects2.length = 0;
gdjs.GameCode.GDLobsSpriteObjects3.length = 0;
gdjs.GameCode.GDLobsSpriteObjects4.length = 0;
gdjs.GameCode.GDLobsSpriteObjects5.length = 0;
gdjs.GameCode.GDBallHitboxObjects1.length = 0;
gdjs.GameCode.GDBallHitboxObjects2.length = 0;
gdjs.GameCode.GDBallHitboxObjects3.length = 0;
gdjs.GameCode.GDBallHitboxObjects4.length = 0;
gdjs.GameCode.GDBallHitboxObjects5.length = 0;
gdjs.GameCode.GDP3TextObjects1.length = 0;
gdjs.GameCode.GDP3TextObjects2.length = 0;
gdjs.GameCode.GDP3TextObjects3.length = 0;
gdjs.GameCode.GDP3TextObjects4.length = 0;
gdjs.GameCode.GDP3TextObjects5.length = 0;
gdjs.GameCode.GDScoreDisplayObjects1.length = 0;
gdjs.GameCode.GDScoreDisplayObjects2.length = 0;
gdjs.GameCode.GDScoreDisplayObjects3.length = 0;
gdjs.GameCode.GDScoreDisplayObjects4.length = 0;
gdjs.GameCode.GDScoreDisplayObjects5.length = 0;
gdjs.GameCode.GDscore_9595Objects1.length = 0;
gdjs.GameCode.GDscore_9595Objects2.length = 0;
gdjs.GameCode.GDscore_9595Objects3.length = 0;
gdjs.GameCode.GDscore_9595Objects4.length = 0;
gdjs.GameCode.GDscore_9595Objects5.length = 0;
gdjs.GameCode.GDScoreTextIconLObjects1.length = 0;
gdjs.GameCode.GDScoreTextIconLObjects2.length = 0;
gdjs.GameCode.GDScoreTextIconLObjects3.length = 0;
gdjs.GameCode.GDScoreTextIconLObjects4.length = 0;
gdjs.GameCode.GDScoreTextIconLObjects5.length = 0;
gdjs.GameCode.GDScoreTextIconSObjects1.length = 0;
gdjs.GameCode.GDScoreTextIconSObjects2.length = 0;
gdjs.GameCode.GDScoreTextIconSObjects3.length = 0;
gdjs.GameCode.GDScoreTextIconSObjects4.length = 0;
gdjs.GameCode.GDScoreTextIconSObjects5.length = 0;
gdjs.GameCode.GDCustomLobbiesObjects1.length = 0;
gdjs.GameCode.GDCustomLobbiesObjects2.length = 0;
gdjs.GameCode.GDCustomLobbiesObjects3.length = 0;
gdjs.GameCode.GDCustomLobbiesObjects4.length = 0;
gdjs.GameCode.GDCustomLobbiesObjects5.length = 0;

gdjs.GameCode.eventsList48(runtimeScene);
gdjs.GameCode.GDCourtObjects1.length = 0;
gdjs.GameCode.GDCourtObjects2.length = 0;
gdjs.GameCode.GDCourtObjects3.length = 0;
gdjs.GameCode.GDCourtObjects4.length = 0;
gdjs.GameCode.GDCourtObjects5.length = 0;
gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects3.length = 0;
gdjs.GameCode.GDPlayerObjects4.length = 0;
gdjs.GameCode.GDPlayerObjects5.length = 0;
gdjs.GameCode.GDWallObjects1.length = 0;
gdjs.GameCode.GDWallObjects2.length = 0;
gdjs.GameCode.GDWallObjects3.length = 0;
gdjs.GameCode.GDWallObjects4.length = 0;
gdjs.GameCode.GDWallObjects5.length = 0;
gdjs.GameCode.GDMidPointObjects1.length = 0;
gdjs.GameCode.GDMidPointObjects2.length = 0;
gdjs.GameCode.GDMidPointObjects3.length = 0;
gdjs.GameCode.GDMidPointObjects4.length = 0;
gdjs.GameCode.GDMidPointObjects5.length = 0;
gdjs.GameCode.GDBallObjects1.length = 0;
gdjs.GameCode.GDBallObjects2.length = 0;
gdjs.GameCode.GDBallObjects3.length = 0;
gdjs.GameCode.GDBallObjects4.length = 0;
gdjs.GameCode.GDBallObjects5.length = 0;
gdjs.GameCode.GDPlayerWallObjects1.length = 0;
gdjs.GameCode.GDPlayerWallObjects2.length = 0;
gdjs.GameCode.GDPlayerWallObjects3.length = 0;
gdjs.GameCode.GDPlayerWallObjects4.length = 0;
gdjs.GameCode.GDPlayerWallObjects5.length = 0;
gdjs.GameCode.GDMetalRedBarObjects1.length = 0;
gdjs.GameCode.GDMetalRedBarObjects2.length = 0;
gdjs.GameCode.GDMetalRedBarObjects3.length = 0;
gdjs.GameCode.GDMetalRedBarObjects4.length = 0;
gdjs.GameCode.GDMetalRedBarObjects5.length = 0;
gdjs.GameCode.GDPCardObjects1.length = 0;
gdjs.GameCode.GDPCardObjects2.length = 0;
gdjs.GameCode.GDPCardObjects3.length = 0;
gdjs.GameCode.GDPCardObjects4.length = 0;
gdjs.GameCode.GDPCardObjects5.length = 0;
gdjs.GameCode.GDHPBarObjects1.length = 0;
gdjs.GameCode.GDHPBarObjects2.length = 0;
gdjs.GameCode.GDHPBarObjects3.length = 0;
gdjs.GameCode.GDHPBarObjects4.length = 0;
gdjs.GameCode.GDHPBarObjects5.length = 0;
gdjs.GameCode.GDPTextObjects1.length = 0;
gdjs.GameCode.GDPTextObjects2.length = 0;
gdjs.GameCode.GDPTextObjects3.length = 0;
gdjs.GameCode.GDPTextObjects4.length = 0;
gdjs.GameCode.GDPTextObjects5.length = 0;
gdjs.GameCode.GDP2TextObjects1.length = 0;
gdjs.GameCode.GDP2TextObjects2.length = 0;
gdjs.GameCode.GDP2TextObjects3.length = 0;
gdjs.GameCode.GDP2TextObjects4.length = 0;
gdjs.GameCode.GDP2TextObjects5.length = 0;
gdjs.GameCode.GDShadedDarkJoystickObjects1.length = 0;
gdjs.GameCode.GDShadedDarkJoystickObjects2.length = 0;
gdjs.GameCode.GDShadedDarkJoystickObjects3.length = 0;
gdjs.GameCode.GDShadedDarkJoystickObjects4.length = 0;
gdjs.GameCode.GDShadedDarkJoystickObjects5.length = 0;
gdjs.GameCode.GDOnScreenControlsButtonObjects1.length = 0;
gdjs.GameCode.GDOnScreenControlsButtonObjects2.length = 0;
gdjs.GameCode.GDOnScreenControlsButtonObjects3.length = 0;
gdjs.GameCode.GDOnScreenControlsButtonObjects4.length = 0;
gdjs.GameCode.GDOnScreenControlsButtonObjects5.length = 0;
gdjs.GameCode.GDHITObjects1.length = 0;
gdjs.GameCode.GDHITObjects2.length = 0;
gdjs.GameCode.GDHITObjects3.length = 0;
gdjs.GameCode.GDHITObjects4.length = 0;
gdjs.GameCode.GDHITObjects5.length = 0;
gdjs.GameCode.GDScoreCardObjects1.length = 0;
gdjs.GameCode.GDScoreCardObjects2.length = 0;
gdjs.GameCode.GDScoreCardObjects3.length = 0;
gdjs.GameCode.GDScoreCardObjects4.length = 0;
gdjs.GameCode.GDScoreCardObjects5.length = 0;
gdjs.GameCode.GDgroundledObjects1.length = 0;
gdjs.GameCode.GDgroundledObjects2.length = 0;
gdjs.GameCode.GDgroundledObjects3.length = 0;
gdjs.GameCode.GDgroundledObjects4.length = 0;
gdjs.GameCode.GDgroundledObjects5.length = 0;
gdjs.GameCode.GDLobsScoreObjects1.length = 0;
gdjs.GameCode.GDLobsScoreObjects2.length = 0;
gdjs.GameCode.GDLobsScoreObjects3.length = 0;
gdjs.GameCode.GDLobsScoreObjects4.length = 0;
gdjs.GameCode.GDLobsScoreObjects5.length = 0;
gdjs.GameCode.GDSlicersScoreObjects1.length = 0;
gdjs.GameCode.GDSlicersScoreObjects2.length = 0;
gdjs.GameCode.GDSlicersScoreObjects3.length = 0;
gdjs.GameCode.GDSlicersScoreObjects4.length = 0;
gdjs.GameCode.GDSlicersScoreObjects5.length = 0;
gdjs.GameCode.GDLobsIconObjects1.length = 0;
gdjs.GameCode.GDLobsIconObjects2.length = 0;
gdjs.GameCode.GDLobsIconObjects3.length = 0;
gdjs.GameCode.GDLobsIconObjects4.length = 0;
gdjs.GameCode.GDLobsIconObjects5.length = 0;
gdjs.GameCode.GDLobsSpriteObjects1.length = 0;
gdjs.GameCode.GDLobsSpriteObjects2.length = 0;
gdjs.GameCode.GDLobsSpriteObjects3.length = 0;
gdjs.GameCode.GDLobsSpriteObjects4.length = 0;
gdjs.GameCode.GDLobsSpriteObjects5.length = 0;
gdjs.GameCode.GDBallHitboxObjects1.length = 0;
gdjs.GameCode.GDBallHitboxObjects2.length = 0;
gdjs.GameCode.GDBallHitboxObjects3.length = 0;
gdjs.GameCode.GDBallHitboxObjects4.length = 0;
gdjs.GameCode.GDBallHitboxObjects5.length = 0;
gdjs.GameCode.GDP3TextObjects1.length = 0;
gdjs.GameCode.GDP3TextObjects2.length = 0;
gdjs.GameCode.GDP3TextObjects3.length = 0;
gdjs.GameCode.GDP3TextObjects4.length = 0;
gdjs.GameCode.GDP3TextObjects5.length = 0;
gdjs.GameCode.GDScoreDisplayObjects1.length = 0;
gdjs.GameCode.GDScoreDisplayObjects2.length = 0;
gdjs.GameCode.GDScoreDisplayObjects3.length = 0;
gdjs.GameCode.GDScoreDisplayObjects4.length = 0;
gdjs.GameCode.GDScoreDisplayObjects5.length = 0;
gdjs.GameCode.GDscore_9595Objects1.length = 0;
gdjs.GameCode.GDscore_9595Objects2.length = 0;
gdjs.GameCode.GDscore_9595Objects3.length = 0;
gdjs.GameCode.GDscore_9595Objects4.length = 0;
gdjs.GameCode.GDscore_9595Objects5.length = 0;
gdjs.GameCode.GDScoreTextIconLObjects1.length = 0;
gdjs.GameCode.GDScoreTextIconLObjects2.length = 0;
gdjs.GameCode.GDScoreTextIconLObjects3.length = 0;
gdjs.GameCode.GDScoreTextIconLObjects4.length = 0;
gdjs.GameCode.GDScoreTextIconLObjects5.length = 0;
gdjs.GameCode.GDScoreTextIconSObjects1.length = 0;
gdjs.GameCode.GDScoreTextIconSObjects2.length = 0;
gdjs.GameCode.GDScoreTextIconSObjects3.length = 0;
gdjs.GameCode.GDScoreTextIconSObjects4.length = 0;
gdjs.GameCode.GDScoreTextIconSObjects5.length = 0;
gdjs.GameCode.GDCustomLobbiesObjects1.length = 0;
gdjs.GameCode.GDCustomLobbiesObjects2.length = 0;
gdjs.GameCode.GDCustomLobbiesObjects3.length = 0;
gdjs.GameCode.GDCustomLobbiesObjects4.length = 0;
gdjs.GameCode.GDCustomLobbiesObjects5.length = 0;


return;

}

gdjs['GameCode'] = gdjs.GameCode;
