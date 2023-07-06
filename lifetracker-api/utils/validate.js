const { UnprocessableEntityError } = require("./errors")

const isNil = (value) => value === null || typeof value === "undefined" || String(value).trim() === ""

const validateFields = (required, obj, location ) => {
console.log(required)
console.log(obj)


  if (!obj) throw new UnprocessableEntityError(`Missing object for validation.`)
console.log("uuuuuuuu")
  required.forEach((item) => {
    console.log(item)
    if (isNil(obj[item])) {
      throw new UnprocessableEntityError(`Required field - ${item} missing${location ? ` at ${location}` : ""}`)
    }
  })
}

module.exports = { validateFields, isNil }
