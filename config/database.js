import mongoose from "mongoose"
const dbConfig = "mongodb+srv://dubaizan:datafin@cluster0.7cxwuec.mongodb.net/financialdata?retryWrites=true&w=majority";

export const connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})