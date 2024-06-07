import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
})

ItemSchema.index({ name: 1 });

export default mongoose.model("Item", ItemSchema);
