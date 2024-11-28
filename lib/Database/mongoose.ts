import mongoose from "mongoose";

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URL!);

		console.log(`successfully connected to mongoDb `);
	} catch (error: any) {
		console.error(`Error:${error.message}`);
		process.exit(1);
	}
};

export default connectDB;

// import mongoose, { Mongoose } from "mongoose";

// const MONGODB_URL = process.env.MONGODB_URL;

// interface MongooseConnection {
// 	conn: Mongoose | null;
// 	promise: Promise<Mongoose> | null;
// }

// let cached: MongooseConnection = (global as any).mongoose;

// if (!cached) {
// 	cached = (global as any).mongoose = {
// 		conn: null,
// 		promise: null,
// 	};
// }

// export const connectToDatabase = async () => {
// 	if (cached.conn) return cached.conn;

// 	if (!MONGODB_URL) throw new Error("missing url ");

// 	cached.promise =
// 		cached.promise ||
// 		mongoose.connect(MONGODB_URL, {
// 			dbName: "imaginify",
// 			bufferCommands: false,
// 		});

// 	cached.conn = await cached.promise;

// 	return cached.conn;
// };
