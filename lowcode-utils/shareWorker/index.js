const listeners = [];

onconnect = function (e) {
  var port = e.ports[0];

  port.addEventListener("message", function (e) {
    console.log(e.data, listeners.length);
    port.postMessage(e.data);
  });

  port.start();
};
