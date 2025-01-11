import { prisma } from ".";

async function getTodos(userId: number) {
    const todos = await prisma.todo.findMany({
        where: {
            userId
        }
    })
    console.log(todos);
}

getTodos(1).then(async() => {
    console.log('got todos of a user');
    await prisma.$disconnect();
})