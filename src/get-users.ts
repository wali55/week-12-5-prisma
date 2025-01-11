import { prisma } from ".";

async function getUsers() {
    const users = await prisma.user.findMany({});
    console.log(users);
}

getUsers().then(async() => {
    console.log('users found');
    await prisma.$disconnect();
});


