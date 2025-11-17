gdjs.PauseGameCode = {};
gdjs.PauseGameCode.localVariables = [];
gdjs.PauseGameCode.idToCallbackMap = new Map();
gdjs.PauseGameCode.GDPauseObjects1= [];
gdjs.PauseGameCode.GDPauseObjects2= [];
gdjs.PauseGameCode.GDBlueButtonObjects1= [];
gdjs.PauseGameCode.GDBlueButtonObjects2= [];
gdjs.PauseGameCode.GDOptionsObjects1= [];
gdjs.PauseGameCode.GDOptionsObjects2= [];
gdjs.PauseGameCode.GDCustomLobbiesObjects1= [];
gdjs.PauseGameCode.GDCustomLobbiesObjects2= [];
gdjs.PauseGameCode.GDOnlineCheckObjects1= [];
gdjs.PauseGameCode.GDOnlineCheckObjects2= [];
gdjs.PauseGameCode.GDCursorObjects1= [];
gdjs.PauseGameCode.GDCursorObjects2= [];


gdjs.PauseGameCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlueButton"), gdjs.PauseGameCode.GDBlueButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PauseGameCode.GDBlueButtonObjects1.length;i<l;++i) {
    if ( gdjs.PauseGameCode.GDBlueButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.PauseGameCode.GDBlueButtonObjects1[k] = gdjs.PauseGameCode.GDBlueButtonObjects1[i];
        ++k;
    }
}
gdjs.PauseGameCode.GDBlueButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
}

}


};

gdjs.PauseGameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PauseGameCode.GDPauseObjects1.length = 0;
gdjs.PauseGameCode.GDPauseObjects2.length = 0;
gdjs.PauseGameCode.GDBlueButtonObjects1.length = 0;
gdjs.PauseGameCode.GDBlueButtonObjects2.length = 0;
gdjs.PauseGameCode.GDOptionsObjects1.length = 0;
gdjs.PauseGameCode.GDOptionsObjects2.length = 0;
gdjs.PauseGameCode.GDCustomLobbiesObjects1.length = 0;
gdjs.PauseGameCode.GDCustomLobbiesObjects2.length = 0;
gdjs.PauseGameCode.GDOnlineCheckObjects1.length = 0;
gdjs.PauseGameCode.GDOnlineCheckObjects2.length = 0;
gdjs.PauseGameCode.GDCursorObjects1.length = 0;
gdjs.PauseGameCode.GDCursorObjects2.length = 0;

gdjs.PauseGameCode.eventsList0(runtimeScene);
gdjs.PauseGameCode.GDPauseObjects1.length = 0;
gdjs.PauseGameCode.GDPauseObjects2.length = 0;
gdjs.PauseGameCode.GDBlueButtonObjects1.length = 0;
gdjs.PauseGameCode.GDBlueButtonObjects2.length = 0;
gdjs.PauseGameCode.GDOptionsObjects1.length = 0;
gdjs.PauseGameCode.GDOptionsObjects2.length = 0;
gdjs.PauseGameCode.GDCustomLobbiesObjects1.length = 0;
gdjs.PauseGameCode.GDCustomLobbiesObjects2.length = 0;
gdjs.PauseGameCode.GDOnlineCheckObjects1.length = 0;
gdjs.PauseGameCode.GDOnlineCheckObjects2.length = 0;
gdjs.PauseGameCode.GDCursorObjects1.length = 0;
gdjs.PauseGameCode.GDCursorObjects2.length = 0;


return;

}

gdjs['PauseGameCode'] = gdjs.PauseGameCode;
