import { prisma } from ".";

async function getUserWithTodos(id: number) {
    const result = await prisma.user.findUnique({
        where: {
            id
        },
        include: {
            todos: true
        }
    })
    console.log(result);
}

getUserWithTodos(1).then(async() => {
    console.log('user with todos');
    await prisma.$disconnect();
})