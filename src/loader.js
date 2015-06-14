var callbacks = [];

function done() {
  callbacks.forEach(function(fn) {
    fn();
  });
  callbacks.length = 0;
}

module.exports = {
  load: function(callback) {
    callbacks.push(callback);

    if (window.google && window.google.maps) return done();

    // Loading...
    if (callbacks.length > 1) return;

    var gmapCallback = 'gmapCallback' + Date.now();
    window[gmapCallback] = function() {
      done();
      delete window[gmapCallback];
    };

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' +
        '&signed_in=true&callback=' + gmapCallback;
    document.body.appendChild(script);
  }
};
