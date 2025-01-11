import { prisma } from ".";

async function deleteTodo(id: number) {
    await prisma.todo.delete({
        where: {
            id
        }
    })
}

deleteTodo(2).then(async() => {
    console.log('todo deleted');
    await prisma.$disconnect();
})