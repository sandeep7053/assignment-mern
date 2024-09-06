import usermodal, { adminmodal } from "../modal/modal.js";


const controllerfunction = async (req, res) => {
  try {

    const { role, data } = req.body;
    if (role === 'user') {
      const newuser = new usermodal({
        email: data.email,
        startDay: data.startDay,
        lastDay: data.lastDay
      })
      await newuser.save()
      res.status(200).json({
        message: "user register successfully",
        success: true
      })
    } else if (role === 'Admin') {
      const newadmin = new adminmodal({
        email: data.email,
        startDay: data.startDay,
        lastDay: data.lastDay,
        name: data.name,
        starttime: data.starttime,
        endtime: data.endtime
      })
      await newadmin.save()
      res.status(200).json({
        message: "Admin register successfully",
        success: true
      })
    }
    else {
      res.status(400).json({
        message: "invalid server API",
        success: false
      })

    }
  } catch (error) {
    res.status(500).json({
      message: "invalid api to server",
      success: false
    })

  }
}

export default controllerfunction;