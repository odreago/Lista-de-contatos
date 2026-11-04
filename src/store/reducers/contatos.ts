import { createSlice} from "@reduxjs/toolkit"
import type { PayloadAction} from '@reduxjs/toolkit'
import type { Contato } from "../../models/Contato"

type ContatosSlice = {
  itens: Contato[]
}

const initialState: ContatosSlice = {
  itens: []
}

const ContatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const ultimo = state.itens[state.itens.length - 1]
      state.itens.push({
        ...action.payload,
        id: ultimo ? ultimo.id + 1 : 1
    })
    },
    remover:(state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    }
  }
})

export const { editar, remover, adicionar} = ContatosSlice.actions

export default ContatosSlice.reducer
