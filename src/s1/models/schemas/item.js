const itemSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    dueDate: { type: Date, required: true },
    status: { type: String, enum: ['TODO','ONBOARD', 'COMPLETE'], default: 'TODO' },
    assignedTo: { type: Schema.Types.ObjectId, ref: 'Person' }
}, {
    timestamps: true,
    versionKey: false
  });

// compile our model
const Item = mongoose.model('Item', itemSchema);