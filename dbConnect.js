import * as mongoose from 'mongoose';

export async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGODB_CONN_URI);
    // eslint-disable-next-line no-console
    console.log('MongoDB Connected: {conn.connection.host}');
  } catch (error) {
    process.exit(1);
  }
}
