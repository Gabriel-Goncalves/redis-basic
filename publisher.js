const redis = require("redis");
const publisher = redis.createClient();

publisher.on("error", (error) => {
  console.log("Error: Redis is not running: ", error);
});

publisher.publish(
  "myChannel",  // channel Name
  '{"message":"Hello world from Asgardian!"}', // Message to send
  function () {   // node callback that will execute after the message is sent
    process.exit(0);
  }
);
