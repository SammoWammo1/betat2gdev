gdjs.MultiplayerTitleCode = {};
gdjs.MultiplayerTitleCode.localVariables = [];
gdjs.MultiplayerTitleCode.idToCallbackMap = new Map();
gdjs.MultiplayerTitleCode.forEachIndex2 = 0;

gdjs.MultiplayerTitleCode.forEachObjects2 = [];

gdjs.MultiplayerTitleCode.forEachTemporary2 = null;

gdjs.MultiplayerTitleCode.forEachTotalCount2 = 0;

gdjs.MultiplayerTitleCode.GDBlackSquareDecoratedButtonObjects1= [];
gdjs.MultiplayerTitleCode.GDBlackSquareDecoratedButtonObjects2= [];
gdjs.MultiplayerTitleCode.GDBlackSquareDecoratedButtonObjects3= [];
gdjs.MultiplayerTitleCode.GDLocalObjects1= [];
gdjs.MultiplayerTitleCode.GDLocalObjects2= [];
gdjs.MultiplayerTitleCode.GDLocalObjects3= [];
gdjs.MultiplayerTitleCode.GDBackObjects1= [];
gdjs.MultiplayerTitleCode.GDBackObjects2= [];
gdjs.MultiplayerTitleCode.GDBackObjects3= [];
gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1= [];
gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2= [];
gdjs.MultiplayerTitleCode.GDPlayerChangeObjects3= [];
gdjs.MultiplayerTitleCode.GDPlayerNumObjects1= [];
gdjs.MultiplayerTitleCode.GDPlayerNumObjects2= [];
gdjs.MultiplayerTitleCode.GDPlayerNumObjects3= [];
gdjs.MultiplayerTitleCode.GDNewTextObjects1= [];
gdjs.MultiplayerTitleCode.GDNewTextObjects2= [];
gdjs.MultiplayerTitleCode.GDNewTextObjects3= [];
gdjs.MultiplayerTitleCode.GDCustomLobbiesObjects1= [];
gdjs.MultiplayerTitleCode.GDCustomLobbiesObjects2= [];
gdjs.MultiplayerTitleCode.GDCustomLobbiesObjects3= [];
gdjs.MultiplayerTitleCode.GDOnlineCheckObjects1= [];
gdjs.MultiplayerTitleCode.GDOnlineCheckObjects2= [];
gdjs.MultiplayerTitleCode.GDOnlineCheckObjects3= [];
gdjs.MultiplayerTitleCode.GDCursorObjects1= [];
gdjs.MultiplayerTitleCode.GDCursorObjects2= [];
gdjs.MultiplayerTitleCode.GDCursorObjects3= [];


gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDOnlineCheckObjects1Objects = Hashtable.newFrom({"OnlineCheck": gdjs.MultiplayerTitleCode.GDOnlineCheckObjects1});
gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDCursorObjects1Objects = Hashtable.newFrom({"Cursor": gdjs.MultiplayerTitleCode.GDCursorObjects1});
gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDCursorObjects1Objects = Hashtable.newFrom({"Cursor": gdjs.MultiplayerTitleCode.GDCursorObjects1});
gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.MultiplayerTitleCode.GDBackObjects1});
gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDCursorObjects1Objects = Hashtable.newFrom({"Cursor": gdjs.MultiplayerTitleCode.GDCursorObjects1});
gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDLocalObjects1Objects = Hashtable.newFrom({"Local": gdjs.MultiplayerTitleCode.GDLocalObjects1});
gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDCursorObjects1Objects = Hashtable.newFrom({"Cursor": gdjs.MultiplayerTitleCode.GDCursorObjects1});
gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDBlackSquareDecoratedButtonObjects1Objects = Hashtable.newFrom({"BlackSquareDecoratedButton": gdjs.MultiplayerTitleCode.GDBlackSquareDecoratedButtonObjects1});
gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDOnlineCheckObjects1Objects = Hashtable.newFrom({"OnlineCheck": gdjs.MultiplayerTitleCode.GDOnlineCheckObjects1});
gdjs.MultiplayerTitleCode.eventsList0 = function(runtimeScene) {

};gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects1Objects = Hashtable.newFrom({"PlayerChange": gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1});
gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects1Objects = Hashtable.newFrom({"PlayerChange": gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1});
gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects2Objects = Hashtable.newFrom({"PlayerChange": gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2});
gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects2Objects = Hashtable.newFrom({"PlayerChange": gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2});
gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects2Objects = Hashtable.newFrom({"PlayerChange": gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2});
gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects1Objects = Hashtable.newFrom({"PlayerChange": gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1});
gdjs.MultiplayerTitleCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1, gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects2Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2.length;i<l;++i) {
    if ( gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i].getVariableNumber(gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[k] = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i];
        ++k;
    }
}
gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("0" + gdjs.evtTools.string.strAt(runtimeScene.getGame().getVariables().getFromIndex(2).getAsString(), 1) + gdjs.evtTools.string.strAt(runtimeScene.getGame().getVariables().getFromIndex(2).getAsString(), 2) + gdjs.evtTools.string.strAt(runtimeScene.getGame().getVariables().getFromIndex(2).getAsString(), 3));
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}

}


{

gdjs.copyArray(gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1, gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects2Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2.length;i<l;++i) {
    if ( gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i].getVariableNumber(gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[k] = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i];
        ++k;
    }
}
gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString(gdjs.evtTools.string.subStr(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), 0, 1) + "0" + gdjs.evtTools.string.subStr(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), 2, 2));
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}

}


{

gdjs.copyArray(gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1, gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects2Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2.length;i<l;++i) {
    if ( gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i].getVariableNumber(gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[k] = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i];
        ++k;
    }
}
gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString(gdjs.evtTools.string.subStr(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), 0, 2) + "0" + gdjs.evtTools.string.subStr(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), 3, 1));
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}

}


{

/* Reuse gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1.length;i<l;++i) {
    if ( gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1[i].getVariableNumber(gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1[k] = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1[i];
        ++k;
    }
}
gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString(gdjs.evtTools.string.subStr(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), 0, 3) + "0");
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}

}


};gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDCursorObjects1Objects = Hashtable.newFrom({"Cursor": gdjs.MultiplayerTitleCode.GDCursorObjects1});
gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects1Objects = Hashtable.newFrom({"PlayerChange": gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1});
gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects1Objects = Hashtable.newFrom({"PlayerChange": gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1});
gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects2Objects = Hashtable.newFrom({"PlayerChange": gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2});
gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects2Objects = Hashtable.newFrom({"PlayerChange": gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2});
gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects2Objects = Hashtable.newFrom({"PlayerChange": gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2});
gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects1Objects = Hashtable.newFrom({"PlayerChange": gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1});
gdjs.MultiplayerTitleCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MultiplayerTitleCode.GDCursorObjects1, gdjs.MultiplayerTitleCode.GDCursorObjects2);

gdjs.copyArray(gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1, gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects2Objects, (( gdjs.MultiplayerTitleCode.GDCursorObjects2.length === 0 ) ? 0 :gdjs.MultiplayerTitleCode.GDCursorObjects2[0].getPointX("")), (( gdjs.MultiplayerTitleCode.GDCursorObjects2.length === 0 ) ? 0 :gdjs.MultiplayerTitleCode.GDCursorObjects2[0].getPointY("")), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2.length;i<l;++i) {
    if ( gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i].getVariableNumber(gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[k] = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i];
        ++k;
    }
}
gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("0" + gdjs.evtTools.string.strAt(runtimeScene.getGame().getVariables().getFromIndex(2).getAsString(), 1) + gdjs.evtTools.string.strAt(runtimeScene.getGame().getVariables().getFromIndex(2).getAsString(), 2) + gdjs.evtTools.string.strAt(runtimeScene.getGame().getVariables().getFromIndex(2).getAsString(), 3));
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}

}


{

gdjs.copyArray(gdjs.MultiplayerTitleCode.GDCursorObjects1, gdjs.MultiplayerTitleCode.GDCursorObjects2);

gdjs.copyArray(gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1, gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects2Objects, (( gdjs.MultiplayerTitleCode.GDCursorObjects2.length === 0 ) ? 0 :gdjs.MultiplayerTitleCode.GDCursorObjects2[0].getPointX("")), (( gdjs.MultiplayerTitleCode.GDCursorObjects2.length === 0 ) ? 0 :gdjs.MultiplayerTitleCode.GDCursorObjects2[0].getPointY("")), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2.length;i<l;++i) {
    if ( gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i].getVariableNumber(gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[k] = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i];
        ++k;
    }
}
gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString(gdjs.evtTools.string.subStr(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), 0, 1) + "0" + gdjs.evtTools.string.subStr(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), 2, 2));
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}

}


{

gdjs.copyArray(gdjs.MultiplayerTitleCode.GDCursorObjects1, gdjs.MultiplayerTitleCode.GDCursorObjects2);

gdjs.copyArray(gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1, gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects2Objects, (( gdjs.MultiplayerTitleCode.GDCursorObjects2.length === 0 ) ? 0 :gdjs.MultiplayerTitleCode.GDCursorObjects2[0].getPointX("")), (( gdjs.MultiplayerTitleCode.GDCursorObjects2.length === 0 ) ? 0 :gdjs.MultiplayerTitleCode.GDCursorObjects2[0].getPointY("")), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2.length;i<l;++i) {
    if ( gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i].getVariableNumber(gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[k] = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i];
        ++k;
    }
}
gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString(gdjs.evtTools.string.subStr(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), 0, 2) + "0" + gdjs.evtTools.string.subStr(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), 3, 1));
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}

}


{

/* Reuse gdjs.MultiplayerTitleCode.GDCursorObjects1 */
/* Reuse gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects1Objects, (( gdjs.MultiplayerTitleCode.GDCursorObjects1.length === 0 ) ? 0 :gdjs.MultiplayerTitleCode.GDCursorObjects1[0].getPointX("")), (( gdjs.MultiplayerTitleCode.GDCursorObjects1.length === 0 ) ? 0 :gdjs.MultiplayerTitleCode.GDCursorObjects1[0].getPointY("")), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1.length;i<l;++i) {
    if ( gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1[i].getVariableNumber(gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1[k] = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1[i];
        ++k;
    }
}
gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString(gdjs.evtTools.string.subStr(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), 0, 3) + "0");
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}

}


};gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects1Objects = Hashtable.newFrom({"PlayerChange": gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1});
gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects1Objects = Hashtable.newFrom({"PlayerChange": gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1});
gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects2Objects = Hashtable.newFrom({"PlayerChange": gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2});
gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects2Objects = Hashtable.newFrom({"PlayerChange": gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2});
gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects2Objects = Hashtable.newFrom({"PlayerChange": gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2});
gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects1Objects = Hashtable.newFrom({"PlayerChange": gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1});
gdjs.MultiplayerTitleCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1, gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects2Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2.length;i<l;++i) {
    if ( gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i].getVariableNumber(gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[k] = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i];
        ++k;
    }
}
gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString(gdjs.evtTools.string.subStr(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), 0, 0) + "1" + gdjs.evtTools.string.subStr(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), 1, 3));
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}

}


{

gdjs.copyArray(gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1, gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects2Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2.length;i<l;++i) {
    if ( gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i].getVariableNumber(gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[k] = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i];
        ++k;
    }
}
gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString(gdjs.evtTools.string.subStr(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), 0, 1) + "1" + gdjs.evtTools.string.subStr(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), 2, 2));
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}

}


{

gdjs.copyArray(gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1, gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects2Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2.length;i<l;++i) {
    if ( gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i].getVariableNumber(gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[k] = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i];
        ++k;
    }
}
gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString(gdjs.evtTools.string.subStr(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), 0, 2) + "1" + gdjs.evtTools.string.subStr(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), 3, 1));
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}

}


{

/* Reuse gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1.length;i<l;++i) {
    if ( gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1[i].getVariableNumber(gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1[k] = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1[i];
        ++k;
    }
}
gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString(gdjs.evtTools.string.subStr(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), 0, 3) + "1");
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}

}


};gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDCursorObjects1Objects = Hashtable.newFrom({"Cursor": gdjs.MultiplayerTitleCode.GDCursorObjects1});
gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects1Objects = Hashtable.newFrom({"PlayerChange": gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1});
gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects1Objects = Hashtable.newFrom({"PlayerChange": gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1});
gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects2Objects = Hashtable.newFrom({"PlayerChange": gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2});
gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects2Objects = Hashtable.newFrom({"PlayerChange": gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2});
gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects2Objects = Hashtable.newFrom({"PlayerChange": gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2});
gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects1Objects = Hashtable.newFrom({"PlayerChange": gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1});
gdjs.MultiplayerTitleCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MultiplayerTitleCode.GDCursorObjects1, gdjs.MultiplayerTitleCode.GDCursorObjects2);

gdjs.copyArray(gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1, gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects2Objects, (( gdjs.MultiplayerTitleCode.GDCursorObjects2.length === 0 ) ? 0 :gdjs.MultiplayerTitleCode.GDCursorObjects2[0].getPointX("")), (( gdjs.MultiplayerTitleCode.GDCursorObjects2.length === 0 ) ? 0 :gdjs.MultiplayerTitleCode.GDCursorObjects2[0].getPointY("")), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2.length;i<l;++i) {
    if ( gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i].getVariableNumber(gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[k] = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i];
        ++k;
    }
}
gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString(gdjs.evtTools.string.subStr(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), 0, 0) + "1" + gdjs.evtTools.string.subStr(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), 1, 3));
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}

}


{

gdjs.copyArray(gdjs.MultiplayerTitleCode.GDCursorObjects1, gdjs.MultiplayerTitleCode.GDCursorObjects2);

gdjs.copyArray(gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1, gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects2Objects, (( gdjs.MultiplayerTitleCode.GDCursorObjects2.length === 0 ) ? 0 :gdjs.MultiplayerTitleCode.GDCursorObjects2[0].getPointX("")), (( gdjs.MultiplayerTitleCode.GDCursorObjects2.length === 0 ) ? 0 :gdjs.MultiplayerTitleCode.GDCursorObjects2[0].getPointY("")), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2.length;i<l;++i) {
    if ( gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i].getVariableNumber(gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[k] = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i];
        ++k;
    }
}
gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString(gdjs.evtTools.string.subStr(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), 0, 1) + "1" + gdjs.evtTools.string.subStr(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), 2, 2));
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}

}


{

gdjs.copyArray(gdjs.MultiplayerTitleCode.GDCursorObjects1, gdjs.MultiplayerTitleCode.GDCursorObjects2);

gdjs.copyArray(gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1, gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects2Objects, (( gdjs.MultiplayerTitleCode.GDCursorObjects2.length === 0 ) ? 0 :gdjs.MultiplayerTitleCode.GDCursorObjects2[0].getPointX("")), (( gdjs.MultiplayerTitleCode.GDCursorObjects2.length === 0 ) ? 0 :gdjs.MultiplayerTitleCode.GDCursorObjects2[0].getPointY("")), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2.length;i<l;++i) {
    if ( gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i].getVariableNumber(gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[k] = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i];
        ++k;
    }
}
gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString(gdjs.evtTools.string.subStr(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), 0, 2) + "1" + gdjs.evtTools.string.subStr(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), 3, 1));
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}

}


{

/* Reuse gdjs.MultiplayerTitleCode.GDCursorObjects1 */
/* Reuse gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects1Objects, (( gdjs.MultiplayerTitleCode.GDCursorObjects1.length === 0 ) ? 0 :gdjs.MultiplayerTitleCode.GDCursorObjects1[0].getPointX("")), (( gdjs.MultiplayerTitleCode.GDCursorObjects1.length === 0 ) ? 0 :gdjs.MultiplayerTitleCode.GDCursorObjects1[0].getPointY("")), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1.length;i<l;++i) {
    if ( gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1[i].getVariableNumber(gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1[k] = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1[i];
        ++k;
    }
}
gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString(gdjs.evtTools.string.subStr(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), 0, 3) + "1");
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}

}


};gdjs.MultiplayerTitleCode.eventsList5 = function(runtimeScene) {

};gdjs.MultiplayerTitleCode.eventsList6 = function(runtimeScene) {

};gdjs.MultiplayerTitleCode.eventsList7 = function(runtimeScene) {

};gdjs.MultiplayerTitleCode.eventsList8 = function(runtimeScene) {

};gdjs.MultiplayerTitleCode.eventsList9 = function(runtimeScene) {

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
{gdjs.multiplayer.authenticateAndQuickJoinLobby(runtimeScene, true, false);
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
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Controller_X_is_connected.func(runtimeScene, 1, null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(46985348);
}
}
if (isConditionTrue_0) {
gdjs.MultiplayerTitleCode.GDCursorObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDCursorObjects1Objects, 566, 357, "");
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


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.MultiplayerTitleCode.GDBackObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.MultiplayerTitleCode.GDCursorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDCursorObjects1Objects, gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDBackObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", null);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.MultiplayerTitleCode.GDCursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Local"), gdjs.MultiplayerTitleCode.GDLocalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDCursorObjects1Objects, gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDLocalObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", null);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlackSquareDecoratedButton"), gdjs.MultiplayerTitleCode.GDBlackSquareDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.MultiplayerTitleCode.GDCursorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDCursorObjects1Objects, gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDBlackSquareDecoratedButtonObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", null);
}
if (isConditionTrue_0) {
gdjs.MultiplayerTitleCode.GDOnlineCheckObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDOnlineCheckObjects1Objects, 315, 381, "");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerChange"), gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1);

for (gdjs.MultiplayerTitleCode.forEachIndex2 = 0;gdjs.MultiplayerTitleCode.forEachIndex2 < gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1.length;++gdjs.MultiplayerTitleCode.forEachIndex2) {
gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2.length = 0;


gdjs.MultiplayerTitleCode.forEachTemporary2 = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1[gdjs.MultiplayerTitleCode.forEachIndex2];
gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2.push(gdjs.MultiplayerTitleCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Controller_X_is_connected.func(runtimeScene, ((gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[0].getVariables()).getFromIndex(0).getAsNumber(), null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__IsButtonJustPressed.func(runtimeScene, ((gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[0].getVariables()).getFromIndex(0).getAsNumber(), "A", null);
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2.length ;i < len;++i) {
    gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i].getBehavior("Animation").setAnimationName("ConnectedController");
}
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("PlayerNum"), gdjs.MultiplayerTitleCode.GDPlayerNumObjects1);
{for(var i = 0, len = gdjs.MultiplayerTitleCode.GDPlayerNumObjects1.length ;i < len;++i) {
    gdjs.MultiplayerTitleCode.GDPlayerNumObjects1[i].getBehavior("Text").setText("P" + gdjs.evtTools.common.toString(gdjs.MultiplayerTitleCode.GDPlayerNumObjects1[i].getVariables().getFromIndex(0).getAsNumber()));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerChange"), gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1.length;i<l;++i) {
    if ( gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1[i].getBehavior("Animation").getAnimationName() == "AI" ) {
        isConditionTrue_0 = true;
        gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1[k] = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1[i];
        ++k;
    }
}
gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "p" + gdjs.evtTools.common.toString(((gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1[0].getVariables()).getFromIndex(0).getAsNumber()) + "changewait") > 0.1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(46932860);
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(0).setString(runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}
{for(var i = 0, len = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1.length ;i < len;++i) {
    gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1[i].getBehavior("Animation").setAnimationName("NoAIOrPlayer");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "p" + gdjs.evtTools.common.toString(((gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1[0].getVariables()).getFromIndex(0).getAsNumber()) + "changewait");
}

{ //Subevents
gdjs.MultiplayerTitleCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.MultiplayerTitleCode.GDCursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerChange"), gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1.length;i<l;++i) {
    if ( gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1[i].getBehavior("Animation").getAnimationName() == "AI" ) {
        isConditionTrue_0 = true;
        gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1[k] = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1[i];
        ++k;
    }
}
gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDCursorObjects1Objects, gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__IsButtonJustPressed.func(runtimeScene, 1, "A", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects1Objects, (( gdjs.MultiplayerTitleCode.GDCursorObjects1.length === 0 ) ? 0 :gdjs.MultiplayerTitleCode.GDCursorObjects1[0].getPointX("")), (( gdjs.MultiplayerTitleCode.GDCursorObjects1.length === 0 ) ? 0 :gdjs.MultiplayerTitleCode.GDCursorObjects1[0].getPointY("")), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "p" + gdjs.evtTools.common.toString(((gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1[0].getVariables()).getFromIndex(0).getAsNumber()) + "changewait") > 0.1;
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(0).setString(runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}
{for(var i = 0, len = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1.length ;i < len;++i) {
    gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1[i].getBehavior("Animation").setAnimationName("NoAIOrPlayer");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "p" + gdjs.evtTools.common.toString(((gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1[0].getVariables()).getFromIndex(0).getAsNumber()) + "changewait");
}

{ //Subevents
gdjs.MultiplayerTitleCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerChange"), gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1.length;i<l;++i) {
    if ( gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1[i].getBehavior("Animation").getAnimationName() == "NoAIOrPlayer" ) {
        isConditionTrue_0 = true;
        gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1[k] = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1[i];
        ++k;
    }
}
gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(46435300);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "p" + gdjs.evtTools.common.toString(((gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1[0].getVariables()).getFromIndex(0).getAsNumber()) + "changewait") > 0.1;
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(0).setString(runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}
{for(var i = 0, len = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1.length ;i < len;++i) {
    gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1[i].getBehavior("Animation").setAnimationName("AI");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "p" + gdjs.evtTools.common.toString(((gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1[0].getVariables()).getFromIndex(0).getAsNumber()) + "changewait");
}

{ //Subevents
gdjs.MultiplayerTitleCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.MultiplayerTitleCode.GDCursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerChange"), gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1.length;i<l;++i) {
    if ( gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1[i].getBehavior("Animation").getAnimationName() == "NoAIOrPlayer" ) {
        isConditionTrue_0 = true;
        gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1[k] = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1[i];
        ++k;
    }
}
gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDCursorObjects1Objects, gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__IsButtonJustPressed.func(runtimeScene, 1, "A", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.MultiplayerTitleCode.mapOfGDgdjs_9546MultiplayerTitleCode_9546GDPlayerChangeObjects1Objects, (( gdjs.MultiplayerTitleCode.GDCursorObjects1.length === 0 ) ? 0 :gdjs.MultiplayerTitleCode.GDCursorObjects1[0].getPointX("")), (( gdjs.MultiplayerTitleCode.GDCursorObjects1.length === 0 ) ? 0 :gdjs.MultiplayerTitleCode.GDCursorObjects1[0].getPointY("")), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "p" + gdjs.evtTools.common.toString(((gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1[0].getVariables()).getFromIndex(0).getAsNumber()) + "changewait") > 0.1;
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(0).setString(runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}
{for(var i = 0, len = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1.length ;i < len;++i) {
    gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1[i].getBehavior("Animation").setAnimationName("AI");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "p" + gdjs.evtTools.common.toString(((gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1[0].getVariables()).getFromIndex(0).getAsNumber()) + "changewait");
}

{ //Subevents
gdjs.MultiplayerTitleCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setString("0000");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "p" + "1" + "changewait");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "p" + "2" + "changewait");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "p" + "3" + "changewait");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "p" + "4" + "changewait");
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerChange"), gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1);

for (gdjs.MultiplayerTitleCode.forEachIndex2 = 0;gdjs.MultiplayerTitleCode.forEachIndex2 < gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1.length;++gdjs.MultiplayerTitleCode.forEachIndex2) {
gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2.length = 0;


gdjs.MultiplayerTitleCode.forEachTemporary2 = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1[gdjs.MultiplayerTitleCode.forEachIndex2];
gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2.push(gdjs.MultiplayerTitleCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Controller_X_is_connected.func(runtimeScene, 1, null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2.length;i<l;++i) {
    if ( gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i].getVariableNumber(gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[k] = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i];
        ++k;
    }
}
gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2.length = k;
}
if (isConditionTrue_0) {
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerChange"), gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1);

for (gdjs.MultiplayerTitleCode.forEachIndex2 = 0;gdjs.MultiplayerTitleCode.forEachIndex2 < gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1.length;++gdjs.MultiplayerTitleCode.forEachIndex2) {
gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2.length = 0;


gdjs.MultiplayerTitleCode.forEachTemporary2 = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1[gdjs.MultiplayerTitleCode.forEachIndex2];
gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2.push(gdjs.MultiplayerTitleCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Controller_X_is_connected.func(runtimeScene, 2, null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2.length;i<l;++i) {
    if ( gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i].getVariableNumber(gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[k] = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i];
        ++k;
    }
}
gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2.length = k;
}
if (isConditionTrue_0) {
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerChange"), gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1);

for (gdjs.MultiplayerTitleCode.forEachIndex2 = 0;gdjs.MultiplayerTitleCode.forEachIndex2 < gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1.length;++gdjs.MultiplayerTitleCode.forEachIndex2) {
gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2.length = 0;


gdjs.MultiplayerTitleCode.forEachTemporary2 = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1[gdjs.MultiplayerTitleCode.forEachIndex2];
gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2.push(gdjs.MultiplayerTitleCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Controller_X_is_connected.func(runtimeScene, 3, null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2.length;i<l;++i) {
    if ( gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i].getVariableNumber(gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[k] = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i];
        ++k;
    }
}
gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2.length = k;
}
if (isConditionTrue_0) {
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerChange"), gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1);

for (gdjs.MultiplayerTitleCode.forEachIndex2 = 0;gdjs.MultiplayerTitleCode.forEachIndex2 < gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1.length;++gdjs.MultiplayerTitleCode.forEachIndex2) {
gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2.length = 0;


gdjs.MultiplayerTitleCode.forEachTemporary2 = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1[gdjs.MultiplayerTitleCode.forEachIndex2];
gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2.push(gdjs.MultiplayerTitleCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Controller_X_is_connected.func(runtimeScene, 4, null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2.length;i<l;++i) {
    if ( gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i].getVariableNumber(gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[k] = gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2[i];
        ++k;
    }
}
gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2.length = k;
}
if (isConditionTrue_0) {
}
}

}


};

gdjs.MultiplayerTitleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MultiplayerTitleCode.GDBlackSquareDecoratedButtonObjects1.length = 0;
gdjs.MultiplayerTitleCode.GDBlackSquareDecoratedButtonObjects2.length = 0;
gdjs.MultiplayerTitleCode.GDBlackSquareDecoratedButtonObjects3.length = 0;
gdjs.MultiplayerTitleCode.GDLocalObjects1.length = 0;
gdjs.MultiplayerTitleCode.GDLocalObjects2.length = 0;
gdjs.MultiplayerTitleCode.GDLocalObjects3.length = 0;
gdjs.MultiplayerTitleCode.GDBackObjects1.length = 0;
gdjs.MultiplayerTitleCode.GDBackObjects2.length = 0;
gdjs.MultiplayerTitleCode.GDBackObjects3.length = 0;
gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1.length = 0;
gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2.length = 0;
gdjs.MultiplayerTitleCode.GDPlayerChangeObjects3.length = 0;
gdjs.MultiplayerTitleCode.GDPlayerNumObjects1.length = 0;
gdjs.MultiplayerTitleCode.GDPlayerNumObjects2.length = 0;
gdjs.MultiplayerTitleCode.GDPlayerNumObjects3.length = 0;
gdjs.MultiplayerTitleCode.GDNewTextObjects1.length = 0;
gdjs.MultiplayerTitleCode.GDNewTextObjects2.length = 0;
gdjs.MultiplayerTitleCode.GDNewTextObjects3.length = 0;
gdjs.MultiplayerTitleCode.GDCustomLobbiesObjects1.length = 0;
gdjs.MultiplayerTitleCode.GDCustomLobbiesObjects2.length = 0;
gdjs.MultiplayerTitleCode.GDCustomLobbiesObjects3.length = 0;
gdjs.MultiplayerTitleCode.GDOnlineCheckObjects1.length = 0;
gdjs.MultiplayerTitleCode.GDOnlineCheckObjects2.length = 0;
gdjs.MultiplayerTitleCode.GDOnlineCheckObjects3.length = 0;
gdjs.MultiplayerTitleCode.GDCursorObjects1.length = 0;
gdjs.MultiplayerTitleCode.GDCursorObjects2.length = 0;
gdjs.MultiplayerTitleCode.GDCursorObjects3.length = 0;

gdjs.MultiplayerTitleCode.eventsList9(runtimeScene);
gdjs.MultiplayerTitleCode.GDBlackSquareDecoratedButtonObjects1.length = 0;
gdjs.MultiplayerTitleCode.GDBlackSquareDecoratedButtonObjects2.length = 0;
gdjs.MultiplayerTitleCode.GDBlackSquareDecoratedButtonObjects3.length = 0;
gdjs.MultiplayerTitleCode.GDLocalObjects1.length = 0;
gdjs.MultiplayerTitleCode.GDLocalObjects2.length = 0;
gdjs.MultiplayerTitleCode.GDLocalObjects3.length = 0;
gdjs.MultiplayerTitleCode.GDBackObjects1.length = 0;
gdjs.MultiplayerTitleCode.GDBackObjects2.length = 0;
gdjs.MultiplayerTitleCode.GDBackObjects3.length = 0;
gdjs.MultiplayerTitleCode.GDPlayerChangeObjects1.length = 0;
gdjs.MultiplayerTitleCode.GDPlayerChangeObjects2.length = 0;
gdjs.MultiplayerTitleCode.GDPlayerChangeObjects3.length = 0;
gdjs.MultiplayerTitleCode.GDPlayerNumObjects1.length = 0;
gdjs.MultiplayerTitleCode.GDPlayerNumObjects2.length = 0;
gdjs.MultiplayerTitleCode.GDPlayerNumObjects3.length = 0;
gdjs.MultiplayerTitleCode.GDNewTextObjects1.length = 0;
gdjs.MultiplayerTitleCode.GDNewTextObjects2.length = 0;
gdjs.MultiplayerTitleCode.GDNewTextObjects3.length = 0;
gdjs.MultiplayerTitleCode.GDCustomLobbiesObjects1.length = 0;
gdjs.MultiplayerTitleCode.GDCustomLobbiesObjects2.length = 0;
gdjs.MultiplayerTitleCode.GDCustomLobbiesObjects3.length = 0;
gdjs.MultiplayerTitleCode.GDOnlineCheckObjects1.length = 0;
gdjs.MultiplayerTitleCode.GDOnlineCheckObjects2.length = 0;
gdjs.MultiplayerTitleCode.GDOnlineCheckObjects3.length = 0;
gdjs.MultiplayerTitleCode.GDCursorObjects1.length = 0;
gdjs.MultiplayerTitleCode.GDCursorObjects2.length = 0;
gdjs.MultiplayerTitleCode.GDCursorObjects3.length = 0;


return;

}

gdjs['MultiplayerTitleCode'] = gdjs.MultiplayerTitleCode;
