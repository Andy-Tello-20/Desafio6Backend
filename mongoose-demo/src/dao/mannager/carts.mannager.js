import CartModel from '../models/cart.model.js'

export default class CartManager {

  static get() {
    return CartModel.find();
  }
  static async getById(sid) {
    const product = await CartModel.findById(sid)
    if (!product) {
      throw new Error('Producto no encontrado.')
    }
    return product;
  }
  static async create(data) {
    const product = await CartModel.create(data)
    console.log(`Producto creado correctamente (${product._id}) `)
    return product
  }

  static async updateById(sid, data) {
    await CartModel.updateOne({ _id: sid }, { $set: data })
    console.log(`Producto actualizado correctamente (${sid}) `)
  }

  static async deleteById(sid) {
    await CartModel.deleteOne({ _id: sid });
    console.log(`Producto eliminado correctamente (${sid}) `)
  }

}