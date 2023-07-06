const db = require("../db")
const bcrypt = require("bcrypt")
const { BadRequestError, UnauthorizedError } = require("../utils/errors")
const { validateFields } = require("../utils/validate")

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
          // console.log("isValid", User.password, credentials.password)
          const isValid = await bcrypt.compare(credentials.password, user.hash_password); // comparing the password to the hashed password
          console.log("isValid", isValid)
          if (isValid) {
              return await User.createPublicUser(user); // returning the user
          }
      }
      throw new UnauthorizedError("Invalid email/password combo"); // throwing an error if the email/password combo is invalid
  }
}

module.exports = User