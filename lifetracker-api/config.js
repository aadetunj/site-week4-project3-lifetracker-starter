require("dotenv").config()
require("colors")

const PORT = process.env.PORT ? Number(process.env.PORT) : 3008

// Use dev database, testing database, or via env var, production database
function getDatabaseUri() { 
  const dbUser = process.env.DATABASE_USER || "aadetunji"
  const dbPass = process.env.DATABASE_PASS ? encodeURI(process.env.DATABASE_PASS) : "password"
  const dbHost = process.env.DATABASE_HOST || "localhost"
  const dbPort = process.env.DATABASE_PORT || 5432
  const dbProdName = process.env.DATABASE_NAME || "lifetracker"
  const dbName = process.env.NODE_ENV = "lifetracker"

  return `postgres://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`
}

const BCRYPT_WORK_FACTOR = 10;

console.log("Lifetracker Config:".red)
console.log("PORT:".blue, PORT)
console.log("BCRYPT_WORK_FACTOR".blue, BCRYPT_WORK_FACTOR)
console.log("Database:".blue, getDatabaseUri())
console.log("---")

module.exports = {
  PORT,
  BCRYPT_WORK_FACTOR,
  getDatabaseUri,
}
