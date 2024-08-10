const Blogs = require('../model/blogs.model');

const getAll = async (req, res) => {
    try {
        const result = await Blogs.find({});
        res.json(result)
    } catch (error) {
        res.json({ error })
    }

}

const getUser = async (req, res) => {
    try {
        const { username } = req.params;
        const result = await Blogs.find({ username: username });
        res.json(result)
    } catch (error) {
        res.json(error);
    }


}

const registerUser = async (req, res) => {
    console.log("register user function")
    try {
        const body = req.body
        const newUser = await Blogs(body);
        const result = await newUser.save();
        res.json({ message: "user registered", result });
    } catch (error) {
        console.log(error);
        res.json({ message: "error ", error })
    }
}

module.exports = { getAll, getUser, registerUser }