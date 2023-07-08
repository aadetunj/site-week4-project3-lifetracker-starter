const { UnprocessableEntityError } = require("./errors")

const isNil = (value) => value === null || typeof value === "undefined" || String(value).trim() === ""

const validateFields = (required, obj, location ) => {
  
  if (!obj) throw new UnprocessableEntityError(`Missing object for validation.`)
  console.log("sleeeee info vvvvvvv obj", obj)
  console.log("required field vvvvvvvv", required)

  required.forEach((item) => {
    if (isNil(obj[item])) {
      throw new UnprocessableEntityError(`Required field - ${item} missing${location ? ` at ${location}` : ""}`)
    }
  })
}

module.exports = { validateFields, isNil }
