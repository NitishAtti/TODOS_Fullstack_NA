const express = require("express");
const app = express();
const {CreateTodo, UpdateTodo} = require("./types");
app.use(express.json());

app.get("/todos", (req, res) => {
  res.send("Hello World");
});

app.post("/todo", (req, res) => {
    const createPayload = req.body;
    const parsedPayload = CreateTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        return res.status(400).json({error: parsedPayload.error.message});
    }
    // TODO: Create a new todo in MongoDB
    return res.status(201).json({message: "Todo created successfully"});
});

app.put("/todo/:id", (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = UpdateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        return res.status(400).json({error: parsedPayload.error.message});
    }
    // TODO: Update a todo in MongoDB
    return res.status(200).json({message: "Todo updated successfully"});
});

app.delete("/todo/:id", (req, res) => {

});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

