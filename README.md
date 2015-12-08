## FFKiosk ##

This is kiosk software built with Mozilla's XUL; the same stuff that Firefox is made with. It gives you a fullscreen browser with no controls or buttons, and no keyboard shortcuts for users to mess with.

You can run the application with either xulrunner or Firefox (which contains its own copy of xulrunner). The invocation looks like this:

    mike@sleepycat:~/ffkiosk/☺  firefox -app application.ini -start http://davidsuzuki.org -error ~/error.html

The above command runs the application and passes in the starting page and an error page to display in the event that network connectivity is lost.
