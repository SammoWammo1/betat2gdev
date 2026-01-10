
if (typeof gdjs.evtsExt__THNK__OnRSCreationRequest !== "undefined") {
  gdjs.evtsExt__THNK__OnRSCreationRequest.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__THNK__OnRSCreationRequest = {};
gdjs.evtsExt__THNK__OnRSCreationRequest.idToCallbackMap = new Map();


gdjs.evtsExt__THNK__OnRSCreationRequest.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
{/* Unknown instruction - skipped. */}
{gdjs.evtTools.debuggerTools.log("Remote scene '" + "" + eventsFunctionContext.getArgument("remote_scene_name") + "' based on scene '" + "" + eventsFunctionContext.getArgument("base_scene_name") + "' created", "info", "Dedicated server");
}
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__THNK__OnRSCreationRequest.func = function(runtimeScene, remote_scene_name, base_scene_name, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("THNK"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("THNK"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "remote_scene_name") return remote_scene_name;
if (argName === "base_scene_name") return base_scene_name;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__THNK__OnRSCreationRequest.eventsList0(runtimeScene, eventsFunctionContext);


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__THNK__OnRSCreationRequest.registeredGdjsCallbacks = [];