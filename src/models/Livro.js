import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, {
    versionKey: false
})

const livro = mongoose.model("livro", livroSchema)

export default livro;