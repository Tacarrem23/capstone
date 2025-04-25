import mongoose from 'mongoose';
const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    review: { type: Schema.Types.ObjectId, ref: 'Review', required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    text: { type: String, required: true }
  },
  { timestamps: true }
);

export default mongoose.model('Comment', commentSchema);
