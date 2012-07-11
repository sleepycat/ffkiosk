## FFKiosk ##

This is kiosk software built with Mozilla's XUL; the same stuff that Firefox is made with. It gives you a fullscreen browser with no controls or buttons, and no keyboard shortcuts for users to mess with.

You can run the application with either xulrunner or Firefox (which contains its own copy of xulrunner). The invocation looks like this:

    mike@sleepycat:~/ffkiosk/☺  firefox -app application.ini -start http://davidsuzuki.org -error ~/error.html

The above command runs the application and passes in the starting page and an error page to display in the event that network connectivity is lost.


## License ##

The MIT License (MIT)

Copyright (c) 2012 Mike Williamson

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
