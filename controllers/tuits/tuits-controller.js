import posts from "./tuits.js";
let tuits = posts;

const templateTuit = {
    "_id":"",
    "username":"",
    "handle":"",
    "image":"",
    "time": "Now",
    "liked": false,
    "disliked": false,
    "comments": 0,
    "retuits": 0,
    "likes": 0,
    "dislikes": 0
}
const createTuit = (req, res) => {
    const newTuit = {...templateTuit, ...req.body};
    newTuit._id = (new Date()).getTime()+'';
    newTuit.likes = 0;
    newTuit.liked = false;
    tuits.push(newTuit);
    res.json(newTuit);
}

const findTuits = (req, res) =>
    res.json(tuits);

const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    tuits = tuits.filter((t) =>
        t._id !== tuitdIdToDelete);
    res.sendStatus(200);
}
const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const tuitIndex = tuits.findIndex(
        (t) => t._id === tuitdIdToUpdate)
    tuits[tuitIndex] =
        {...tuits[tuitIndex], ...updates};
    res.sendStatus(200);
}


export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
