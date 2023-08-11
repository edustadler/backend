import mongoose from "mongoose"
const dbConfig = "mongodb+srv://vercel-admin-user:dGNsY1KOvXp0E6gm@cluster0.7cxwuec.mongodb.net/financialdata?retryWrites=true&w=majority";


export const connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})