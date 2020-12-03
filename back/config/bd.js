import mongoose from "mongoose";

const connectDB = async () => {

    //PENSER A REMPLACER LES VARIABLES D'ENV AVEC LE BON SERVER !!!

    const URI = process.env.MONGO_URI.replace(
        "<password>",
        process.env.MONGODB_PASSWORD
    );
    try {
        const co = await mongoose.connect(URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        });

        console.log(
            ` Connection to mongoDb is established.... 🙂 !! : ${co.connection.host}`
        );
    } catch (error) {
        console.error(`Error : ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;