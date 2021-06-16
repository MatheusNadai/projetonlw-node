import express, { request } from "express";


const app = express();

/**
 * GET = BUSCAS
 * POST = CRIAÇÃO
 * PUT = ALTERAÇÃO
 * DELETE = DELETAR
 * PATCH = ALTERAR UMA INFORMAÇÃO ESPECIFICA
 */

app.get("/", (request, response) => {
 
    return response.json({
        message: "Olá NLW 05!",
    });
});

app.post("/", (request, response) =>{
    return response.json({ message: "Usuario SAlvo com sucesso!"});
});


app.listen(3333, () => console.log("Server is running on port 3333"));