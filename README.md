NAME
----
    Color Grid

DEPENDENCIES
------------
 * jQuery
 * Backbone.js
   * Underscore.js
   * json2.js
 * farbtastic.js

INSTALL
-------
    The simplest way to run Color Grid is to use the python cgi server:

> python -m CGIHTTPServer

    Then go to http://localhost:8000/ to start playing with it.

FILES
-----
 * __cgi-bin/server.cgi__: A cgi which takes care of the persistent storage
 * __js/color-grid.js__: The javascript code for Color Grid
 * __index.html__: Color Grid main page
 * __README.md__: Instructions for installation etc
 * __lib__: Contains libraries used by Color Grid
