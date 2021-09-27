const redis = require("redis");
const client = redis.createClient();

client.on("error", function (error) {
  console.error(error);
});

client.SADD("myFriends", "Maradona", "Pele", "Romario", "Ronaldo", "Pablo");

client.SMEMBERS("myFriends", (err, friends) => {
  friends.forEach(element => {
    console.log(element);
  });
});

client.SISMEMBER("myFriends", "Maradona", (err, isMember) => {
  console.log(isMember);
});

client.SISMEMBER("myFriends", "abcde", (err, isMember) => {
  console.log(isMember);
});

client.SCARD("myFriends", redis.print);