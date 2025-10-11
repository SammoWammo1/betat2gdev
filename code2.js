gdjs.CampaignCode = {};
gdjs.CampaignCode.localVariables = [];
gdjs.CampaignCode.idToCallbackMap = new Map();


gdjs.CampaignCode.eventsList0 = function(runtimeScene) {

};

gdjs.CampaignCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();


gdjs.CampaignCode.eventsList0(runtimeScene);


return;

}

gdjs['CampaignCode'] = gdjs.CampaignCode;
