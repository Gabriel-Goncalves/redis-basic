const redis = require("redis");
const client = redis.createClient();

client.on("error", function (error) {
  console.error(error);
});

client.set("key", "Gabriel", redis.print);
client.get("key", redis.print);

client.set("foo_rand000000000000", "{message: 'teste'}");
client.get("foo_rand000000000000", redis.print);

client.hgetall("jogo:futebol:fla x flu", (error, value) => {
  console.log(value);
});

client.hset("meu:teste", "time1", "fla x flu");
client.hget("meu:teste", "time1", (error, value) => {
  console.log(value);
});

client.keys("jogo*", (error, value) => {
  console.log(value);
  client.hgetall(value[0], (error, aqui) => {
    console.log(aqui);
  });
  console.log('here');
});

client.get("myNumber", (error, value) => {
  console.log(value);
  client.incr("myNumber");
});

setTimeout(() => {
  client.get("myNumber", redis.print);
}, 7);  
