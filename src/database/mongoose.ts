import mongoose from "mongoose";

mongoose.connect('mongodb+srv://admin:admin@cluster0.7gvim.mongodb.net/apidb?retryWrites=true&w=majority')
mongoose.Promise = global.Promise

export { mongoose };

