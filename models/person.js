const mongoose = require('mongoose')
const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose
  .connect(url)
  .then(() => { console.log('connected to MongoDB') })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const personSchema = new mongoose.Schema({
  name: { type: String, minLength: 3, required: true },
  number: {
    type: String,
    validate: {
      validator: function (v) {
        const vaux = v.split('-')
        if (vaux.length === 2) {
          if (vaux[0].length + vaux[1].length >= 8) {
            if (!isNaN(vaux[0]) && !isNaN(vaux[1])) {
              if (vaux[0].length === 2 || vaux[0].length === 3) {
                return true
              }
            }
          }
        }
        return false
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
    required: [true, 'Phone number required'],
  },
})

personSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id.toString()
    delete ret._id
    delete ret.__v
  },
})

module.exports = mongoose.model('Person', personSchema)
