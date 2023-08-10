import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    username: {
        type: String,
        default: 'admin'
    },
    pass: {
        type: String,
        default: 'demo'
    },
    permission: {
        type: String, 
        default: 'admin',
        immutable: true
    }
}, {
    timestamps: true
});

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;