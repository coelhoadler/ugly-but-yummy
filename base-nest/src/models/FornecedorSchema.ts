import * as mongoose from 'mongoose';

mongoose.pluralize(null);

export var UserSchema: mongoose.Schema = new mongoose.Schema({
    name: String,
    sobrenome: String
});
  
  export default mongoose.model<any>("fornecedor", UserSchema);