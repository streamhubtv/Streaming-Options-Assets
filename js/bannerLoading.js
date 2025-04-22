
  

(function() {
    // Ensure global array exists
    if (typeof window.atAsyncOptions !== 'object') window.atAsyncOptions = [];

    // Push ad configuration
    window.atAsyncOptions.push({
        key: '976555a9961698edfac3cf77d100d895',
        format: 'js',
        async: true,
        container: 'atContainer-976555a9961698edfac3cf77d100d895',
        params: {}
    });

    // Create and insert script
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = (location.protocol === 'https:' ? 'https' : 'http') + '://www.highperformanceformat.com/976555a9961698edfac3cf77d100d895/invoke.js';
    document.head.appendChild(script);
})();
