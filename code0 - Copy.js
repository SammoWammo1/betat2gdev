gdjs.SplashCode = {};
gdjs.SplashCode.localVariables = [];
gdjs.SplashCode.idToCallbackMap = new Map();
gdjs.SplashCode.GDCursorObjects1_1final = [];

gdjs.SplashCode.GDNewButtonObjects1_1final = [];

gdjs.SplashCode.GDNewSpriteObjects1= [];
gdjs.SplashCode.GDNewSpriteObjects2= [];
gdjs.SplashCode.GDTextObjects1= [];
gdjs.SplashCode.GDTextObjects2= [];
gdjs.SplashCode.GDGamepadTextObjects1= [];
gdjs.SplashCode.GDGamepadTextObjects2= [];
gdjs.SplashCode.GDGamepadObjects1= [];
gdjs.SplashCode.GDGamepadObjects2= [];
gdjs.SplashCode.GDWarningObjects1= [];
gdjs.SplashCode.GDWarningObjects2= [];
gdjs.SplashCode.GDNewButtonObjects1= [];
gdjs.SplashCode.GDNewButtonObjects2= [];
gdjs.SplashCode.GDNewTextObjects1= [];
gdjs.SplashCode.GDNewTextObjects2= [];
gdjs.SplashCode.GDNewSprite2Objects1= [];
gdjs.SplashCode.GDNewSprite2Objects2= [];
gdjs.SplashCode.GDNewButton2Objects1= [];
gdjs.SplashCode.GDNewButton2Objects2= [];
gdjs.SplashCode.GDNewText2Objects1= [];
gdjs.SplashCode.GDNewText2Objects2= [];
gdjs.SplashCode.GDCustomLobbiesObjects1= [];
gdjs.SplashCode.GDCustomLobbiesObjects2= [];
gdjs.SplashCode.GDOnlineCheckObjects1= [];
gdjs.SplashCode.GDOnlineCheckObjects2= [];
gdjs.SplashCode.GDCursorObjects1= [];
gdjs.SplashCode.GDCursorObjects2= [];
gdjs.SplashCode.GDBGObjects1= [];
gdjs.SplashCode.GDBGObjects2= [];


gdjs.SplashCode.mapOfGDgdjs_9546SplashCode_9546GDCursorObjects2Objects = Hashtable.newFrom({"Cursor": gdjs.SplashCode.GDCursorObjects2});
gdjs.SplashCode.mapOfGDgdjs_9546SplashCode_9546GDNewButtonObjects2Objects = Hashtable.newFrom({"NewButton": gdjs.SplashCode.GDNewButtonObjects2});
gdjs.SplashCode.asyncCallback51334892 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SplashCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.SplashCode.GDNewSprite2Objects2);
{for(var i = 0, len = gdjs.SplashCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.SplashCode.GDNewSprite2Objects2[i].getBehavior("Animation").setAnimationName("connected2");
}
}
gdjs.SplashCode.localVariables.length = 0;
}
gdjs.SplashCode.idToCallbackMap.set(51334892, gdjs.SplashCode.asyncCallback51334892);
gdjs.SplashCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SplashCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__GamejoltAPI__AuthenticateUser.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(1).getAsString(), null), (runtimeScene) => (gdjs.SplashCode.asyncCallback51334892(runtimeScene, asyncObjectsList)), 51334892, asyncObjectsList);
}
}

}


};gdjs.SplashCode.asyncCallback51338700 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SplashCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewButton"), gdjs.SplashCode.GDNewButtonObjects2);

gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.SplashCode.GDNewText2Objects2);
{for(var i = 0, len = gdjs.SplashCode.GDNewButtonObjects2.length ;i < len;++i) {
    gdjs.SplashCode.GDNewButtonObjects2[i].Activate(true, null);
}
}
{for(var i = 0, len = gdjs.SplashCode.GDNewButtonObjects2.length ;i < len;++i) {
    gdjs.SplashCode.GDNewButtonObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.SplashCode.GDNewText2Objects2.length ;i < len;++i) {
    gdjs.SplashCode.GDNewText2Objects2[i].hide();
}
}
gdjs.SplashCode.localVariables.length = 0;
}
gdjs.SplashCode.idToCallbackMap.set(51338700, gdjs.SplashCode.asyncCallback51338700);
gdjs.SplashCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SplashCode.localVariables);
for (const obj of gdjs.SplashCode.GDNewButtonObjects1) asyncObjectsList.addObject("NewButton", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(10), (runtimeScene) => (gdjs.SplashCode.asyncCallback51338700(runtimeScene, asyncObjectsList)), 51338700, asyncObjectsList);
}
}

}


};gdjs.SplashCode.eventsList2 = function(runtimeScene) {

{

gdjs.SplashCode.GDCursorObjects1.length = 0;

gdjs.SplashCode.GDNewButtonObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.SplashCode.GDCursorObjects1_1final.length = 0;
gdjs.SplashCode.GDNewButtonObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewButton"), gdjs.SplashCode.GDNewButtonObjects2);
for (var i = 0, k = 0, l = gdjs.SplashCode.GDNewButtonObjects2.length;i<l;++i) {
    if ( gdjs.SplashCode.GDNewButtonObjects2[i].IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.SplashCode.GDNewButtonObjects2[k] = gdjs.SplashCode.GDNewButtonObjects2[i];
        ++k;
    }
}
gdjs.SplashCode.GDNewButtonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.SplashCode.GDNewButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.SplashCode.GDNewButtonObjects1_1final.indexOf(gdjs.SplashCode.GDNewButtonObjects2[j]) === -1 )
            gdjs.SplashCode.GDNewButtonObjects1_1final.push(gdjs.SplashCode.GDNewButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.SplashCode.GDCursorObjects2);
gdjs.copyArray(runtimeScene.getObjects("NewButton"), gdjs.SplashCode.GDNewButtonObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SplashCode.mapOfGDgdjs_9546SplashCode_9546GDCursorObjects2Objects, gdjs.SplashCode.mapOfGDgdjs_9546SplashCode_9546GDNewButtonObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__Gamepads__IsButtonJustPressed.func(runtimeScene, 1, "A", null);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = !(gdjs.evtsExt__GamejoltAPI__Session.func(runtimeScene, null));
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.SplashCode.GDCursorObjects2.length; j < jLen ; ++j) {
        if ( gdjs.SplashCode.GDCursorObjects1_1final.indexOf(gdjs.SplashCode.GDCursorObjects2[j]) === -1 )
            gdjs.SplashCode.GDCursorObjects1_1final.push(gdjs.SplashCode.GDCursorObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.SplashCode.GDNewButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.SplashCode.GDNewButtonObjects1_1final.indexOf(gdjs.SplashCode.GDNewButtonObjects2[j]) === -1 )
            gdjs.SplashCode.GDNewButtonObjects1_1final.push(gdjs.SplashCode.GDNewButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.SplashCode.GDCursorObjects1_1final, gdjs.SplashCode.GDCursorObjects1);
gdjs.copyArray(gdjs.SplashCode.GDNewButtonObjects1_1final, gdjs.SplashCode.GDNewButtonObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
}
{gdjs.evtTools.network.enableMetrics(runtimeScene, true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtsExt__GamejoltAPI__RegisterGame.func(runtimeScene, "1006705", "4bacaa725f848a06a458ba4e3690e6c1", null);
}
{gdjs.evtTools.network.enableMetrics(runtimeScene, false);
}
{gdjs.evtTools.advancedWindow.setFullScreenable(true, runtimeScene);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timeryoufool");
}
{gdjs.evtTools.sound.preloadMusic(runtimeScene, "Title.mp3");
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

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.SplashCode.GDNewTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__InternetConnectivity__IsDeviceOnline.func(runtimeScene, null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SplashCode.GDNewTextObjects1.length;i<l;++i) {
    if ( !(gdjs.SplashCode.GDNewTextObjects1[i].getBehavior("Text").getText() == "You're logged in as we know!") ) {
        isConditionTrue_0 = true;
        gdjs.SplashCode.GDNewTextObjects1[k] = gdjs.SplashCode.GDNewTextObjects1[i];
        ++k;
    }
}
gdjs.SplashCode.GDNewTextObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.SplashCode.GDNewSprite2Objects1);
/* Reuse gdjs.SplashCode.GDNewTextObjects1 */
{for(var i = 0, len = gdjs.SplashCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.SplashCode.GDNewTextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.SplashCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.SplashCode.GDNewSprite2Objects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.SplashCode.GDNewTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__InternetConnectivity__IsDeviceOnline.func(runtimeScene, null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SplashCode.GDNewTextObjects1.length;i<l;++i) {
    if ( !(gdjs.SplashCode.GDNewTextObjects1[i].getBehavior("Text").getText() == "You're logged in as we know!") ) {
        isConditionTrue_0 = true;
        gdjs.SplashCode.GDNewTextObjects1[k] = gdjs.SplashCode.GDNewTextObjects1[i];
        ++k;
    }
}
gdjs.SplashCode.GDNewTextObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.SplashCode.GDNewSprite2Objects1);
/* Reuse gdjs.SplashCode.GDNewTextObjects1 */
{for(var i = 0, len = gdjs.SplashCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.SplashCode.GDNewTextObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.SplashCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.SplashCode.GDNewSprite2Objects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.SplashCode.GDNewTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__InternetConnectivity__IsDeviceOnline.func(runtimeScene, null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SplashCode.GDNewTextObjects1.length;i<l;++i) {
    if ( gdjs.SplashCode.GDNewTextObjects1[i].getBehavior("Text").getText() == "You're logged in as we know!" ) {
        isConditionTrue_0 = true;
        gdjs.SplashCode.GDNewTextObjects1[k] = gdjs.SplashCode.GDNewTextObjects1[i];
        ++k;
    }
}
gdjs.SplashCode.GDNewTextObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.SplashCode.GDNewSprite2Objects1);
/* Reuse gdjs.SplashCode.GDNewTextObjects1 */
{for(var i = 0, len = gdjs.SplashCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.SplashCode.GDNewTextObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.SplashCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.SplashCode.GDNewSprite2Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timeryoufool") >= gdjs.randomFloatInRange(3, 6);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(51334068);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readStringFromJSONFile("gjusername", "gamejolt", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}
{gdjs.evtTools.storage.readStringFromJSONFile("gjgametoken", "gamejolt", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}

{ //Subevents
gdjs.SplashCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__InternetConnectivity__IsDeviceOnline.func(runtimeScene, null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__GamejoltAPI__Authenticated.func(runtimeScene, null);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewButton2"), gdjs.SplashCode.GDNewButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.SplashCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.SplashCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.SplashCode.GDNewTextObjects1[i].getBehavior("Text").setText("You're logged in as we know!");
}
}
{for(var i = 0, len = gdjs.SplashCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.SplashCode.GDNewTextObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.SplashCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.SplashCode.GDNewTextObjects1[i].setColor("0;255;0");
}
}
{for(var i = 0, len = gdjs.SplashCode.GDNewButton2Objects1.length ;i < len;++i) {
    gdjs.SplashCode.GDNewButton2Objects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs.SplashCode.GDNewButton2Objects1.length ;i < len;++i) {
    gdjs.SplashCode.GDNewButton2Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__GamejoltAPI__Authenticated.func(runtimeScene, null);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.SplashCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.SplashCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.SplashCode.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("loggedin");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewButton2"), gdjs.SplashCode.GDNewButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SplashCode.GDNewButton2Objects1.length;i<l;++i) {
    if ( gdjs.SplashCode.GDNewButton2Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.SplashCode.GDNewButton2Objects1[k] = gdjs.SplashCode.GDNewButton2Objects1[i];
        ++k;
    }
}
gdjs.SplashCode.GDNewButton2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gamejolt", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewButton"), gdjs.SplashCode.GDNewButtonObjects1);
{for(var i = 0, len = gdjs.SplashCode.GDNewButtonObjects1.length ;i < len;++i) {
    gdjs.SplashCode.GDNewButtonObjects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs.SplashCode.GDNewButtonObjects1.length ;i < len;++i) {
    gdjs.SplashCode.GDNewButtonObjects1[i].hide();
}
}
{gdjs.evtTools.sound.preloadMusic(runtimeScene, "Title.mp3");
}

{ //Subevents
gdjs.SplashCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.SplashCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SplashCode.GDNewSpriteObjects1.length = 0;
gdjs.SplashCode.GDNewSpriteObjects2.length = 0;
gdjs.SplashCode.GDTextObjects1.length = 0;
gdjs.SplashCode.GDTextObjects2.length = 0;
gdjs.SplashCode.GDGamepadTextObjects1.length = 0;
gdjs.SplashCode.GDGamepadTextObjects2.length = 0;
gdjs.SplashCode.GDGamepadObjects1.length = 0;
gdjs.SplashCode.GDGamepadObjects2.length = 0;
gdjs.SplashCode.GDWarningObjects1.length = 0;
gdjs.SplashCode.GDWarningObjects2.length = 0;
gdjs.SplashCode.GDNewButtonObjects1.length = 0;
gdjs.SplashCode.GDNewButtonObjects2.length = 0;
gdjs.SplashCode.GDNewTextObjects1.length = 0;
gdjs.SplashCode.GDNewTextObjects2.length = 0;
gdjs.SplashCode.GDNewSprite2Objects1.length = 0;
gdjs.SplashCode.GDNewSprite2Objects2.length = 0;
gdjs.SplashCode.GDNewButton2Objects1.length = 0;
gdjs.SplashCode.GDNewButton2Objects2.length = 0;
gdjs.SplashCode.GDNewText2Objects1.length = 0;
gdjs.SplashCode.GDNewText2Objects2.length = 0;
gdjs.SplashCode.GDCustomLobbiesObjects1.length = 0;
gdjs.SplashCode.GDCustomLobbiesObjects2.length = 0;
gdjs.SplashCode.GDOnlineCheckObjects1.length = 0;
gdjs.SplashCode.GDOnlineCheckObjects2.length = 0;
gdjs.SplashCode.GDCursorObjects1.length = 0;
gdjs.SplashCode.GDCursorObjects2.length = 0;
gdjs.SplashCode.GDBGObjects1.length = 0;
gdjs.SplashCode.GDBGObjects2.length = 0;

gdjs.SplashCode.eventsList2(runtimeScene);
gdjs.SplashCode.GDNewSpriteObjects1.length = 0;
gdjs.SplashCode.GDNewSpriteObjects2.length = 0;
gdjs.SplashCode.GDTextObjects1.length = 0;
gdjs.SplashCode.GDTextObjects2.length = 0;
gdjs.SplashCode.GDGamepadTextObjects1.length = 0;
gdjs.SplashCode.GDGamepadTextObjects2.length = 0;
gdjs.SplashCode.GDGamepadObjects1.length = 0;
gdjs.SplashCode.GDGamepadObjects2.length = 0;
gdjs.SplashCode.GDWarningObjects1.length = 0;
gdjs.SplashCode.GDWarningObjects2.length = 0;
gdjs.SplashCode.GDNewButtonObjects1.length = 0;
gdjs.SplashCode.GDNewButtonObjects2.length = 0;
gdjs.SplashCode.GDNewTextObjects1.length = 0;
gdjs.SplashCode.GDNewTextObjects2.length = 0;
gdjs.SplashCode.GDNewSprite2Objects1.length = 0;
gdjs.SplashCode.GDNewSprite2Objects2.length = 0;
gdjs.SplashCode.GDNewButton2Objects1.length = 0;
gdjs.SplashCode.GDNewButton2Objects2.length = 0;
gdjs.SplashCode.GDNewText2Objects1.length = 0;
gdjs.SplashCode.GDNewText2Objects2.length = 0;
gdjs.SplashCode.GDCustomLobbiesObjects1.length = 0;
gdjs.SplashCode.GDCustomLobbiesObjects2.length = 0;
gdjs.SplashCode.GDOnlineCheckObjects1.length = 0;
gdjs.SplashCode.GDOnlineCheckObjects2.length = 0;
gdjs.SplashCode.GDCursorObjects1.length = 0;
gdjs.SplashCode.GDCursorObjects2.length = 0;
gdjs.SplashCode.GDBGObjects1.length = 0;
gdjs.SplashCode.GDBGObjects2.length = 0;


return;

}

gdjs['SplashCode'] = gdjs.SplashCode;
