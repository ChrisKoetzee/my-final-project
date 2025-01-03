require('dotenv').config(); 
import http from "http";

import app from "./app";
import { connectDb, disconnectDb } from "./db";
import config from "./utils/config";
import logger from "./utils/logger";

const server = http.createServer(app);

server.on("listening", () => {
    const addr = server.address();
    const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
    logger.info("Server is listening on: %s", bind);
});

process.on("SIGTERM", () => {
    logger.info("SIGTERM received. Closing server...");
    server.close(() => {
        disconnectDb();
        logger.info("Server closed and database disconnected");
    });
});


connectDb()
    .then(() => {
        logger.info("Connected to the database");
        server.listen(config.port, () => {
            logger.info(`Server is running on port ${config.port}`);
        });
    })
    .catch((err) => {
        logger.error("Failed to connect to the database", err);
        process.exit(1); 
    });

