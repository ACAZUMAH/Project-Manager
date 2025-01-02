import mongoose from "mongoose";

const clientsSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    phone: { type: String }
});

const Client = mongoose.model('clients', clientsSchema);

export default Client;