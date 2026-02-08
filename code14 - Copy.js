gdjs.campaignintrovidCode = {};
gdjs.campaignintrovidCode.localVariables = [];
gdjs.campaignintrovidCode.idToCallbackMap = new Map();
gdjs.campaignintrovidCode.GDNewVideoObjects1_1final = [];

gdjs.campaignintrovidCode.GDNewVideoObjects1= [];
gdjs.campaignintrovidCode.GDNewVideoObjects2= [];
gdjs.campaignintrovidCode.GDCustomLobbiesObjects1= [];
gdjs.campaignintrovidCode.GDCustomLobbiesObjects2= [];
gdjs.campaignintrovidCode.GDOnlineCheckObjects1= [];
gdjs.campaignintrovidCode.GDOnlineCheckObjects2= [];
gdjs.campaignintrovidCode.GDCursorObjects1= [];
gdjs.campaignintrovidCode.GDCursorObjects2= [];
gdjs.campaignintrovidCode.GDBGObjects1= [];
gdjs.campaignintrovidCode.GDBGObjects2= [];


gdjs.campaignintrovidCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.campaignintrovidCode.GDNewVideoObjects1);
{for(var i = 0, len = gdjs.campaignintrovidCode.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.campaignintrovidCode.GDNewVideoObjects1[i].play();
}
}
}

}


{

gdjs.campaignintrovidCode.GDNewVideoObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.campaignintrovidCode.GDNewVideoObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.campaignintrovidCode.GDNewVideoObjects2);
for (var i = 0, k = 0, l = gdjs.campaignintrovidCode.GDNewVideoObjects2.length;i<l;++i) {
    if ( gdjs.campaignintrovidCode.GDNewVideoObjects2[i].isEnded() ) {
        isConditionTrue_1 = true;
        gdjs.campaignintrovidCode.GDNewVideoObjects2[k] = gdjs.campaignintrovidCode.GDNewVideoObjects2[i];
        ++k;
    }
}
gdjs.campaignintrovidCode.GDNewVideoObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.campaignintrovidCode.GDNewVideoObjects2.length; j < jLen ; ++j) {
        if ( gdjs.campaignintrovidCode.GDNewVideoObjects1_1final.indexOf(gdjs.campaignintrovidCode.GDNewVideoObjects2[j]) === -1 )
            gdjs.campaignintrovidCode.GDNewVideoObjects1_1final.push(gdjs.campaignintrovidCode.GDNewVideoObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.campaignintrovidCode.GDNewVideoObjects1_1final, gdjs.campaignintrovidCode.GDNewVideoObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro", false);
}
}

}


};

gdjs.campaignintrovidCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.campaignintrovidCode.GDNewVideoObjects1.length = 0;
gdjs.campaignintrovidCode.GDNewVideoObjects2.length = 0;
gdjs.campaignintrovidCode.GDCustomLobbiesObjects1.length = 0;
gdjs.campaignintrovidCode.GDCustomLobbiesObjects2.length = 0;
gdjs.campaignintrovidCode.GDOnlineCheckObjects1.length = 0;
gdjs.campaignintrovidCode.GDOnlineCheckObjects2.length = 0;
gdjs.campaignintrovidCode.GDCursorObjects1.length = 0;
gdjs.campaignintrovidCode.GDCursorObjects2.length = 0;
gdjs.campaignintrovidCode.GDBGObjects1.length = 0;
gdjs.campaignintrovidCode.GDBGObjects2.length = 0;

gdjs.campaignintrovidCode.eventsList0(runtimeScene);
gdjs.campaignintrovidCode.GDNewVideoObjects1.length = 0;
gdjs.campaignintrovidCode.GDNewVideoObjects2.length = 0;
gdjs.campaignintrovidCode.GDCustomLobbiesObjects1.length = 0;
gdjs.campaignintrovidCode.GDCustomLobbiesObjects2.length = 0;
gdjs.campaignintrovidCode.GDOnlineCheckObjects1.length = 0;
gdjs.campaignintrovidCode.GDOnlineCheckObjects2.length = 0;
gdjs.campaignintrovidCode.GDCursorObjects1.length = 0;
gdjs.campaignintrovidCode.GDCursorObjects2.length = 0;
gdjs.campaignintrovidCode.GDBGObjects1.length = 0;
gdjs.campaignintrovidCode.GDBGObjects2.length = 0;


return;

}

gdjs['campaignintrovidCode'] = gdjs.campaignintrovidCode;
