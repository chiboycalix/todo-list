import Joi from "joi";

export const createTodoSchema = Joi.object({
  name: Joi.string().min(3).required(),
  description: Joi.string().min(3),
  isCompleted: Joi.boolean().required(),
});
