import { prisma } from ".";

async function createTodo(title: string, description: string, userId: number) {
  await prisma.todo.create({
    data: {
      title,
      description,
      userId,
    },
  });
}

createTodo("task 3", "task 3 des", 1).then(async () => {
  console.log("task created");
  await prisma.$disconnect();
});
