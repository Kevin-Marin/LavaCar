/*
O modelo define os dados dos documentos que vão
pertencer a uma coleção
*/

import { Schema, model } from "mongoose";

const clienteSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  endereco: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
    validator: {
      validate(v) {
        return /^[0-9]{2}-([0-9]{8}|[0-9]{9})/.test(v);
      },
    },
  },
});

const Cliente = model("Cliente", clienteSchema);

export default Cliente;
