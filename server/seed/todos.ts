import { db } from "database";
import * as schema from "schema/index.ts";

async function seed() {
  await db.insert(schema.todos).values([
    {
      name: "Grocery shopping",
      isCompleted: false,
      description: "Buy vegetables, fruits, and milk from the supermarket",
    },
    {
      name: "Pay utility bills",
      isCompleted: false,
      description: "Pay electricity, water, and internet bills online",
    },
    {
      name: "Schedule dentist appointment",
      isCompleted: false,
      description: "Call Dr. Smith's office to book a checkup",
    },
    {
      name: "Clean garage",
      isCompleted: false,
      description: "Organize tools, dispose of old items, and sweep the floor",
    },
    {
      name: "Prepare presentation",
      isCompleted: false,
      description:
        "Create slides for the upcoming team meeting on project progress",
    },
  ]);
}

async function main() {
  try {
    await seed();
    console.log("Seeding completed");
  } catch (error) {
    console.error("Error during seeding:", error);
    process.exit(1);
  }
}

main();
