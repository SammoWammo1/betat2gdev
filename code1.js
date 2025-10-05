gdjs.GameCode = {};
gdjs.GameCode.localVariables = [];
gdjs.GameCode.forEachIndex3 = 0;

gdjs.GameCode.forEachObjects3 = [];

gdjs.GameCode.forEachTemporary3 = null;

gdjs.GameCode.forEachTotalCount3 = 0;

gdjs.GameCode.GDCourtObjects1= [];
gdjs.GameCode.GDCourtObjects2= [];
gdjs.GameCode.GDCourtObjects3= [];
gdjs.GameCode.GDPlayerObjects1= [];
gdjs.GameCode.GDPlayerObjects2= [];
gdjs.GameCode.GDPlayerObjects3= [];
gdjs.GameCode.GDWallObjects1= [];
gdjs.GameCode.GDWallObjects2= [];
gdjs.GameCode.GDWallObjects3= [];
gdjs.GameCode.GDMidPointObjects1= [];
gdjs.GameCode.GDMidPointObjects2= [];
gdjs.GameCode.GDMidPointObjects3= [];
gdjs.GameCode.GDBallObjects1= [];
gdjs.GameCode.GDBallObjects2= [];
gdjs.GameCode.GDBallObjects3= [];
gdjs.GameCode.GDPlayerWallObjects1= [];
gdjs.GameCode.GDPlayerWallObjects2= [];
gdjs.GameCode.GDPlayerWallObjects3= [];
gdjs.GameCode.GDMetalRedBarObjects1= [];
gdjs.GameCode.GDMetalRedBarObjects2= [];
gdjs.GameCode.GDMetalRedBarObjects3= [];
gdjs.GameCode.GDPCardObjects1= [];
gdjs.GameCode.GDPCardObjects2= [];
gdjs.GameCode.GDPCardObjects3= [];
gdjs.GameCode.GDNewResourceBarObjects1= [];
gdjs.GameCode.GDNewResourceBarObjects2= [];
gdjs.GameCode.GDNewResourceBarObjects3= [];
gdjs.GameCode.GDPTextObjects1= [];
gdjs.GameCode.GDPTextObjects2= [];
gdjs.GameCode.GDPTextObjects3= [];
gdjs.GameCode.GDP2TextObjects1= [];
gdjs.GameCode.GDP2TextObjects2= [];
gdjs.GameCode.GDP2TextObjects3= [];


gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.GameCode.GDBallObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.GameCode.GDWallObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.GameCode.GDWallObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.GameCode.GDBallObjects2});
gdjs.GameCode.eventsList0 = function(runtimeScene) {

};gdjs.GameCode.eventsList1 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWallObjects2Objects = Hashtable.newFrom({"Wall": gdjs.GameCode.GDWallObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWallObjects2Objects = Hashtable.newFrom({"Wall": gdjs.GameCode.GDWallObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerWallObjects2Objects = Hashtable.newFrom({"PlayerWall": gdjs.GameCode.GDPlayerWallObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerWallObjects2Objects = Hashtable.newFrom({"PlayerWall": gdjs.GameCode.GDPlayerWallObjects2});
gdjs.GameCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13515084);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBallObjects2 */
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("hitball");
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects2[i].clearForces();
}
}
{for(var i = 0, len = gdjs.GameCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects2[i].addForce((( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getBehavior("TopDownMovement").getXVelocity()) * 1.5, (( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getBehavior("TopDownMovement").getYVelocity()) * 1.5, 1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewResourceBar"), gdjs.GameCode.GDNewResourceBarObjects2);

for (gdjs.GameCode.forEachIndex3 = 0;gdjs.GameCode.forEachIndex3 < gdjs.GameCode.GDNewResourceBarObjects2.length;++gdjs.GameCode.forEachIndex3) {
gdjs.GameCode.GDNewResourceBarObjects3.length = 0;


gdjs.GameCode.forEachTemporary3 = gdjs.GameCode.GDNewResourceBarObjects2[gdjs.GameCode.forEachIndex3];
gdjs.GameCode.GDNewResourceBarObjects3.push(gdjs.GameCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDNewResourceBarObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDNewResourceBarObjects3[i].getVariableNumber(gdjs.GameCode.GDNewResourceBarObjects3[i].getVariables().getFromIndex(0)) == runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDNewResourceBarObjects3[k] = gdjs.GameCode.GDNewResourceBarObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDNewResourceBarObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17701028);
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDNewResourceBarObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDNewResourceBarObjects3[i].SetValue(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber(), null);
}
}
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
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12165620);
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].returnVariable(gdjs.GameCode.GDPlayerObjects3[i].getVariables().getFromIndex(1)).sub(50);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(((gdjs.GameCode.GDPlayerObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects3[0].getVariables()).getFromIndex(1).getAsNumber());
}
}
}

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


};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerWall"), gdjs.GameCode.GDPlayerWallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.GameCode.GDWallObjects1);
{for(var i = 0, len = gdjs.GameCode.GDWallObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDWallObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerWallObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerWallObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.GameCode.GDWallObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWallObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBallObjects1 */
/* Reuse gdjs.GameCode.GDWallObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects1[i].getBehavior("Bounce").BounceOff(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWallObjects1Objects, null);
}
}
}

}


{


gdjs.GameCode.eventsList2(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDCourtObjects1.length = 0;
gdjs.GameCode.GDCourtObjects2.length = 0;
gdjs.GameCode.GDCourtObjects3.length = 0;
gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects3.length = 0;
gdjs.GameCode.GDWallObjects1.length = 0;
gdjs.GameCode.GDWallObjects2.length = 0;
gdjs.GameCode.GDWallObjects3.length = 0;
gdjs.GameCode.GDMidPointObjects1.length = 0;
gdjs.GameCode.GDMidPointObjects2.length = 0;
gdjs.GameCode.GDMidPointObjects3.length = 0;
gdjs.GameCode.GDBallObjects1.length = 0;
gdjs.GameCode.GDBallObjects2.length = 0;
gdjs.GameCode.GDBallObjects3.length = 0;
gdjs.GameCode.GDPlayerWallObjects1.length = 0;
gdjs.GameCode.GDPlayerWallObjects2.length = 0;
gdjs.GameCode.GDPlayerWallObjects3.length = 0;
gdjs.GameCode.GDMetalRedBarObjects1.length = 0;
gdjs.GameCode.GDMetalRedBarObjects2.length = 0;
gdjs.GameCode.GDMetalRedBarObjects3.length = 0;
gdjs.GameCode.GDPCardObjects1.length = 0;
gdjs.GameCode.GDPCardObjects2.length = 0;
gdjs.GameCode.GDPCardObjects3.length = 0;
gdjs.GameCode.GDNewResourceBarObjects1.length = 0;
gdjs.GameCode.GDNewResourceBarObjects2.length = 0;
gdjs.GameCode.GDNewResourceBarObjects3.length = 0;
gdjs.GameCode.GDPTextObjects1.length = 0;
gdjs.GameCode.GDPTextObjects2.length = 0;
gdjs.GameCode.GDPTextObjects3.length = 0;
gdjs.GameCode.GDP2TextObjects1.length = 0;
gdjs.GameCode.GDP2TextObjects2.length = 0;
gdjs.GameCode.GDP2TextObjects3.length = 0;

gdjs.GameCode.eventsList3(runtimeScene);
gdjs.GameCode.GDCourtObjects1.length = 0;
gdjs.GameCode.GDCourtObjects2.length = 0;
gdjs.GameCode.GDCourtObjects3.length = 0;
gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects3.length = 0;
gdjs.GameCode.GDWallObjects1.length = 0;
gdjs.GameCode.GDWallObjects2.length = 0;
gdjs.GameCode.GDWallObjects3.length = 0;
gdjs.GameCode.GDMidPointObjects1.length = 0;
gdjs.GameCode.GDMidPointObjects2.length = 0;
gdjs.GameCode.GDMidPointObjects3.length = 0;
gdjs.GameCode.GDBallObjects1.length = 0;
gdjs.GameCode.GDBallObjects2.length = 0;
gdjs.GameCode.GDBallObjects3.length = 0;
gdjs.GameCode.GDPlayerWallObjects1.length = 0;
gdjs.GameCode.GDPlayerWallObjects2.length = 0;
gdjs.GameCode.GDPlayerWallObjects3.length = 0;
gdjs.GameCode.GDMetalRedBarObjects1.length = 0;
gdjs.GameCode.GDMetalRedBarObjects2.length = 0;
gdjs.GameCode.GDMetalRedBarObjects3.length = 0;
gdjs.GameCode.GDPCardObjects1.length = 0;
gdjs.GameCode.GDPCardObjects2.length = 0;
gdjs.GameCode.GDPCardObjects3.length = 0;
gdjs.GameCode.GDNewResourceBarObjects1.length = 0;
gdjs.GameCode.GDNewResourceBarObjects2.length = 0;
gdjs.GameCode.GDNewResourceBarObjects3.length = 0;
gdjs.GameCode.GDPTextObjects1.length = 0;
gdjs.GameCode.GDPTextObjects2.length = 0;
gdjs.GameCode.GDPTextObjects3.length = 0;
gdjs.GameCode.GDP2TextObjects1.length = 0;
gdjs.GameCode.GDP2TextObjects2.length = 0;
gdjs.GameCode.GDP2TextObjects3.length = 0;


return;

}

gdjs['GameCode'] = gdjs.GameCode;
