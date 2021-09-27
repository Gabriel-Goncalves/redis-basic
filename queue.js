// Fila é a estrutura utilizada para armazenar os dados e retirar na ordem FIFO -> First In First Out primeiro a entrar é o primeiro a sair

const redis = require('redis');
const client = redis.createClient();

const insertInQueue = async (queue, element) => {
  await client.RPUSH(queue, element);
}

const popQueue = async (queue) => {
  await client.LPOP(queue, (err, element) => {
    if (err) {
      console.log("Some thing went wrong: ", err);
    }
    else {
      console.log(`Client ${element} it's your turn`);
    }
  });
}

(async () => {
  const queueName = 'bank:queue';
  await insertInQueue(queueName, "marcos");
  await insertInQueue(queueName, "gabriel");
  await insertInQueue(queueName, "arthur");
  await insertInQueue(queueName, "fabiana");
  await insertInQueue(queueName, "kelly");

  await popQueue(queueName);
  await popQueue(queueName);
  await popQueue(queueName);
  await popQueue(queueName);
  await popQueue(queueName);
})();