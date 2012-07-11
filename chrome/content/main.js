window.ffkiosk = (function(){
  var Ci = Components.interfaces;
  var Cc = Components.classes;
  var Cu = Components.utils
  var ffkiosk = {
    start: function(){
      ffkiosk.createObserver();
      ffkiosk.processArgs();
      logger("startUrl is set to " + this.startUrl);
      logger("errorUrl is set to " + this.errorUrl);
      browser.loadURI(this.startUrl);
    },
    startUrl: "https://donate.mozilla.org/page/contribute/join-mozilla?source=join_link",
    errorUrl: "chrome://ffkiosk/content/error.html",
    processArgs: function(){
      var cmdLine = window.arguments[0];
      cmdLine = cmdLine.QueryInterface(Ci.nsICommandLine);
      if(cmdLine.findFlag("start", false) > -1){
        this.startUrl = cmdLine.handleFlagWithParam("start", false);
      }
      if(cmdLine.findFlag("error", false) > -1){
        this.errorUrl = cmdLine.handleFlagWithParam("error", false);
      }
    },
    createObserver: function(){
      var observerService = Cc["@mozilla.org/observer-service;1"].getService(Ci.nsIObserverService);
      observerService.addObserver(this, "network:link-status-changed", false);
      //DEBUG - observerService.addObserver(this, "*", false);//observe all events
    },
    observe: function(aSubject, aTopic, aData){
      //DEBUG - logger("Subject: " + aSubject + "\tTopic: " + aTopic + "\tData: " + aData );
      if(aTopic === "network:link-status-changed"){
        if(aData === "down"){
          logger("Network went down.");
          browser.loadURI(this.errorUrl)
        };
        if(aData === "up"){
          logger("Network is up.");
          browser.loadURI(this.startUrl)
        };
      }
    }
  }
  return ffkiosk;
})()

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
