
if (typeof gdjs.evtsExt__CallEvent__CallEvent !== "undefined") {
  gdjs.evtsExt__CallEvent__CallEvent.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CallEvent__CallEvent = {};
gdjs.evtsExt__CallEvent__CallEvent.idToCallbackMap = new Map();


gdjs.evtsExt__CallEvent__CallEvent.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(4).add(1);
}
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(2).setBoolean(true);
}
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).setString(eventsFunctionContext.getArgument("Parameter"));
}
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(1).setString(eventsFunctionContext.getArgument("Parameter2"));
}
}

}


};

gdjs.evtsExt__CallEvent__CallEvent.func = function(runtimeScene, Parameter, Parameter2, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("CallEvent"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("CallEvent"),
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
if (argName === "Parameter") return Parameter;
if (argName === "Parameter2") return Parameter2;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CallEvent__CallEvent.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__CallEvent__CallEvent.registeredGdjsCallbacks = [];