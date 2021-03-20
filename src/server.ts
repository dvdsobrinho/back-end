import express from 'express';

const app = express();

// GET - Busca
// POST - Salvar
// PUT - Alterar
// DELETE - Deletar
// PATCH - Alteração Especifica

app.get("/", (resquest, response) => {
    // return response.send("Hello World NLW4");
    return response.json({message: "Hello World NLW4"});
})


app.post("/", (resquest, response) => {
    return response.json({message: "Dados salvos com sucesso!"})
})

app.listen(3333, () => console.log('listening'))

