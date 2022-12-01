import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    topic: String,
    userName: String,
    verified:Boolean,
    time: String,
    title: String,
    image: String,
    handle: String,
    tuit: String,
    liked: Boolean,
    replies: Number,
    retuits: Number,
    likes: Number,
}, {collection: 'tuits'});

export default schema;