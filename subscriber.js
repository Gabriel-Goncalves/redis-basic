const redis = require("redis");
const subscriber = redis.createClient();

subscriber.on("message", function (channel, message) {
  console.log(
    "Message: " + message + " on channel: " + channel + " is arrive!"
  );
});

// subscriber.on("connect", function() {
//   subscriber.set("foo", "bar", redis.print); // => "Reply: OK"
//   subscriber.get("foo", redis.print); // => "Reply: bar"
//   subscriber.quit();
// });


subscriber.subscribe("myChannel");