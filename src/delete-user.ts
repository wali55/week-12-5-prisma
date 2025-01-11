import { prisma } from ".";

async function deleteUser(id: number) {
    await prisma.user.delete({
        where: {
            id
        }
    })
}

deleteUser(2).then(async() => {
    console.log('user deleted');
    await prisma.$disconnect();
})