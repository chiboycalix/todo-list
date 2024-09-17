import { db } from "database";
import type { Response, Request } from "express";
import * as schema from "schema";
import { eq } from "drizzle-orm";
import { createTodoSchema } from "validations/todo";
import { generalHelpers } from "helpers";
import { AppError, catchAsync } from "services/errorService";

export class TodoController {
  fetchTodos = catchAsync(async (req: Request, res: Response) => {
    const result = await db.select().from(schema.todos);
    return res.send(result);
  });

  fetchTodo = catchAsync(async (req: Request, res: Response) => {
    const id = req.params["id"];
    const result = await db
      .select()
      .from(schema.todos)
      .where(eq(schema.todos.id, Number(id)));
    if (generalHelpers.recordDoesNotExist(result)) {
      return res.send({ error: `Todo with id ${id} does not exist` });
    }
    return res.send(result);
  });

  createTodo = catchAsync(async (req: Request, res: Response) => {
    try {
      const { value, error } = createTodoSchema.validate(req.body);
      if (error) {
        return res.send({ error: error.details[0]?.message });
      }
      const result = await db.insert(schema.todos).values(value).returning();
      return res.send({ message: "Todo created successfully", result });
    } catch (error) {
      return res.send(error);
    }
  });

  updateTodo = catchAsync(async (req: Request, res: Response) => {
    const id = req.params["id"];
    const data = req.body;
    const result = await db
      .update(schema.todos)
      .set(data)
      .where(eq(schema.todos.id, Number(id)))
      .returning();

    if (generalHelpers.recordDoesNotExist(result)) {
      throw new AppError(`Todo with id ${id} not found`, 404);
    }
    return res.send({ message: "Todo updated successfully", result });
  });

  deleteTodo = catchAsync(async (req: Request, res: Response) => {
    const id = req.params["id"];
    const result = await db
      .delete(schema.todos)
      .where(eq(schema.todos.id, Number(id)))
      .returning();
    if (generalHelpers.recordDoesNotExist(result)) {
      throw new AppError(`Todo with id ${id} not found`, 404);
    }

    if (generalHelpers.recordDoesNotExist(result)) {
      return res.send({ error: `Todo with id ${id} does not exist` });
    }
    return res.send({ message: "Todo deleted successfully", result });
  });

  markTodoAsCompleted = catchAsync(async (req: Request, res: Response) => {
    const id = req.params["id"];
    const result = await db
      .update(schema.todos)
      .set({ isCompleted: true })
      .where(eq(schema.todos.id, Number(id)))
      .returning();
    if (generalHelpers.recordDoesNotExist(result)) {
      throw new AppError(`Todo with id ${id} not found`, 404);
    }
    return res.send({ message: "Todo marked as completed", result });
  });
}
