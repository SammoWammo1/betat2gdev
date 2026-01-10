gdjs.DEMOENDCode = {};
gdjs.DEMOENDCode.localVariables = [];
gdjs.DEMOENDCode.idToCallbackMap = new Map();
gdjs.DEMOENDCode.GDCursorObjects1_1final = [];

gdjs.DEMOENDCode.GDExitObjects1_1final = [];

gdjs.DEMOENDCode.GDGamePageObjects1_1final = [];

gdjs.DEMOENDCode.GDTitleObjects1_1final = [];

gdjs.DEMOENDCode.GDGamePageObjects1= [];
gdjs.DEMOENDCode.GDGamePageObjects2= [];
gdjs.DEMOENDCode.GDbgimgObjects1= [];
gdjs.DEMOENDCode.GDbgimgObjects2= [];
gdjs.DEMOENDCode.GDTitleObjects1= [];
gdjs.DEMOENDCode.GDTitleObjects2= [];
gdjs.DEMOENDCode.GDExitObjects1= [];
gdjs.DEMOENDCode.GDExitObjects2= [];
gdjs.DEMOENDCode.GDCustomLobbiesObjects1= [];
gdjs.DEMOENDCode.GDCustomLobbiesObjects2= [];
gdjs.DEMOENDCode.GDOnlineCheckObjects1= [];
gdjs.DEMOENDCode.GDOnlineCheckObjects2= [];
gdjs.DEMOENDCode.GDCursorObjects1= [];
gdjs.DEMOENDCode.GDCursorObjects2= [];
gdjs.DEMOENDCode.GDBGObjects1= [];
gdjs.DEMOENDCode.GDBGObjects2= [];


gdjs.DEMOENDCode.mapOfGDgdjs_9546DEMOENDCode_9546GDCursorObjects2Objects = Hashtable.newFrom({"Cursor": gdjs.DEMOENDCode.GDCursorObjects2});
gdjs.DEMOENDCode.mapOfGDgdjs_9546DEMOENDCode_9546GDGamePageObjects2Objects = Hashtable.newFrom({"GamePage": gdjs.DEMOENDCode.GDGamePageObjects2});
gdjs.DEMOENDCode.mapOfGDgdjs_9546DEMOENDCode_9546GDCursorObjects2Objects = Hashtable.newFrom({"Cursor": gdjs.DEMOENDCode.GDCursorObjects2});
gdjs.DEMOENDCode.mapOfGDgdjs_9546DEMOENDCode_9546GDTitleObjects2Objects = Hashtable.newFrom({"Title": gdjs.DEMOENDCode.GDTitleObjects2});
gdjs.DEMOENDCode.mapOfGDgdjs_9546DEMOENDCode_9546GDCursorObjects2Objects = Hashtable.newFrom({"Cursor": gdjs.DEMOENDCode.GDCursorObjects2});
gdjs.DEMOENDCode.mapOfGDgdjs_9546DEMOENDCode_9546GDExitObjects2Objects = Hashtable.newFrom({"Exit": gdjs.DEMOENDCode.GDExitObjects2});
gdjs.DEMOENDCode.eventsList0 = function(runtimeScene) {

{

gdjs.DEMOENDCode.GDCursorObjects1.length = 0;

gdjs.DEMOENDCode.GDGamePageObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.DEMOENDCode.GDCursorObjects1_1final.length = 0;
gdjs.DEMOENDCode.GDGamePageObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("GamePage"), gdjs.DEMOENDCode.GDGamePageObjects2);
for (var i = 0, k = 0, l = gdjs.DEMOENDCode.GDGamePageObjects2.length;i<l;++i) {
    if ( gdjs.DEMOENDCode.GDGamePageObjects2[i].IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.DEMOENDCode.GDGamePageObjects2[k] = gdjs.DEMOENDCode.GDGamePageObjects2[i];
        ++k;
    }
}
gdjs.DEMOENDCode.GDGamePageObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.DEMOENDCode.GDGamePageObjects2.length; j < jLen ; ++j) {
        if ( gdjs.DEMOENDCode.GDGamePageObjects1_1final.indexOf(gdjs.DEMOENDCode.GDGamePageObjects2[j]) === -1 )
            gdjs.DEMOENDCode.GDGamePageObjects1_1final.push(gdjs.DEMOENDCode.GDGamePageObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.DEMOENDCode.GDCursorObjects2);
gdjs.copyArray(runtimeScene.getObjects("GamePage"), gdjs.DEMOENDCode.GDGamePageObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.DEMOENDCode.mapOfGDgdjs_9546DEMOENDCode_9546GDCursorObjects2Objects, gdjs.DEMOENDCode.mapOfGDgdjs_9546DEMOENDCode_9546GDGamePageObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__Gamepads__IsButtonJustPressed.func(runtimeScene, 1, "A", null);
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.DEMOENDCode.GDCursorObjects2.length; j < jLen ; ++j) {
        if ( gdjs.DEMOENDCode.GDCursorObjects1_1final.indexOf(gdjs.DEMOENDCode.GDCursorObjects2[j]) === -1 )
            gdjs.DEMOENDCode.GDCursorObjects1_1final.push(gdjs.DEMOENDCode.GDCursorObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.DEMOENDCode.GDGamePageObjects2.length; j < jLen ; ++j) {
        if ( gdjs.DEMOENDCode.GDGamePageObjects1_1final.indexOf(gdjs.DEMOENDCode.GDGamePageObjects2[j]) === -1 )
            gdjs.DEMOENDCode.GDGamePageObjects1_1final.push(gdjs.DEMOENDCode.GDGamePageObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.DEMOENDCode.GDCursorObjects1_1final, gdjs.DEMOENDCode.GDCursorObjects1);
gdjs.copyArray(gdjs.DEMOENDCode.GDGamePageObjects1_1final, gdjs.DEMOENDCode.GDGamePageObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://sammowammo.online/t2pshot.html", runtimeScene);
}
}

}


{

gdjs.DEMOENDCode.GDCursorObjects1.length = 0;

gdjs.DEMOENDCode.GDTitleObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.DEMOENDCode.GDCursorObjects1_1final.length = 0;
gdjs.DEMOENDCode.GDTitleObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Title"), gdjs.DEMOENDCode.GDTitleObjects2);
for (var i = 0, k = 0, l = gdjs.DEMOENDCode.GDTitleObjects2.length;i<l;++i) {
    if ( gdjs.DEMOENDCode.GDTitleObjects2[i].IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.DEMOENDCode.GDTitleObjects2[k] = gdjs.DEMOENDCode.GDTitleObjects2[i];
        ++k;
    }
}
gdjs.DEMOENDCode.GDTitleObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.DEMOENDCode.GDTitleObjects2.length; j < jLen ; ++j) {
        if ( gdjs.DEMOENDCode.GDTitleObjects1_1final.indexOf(gdjs.DEMOENDCode.GDTitleObjects2[j]) === -1 )
            gdjs.DEMOENDCode.GDTitleObjects1_1final.push(gdjs.DEMOENDCode.GDTitleObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.DEMOENDCode.GDCursorObjects2);
gdjs.copyArray(runtimeScene.getObjects("Title"), gdjs.DEMOENDCode.GDTitleObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.DEMOENDCode.mapOfGDgdjs_9546DEMOENDCode_9546GDCursorObjects2Objects, gdjs.DEMOENDCode.mapOfGDgdjs_9546DEMOENDCode_9546GDTitleObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__Gamepads__IsButtonJustPressed.func(runtimeScene, 1, "A", null);
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.DEMOENDCode.GDCursorObjects2.length; j < jLen ; ++j) {
        if ( gdjs.DEMOENDCode.GDCursorObjects1_1final.indexOf(gdjs.DEMOENDCode.GDCursorObjects2[j]) === -1 )
            gdjs.DEMOENDCode.GDCursorObjects1_1final.push(gdjs.DEMOENDCode.GDCursorObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.DEMOENDCode.GDTitleObjects2.length; j < jLen ; ++j) {
        if ( gdjs.DEMOENDCode.GDTitleObjects1_1final.indexOf(gdjs.DEMOENDCode.GDTitleObjects2[j]) === -1 )
            gdjs.DEMOENDCode.GDTitleObjects1_1final.push(gdjs.DEMOENDCode.GDTitleObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.DEMOENDCode.GDCursorObjects1_1final, gdjs.DEMOENDCode.GDCursorObjects1);
gdjs.copyArray(gdjs.DEMOENDCode.GDTitleObjects1_1final, gdjs.DEMOENDCode.GDTitleObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
}

}


{

gdjs.DEMOENDCode.GDCursorObjects1.length = 0;

gdjs.DEMOENDCode.GDExitObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.DEMOENDCode.GDCursorObjects1_1final.length = 0;
gdjs.DEMOENDCode.GDExitObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.DEMOENDCode.GDExitObjects2);
for (var i = 0, k = 0, l = gdjs.DEMOENDCode.GDExitObjects2.length;i<l;++i) {
    if ( gdjs.DEMOENDCode.GDExitObjects2[i].IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.DEMOENDCode.GDExitObjects2[k] = gdjs.DEMOENDCode.GDExitObjects2[i];
        ++k;
    }
}
gdjs.DEMOENDCode.GDExitObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.DEMOENDCode.GDExitObjects2.length; j < jLen ; ++j) {
        if ( gdjs.DEMOENDCode.GDExitObjects1_1final.indexOf(gdjs.DEMOENDCode.GDExitObjects2[j]) === -1 )
            gdjs.DEMOENDCode.GDExitObjects1_1final.push(gdjs.DEMOENDCode.GDExitObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.DEMOENDCode.GDCursorObjects2);
gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.DEMOENDCode.GDExitObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.DEMOENDCode.mapOfGDgdjs_9546DEMOENDCode_9546GDCursorObjects2Objects, gdjs.DEMOENDCode.mapOfGDgdjs_9546DEMOENDCode_9546GDExitObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__Gamepads__IsButtonJustPressed.func(runtimeScene, 1, "A", null);
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.DEMOENDCode.GDCursorObjects2.length; j < jLen ; ++j) {
        if ( gdjs.DEMOENDCode.GDCursorObjects1_1final.indexOf(gdjs.DEMOENDCode.GDCursorObjects2[j]) === -1 )
            gdjs.DEMOENDCode.GDCursorObjects1_1final.push(gdjs.DEMOENDCode.GDCursorObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.DEMOENDCode.GDExitObjects2.length; j < jLen ; ++j) {
        if ( gdjs.DEMOENDCode.GDExitObjects1_1final.indexOf(gdjs.DEMOENDCode.GDExitObjects2[j]) === -1 )
            gdjs.DEMOENDCode.GDExitObjects1_1final.push(gdjs.DEMOENDCode.GDExitObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.DEMOENDCode.GDCursorObjects1_1final, gdjs.DEMOENDCode.GDCursorObjects1);
gdjs.copyArray(gdjs.DEMOENDCode.GDExitObjects1_1final, gdjs.DEMOENDCode.GDExitObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
}

}


};

gdjs.DEMOENDCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DEMOENDCode.GDGamePageObjects1.length = 0;
gdjs.DEMOENDCode.GDGamePageObjects2.length = 0;
gdjs.DEMOENDCode.GDbgimgObjects1.length = 0;
gdjs.DEMOENDCode.GDbgimgObjects2.length = 0;
gdjs.DEMOENDCode.GDTitleObjects1.length = 0;
gdjs.DEMOENDCode.GDTitleObjects2.length = 0;
gdjs.DEMOENDCode.GDExitObjects1.length = 0;
gdjs.DEMOENDCode.GDExitObjects2.length = 0;
gdjs.DEMOENDCode.GDCustomLobbiesObjects1.length = 0;
gdjs.DEMOENDCode.GDCustomLobbiesObjects2.length = 0;
gdjs.DEMOENDCode.GDOnlineCheckObjects1.length = 0;
gdjs.DEMOENDCode.GDOnlineCheckObjects2.length = 0;
gdjs.DEMOENDCode.GDCursorObjects1.length = 0;
gdjs.DEMOENDCode.GDCursorObjects2.length = 0;
gdjs.DEMOENDCode.GDBGObjects1.length = 0;
gdjs.DEMOENDCode.GDBGObjects2.length = 0;

gdjs.DEMOENDCode.eventsList0(runtimeScene);
gdjs.DEMOENDCode.GDGamePageObjects1.length = 0;
gdjs.DEMOENDCode.GDGamePageObjects2.length = 0;
gdjs.DEMOENDCode.GDbgimgObjects1.length = 0;
gdjs.DEMOENDCode.GDbgimgObjects2.length = 0;
gdjs.DEMOENDCode.GDTitleObjects1.length = 0;
gdjs.DEMOENDCode.GDTitleObjects2.length = 0;
gdjs.DEMOENDCode.GDExitObjects1.length = 0;
gdjs.DEMOENDCode.GDExitObjects2.length = 0;
gdjs.DEMOENDCode.GDCustomLobbiesObjects1.length = 0;
gdjs.DEMOENDCode.GDCustomLobbiesObjects2.length = 0;
gdjs.DEMOENDCode.GDOnlineCheckObjects1.length = 0;
gdjs.DEMOENDCode.GDOnlineCheckObjects2.length = 0;
gdjs.DEMOENDCode.GDCursorObjects1.length = 0;
gdjs.DEMOENDCode.GDCursorObjects2.length = 0;
gdjs.DEMOENDCode.GDBGObjects1.length = 0;
gdjs.DEMOENDCode.GDBGObjects2.length = 0;


return;

}

gdjs['DEMOENDCode'] = gdjs.DEMOENDCode;
