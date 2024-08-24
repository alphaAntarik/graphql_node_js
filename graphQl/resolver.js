const User = require('../models/userModel');

module.exports = {
    hello() {
        return 'Hello world';
    },
    hii() {
        return {
            text: "Antarik",
            num: 12345
        };
    },

    createUser: async function ({ userDetails }, req) {
        const joke = new User(userDetails);
        try {
            const savedJoke = await joke.save();
            return {
                _id: savedJoke._id.toString(),
                title: savedJoke.title,
                joke_content: savedJoke.joke_content,
            };
        } catch (err) {
            throw err;
        }
    }
};
