
if (typeof gdjs.evtsExt__ObjectPickingTools__PickEqualVariableValueCondition !== "undefined") {
  gdjs.evtsExt__ObjectPickingTools__PickEqualVariableValueCondition.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ObjectPickingTools__PickEqualVariableValueCondition = {};
gdjs.evtsExt__ObjectPickingTools__PickEqualVariableValueCondition.idToCallbackMap = new Map();
gdjs.evtsExt__ObjectPickingTools__PickEqualVariableValueCondition.GDObjectObjects1= [];
gdjs.evtsExt__ObjectPickingTools__PickEqualVariableValueCondition.GDObjectObjects2= [];


gdjs.evtsExt__ObjectPickingTools__PickEqualVariableValueCondition.userFunc0x1370a60 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
// Create an empty array to hold the objects with the lowest variable value
let lowestValueObjects = [];

// Initialize the lowest value to a very small number
let lowestValue = Infinity;

// Get all instances of "object"
let lists = eventsFunctionContext.getObjectsLists("Object").items;

// Store the variable name
let objectVariableName = eventsFunctionContext.getArgument("ObjectVariableName");

// Loop through each object to find the lowest value
for (let listName in lists) {
    for (let object of lists[listName]) {
        // Get the value of the variable
        let value = object.getVariables().get(objectVariableName).getAsNumber();
        // Compare and update the lowest value
        if (value = eventsFunctionContext.getArgument("ChosenValue")) {
            lowestValue = value;
            lowestValueObjects = [object]; // Reset the list to contain only this new value object
        }
    }
    // Remove all picked instances
    lists[listName].length = 0;
}

// Pick all object instances with the lowest value
if (lowestValueObjects.length !== 0) {
    for (let object of lowestValueObjects) {
        lists[object.getName()].push(object);
    }
}
};
gdjs.evtsExt__ObjectPickingTools__PickEqualVariableValueCondition.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ObjectPickingTools__PickEqualVariableValueCondition.userFunc0x1370a60(runtimeScene, eventsFunctionContext);

}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__ObjectPickingTools__PickEqualVariableValueCondition.func = function(runtimeScene, Object, ObjectVariableName, ChosenValue, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ObjectPickingTools"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ObjectPickingTools"),
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
if (argName === "ObjectVariableName") return ObjectVariableName;
if (argName === "ChosenValue") return ChosenValue;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ObjectPickingTools__PickEqualVariableValueCondition.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectPickingTools__PickEqualVariableValueCondition.GDObjectObjects2.length = 0;

gdjs.evtsExt__ObjectPickingTools__PickEqualVariableValueCondition.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ObjectPickingTools__PickEqualVariableValueCondition.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectPickingTools__PickEqualVariableValueCondition.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__ObjectPickingTools__PickEqualVariableValueCondition.registeredGdjsCallbacks = [];