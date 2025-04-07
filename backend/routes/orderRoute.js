import express from 'express'
import {placeOrderCOD, placeOrderStripe, allOrders, userOrders, updateStatus, verify_stripe} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()


// admin features
orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)

// payment features
orderRouter.post('/cod',authUser, placeOrderCOD)
orderRouter.post('/stripe',authUser, placeOrderStripe)


// user features
orderRouter.post('/userorders', authUser, userOrders)

//verify stripe payment
orderRouter.post('/verifyStripe', authUser,verify_stripe)

export default orderRouter;



