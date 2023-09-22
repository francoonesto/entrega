// import { Schema , model } from "mongoose"

// const cartSchema = new Schema({
//     products: {
//         type: [
//             {
//                 id_prod: {
//                     type: Schema.Types.ObjectId,
//                     ref: 'products',
//                     required: true
//                 },
//                 quantity: {
//                     type: Number,
//                     required: true
//                 }
//             }
//         ],
//         default: function () {
//             return []
//         }
//     }
// }
// )

// cartSchema.pre('findOne', function () {
//     this.populate('products.id_prod')
// })


// const cartModel = model('carts', cartSchema)

// export default cartModel
import {Schema, model} from "mongoose";

const cartSchema = Schema({
    products: {
        type:[{
            id_prod: {
                type: Schema.Types.ObjectId, //Id autogenerado de MongoDB
                ref: 'products',
                required: true
            },
            quantity: {
                type: Number,
                required: true //default: 1 (otra forma de hacerlo)
            }
        }],
        default: function() {
            return []
            }
        }
    }
)

 const cartModel = model('carts', cartSchema)

export default cartModel