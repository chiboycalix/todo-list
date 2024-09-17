import express from "express";
import { TodoController } from "contollers/TodoController";

const router = express.Router();
const todoController = new TodoController();

router.get("/todos", todoController.fetchTodos);
router.post("/todos", todoController.createTodo);
router.get("/todos/:id", todoController.fetchTodo);
router.put("/todos/:id", todoController.updateTodo);
router.delete("/todos/:id", todoController.deleteTodo);
router.put("/todos/markCompleted/:id", todoController.markTodoAsCompleted);
export default router;
