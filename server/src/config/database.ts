const mongoose = require("mongoose");

export const connectDatabase = () => {
    mongoose
        .connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then((con: any) => {
            console.log(
                `MongoDB Database connected with HOST: ${con.connection.host}`
            );
        });
};
