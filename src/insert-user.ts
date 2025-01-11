import { prisma } from ".";

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
    await prisma.user.create({
        data: {
            username,
            password,
            firstName,
            lastName
        }
    })
}

insertUser("hasibullah", "456789", "Mohammad", "Hasibullah")
    .then(async() => {
        console.log('user created');
        await prisma.$disconnect();
    })