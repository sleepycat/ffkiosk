## FFKiosk

Firefox kiosk mode! This is kiosk software built with Mozilla's XUL; the
same stuff that Firefox is made with. It gives you a fullscreen browser
with no controls or buttons, and no keyboard shortcuts for users to mess
with.

Firefox is a complex application created by combining many XUL
components: &lt;window&gt;, &lt;browser&gt;, &lt;button&gt; and many more. FFKiosk doesn't
disable any of Firefox's functionality. It uses only the components
needed to make a window and put a browser in it:

```html
<window>
  <browser />
</window>
```

You can run the application with either xulrunner or Firefox (which
contains its own copy of xulrunner). The invocation looks like this:

```bash
mike@sleepycat:~/ffkiosk/☺  firefox -app application.ini -start https://www.mozilla.org -error ~/error.html
```

The above command runs the application and passes in the starting page
and an error page to display in the event that network connectivity is
lost.

If you run FFKiosk and it gives you an error message like:

```bash
Error: Platform version '46.0' is not compatible with
minVersion >= 1.9
maxVersion <= 45.*
```

Firefox and the XULrunner platform it is built on is on a 6 week release
cycle, so the versions go by quickly. Just bump up the maxVersion number
in application.ini. It should work fine.

### Customizing

Take a look at chrome/content/main.js. Its just Javascript. Do some
tinkering. Adding new XUL elements would be done in
chrome/content/main.xul.
Take a look at the [XUL
reference](https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XUL/XUL_Reference) to see what's available.
