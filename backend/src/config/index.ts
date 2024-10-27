import dotenv from "dotenv";

dotenv.config();

const MONGO_CONNSTRING: string = process.env.MONGO_CONNSTRING || "";
const SERVERPORT: number = process.env.SERVERPORT
  ? Number(process.env.SERVERPORT)
  : 8000;
const SERVERROUNDS: number = process.env.SERVERROUNDS
  ? Number(process.env.SERVERROUNDS)
  : Math.floor(Math.random() * 11);

export const config = {
  mongo: {
    url: MONGO_CONNSTRING,
  },
  server: {
    port: SERVERPORT,
    rounds: SERVERROUNDS,
  },
};

//"mongodb+srv://adminuser:adminuser@usercluster.isodm.mongodb.net/Libery?retryWrites=true&w=majority&appName=UserCluster"
