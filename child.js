process.on("message", function (message) {
  console.log(`Message from main.js: to child 1 ${message}`);
});
