/**
 * Created by Farmas on 23.02.2017.
 */
import mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/WeaConPi-Weather5');
export { mongoose }
