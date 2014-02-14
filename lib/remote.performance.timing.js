/*global window*/
/*global document*/
/*global remotePerformanceTimingPixelUrl*/

(function (window, document) {
    'use strict';

    if (!window.performance) {
        return;
    }

    if (typeof remotePerformanceTimingPixelUrl === 'undefined') {
        console.debug('remotePerformanceTimingPixelUrl is not set');
        return;
    }

    window.onload = function () {
        var query = '';
        var timing = window.performance.timing;
        var keys = Object.keys(timing);
        var names = keys.length ? keys : Object.keys(Object.getPrototypeOf(timing));
        var eventTime = 0;
        var totalTime = 0;

        for (var i = 0, l = names.length; i < l; i++) {
            var event = timing[names[i]];

            if (event && event > 0) {
                if (query !== '') {
                    query += '&';
                }

                eventTime = event - timing.navigationStart || 0;
                query += names[i] + '=' + eventTime;

                if (eventTime > totalTime) {
                    totalTime = eventTime;
                }
            }
        }

        query += '&totalTime=' + totalTime;

        console.debug('Loading time: ' + query);

        var pixel = document.createElement('img');
        pixel.src = remotePerformanceTimingPixelUrl + '?' + query;
        pixel.height = '1';
        pixel.width = '1';
        document.body.appendChild(pixel);
    };

})(window, document);