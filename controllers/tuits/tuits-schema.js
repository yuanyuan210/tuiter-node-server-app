import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    topic: String,
    userName: String,
    verified : Boolean,
    time: String,
    title: String,
    logo: String,
    handle: String,
    tuit: String,
    liked: Boolean,
    likes: Number,
    disliked: Boolean,
    dislikes: Number,
    replies: Number,
    retuits: Number,

}, {collection: 'tuits'});

export default schema;