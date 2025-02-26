import dotenv from "dotenv";
dotenv.config();
const config = {
    port: process.env.PORT || 8080,
    dbURI: process.env.DB_URI || "mongodb://localhost/logDB",
};
export default config;
