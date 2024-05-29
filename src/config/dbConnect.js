import mongoose, {mongo} from "mongoose";

const conn = "mongodb://root:example@localhost:27017/livraria?authSource=admin"


async function connectDb() {
    try {
        mongoose.connect(conn)
        console.log("Conectando ao MongoDB...")
        return mongoose.connection
    } catch (error) {
        console.error("Erro ao conectar no MongoDB")
        console.error(error)
    }
}

export default connectDb;