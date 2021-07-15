const { Movie } = require("../movie/movie.model");

exports.add = async (entryObj) => {
    try {
        const movie = new Movie(entryObj);
        const savedMovie = await movie.save();
        console.log(savedMovie);
    } catch (error) {
        console.log(error);
    }
};

exports.list = async () => {
    try {
        const movie = Movie.find
        const displayList = await movie.
        console.log(displayList);
    } catch (error) {
        console.log(error);
    }
};

exports.update = async (updateObj) => {
    try {
        
    } catch (error) {
        
    }
};

exports.delete = async (deleteObj) => {
    try {
        
    } catch (error) {
        
    }
};