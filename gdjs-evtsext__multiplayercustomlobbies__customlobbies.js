
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies || {};

/**
 * Object generated from Multiplayer custom lobbies
 */
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies = class CustomLobbies extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData) {
    super(parentInstanceContainer, objectData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._objectData = {};
    
    this._objectData.OldCursorY = Number("0") || 0;
    this._objectData.ListHeight = Number("0") || 0;
    this._objectData.UpdateLobbies = false;
    this._objectData.RowHeight = Number("70") || 0;
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.OldCursorY !== newObjectData.content.OldCursorY)
      this._objectData.OldCursorY = newObjectData.content.OldCursorY;
    if (oldObjectData.content.ListHeight !== newObjectData.content.ListHeight)
      this._objectData.ListHeight = newObjectData.content.ListHeight;
    if (oldObjectData.content.UpdateLobbies !== newObjectData.content.UpdateLobbies)
      this._objectData.UpdateLobbies = newObjectData.content.UpdateLobbies;
    if (oldObjectData.content.RowHeight !== newObjectData.content.RowHeight)
      this._objectData.RowHeight = newObjectData.content.RowHeight;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _getOldCursorY() {
    return this._objectData.OldCursorY !== undefined ? this._objectData.OldCursorY : Number("0") || 0;
  }
  _setOldCursorY(newValue) {
    this._objectData.OldCursorY = newValue;
  }
  _getListHeight() {
    return this._objectData.ListHeight !== undefined ? this._objectData.ListHeight : Number("0") || 0;
  }
  _setListHeight(newValue) {
    this._objectData.ListHeight = newValue;
  }
  _getUpdateLobbies() {
    return this._objectData.UpdateLobbies !== undefined ? this._objectData.UpdateLobbies : false;
  }
  _setUpdateLobbies(newValue) {
    this._objectData.UpdateLobbies = newValue;
  }
  _toggleUpdateLobbies() {
    this._setUpdateLobbies(!this._getUpdateLobbies());
  }
  _getRowHeight() {
    return this._objectData.RowHeight !== undefined ? this._objectData.RowHeight : Number("70") || 0;
  }
  _setRowHeight(newValue) {
    this._objectData.RowHeight = newValue;
  }

  

  
  // gdjs.TextContainer interface implementation
  _text = '';
  getText() {
    return this._text;
  }
  setText(text) {
    this._text = text;
  }

}

// Methods:
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext = {};
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.forEachIndex4 = 0;

gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.forEachObjects4 = [];

gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.forEachTemporary4 = null;

gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.forEachTotalCount4 = 0;

gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDObjectObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDObjectObjects3= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDObjectObjects4= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLobbyObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLobbyObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLobbyObjects3= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLobbyObjects4= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDBackgroundObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDBackgroundObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDBackgroundObjects3= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDBackgroundObjects4= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDPlayersTitleObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDPlayersTitleObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDPlayersTitleObjects3= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDPlayersTitleObjects4= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLobbyTitleObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLobbyTitleObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLobbyTitleObjects3= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLobbyTitleObjects4= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLoadingObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLoadingObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLoadingObjects3= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLoadingObjects4= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDScrollbarObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDScrollbarObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDScrollbarObjects3= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDScrollbarObjects4= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDViewportMaskObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDViewportMaskObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDViewportMaskObjects3= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDViewportMaskObjects4= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDBitmapLobbyTitleObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDBitmapLobbyTitleObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDBitmapLobbyTitleObjects3= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDBitmapLobbyTitleObjects4= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDBitmapPlayersTitleObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDBitmapPlayersTitleObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDBitmapPlayersTitleObjects3= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDBitmapPlayersTitleObjects4= [];


gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.mapOfEmptyGDLobbyObjects = Hashtable.newFrom({"Lobby": []});
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.mapOfEmptyGDLobbyObjects = Hashtable.newFrom({"Lobby": []});
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595MultiplayerCustomLobbies_9595_9595CustomLobbies_9546CustomLobbies_9546prototype_9546onCreatedContext_9546GDLobbyObjects2Objects = Hashtable.newFrom({"Lobby": gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLobbyObjects2});
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595MultiplayerCustomLobbies_9595_9595CustomLobbies_9546CustomLobbies_9546prototype_9546onCreatedContext_9546GDLobbyObjects2Objects = Hashtable.newFrom({"Lobby": gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLobbyObjects2});
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Lobby"), gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLobbyObjects3);

for (gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.forEachIndex4 = 0;gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.forEachIndex4 < gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLobbyObjects3.length;++gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.forEachIndex4) {
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLobbyObjects4.length = 0;


gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.forEachTemporary4 = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLobbyObjects3[gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.forEachIndex4];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLobbyObjects4.push(gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.forEachTemporary4);
let isConditionTrue_0 = false;
if (true) {
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(Math.min(eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber(), (( gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLobbyObjects4.length === 0 ) ? 0 :gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLobbyObjects4[0].getAABBTop())));
}
{eventsFunctionContext.localVariables[0].getFromIndex(1).setNumber(Math.max(eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber(), (( gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLobbyObjects4.length === 0 ) ? 0 :gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLobbyObjects4[0].getAABBBottom())));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Lobby"), gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLobbyObjects2);
{eventsFunctionContext.getObjects("Object")[0]._setRowHeight((( gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLobbyObjects2.length === 0 ) ? 0 :gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLobbyObjects2[0].getHeight()) + (eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber() - eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber() - (( gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLobbyObjects2.length === 0 ) ? 0 :gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLobbyObjects2[0].getHeight()) * gdjs.evtTools.object.getSceneInstancesCount(eventsFunctionContext, gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595MultiplayerCustomLobbies_9595_9595CustomLobbies_9546CustomLobbies_9546prototype_9546onCreatedContext_9546GDLobbyObjects2Objects)) / (gdjs.evtTools.object.getSceneInstancesCount(eventsFunctionContext, gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595MultiplayerCustomLobbies_9595_9595CustomLobbies_9546CustomLobbies_9546prototype_9546onCreatedContext_9546GDLobbyObjects2Objects) - 1))
}
}

}


};gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595MultiplayerCustomLobbies_9595_9595CustomLobbies_9546CustomLobbies_9546prototype_9546onCreatedContext_9546GDLoadingObjects1Objects = Hashtable.newFrom({"Loading": gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLoadingObjects1});
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595MultiplayerCustomLobbies_9595_9595CustomLobbies_9546CustomLobbies_9546prototype_9546onCreatedContext_9546GDViewportMaskObjects1Objects = Hashtable.newFrom({"ViewportMask": gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDViewportMaskObjects1});
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(eventsFunctionContext, gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.mapOfEmptyGDLobbyObjects) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Lobby"), gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLobbyObjects2);
{eventsFunctionContext.getObjects("Object")[0]._setRowHeight(1.4 * (( gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLobbyObjects2.length === 0 ) ? 0 :gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLobbyObjects2[0].getHeight()))
}
}

}


{



}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(123456);
variables._declare("ListTop", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(-123456);
variables._declare("ListBottom", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(eventsFunctionContext, gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.mapOfEmptyGDLobbyObjects) > 1;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Lobby"), gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLobbyObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Scrollbar"), gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDScrollbarObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("ViewportMask"), gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDViewportMaskObjects1);
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLoadingObjects1.length = 0;

{for(var i = 0, len = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLobbyObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLobbyObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDScrollbarObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDScrollbarObjects1[i].hide();
}
}
{eventsFunctionContext.getObjects("Object")[0]._setUpdateLobbies(true)
}
{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595MultiplayerCustomLobbies_9595_9595CustomLobbies_9546CustomLobbies_9546prototype_9546onCreatedContext_9546GDLoadingObjects1Objects, 620, 340, "");
}
{for(var i = 0, len = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDObjectObjects1[i].resetTimer("UpdateLobbiesTimer");
}
}
{for(var i = 0, len = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDViewportMaskObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDViewportMaskObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595MultiplayerCustomLobbies_9595_9595CustomLobbies_9546CustomLobbies_9546prototype_9546onCreatedContext_9546GDViewportMaskObjects1Objects, 0, (( gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDScrollbarObjects1.length === 0 ) ? 0 :gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDScrollbarObjects1[0].getY()), "");
}
{for(var i = 0, len = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDViewportMaskObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDViewportMaskObjects1[i].setZOrder(0);
}
}
{for(var i = 0, len = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDViewportMaskObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDViewportMaskObjects1[i].drawRectangle(0, 0, 100, 100);
}
}
{for(var i = 0, len = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDViewportMaskObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDViewportMaskObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setWidth((( gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDObjectObjects1[0].getWidth()));
}
}
{for(var i = 0, len = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDViewportMaskObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDViewportMaskObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setHeight((( gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDScrollbarObjects1.length === 0 ) ? 0 :gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDScrollbarObjects1[0].getHeight()));
}
}
{for(var i = 0, len = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDViewportMaskObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDViewportMaskObjects1[i].hide();
}
}
}

}


};gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__MultiplayerCustomLobbies__IsInGameEdition.func(runtimeScene, eventsFunctionContext));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLobbyObjectsList = [...runtimeScene.getObjects("Lobby")];
var GDLobbyObjects = Hashtable.newFrom({"Lobby": thisGDLobbyObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var thisGDPlayersTitleObjectsList = [...runtimeScene.getObjects("PlayersTitle")];
var GDPlayersTitleObjects = Hashtable.newFrom({"PlayersTitle": thisGDPlayersTitleObjectsList});
var thisGDLobbyTitleObjectsList = [...runtimeScene.getObjects("LobbyTitle")];
var GDLobbyTitleObjects = Hashtable.newFrom({"LobbyTitle": thisGDLobbyTitleObjectsList});
var thisGDLoadingObjectsList = [...runtimeScene.getObjects("Loading")];
var GDLoadingObjects = Hashtable.newFrom({"Loading": thisGDLoadingObjectsList});
var thisGDScrollbarObjectsList = [...runtimeScene.getObjects("Scrollbar")];
var GDScrollbarObjects = Hashtable.newFrom({"Scrollbar": thisGDScrollbarObjectsList});
var thisGDViewportMaskObjectsList = [...runtimeScene.getObjects("ViewportMask")];
var GDViewportMaskObjects = Hashtable.newFrom({"ViewportMask": thisGDViewportMaskObjectsList});
var thisGDBitmapLobbyTitleObjectsList = [...runtimeScene.getObjects("BitmapLobbyTitle")];
var GDBitmapLobbyTitleObjects = Hashtable.newFrom({"BitmapLobbyTitle": thisGDBitmapLobbyTitleObjectsList});
var thisGDBitmapPlayersTitleObjectsList = [...runtimeScene.getObjects("BitmapPlayersTitle")];
var GDBitmapPlayersTitleObjects = Hashtable.newFrom({"BitmapPlayersTitle": thisGDBitmapPlayersTitleObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Lobby": GDLobbyObjects
, "Background": GDBackgroundObjects
, "PlayersTitle": GDPlayersTitleObjects
, "LobbyTitle": GDLobbyTitleObjects
, "Loading": GDLoadingObjects
, "Scrollbar": GDScrollbarObjects
, "ViewportMask": GDViewportMaskObjects
, "BitmapLobbyTitle": GDBitmapLobbyTitleObjects
, "BitmapPlayersTitle": GDBitmapPlayersTitleObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Lobby": thisGDLobbyObjectsList
, "Background": thisGDBackgroundObjectsList
, "PlayersTitle": thisGDPlayersTitleObjectsList
, "LobbyTitle": thisGDLobbyTitleObjectsList
, "Loading": thisGDLoadingObjectsList
, "Scrollbar": thisGDScrollbarObjectsList
, "ViewportMask": thisGDViewportMaskObjectsList
, "BitmapLobbyTitle": thisGDBitmapLobbyTitleObjectsList
, "BitmapPlayersTitle": thisGDBitmapPlayersTitleObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("MultiplayerCustomLobbies"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("MultiplayerCustomLobbies"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLobbyObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLobbyObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLobbyObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLobbyObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDBackgroundObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDBackgroundObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDPlayersTitleObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDPlayersTitleObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDPlayersTitleObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDPlayersTitleObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLobbyTitleObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLobbyTitleObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLobbyTitleObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLobbyTitleObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLoadingObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLoadingObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLoadingObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLoadingObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDScrollbarObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDScrollbarObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDScrollbarObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDScrollbarObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDViewportMaskObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDViewportMaskObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDViewportMaskObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDViewportMaskObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDBitmapLobbyTitleObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDBitmapLobbyTitleObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDBitmapLobbyTitleObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDBitmapLobbyTitleObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDBitmapPlayersTitleObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDBitmapPlayersTitleObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDBitmapPlayersTitleObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDBitmapPlayersTitleObjects4.length = 0;

gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.eventsList3(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLobbyObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLobbyObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLobbyObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLobbyObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDBackgroundObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDBackgroundObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDPlayersTitleObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDPlayersTitleObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDPlayersTitleObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDPlayersTitleObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLobbyTitleObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLobbyTitleObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLobbyTitleObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLobbyTitleObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLoadingObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLoadingObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLoadingObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDLoadingObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDScrollbarObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDScrollbarObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDScrollbarObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDScrollbarObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDViewportMaskObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDViewportMaskObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDViewportMaskObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDViewportMaskObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDBitmapLobbyTitleObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDBitmapLobbyTitleObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDBitmapLobbyTitleObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDBitmapLobbyTitleObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDBitmapPlayersTitleObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDBitmapPlayersTitleObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDBitmapPlayersTitleObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.onCreatedContext.GDBitmapPlayersTitleObjects4.length = 0;

gdjs.CustomRuntimeObject.prototype.onCreated.call(this);

return;
}
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects2_1final = [];

gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDObjectObjects2_1final = [];

gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects2_1final = [];

gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDObjectObjects4= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects3= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects4= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDBackgroundObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDBackgroundObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDBackgroundObjects3= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDBackgroundObjects4= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDPlayersTitleObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDPlayersTitleObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDPlayersTitleObjects3= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDPlayersTitleObjects4= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyTitleObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyTitleObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyTitleObjects3= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyTitleObjects4= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLoadingObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLoadingObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLoadingObjects3= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLoadingObjects4= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects3= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects4= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDViewportMaskObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDViewportMaskObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDViewportMaskObjects3= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDViewportMaskObjects4= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDBitmapLobbyTitleObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDBitmapLobbyTitleObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDBitmapLobbyTitleObjects3= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDBitmapLobbyTitleObjects4= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDBitmapPlayersTitleObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDBitmapPlayersTitleObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDBitmapPlayersTitleObjects3= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDBitmapPlayersTitleObjects4= [];


gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595MultiplayerCustomLobbies_9595_9595CustomLobbies_9546CustomLobbies_9546prototype_9546doStepPostEventsContext_9546GDObjectObjects2Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDObjectObjects2});
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595MultiplayerCustomLobbies_9595_9595CustomLobbies_9546CustomLobbies_9546prototype_9546doStepPostEventsContext_9546GDBackgroundObjects2Objects = Hashtable.newFrom({"Background": gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDBackgroundObjects2});
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(15605076);
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0]._setOldCursorY(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0))
}
}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects2 */
{for(var i = 0, len = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects2.length ;i < len;++i) {
    gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects2[i].SetScrollPosition(gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects2[i].ScrollPosition(eventsFunctionContext) - (gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) - eventsFunctionContext.getObjects("Object")[0]._getOldCursorY()), eventsFunctionContext);
}
}
{eventsFunctionContext.getObjects("Object")[0]._setOldCursorY(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0))
}
}

}


};gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isScrollingUp(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isScrollingDown(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects2, gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects3);

{for(var i = 0, len = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects3[i].SetScrollPosition(gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects3[i].ScrollPosition(eventsFunctionContext) - (0.01 * gdjs.evtTools.input.getMouseWheelDelta(runtimeScene) * eventsFunctionContext.getObjects("Object")[0]._getRowHeight()), eventsFunctionContext);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Background"), gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDBackgroundObjects2);
/* Reuse gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595MultiplayerCustomLobbies_9595_9595CustomLobbies_9546CustomLobbies_9546prototype_9546doStepPostEventsContext_9546GDBackgroundObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects2[i].IsThumbDragged(eventsFunctionContext)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects2[k] = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects2.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects1[i].IsFull(eventsFunctionContext)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects1[k] = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects1 */
{for(var i = 0, len = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects1[i].ActivateInteractions(true, eventsFunctionContext);
}
}
}

}


};gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Scrollbar"), gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects2[i].IsScrollingRequired(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects2[k] = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Lobby"), gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Scrollbar"), gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects2);
{for(var i = 0, len = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects2.length ;i < len;++i) {
    gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects2[i].setY(gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects2[i].getVariables().get("StartY").getAsNumber() - (( gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects2.length === 0 ) ? 0 :gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects2[0].ScrollPosition(eventsFunctionContext)));
}
}
}

}


{

gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects2.length = 0;

gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects2_1final.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Lobby"), gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects3);
gdjs.copyArray(eventsFunctionContext.getObjects("Scrollbar"), gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects3);
for (var i = 0, k = 0, l = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects3[i].getAABBBottom() < (( gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects3.length === 0 ) ? 0 :gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects3[0].getAABBTop()) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects3[k] = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects2_1final.indexOf(gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects3[j]) === -1 )
            gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects2_1final.push(gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects2_1final.indexOf(gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects3[j]) === -1 )
            gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects2_1final.push(gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects3[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Lobby"), gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects3);
gdjs.copyArray(eventsFunctionContext.getObjects("Scrollbar"), gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects3);
for (var i = 0, k = 0, l = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects3[i].getAABBTop() > (( gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects3.length === 0 ) ? 0 :gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects3[0].getAABBBottom()) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects3[k] = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects2_1final.indexOf(gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects3[j]) === -1 )
            gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects2_1final.push(gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects2_1final.indexOf(gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects3[j]) === -1 )
            gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects2_1final.push(gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects2_1final, gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects2);
gdjs.copyArray(gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects2_1final, gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects2 */
{for(var i = 0, len = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects2.length ;i < len;++i) {
    gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects2.length ;i < len;++i) {
    gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects2[i].ActivateInteractions(false, eventsFunctionContext);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Lobby"), gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Scrollbar"), gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects1[i].getAABBBottom() >= (( gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects1.length === 0 ) ? 0 :gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects1[0].getAABBTop()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects1[k] = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects1[i].getAABBTop() <= (( gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects1.length === 0 ) ? 0 :gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects1[0].getAABBBottom()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects1[k] = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects1[i].getVariableBoolean(gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects1[i].getVariables().get("Old"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects1[k] = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects1 */
{for(var i = 0, len = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects1[i].hide(false);
}
}

{ //Subevents
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDObjectObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = eventsFunctionContext.getObjects("Object")[0]._getUpdateLobbies();
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDObjectObjects3);
for (var i = 0, k = 0, l = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDObjectObjects3[i].getTimerElapsedTimeInSecondsOrNaN("UpdateLobbiesTimer") >= 10 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDObjectObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDObjectObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDObjectObjects2_1final.push(gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDObjectObjects2_1final, gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDObjectObjects2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDObjectObjects2 */
{gdjs.evtTools.object.pickAllObjects(eventsFunctionContext, gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595MultiplayerCustomLobbies_9595_9595CustomLobbies_9546CustomLobbies_9546prototype_9546doStepPostEventsContext_9546GDObjectObjects2Objects);
}
{for(var i = 0, len = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDObjectObjects2[i].UpdateLobbies(eventsFunctionContext);
}
}
{eventsFunctionContext.getObjects("Object")[0]._setUpdateLobbies(false)
}
{for(var i = 0, len = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDObjectObjects2[i].resetTimer("UpdateLobbiesTimer");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isSearchingForLobbyToJoin(runtimeScene));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__MultiplayerCustomLobbies__IsInGameEdition.func(runtimeScene, eventsFunctionContext));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLobbyObjectsList = [...runtimeScene.getObjects("Lobby")];
var GDLobbyObjects = Hashtable.newFrom({"Lobby": thisGDLobbyObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var thisGDPlayersTitleObjectsList = [...runtimeScene.getObjects("PlayersTitle")];
var GDPlayersTitleObjects = Hashtable.newFrom({"PlayersTitle": thisGDPlayersTitleObjectsList});
var thisGDLobbyTitleObjectsList = [...runtimeScene.getObjects("LobbyTitle")];
var GDLobbyTitleObjects = Hashtable.newFrom({"LobbyTitle": thisGDLobbyTitleObjectsList});
var thisGDLoadingObjectsList = [...runtimeScene.getObjects("Loading")];
var GDLoadingObjects = Hashtable.newFrom({"Loading": thisGDLoadingObjectsList});
var thisGDScrollbarObjectsList = [...runtimeScene.getObjects("Scrollbar")];
var GDScrollbarObjects = Hashtable.newFrom({"Scrollbar": thisGDScrollbarObjectsList});
var thisGDViewportMaskObjectsList = [...runtimeScene.getObjects("ViewportMask")];
var GDViewportMaskObjects = Hashtable.newFrom({"ViewportMask": thisGDViewportMaskObjectsList});
var thisGDBitmapLobbyTitleObjectsList = [...runtimeScene.getObjects("BitmapLobbyTitle")];
var GDBitmapLobbyTitleObjects = Hashtable.newFrom({"BitmapLobbyTitle": thisGDBitmapLobbyTitleObjectsList});
var thisGDBitmapPlayersTitleObjectsList = [...runtimeScene.getObjects("BitmapPlayersTitle")];
var GDBitmapPlayersTitleObjects = Hashtable.newFrom({"BitmapPlayersTitle": thisGDBitmapPlayersTitleObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Lobby": GDLobbyObjects
, "Background": GDBackgroundObjects
, "PlayersTitle": GDPlayersTitleObjects
, "LobbyTitle": GDLobbyTitleObjects
, "Loading": GDLoadingObjects
, "Scrollbar": GDScrollbarObjects
, "ViewportMask": GDViewportMaskObjects
, "BitmapLobbyTitle": GDBitmapLobbyTitleObjects
, "BitmapPlayersTitle": GDBitmapPlayersTitleObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Lobby": thisGDLobbyObjectsList
, "Background": thisGDBackgroundObjectsList
, "PlayersTitle": thisGDPlayersTitleObjectsList
, "LobbyTitle": thisGDLobbyTitleObjectsList
, "Loading": thisGDLoadingObjectsList
, "Scrollbar": thisGDScrollbarObjectsList
, "ViewportMask": thisGDViewportMaskObjectsList
, "BitmapLobbyTitle": thisGDBitmapLobbyTitleObjectsList
, "BitmapPlayersTitle": thisGDBitmapPlayersTitleObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("MultiplayerCustomLobbies"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("MultiplayerCustomLobbies"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDBackgroundObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDBackgroundObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDPlayersTitleObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDPlayersTitleObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDPlayersTitleObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDPlayersTitleObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyTitleObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyTitleObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyTitleObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyTitleObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLoadingObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLoadingObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLoadingObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLoadingObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDViewportMaskObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDViewportMaskObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDViewportMaskObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDViewportMaskObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDBitmapLobbyTitleObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDBitmapLobbyTitleObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDBitmapLobbyTitleObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDBitmapLobbyTitleObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDBitmapPlayersTitleObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDBitmapPlayersTitleObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDBitmapPlayersTitleObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDBitmapPlayersTitleObjects4.length = 0;

gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.eventsList6(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDBackgroundObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDBackgroundObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDPlayersTitleObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDPlayersTitleObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDPlayersTitleObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDPlayersTitleObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyTitleObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyTitleObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyTitleObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLobbyTitleObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLoadingObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLoadingObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLoadingObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDLoadingObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDScrollbarObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDViewportMaskObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDViewportMaskObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDViewportMaskObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDViewportMaskObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDBitmapLobbyTitleObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDBitmapLobbyTitleObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDBitmapLobbyTitleObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDBitmapLobbyTitleObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDBitmapPlayersTitleObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDBitmapPlayersTitleObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDBitmapPlayersTitleObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPostEventsContext.GDBitmapPlayersTitleObjects4.length = 0;


return;
}
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext = {};
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.idToCallbackMap = new Map();
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDObjectObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDObjectObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDObjectObjects3= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDObjectObjects4= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLobbyObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLobbyObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLobbyObjects3= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLobbyObjects4= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDBackgroundObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDBackgroundObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDBackgroundObjects3= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDBackgroundObjects4= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDPlayersTitleObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDPlayersTitleObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDPlayersTitleObjects3= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDPlayersTitleObjects4= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLobbyTitleObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLobbyTitleObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLobbyTitleObjects3= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLobbyTitleObjects4= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLoadingObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLoadingObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLoadingObjects3= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLoadingObjects4= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDScrollbarObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDScrollbarObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDScrollbarObjects3= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDScrollbarObjects4= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDViewportMaskObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDViewportMaskObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDViewportMaskObjects3= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDViewportMaskObjects4= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDBitmapLobbyTitleObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDBitmapLobbyTitleObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDBitmapLobbyTitleObjects3= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDBitmapLobbyTitleObjects4= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDBitmapPlayersTitleObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDBitmapPlayersTitleObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDBitmapPlayersTitleObjects3= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDBitmapPlayersTitleObjects4= [];


gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.mapOfGDgdjs_9546evtsExt_9595_9595MultiplayerCustomLobbies_9595_9595CustomLobbies_9546CustomLobbies_9546prototype_9546UpdateLobbiesContext_9546GDLobbyObjects4Objects = Hashtable.newFrom({"Lobby": gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLobbyObjects4});
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.mapOfGDgdjs_9546evtsExt_9595_9595MultiplayerCustomLobbies_9595_9595CustomLobbies_9546CustomLobbies_9546prototype_9546UpdateLobbiesContext_9546GDLobbyObjects4Objects = Hashtable.newFrom({"Lobby": gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLobbyObjects4});
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.mapOfGDgdjs_9546evtsExt_9595_9595MultiplayerCustomLobbies_9595_9595CustomLobbies_9546CustomLobbies_9546prototype_9546UpdateLobbiesContext_9546GDViewportMaskObjects4Objects = Hashtable.newFrom({"ViewportMask": gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDViewportMaskObjects4});
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.eventsList0 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

};gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.eventsList1 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


const valueIteratorReference4 = eventsFunctionContext.localVariables[0].getFromIndex(2);
const iterableReference4 = eventsFunctionContext.localVariables[0].getFromIndex(1);
if(!iterableReference4.isPrimitive()) {
for(
    const iteratorKey4 in 
    iterableReference4.getType() === "structure"
      ? iterableReference4.getAllChildren()
      : iterableReference4.getType() === "array"
        ? iterableReference4.getAllChildrenArray()
        : []
) {
    const structureChildVariable4 = iterableReference4.getChild(iteratorKey4)
    valueIteratorReference4.castTo(structureChildVariable4.getType())
    if(structureChildVariable4.isPrimitive()) {
        valueIteratorReference4.setValue(structureChildVariable4.getValue());
    } else if (structureChildVariable4.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference4.replaceChildren(structureChildVariable4.getAllChildren());
    } else if (structureChildVariable4.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference4.replaceChildrenArray(structureChildVariable4.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);
gdjs.copyArray(gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDViewportMaskObjects2, gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDViewportMaskObjects4);

gdjs.copyArray(gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLobbyObjects2, gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLobbyObjects4);


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.mapOfGDgdjs_9546evtsExt_9595_9595MultiplayerCustomLobbies_9595_9595CustomLobbies_9546CustomLobbies_9546prototype_9546UpdateLobbiesContext_9546GDLobbyObjects4Objects, 0, eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber(), "");
}
{for(var i = 0, len = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLobbyObjects4.length ;i < len;++i) {
    gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLobbyObjects4[i].SetLobbyName(eventsFunctionContext.localVariables[0].getFromIndex(2).getChild("name").getAsString(), eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLobbyObjects4.length ;i < len;++i) {
    gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLobbyObjects4[i].SetPlayersCount(gdjs.evtTools.variable.getVariableChildCount(eventsFunctionContext.localVariables[0].getFromIndex(2).getChild("players")), eventsFunctionContext.localVariables[0].getFromIndex(2).getChild("maxPlayers").getAsNumber(), eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLobbyObjects4.length ;i < len;++i) {
    gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLobbyObjects4[i].SetLobbyID(eventsFunctionContext.localVariables[0].getFromIndex(2).getChild("id").getAsString(), eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLobbyObjects4.length ;i < len;++i) {
    gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLobbyObjects4[i].returnVariable(gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLobbyObjects4[i].getVariables().get("StartY")).setNumber((gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLobbyObjects4[i].getY()));
}
}
{eventsFunctionContext.localVariables[0].getFromIndex(0).add(eventsFunctionContext.getObjects("Object")[0]._getRowHeight());
}
{gdjs.evtsExt__MultiplayerCustomLobbies__MaskWithShapePainter.func(runtimeScene, gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.mapOfGDgdjs_9546evtsExt_9595_9595MultiplayerCustomLobbies_9595_9595CustomLobbies_9546CustomLobbies_9546prototype_9546UpdateLobbiesContext_9546GDLobbyObjects4Objects, gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.mapOfGDgdjs_9546evtsExt_9595_9595MultiplayerCustomLobbies_9595_9595CustomLobbies_9546CustomLobbies_9546prototype_9546UpdateLobbiesContext_9546GDViewportMaskObjects4Objects, eventsFunctionContext);
}
}
}
}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLobbyObjects2 */
/* Reuse gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDScrollbarObjects2 */
{for(var i = 0, len = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDScrollbarObjects2.length ;i < len;++i) {
    gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDScrollbarObjects2[i].SetContentLength(eventsFunctionContext.getObjects("Object")[0]._getRowHeight() * gdjs.evtTools.variable.getVariableChildCount(eventsFunctionContext.localVariables[0].getFromIndex(1)) - eventsFunctionContext.getObjects("Object")[0]._getRowHeight() + (( gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLobbyObjects2.length === 0 ) ? 0 :gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLobbyObjects2[0].getHeight()), eventsFunctionContext);
}
}
}

}


};gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.asyncCallback15611076 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
gdjs.copyArray(eventsFunctionContext.getObjects("Loading"), gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLoadingObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Lobby"), gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLobbyObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Scrollbar"), gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDScrollbarObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("ViewportMask"), gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDViewportMaskObjects2);
{gdjs.evtTools.network.jsonToVariableStructure(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getAsString(), eventsFunctionContext.localVariables[0].getFromIndex(1));
}
{for(var i = 0, len = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDViewportMaskObjects2.length ;i < len;++i) {
    gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDViewportMaskObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDScrollbarObjects2.length ;i < len;++i) {
    gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDScrollbarObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLoadingObjects2.length ;i < len;++i) {
    gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLoadingObjects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLobbyObjects2.length ;i < len;++i) {
    gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLobbyObjects2[i].deleteFromScene(runtimeScene);
}
}
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber((( gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDScrollbarObjects2.length === 0 ) ? 0 :gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDScrollbarObjects2[0].getY()));
}

{ //Subevents
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.eventsList1(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.idToCallbackMap.set(15611076, gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.asyncCallback15611076);
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("https://api.gdevelop.io/play/game/" + gdjs.evtsExt__MultiplayerCustomLobbies__ProjectUUID.func(runtimeScene, eventsFunctionContext) + "/public-lobby?isPreview=" + gdjs.evtsExt__MultiplayerCustomLobbies__IsPreview.func(runtimeScene, eventsFunctionContext) + "&gameVersion=" + gdjs.evtsExt__MultiplayerCustomLobbies__GameVersion.func(runtimeScene, eventsFunctionContext), "", "GET", "", eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1)), (runtimeScene) => (gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.asyncCallback15611076(runtimeScene, eventsFunctionContext, asyncObjectsList)), 15611076, asyncObjectsList);
}
}

}


};gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("y", variable);
}
{
const variable = new gdjs.Variable();
variables._declare("data", variable);
}
{
const variable = new gdjs.Variable();
{
const variable1 = new gdjs.Variable();
variable1.setString("0");
variable.addChild("id", variable1);
}
{
const variable1 = new gdjs.Variable();
variable1.setNumber(0);
variable.addChild("maxPlayers", variable1);
}
{
const variable1 = new gdjs.Variable();
variable1.setString("0");
variable.addChild("name", variable1);
}
{
const variable1 = new gdjs.Variable();
variable.addChild("players", variable1);
}
variables._declare("value", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


};

gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbies = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLobbyObjectsList = [...runtimeScene.getObjects("Lobby")];
var GDLobbyObjects = Hashtable.newFrom({"Lobby": thisGDLobbyObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var thisGDPlayersTitleObjectsList = [...runtimeScene.getObjects("PlayersTitle")];
var GDPlayersTitleObjects = Hashtable.newFrom({"PlayersTitle": thisGDPlayersTitleObjectsList});
var thisGDLobbyTitleObjectsList = [...runtimeScene.getObjects("LobbyTitle")];
var GDLobbyTitleObjects = Hashtable.newFrom({"LobbyTitle": thisGDLobbyTitleObjectsList});
var thisGDLoadingObjectsList = [...runtimeScene.getObjects("Loading")];
var GDLoadingObjects = Hashtable.newFrom({"Loading": thisGDLoadingObjectsList});
var thisGDScrollbarObjectsList = [...runtimeScene.getObjects("Scrollbar")];
var GDScrollbarObjects = Hashtable.newFrom({"Scrollbar": thisGDScrollbarObjectsList});
var thisGDViewportMaskObjectsList = [...runtimeScene.getObjects("ViewportMask")];
var GDViewportMaskObjects = Hashtable.newFrom({"ViewportMask": thisGDViewportMaskObjectsList});
var thisGDBitmapLobbyTitleObjectsList = [...runtimeScene.getObjects("BitmapLobbyTitle")];
var GDBitmapLobbyTitleObjects = Hashtable.newFrom({"BitmapLobbyTitle": thisGDBitmapLobbyTitleObjectsList});
var thisGDBitmapPlayersTitleObjectsList = [...runtimeScene.getObjects("BitmapPlayersTitle")];
var GDBitmapPlayersTitleObjects = Hashtable.newFrom({"BitmapPlayersTitle": thisGDBitmapPlayersTitleObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Lobby": GDLobbyObjects
, "Background": GDBackgroundObjects
, "PlayersTitle": GDPlayersTitleObjects
, "LobbyTitle": GDLobbyTitleObjects
, "Loading": GDLoadingObjects
, "Scrollbar": GDScrollbarObjects
, "ViewportMask": GDViewportMaskObjects
, "BitmapLobbyTitle": GDBitmapLobbyTitleObjects
, "BitmapPlayersTitle": GDBitmapPlayersTitleObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Lobby": thisGDLobbyObjectsList
, "Background": thisGDBackgroundObjectsList
, "PlayersTitle": thisGDPlayersTitleObjectsList
, "LobbyTitle": thisGDLobbyTitleObjectsList
, "Loading": thisGDLoadingObjectsList
, "Scrollbar": thisGDScrollbarObjectsList
, "ViewportMask": thisGDViewportMaskObjectsList
, "BitmapLobbyTitle": thisGDBitmapLobbyTitleObjectsList
, "BitmapPlayersTitle": thisGDBitmapPlayersTitleObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("MultiplayerCustomLobbies"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("MultiplayerCustomLobbies"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLobbyObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLobbyObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLobbyObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLobbyObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDBackgroundObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDBackgroundObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDPlayersTitleObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDPlayersTitleObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDPlayersTitleObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDPlayersTitleObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLobbyTitleObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLobbyTitleObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLobbyTitleObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLobbyTitleObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLoadingObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLoadingObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLoadingObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLoadingObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDScrollbarObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDScrollbarObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDScrollbarObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDScrollbarObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDViewportMaskObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDViewportMaskObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDViewportMaskObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDViewportMaskObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDBitmapLobbyTitleObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDBitmapLobbyTitleObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDBitmapLobbyTitleObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDBitmapLobbyTitleObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDBitmapPlayersTitleObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDBitmapPlayersTitleObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDBitmapPlayersTitleObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDBitmapPlayersTitleObjects4.length = 0;

gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.eventsList3(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLobbyObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLobbyObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLobbyObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLobbyObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDBackgroundObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDBackgroundObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDPlayersTitleObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDPlayersTitleObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDPlayersTitleObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDPlayersTitleObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLobbyTitleObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLobbyTitleObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLobbyTitleObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLobbyTitleObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLoadingObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLoadingObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLoadingObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDLoadingObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDScrollbarObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDScrollbarObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDScrollbarObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDScrollbarObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDViewportMaskObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDViewportMaskObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDViewportMaskObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDViewportMaskObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDBitmapLobbyTitleObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDBitmapLobbyTitleObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDBitmapLobbyTitleObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDBitmapLobbyTitleObjects4.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDBitmapPlayersTitleObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDBitmapPlayersTitleObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDBitmapPlayersTitleObjects3.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.UpdateLobbiesContext.GDBitmapPlayersTitleObjects4.length = 0;


return;
}
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext = {};
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.idToCallbackMap = new Map();
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDObjectObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDObjectObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDLobbyObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDLobbyObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDBackgroundObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDBackgroundObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDPlayersTitleObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDPlayersTitleObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDLobbyTitleObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDLobbyTitleObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDLoadingObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDLoadingObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDScrollbarObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDScrollbarObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDViewportMaskObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDViewportMaskObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDBitmapLobbyTitleObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDBitmapLobbyTitleObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDBitmapPlayersTitleObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDBitmapPlayersTitleObjects2= [];


gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getAsString();}
}

}


};

gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastError = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLobbyObjectsList = [...runtimeScene.getObjects("Lobby")];
var GDLobbyObjects = Hashtable.newFrom({"Lobby": thisGDLobbyObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var thisGDPlayersTitleObjectsList = [...runtimeScene.getObjects("PlayersTitle")];
var GDPlayersTitleObjects = Hashtable.newFrom({"PlayersTitle": thisGDPlayersTitleObjectsList});
var thisGDLobbyTitleObjectsList = [...runtimeScene.getObjects("LobbyTitle")];
var GDLobbyTitleObjects = Hashtable.newFrom({"LobbyTitle": thisGDLobbyTitleObjectsList});
var thisGDLoadingObjectsList = [...runtimeScene.getObjects("Loading")];
var GDLoadingObjects = Hashtable.newFrom({"Loading": thisGDLoadingObjectsList});
var thisGDScrollbarObjectsList = [...runtimeScene.getObjects("Scrollbar")];
var GDScrollbarObjects = Hashtable.newFrom({"Scrollbar": thisGDScrollbarObjectsList});
var thisGDViewportMaskObjectsList = [...runtimeScene.getObjects("ViewportMask")];
var GDViewportMaskObjects = Hashtable.newFrom({"ViewportMask": thisGDViewportMaskObjectsList});
var thisGDBitmapLobbyTitleObjectsList = [...runtimeScene.getObjects("BitmapLobbyTitle")];
var GDBitmapLobbyTitleObjects = Hashtable.newFrom({"BitmapLobbyTitle": thisGDBitmapLobbyTitleObjectsList});
var thisGDBitmapPlayersTitleObjectsList = [...runtimeScene.getObjects("BitmapPlayersTitle")];
var GDBitmapPlayersTitleObjects = Hashtable.newFrom({"BitmapPlayersTitle": thisGDBitmapPlayersTitleObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Lobby": GDLobbyObjects
, "Background": GDBackgroundObjects
, "PlayersTitle": GDPlayersTitleObjects
, "LobbyTitle": GDLobbyTitleObjects
, "Loading": GDLoadingObjects
, "Scrollbar": GDScrollbarObjects
, "ViewportMask": GDViewportMaskObjects
, "BitmapLobbyTitle": GDBitmapLobbyTitleObjects
, "BitmapPlayersTitle": GDBitmapPlayersTitleObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Lobby": thisGDLobbyObjectsList
, "Background": thisGDBackgroundObjectsList
, "PlayersTitle": thisGDPlayersTitleObjectsList
, "LobbyTitle": thisGDLobbyTitleObjectsList
, "Loading": thisGDLoadingObjectsList
, "Scrollbar": thisGDScrollbarObjectsList
, "ViewportMask": thisGDViewportMaskObjectsList
, "BitmapLobbyTitle": thisGDBitmapLobbyTitleObjectsList
, "BitmapPlayersTitle": thisGDBitmapPlayersTitleObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("MultiplayerCustomLobbies"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("MultiplayerCustomLobbies"),
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDLobbyObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDLobbyObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDPlayersTitleObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDPlayersTitleObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDLobbyTitleObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDLobbyTitleObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDLoadingObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDLoadingObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDScrollbarObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDScrollbarObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDViewportMaskObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDViewportMaskObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDBitmapLobbyTitleObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDBitmapLobbyTitleObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDBitmapPlayersTitleObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDBitmapPlayersTitleObjects2.length = 0;

gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDLobbyObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDLobbyObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDPlayersTitleObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDPlayersTitleObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDLobbyTitleObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDLobbyTitleObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDLoadingObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDLoadingObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDScrollbarObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDScrollbarObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDViewportMaskObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDViewportMaskObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDBitmapLobbyTitleObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDBitmapLobbyTitleObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDBitmapPlayersTitleObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.LastErrorContext.GDBitmapPlayersTitleObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerObject("MultiplayerCustomLobbies::CustomLobbies", gdjs.evtsExt__MultiplayerCustomLobbies__CustomLobbies.CustomLobbies);
