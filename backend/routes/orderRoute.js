import express from 'express'
import {placeOrderCOD, placeOrderStripe, placeOrderRazorpay,placeOrderBkash, allOrders, userOrders, updateStatus} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()


// admin features
orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)

// payment features
orderRouter.post('/cod',authUser, placeOrderCOD)
orderRouter.post('/stripe',authUser, placeOrderStripe)
orderRouter.post('/bkash',authUser, placeOrderBkash)
orderRouter.post('/razorpay',authUser, placeOrderRazorpay)

// user features
orderRouter.post('/userorders', authUser, userOrders)

export default orderRouter;



