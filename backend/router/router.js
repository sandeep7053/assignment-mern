import express from 'express'
import controllerfunction from '../controller/controller.js'

const router = express.Router()

router.post('/user-admin', controllerfunction)

export default router