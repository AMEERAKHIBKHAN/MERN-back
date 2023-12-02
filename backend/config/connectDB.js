const mongoose = require('mongoose')
const connectDB= async()=>{
    try {
        const URI= process.env.MONGO_URI;
        const connect = await mongoose.connect(URI)
        console.log(`MonogoDB connectd`)
    } catch (error) {
        console.log("erros",error)
        process.exit(1)
    }
}
module.exports = connectDB