import mongoose from "mongoose";

const userschema = new mongoose.Schema({
  email: {
    type: String
  },
  startDay: {
    type: Date
  },
  lastDay: {
    type: Date
  },


})

const adminschema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  startDay: {
    Type: Date
  },
  lastDay: {
    type: Date
  },
  starttime: {
    type: String
  },
  endtime: {
    type: String
  }

})

const usermodal = mongoose.model('user', userschema)

const adminmodal = mongoose.model('admin', adminschema)

export { adminmodal }

export default usermodal;

