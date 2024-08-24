const JokeModel=require('../models/userModel')


exports.postData = (req, res) => {
    const joke = new JokeModel(req.body)
    joke.save().then((doc) => {
        
        return res.json(doc)
    }).catch((err) => {
        
        
        return res.json({ err: err.message })
    })
}
exports.getData = async (req, res) => {
  try {
    
    const jokes = await JokeModel.find();

    // Return jokes along with total pages
    return res.json({
      jokes,
     
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
