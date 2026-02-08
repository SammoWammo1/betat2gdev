gdjs.difficultyselectorCode = {};
gdjs.difficultyselectorCode.localVariables = [];
gdjs.difficultyselectorCode.idToCallbackMap = new Map();
gdjs.difficultyselectorCode.GDNewTiledSpriteObjects1= [];
gdjs.difficultyselectorCode.GDNewTiledSpriteObjects2= [];
gdjs.difficultyselectorCode.GDNewSpriteObjects1= [];
gdjs.difficultyselectorCode.GDNewSpriteObjects2= [];
gdjs.difficultyselectorCode.GDDifficultyObjects1= [];
gdjs.difficultyselectorCode.GDDifficultyObjects2= [];
gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1= [];
gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects2= [];
gdjs.difficultyselectorCode.GDNewButtonObjects1= [];
gdjs.difficultyselectorCode.GDNewButtonObjects2= [];
gdjs.difficultyselectorCode.GDNewTextObjects1= [];
gdjs.difficultyselectorCode.GDNewTextObjects2= [];
gdjs.difficultyselectorCode.GDNewToggleSwitchObjects1= [];
gdjs.difficultyselectorCode.GDNewToggleSwitchObjects2= [];
gdjs.difficultyselectorCode.GDassisttextObjects1= [];
gdjs.difficultyselectorCode.GDassisttextObjects2= [];
gdjs.difficultyselectorCode.GDnoteObjects1= [];
gdjs.difficultyselectorCode.GDnoteObjects2= [];
gdjs.difficultyselectorCode.GDCustomLobbiesObjects1= [];
gdjs.difficultyselectorCode.GDCustomLobbiesObjects2= [];
gdjs.difficultyselectorCode.GDOnlineCheckObjects1= [];
gdjs.difficultyselectorCode.GDOnlineCheckObjects2= [];
gdjs.difficultyselectorCode.GDCursorObjects1= [];
gdjs.difficultyselectorCode.GDCursorObjects2= [];
gdjs.difficultyselectorCode.GDBGObjects1= [];
gdjs.difficultyselectorCode.GDBGObjects2= [];


gdjs.difficultyselectorCode.mapOfGDgdjs_9546difficultyselectorCode_9546GDSquareWhiteSliderObjects1Objects = Hashtable.newFrom({"SquareWhiteSlider": gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1});
gdjs.difficultyselectorCode.mapOfGDgdjs_9546difficultyselectorCode_9546GDCursorObjects1Objects = Hashtable.newFrom({"Cursor": gdjs.difficultyselectorCode.GDCursorObjects1});
gdjs.difficultyselectorCode.mapOfGDgdjs_9546difficultyselectorCode_9546GDSquareWhiteSliderObjects1Objects = Hashtable.newFrom({"SquareWhiteSlider": gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1});
gdjs.difficultyselectorCode.mapOfGDgdjs_9546difficultyselectorCode_9546GDCursorObjects1Objects = Hashtable.newFrom({"Cursor": gdjs.difficultyselectorCode.GDCursorObjects1});
gdjs.difficultyselectorCode.asyncCallback55891388 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.difficultyselectorCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewButton"), gdjs.difficultyselectorCode.GDNewButtonObjects2);

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.difficultyselectorCode.GDNewTextObjects2);
{for(var i = 0, len = gdjs.difficultyselectorCode.GDNewButtonObjects2.length ;i < len;++i) {
    gdjs.difficultyselectorCode.GDNewButtonObjects2[i].Activate(true, null);
}
}
{for(var i = 0, len = gdjs.difficultyselectorCode.GDNewButtonObjects2.length ;i < len;++i) {
    gdjs.difficultyselectorCode.GDNewButtonObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.difficultyselectorCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.difficultyselectorCode.GDNewTextObjects2[i].hide();
}
}
gdjs.difficultyselectorCode.localVariables.length = 0;
}
gdjs.difficultyselectorCode.idToCallbackMap.set(55891388, gdjs.difficultyselectorCode.asyncCallback55891388);
gdjs.difficultyselectorCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.difficultyselectorCode.localVariables);
for (const obj of gdjs.difficultyselectorCode.GDNewButtonObjects1) asyncObjectsList.addObject("NewButton", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(10), (runtimeScene) => (gdjs.difficultyselectorCode.asyncCallback55891388(runtimeScene, asyncObjectsList)), 55891388, asyncObjectsList);
}
}

}


};gdjs.difficultyselectorCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.difficultyselectorCode.GDCursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("SquareWhiteSlider"), gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.difficultyselectorCode.GDCursorObjects1.length;i<l;++i) {
    if ( gdjs.difficultyselectorCode.GDCursorObjects1[i].getX() >= (( gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1.length === 0 ) ? 0 :gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1[0].getCenterXInScene()) ) {
        isConditionTrue_0 = true;
        gdjs.difficultyselectorCode.GDCursorObjects1[k] = gdjs.difficultyselectorCode.GDCursorObjects1[i];
        ++k;
    }
}
gdjs.difficultyselectorCode.GDCursorObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.difficultyselectorCode.mapOfGDgdjs_9546difficultyselectorCode_9546GDSquareWhiteSliderObjects1Objects, gdjs.difficultyselectorCode.mapOfGDgdjs_9546difficultyselectorCode_9546GDCursorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__IsButtonJustPressed.func(runtimeScene, 1, "A", null);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1 */
{for(var i = 0, len = gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1.length ;i < len;++i) {
    gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1[i].SetLabelShown(true, null);
}
}
{for(var i = 0, len = gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1.length ;i < len;++i) {
    gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1[i].SetValue(gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1[i].Value(null) + (1), null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.difficultyselectorCode.GDCursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("SquareWhiteSlider"), gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.difficultyselectorCode.GDCursorObjects1.length;i<l;++i) {
    if ( gdjs.difficultyselectorCode.GDCursorObjects1[i].getX() < (( gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1.length === 0 ) ? 0 :gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1[0].getCenterXInScene()) ) {
        isConditionTrue_0 = true;
        gdjs.difficultyselectorCode.GDCursorObjects1[k] = gdjs.difficultyselectorCode.GDCursorObjects1[i];
        ++k;
    }
}
gdjs.difficultyselectorCode.GDCursorObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.difficultyselectorCode.mapOfGDgdjs_9546difficultyselectorCode_9546GDSquareWhiteSliderObjects1Objects, gdjs.difficultyselectorCode.mapOfGDgdjs_9546difficultyselectorCode_9546GDCursorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__IsButtonJustPressed.func(runtimeScene, 1, "A", null);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1 */
{for(var i = 0, len = gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1.length ;i < len;++i) {
    gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1[i].SetLabelShown(true, null);
}
}
{for(var i = 0, len = gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1.length ;i < len;++i) {
    gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1[i].SetValue(gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1[i].Value(null) - (1), null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewButton"), gdjs.difficultyselectorCode.GDNewButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.difficultyselectorCode.GDNewButtonObjects1.length;i<l;++i) {
    if ( gdjs.difficultyselectorCode.GDNewButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.difficultyselectorCode.GDNewButtonObjects1[k] = gdjs.difficultyselectorCode.GDNewButtonObjects1[i];
        ++k;
    }
}
gdjs.difficultyselectorCode.GDNewButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "campaignintrovid", false);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.difficultyselectorCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("SquareWhiteSlider"), gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1);
{for(var i = 0, len = gdjs.difficultyselectorCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.difficultyselectorCode.GDNewSpriteObjects1[i].getBehavior("Animation").setAnimationIndex((( gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1.length === 0 ) ? 0 :gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1[0].Value(null)) - 1);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(31).setNumber((( gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1.length === 0 ) ? 0 :gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1[0].Value(null)));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SquareWhiteSlider"), gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1.length;i<l;++i) {
    if ( gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1[i].Value(null) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1[k] = gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1[i];
        ++k;
    }
}
gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Difficulty"), gdjs.difficultyselectorCode.GDDifficultyObjects1);
{for(var i = 0, len = gdjs.difficultyselectorCode.GDDifficultyObjects1.length ;i < len;++i) {
    gdjs.difficultyselectorCode.GDDifficultyObjects1[i].getBehavior("Text").setText("<| Easy |>\nThe easiest difficulty! Enemies have less health and deal less damage. And there's also checkpoints!\nDifficulty only affects the open-world.");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SquareWhiteSlider"), gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1.length;i<l;++i) {
    if ( gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1[i].Value(null) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1[k] = gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1[i];
        ++k;
    }
}
gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Difficulty"), gdjs.difficultyselectorCode.GDDifficultyObjects1);
{for(var i = 0, len = gdjs.difficultyselectorCode.GDDifficultyObjects1.length ;i < len;++i) {
    gdjs.difficultyselectorCode.GDDifficultyObjects1[i].getBehavior("Text").setText("<| Medium |>\nIt's the normal difficulty! Perfect balance, the way the game was intended to be played.\nDifficulty only affects the open-world.");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SquareWhiteSlider"), gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1.length;i<l;++i) {
    if ( gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1[i].Value(null) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1[k] = gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1[i];
        ++k;
    }
}
gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Difficulty"), gdjs.difficultyselectorCode.GDDifficultyObjects1);
{for(var i = 0, len = gdjs.difficultyselectorCode.GDDifficultyObjects1.length ;i < len;++i) {
    gdjs.difficultyselectorCode.GDDifficultyObjects1[i].getBehavior("Text").setText("<| Hard |>\nHeatin' up! Stronger enemies, less damage from you, etc.\nDifficulty only affects the open-world.");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SquareWhiteSlider"), gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1.length;i<l;++i) {
    if ( gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1[i].Value(null) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1[k] = gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1[i];
        ++k;
    }
}
gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Difficulty"), gdjs.difficultyselectorCode.GDDifficultyObjects1);
{for(var i = 0, len = gdjs.difficultyselectorCode.GDDifficultyObjects1.length ;i < len;++i) {
    gdjs.difficultyselectorCode.GDDifficultyObjects1[i].getBehavior("Text").setText("<| NIGHTMARE EASY |>\nIt's easy difficulty, but with 1 HP. Good luck!\nDifficulty only affects the open-world.");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SquareWhiteSlider"), gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1.length;i<l;++i) {
    if ( gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1[i].Value(null) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1[k] = gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1[i];
        ++k;
    }
}
gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Difficulty"), gdjs.difficultyselectorCode.GDDifficultyObjects1);
{for(var i = 0, len = gdjs.difficultyselectorCode.GDDifficultyObjects1.length ;i < len;++i) {
    gdjs.difficultyselectorCode.GDDifficultyObjects1[i].getBehavior("Text").setText("<| NIGHTMARE MEDIUM |>\nIt's medium difficulty, but with 1 HP. Try your best...\nDifficulty only affects the open-world.");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SquareWhiteSlider"), gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1.length;i<l;++i) {
    if ( gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1[i].Value(null) == 6 ) {
        isConditionTrue_0 = true;
        gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1[k] = gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1[i];
        ++k;
    }
}
gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Difficulty"), gdjs.difficultyselectorCode.GDDifficultyObjects1);
{for(var i = 0, len = gdjs.difficultyselectorCode.GDDifficultyObjects1.length ;i < len;++i) {
    gdjs.difficultyselectorCode.GDDifficultyObjects1[i].getBehavior("Text").setText("<| NIGHTMARE HARD |>\nWho would do this?!?!? Is anyone insane to beat hard mode with 1 HP???\nDifficulty only affects the open-world.");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewButton"), gdjs.difficultyselectorCode.GDNewButtonObjects1);
{for(var i = 0, len = gdjs.difficultyselectorCode.GDNewButtonObjects1.length ;i < len;++i) {
    gdjs.difficultyselectorCode.GDNewButtonObjects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs.difficultyselectorCode.GDNewButtonObjects1.length ;i < len;++i) {
    gdjs.difficultyselectorCode.GDNewButtonObjects1[i].hide();
}
}
{gdjs.evtTools.sound.preloadMusic(runtimeScene, "cave.mp3");
}
{gdjs.evtTools.sound.preloadMusic(runtimeScene, "Overworld.mp3");
}
{gdjs.evtTools.sound.preloadMusic(runtimeScene, "Battle.mp3");
}
{gdjs.evtTools.sound.preloadMusic(runtimeScene, "Burn The World Waltz .mp3");
}
{gdjs.evtTools.sound.preloadMusic(runtimeScene, "Juniper.mp3");
}
{gdjs.evtTools.sound.preloadMusic(runtimeScene, "In a Heartbeat.mp3");
}
{gdjs.evtTools.sound.preloadSound(runtimeScene, "Powerup 1.wav");
}
{gdjs.evtTools.sound.preloadSound(runtimeScene, "scream");
}

{ //Subevents
gdjs.difficultyselectorCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.difficultyselectorCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.difficultyselectorCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.difficultyselectorCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.difficultyselectorCode.GDNewSpriteObjects1.length = 0;
gdjs.difficultyselectorCode.GDNewSpriteObjects2.length = 0;
gdjs.difficultyselectorCode.GDDifficultyObjects1.length = 0;
gdjs.difficultyselectorCode.GDDifficultyObjects2.length = 0;
gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1.length = 0;
gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects2.length = 0;
gdjs.difficultyselectorCode.GDNewButtonObjects1.length = 0;
gdjs.difficultyselectorCode.GDNewButtonObjects2.length = 0;
gdjs.difficultyselectorCode.GDNewTextObjects1.length = 0;
gdjs.difficultyselectorCode.GDNewTextObjects2.length = 0;
gdjs.difficultyselectorCode.GDNewToggleSwitchObjects1.length = 0;
gdjs.difficultyselectorCode.GDNewToggleSwitchObjects2.length = 0;
gdjs.difficultyselectorCode.GDassisttextObjects1.length = 0;
gdjs.difficultyselectorCode.GDassisttextObjects2.length = 0;
gdjs.difficultyselectorCode.GDnoteObjects1.length = 0;
gdjs.difficultyselectorCode.GDnoteObjects2.length = 0;
gdjs.difficultyselectorCode.GDCustomLobbiesObjects1.length = 0;
gdjs.difficultyselectorCode.GDCustomLobbiesObjects2.length = 0;
gdjs.difficultyselectorCode.GDOnlineCheckObjects1.length = 0;
gdjs.difficultyselectorCode.GDOnlineCheckObjects2.length = 0;
gdjs.difficultyselectorCode.GDCursorObjects1.length = 0;
gdjs.difficultyselectorCode.GDCursorObjects2.length = 0;
gdjs.difficultyselectorCode.GDBGObjects1.length = 0;
gdjs.difficultyselectorCode.GDBGObjects2.length = 0;

gdjs.difficultyselectorCode.eventsList1(runtimeScene);
gdjs.difficultyselectorCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.difficultyselectorCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.difficultyselectorCode.GDNewSpriteObjects1.length = 0;
gdjs.difficultyselectorCode.GDNewSpriteObjects2.length = 0;
gdjs.difficultyselectorCode.GDDifficultyObjects1.length = 0;
gdjs.difficultyselectorCode.GDDifficultyObjects2.length = 0;
gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects1.length = 0;
gdjs.difficultyselectorCode.GDSquareWhiteSliderObjects2.length = 0;
gdjs.difficultyselectorCode.GDNewButtonObjects1.length = 0;
gdjs.difficultyselectorCode.GDNewButtonObjects2.length = 0;
gdjs.difficultyselectorCode.GDNewTextObjects1.length = 0;
gdjs.difficultyselectorCode.GDNewTextObjects2.length = 0;
gdjs.difficultyselectorCode.GDNewToggleSwitchObjects1.length = 0;
gdjs.difficultyselectorCode.GDNewToggleSwitchObjects2.length = 0;
gdjs.difficultyselectorCode.GDassisttextObjects1.length = 0;
gdjs.difficultyselectorCode.GDassisttextObjects2.length = 0;
gdjs.difficultyselectorCode.GDnoteObjects1.length = 0;
gdjs.difficultyselectorCode.GDnoteObjects2.length = 0;
gdjs.difficultyselectorCode.GDCustomLobbiesObjects1.length = 0;
gdjs.difficultyselectorCode.GDCustomLobbiesObjects2.length = 0;
gdjs.difficultyselectorCode.GDOnlineCheckObjects1.length = 0;
gdjs.difficultyselectorCode.GDOnlineCheckObjects2.length = 0;
gdjs.difficultyselectorCode.GDCursorObjects1.length = 0;
gdjs.difficultyselectorCode.GDCursorObjects2.length = 0;
gdjs.difficultyselectorCode.GDBGObjects1.length = 0;
gdjs.difficultyselectorCode.GDBGObjects2.length = 0;


return;

}

gdjs['difficultyselectorCode'] = gdjs.difficultyselectorCode;
