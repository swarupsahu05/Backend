import mongoose from 'mongoose';
import { Product } from './product.models';

const orderItemSchema = new mongoose.Schema({
  ProductId: {
    type: mongoose.Schema.Type.ObjectId,
    ref: 'product',
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Type.ObjectId,
      ref: 'User',
    },

    orderItem: {
      type: [orderItemSchema],
    },

    adress:{
        type: String,
        required: true,
    },

    status: {
        type:String,
        enum: ['pending', 'canceled', 'delivered'],
        default: 'pending',
    }

  },{ timestamps: true }
);

export const Order = mongoose.model('Order', orderSchema);
