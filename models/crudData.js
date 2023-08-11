import mongoose from "mongoose";

export const crudDataSchema = new mongoose.Schema({
    titulo: String,
    categoria: String,
    valor: {
        type: Number,
        required: true
    },
    favorite: Boolean,

    tipo: {
        type: String,
        enum: ["Entrada", "Saída"],
    },

    data: {
        type: Date,
        default: Date.now,
    },
});

export const CrudData = mongoose.model("crud", crudDataSchema);
