Elm.Native = Elm.Native || {};
Elm.Native.Time = Elm.Native.Time || {};
Elm.Native.Time.Extra = {};
Elm.Native.Time.Extra.make = function(localRuntime){

  localRuntime.Native = localRuntime.Native || {};
  localRuntime.Native.Time = localRuntime.Native.Time || {};
  localRuntime.Native.Time.Extra = localRuntime.Native.Time.Extra || {};

  if (localRuntime.Native.Time.Extra.values){
    return localRuntime.Native.Time.Extra.values;
  }

  var Task  = Elm.Native.Task.make(localRuntime);
  var Utils = Elm.Native.Utils.make(localRuntime);

  // getCurrentTime : Task error Float
  var getCurrentTime = Task.asyncFunction(function(callback){
    var date = new Date();
    return callback(Task.succeed(date.getTime()));
  });

  return {
    getCurrentTime : getCurrentTime
  };


};
