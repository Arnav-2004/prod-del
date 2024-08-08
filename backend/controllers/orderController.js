import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// place order
const placeOrder = async (req, res) => {
  const frontend_url = "http://localhost:5173";

  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });
    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

    const line_items = req.body.items.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));
    line_items.push({
      price_data: {
        currency: "inr",
        product_data: {
          name: "Delivery Charges",
        },
        unit_amount: 25 * 100,
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
    });

    return res.json({ success: true, session_url: session.url });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Something went wrong" });
  }
};

const verifyOrder = async (req, res) => {
  const { orderId, success } = req.body;
  try {
    if (success === "true") {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      return res.json({ success: true, message: "Order placed successfully" });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      return res.json({ success: false, message: "Order failed" });
    }
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Something went wrong" });
  }
};

// user orders
const userOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({ userId: req.body.userId });
    return res.json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Something went wrong" });
  }
};

// list orders
const listOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    return res.json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Something went wrong" });
  }
};

// update order status
const updateStatus = async (req, res) => {
  try {
    const order = await orderModel.findByIdAndUpdate(req.body.orderId, {
      status: req.body.status,
    });
    return res.json({ success: true, message: "Status updated successfully" });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Something went wrong" });
  }
};

export { placeOrder, verifyOrder, userOrders, listOrders, updateStatus };
