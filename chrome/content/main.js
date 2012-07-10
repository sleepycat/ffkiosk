//TODO - this is currently creating a .mike\ williamson directory in ~. Stop that.
//TODO - figure out why my observer is not being called.

window.ffkiosk = (function($){
  var Ci = Components.interfaces;
  var Cc = Components.classes;
  var Cu = Components.utils
  var ffkiosk = {
    start: function(){
      ffkiosk.createObserver();
      var startUrl = ffkiosk.setStartUrl();
      browser.loadURI(startUrl);
    },
    setStartUrl: function(){
      var cmdLine = window.arguments[0];
      cmdLine = cmdLine.QueryInterface(Ci.nsICommandLine);
      if(cmdLine.findFlag("start", false) > -1){
        return cmdLine.handleFlagWithParam("start", false);
      }else{
        return 'http://news.ycombinator.com';
      }
    },
    createObserver: function(){
      var network_observer = {
        observe: function(aSubject, aTopic, aState){
          dump("Subject: " + aSubject + "\tTopic: " + aTopic + "\tData: " + aState + "\r\n" );
          //do stuff about the observed event
          if(aState === "offline"){
            dump("we're offline");
          }else{
            dump("we're online");
          }
        }
      }
      var observerService = Cc["@mozilla.org/observer-service;1"].getService(Ci.nsIObserverService);
      observerService.addObserver(network_observer, "network:link-status-changed", false);
    },
  }
  return ffkiosk;
})(jQuery)

window.onload = function(){
  window.browser = document.getElementById("browser");
  ffkiosk.start();
}

