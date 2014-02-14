Description
===========
`remote.performance.timing` is an anonymous javascript function which utilizes the Navigation Timing API and send the results to a tracking pixel.

Usage
===========

You must define the tracking pixel, so that the script knows what to call.

```javascript
<script> var remotePerformanceTimingPixelUrl = '//example.com/t.gif'; </script>
<script src="remote.performance.timing.js"></script>
```

## Download ##

  * [Development version](https://raw.github.com/Bigpoint/remote.performance.timing.js/master/lib/remote.performance.timing.js) *Uncompressed*
  * [Production version](https://raw.github.com/Bigpoint/remote.performance.timing.js/master/dist/remote.performance.timing.min.js) *Minified*

Support
===========
* Firefox 7+
* Chrome
* IE 9+

Knowledge Links & Credits
==============

This project uses various pieces of ideas. Please check their sites for further documentation.

* performance.timing object : http://kaaes.github.io/timing/info.html

Poem
=======

'Ist dies schon Tollheit,
     hat es doch Methode' - William Shakespeare (1564-1616), engl. Dramatiker


License and Author
==================

Author:: Alexander Jäger <a.jaeger@bigpoint.com>

Copyright 2014, Bigpoint GmbH

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
