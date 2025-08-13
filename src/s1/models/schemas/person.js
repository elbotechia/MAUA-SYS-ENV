const personSchema = new Schema({
  personalName:{type: String, required: true},
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  passwordHash: {type: String, required: true},
  avatarId: {type: String, default: null},
  coverId: {type: String, default: null}
},{
  timestamps: true,
  versionKey: false
});

// compile our model
const Person = mongoose.model('Person', personSchema);