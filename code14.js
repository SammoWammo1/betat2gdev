gdjs.LoadingCampaignCode = {};
gdjs.LoadingCampaignCode.localVariables = [];
gdjs.LoadingCampaignCode.idToCallbackMap = new Map();
gdjs.LoadingCampaignCode.GDNewTextObjects1= [];
gdjs.LoadingCampaignCode.GDNewTextObjects2= [];
gdjs.LoadingCampaignCode.GDCustomLobbiesObjects1= [];
gdjs.LoadingCampaignCode.GDCustomLobbiesObjects2= [];
gdjs.LoadingCampaignCode.GDOnlineCheckObjects1= [];
gdjs.LoadingCampaignCode.GDOnlineCheckObjects2= [];
gdjs.LoadingCampaignCode.GDCursorObjects1= [];
gdjs.LoadingCampaignCode.GDCursorObjects2= [];
gdjs.LoadingCampaignCode.GDBGObjects1= [];
gdjs.LoadingCampaignCode.GDBGObjects2= [];


gdjs.LoadingCampaignCode.asyncCallback44254820 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LoadingCampaignCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Campaign", false);
}
gdjs.LoadingCampaignCode.localVariables.length = 0;
}
gdjs.LoadingCampaignCode.idToCallbackMap.set(44254820, gdjs.LoadingCampaignCode.asyncCallback44254820);
gdjs.LoadingCampaignCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LoadingCampaignCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(10), (runtimeScene) => (gdjs.LoadingCampaignCode.asyncCallback44254820(runtimeScene, asyncObjectsList)), 44254820, asyncObjectsList);
}
}

}


};gdjs.LoadingCampaignCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
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

{ //Subevents
gdjs.LoadingCampaignCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.LoadingCampaignCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoadingCampaignCode.GDNewTextObjects1.length = 0;
gdjs.LoadingCampaignCode.GDNewTextObjects2.length = 0;
gdjs.LoadingCampaignCode.GDCustomLobbiesObjects1.length = 0;
gdjs.LoadingCampaignCode.GDCustomLobbiesObjects2.length = 0;
gdjs.LoadingCampaignCode.GDOnlineCheckObjects1.length = 0;
gdjs.LoadingCampaignCode.GDOnlineCheckObjects2.length = 0;
gdjs.LoadingCampaignCode.GDCursorObjects1.length = 0;
gdjs.LoadingCampaignCode.GDCursorObjects2.length = 0;
gdjs.LoadingCampaignCode.GDBGObjects1.length = 0;
gdjs.LoadingCampaignCode.GDBGObjects2.length = 0;

gdjs.LoadingCampaignCode.eventsList1(runtimeScene);
gdjs.LoadingCampaignCode.GDNewTextObjects1.length = 0;
gdjs.LoadingCampaignCode.GDNewTextObjects2.length = 0;
gdjs.LoadingCampaignCode.GDCustomLobbiesObjects1.length = 0;
gdjs.LoadingCampaignCode.GDCustomLobbiesObjects2.length = 0;
gdjs.LoadingCampaignCode.GDOnlineCheckObjects1.length = 0;
gdjs.LoadingCampaignCode.GDOnlineCheckObjects2.length = 0;
gdjs.LoadingCampaignCode.GDCursorObjects1.length = 0;
gdjs.LoadingCampaignCode.GDCursorObjects2.length = 0;
gdjs.LoadingCampaignCode.GDBGObjects1.length = 0;
gdjs.LoadingCampaignCode.GDBGObjects2.length = 0;


return;

}

gdjs['LoadingCampaignCode'] = gdjs.LoadingCampaignCode;
