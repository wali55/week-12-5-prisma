import { prisma } from ".";

async function updateTodo(id: number) {
    await prisma.todo.update({
        data: {
            done: true
        },
        where: {
            id
        }
    })
}

updateTodo(1).then(async() => {
    console.log('todo updated');
    await prisma.$disconnect();
})