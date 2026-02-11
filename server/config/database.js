import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio', {
      // Remove deprecated options - mongoose 6+ handles these automatically
    })

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(`⚠️  MongoDB connection failed: ${error.message}`)
    console.log(`📝 Server will continue without database connection`)
    console.log(`💡 To connect MongoDB: Set MONGODB_URI in .env or start MongoDB locally`)
  }
}

export default connectDB
