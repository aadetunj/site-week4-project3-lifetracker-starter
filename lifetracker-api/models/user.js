const db = require("../db")
const bcrypt = require("bcrypt")
const { BadRequestError, UnauthorizedError } = require("../utils/errors")
const { validateFields } = require("../utils/validate")
const jwt = require("jsonwebtoken"); // importing the jsonwebtoken library
const crypto = require("crypto"); // importing the crypto library
const secretKey = crypto.randomBytes(64).toString('hex') // creating a secret key for the jwt
const { BCRYPT_WORK_FACTOR } = require("../config")


class User {

    static async createPublicUser(user) {
        return {
            id: user.id,
          email: user.email,
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName, 
        }
      }

      static async register(credentials) {
        console.log("credentials", credentials)
        const requiredFields = ["emailaddress", "password", "username"]; // creating an array of the required fields
   
      
        validateFields(requiredFields,credentials); // validating the required fields
       

        if (credentials.emailaddress.indexOf("@") <= 0) { // checking if the email is valid
            throw new BadRequestError("Invalid email.");
        }

        if (credentials.password.length < 6) { // checking if the password is valid
            throw new BadRequestError("Password must be at least 6 characters.");
        }

        const existingUser = await User.fetchUserByEmail(credentials.emailaddress); // fetching the user by email
        if (existingUser) {
            throw new BadRequestError(`Duplicate email: ${credentials.email}`); // throwing an error if the email already exists
        }

        const hashedPassword = await bcrypt.hash(credentials.password, BCRYPT_WORK_FACTOR); // hashing the password
        // console.log("hashedPassword", hashedPassword)
        const normalizedEmail = credentials.emailaddress.toLowerCase(); // normalizing the email
        const normalizedUsername = credentials.username.toLowerCase(); // normalizing the username

        const userResult = await db.query(
            `INSERT INTO users (first_name, last_name, email, username, hash_password)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING id, email, username`,
            [credentials.firstname, credentials.lastname, normalizedEmail, normalizedUsername, hashedPassword]
          );// inserting the user into the database

        const user = userResult.rows[0]; // creating a variable for the user

        return await User.createPublicUser(user); // returning the user
    }


    static async fetchUserByEmail(email) {
      const result = await db.query(
        `SELECT id,
                email, 
                hash_password,
                first_name AS "firstName",
                last_name AS "lastName"            
             FROM users
             WHERE email = $1`,
        [email.toLowerCase()]
      )
  
      const user = result.rows[0]
  
      return user
    }

    static async login(credentials) {
      const requiredFields = ["email", "password"]; // creating an array of the required fields
      validateFields(requiredFields,credentials); // validating the required fields
      const user = await User.fetchUserByEmail(credentials.email); // fetching the user by email
      if (user) {

        // console.log(user)
          // console.log("isValid", User.password, credentials.password)
          const isValid = await bcrypt.compare(credentials.password, user.hash_password); // comparing the password to the hashed password
          console.log("isValid", isValid)
          if (isValid) {
              return await User.createPublicUser(user); // returning the user
          }
      }
      throw new UnauthorizedError("Invalid email/password combo"); // throwing an error if the email/password combo is invalid
  }

  static async sleep(sleepInfo, userId) {
    const requiredFields = [ "start_time", "end_time", "userId"]; // creating an array of the required fields
    sleepInfo.userId = userId; // setting the userId to the userId from the request body
    console.log("required field", requiredFields)
    console.log("sleeeee info", sleepInfo)

    validateFields(requiredFields, sleepInfo); // validating the required fields

    const query = `INSERT INTO sleep(start_time, end_time, user_id)
    VALUES ($1, $2, $3)
    RETURNING id, start_time, end_time, user_id`; // creating a query to insert the sleep data into the database
    const result = await db.query(query, [sleepInfo.start_time, sleepInfo.end_time, userId]); // querying the database

    const sleep = result.rows[0]; // creating a variable for the sleep data

    return sleep; // returning the sleep data
}

static async fetchSleepById(id) {
  if (!id) { // checking if the id is null or undefined
      throw new BadRequestError("No id provided"); // throwing an error if there is no id
  }

  const query = `SELECT * FROM sleep WHERE user_id = $1`; // creating a query to fetch the sleep data by id
  const result = await db.query(query, [id]); // querying the database

  const sleep = result.rows; // creating a variable for the sleep data

  console.log("sleep", sleep)
 
  return sleep; // returning the sleep data
 
}

// create a genrateAuthToken function using jwt.sign
static async generateAuthToken(user) {
  const payload = {
      id: user.id,
      username: user.username,
      email: user.email,
  }; // creating a payload for the token
  const token = jwt.sign(payload, secretKey, { expiresIn: "1h" }); // creating a token
  console.log("token", token)
  return token; // returning the token 

}

  // create a verifyAuthtoken function using jwt.verify
  static async verifyAuthToken(token) {
        
    try {
        const decoded = jwt.verify(token, secretKey); // decoding the token
        return decoded; // returning the decoded token 
        

    } catch {
        return null // return null if the token seems to be unvalid or expired
    }
    
} 
}

module.exports = User