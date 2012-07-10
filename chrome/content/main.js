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
      var observerService = Cc["@mozilla.org/observer-service;1"].getService(Ci.nsIObserverService);
      //observerService.addObserver(this, "network:link-status-changed", false);
      observerService.addObserver(this, "*", false);//observe all events
    },
    observe: function(aSubject, aTopic, aData){
      //TODO - for the moment just log the events.
      logger("Subject: " + aSubject + "\tTopic: " + aTopic + "\tData: " + aData );
    }
  }
  return ffkiosk;
})(jQuery)

window.onload = function(){
  window.browser = document.getElementById("browser");
  ffkiosk.start();
}

window.logger = function(message){
  var d = new Date();
  function pad(n){return n<10 ? '0'+n : n};
  dump("[ " + d.getUTCFullYear()+'-'
    + pad(d.getUTCMonth()+1)+'-'
    + pad(d.getUTCDate())+'T'
    + pad(d.getUTCHours())+':'
    + pad(d.getUTCMinutes())+':'
    + pad(d.getUTCSeconds())+'Z'
    + " ] "
    + message + "\r\n"
  )
}
