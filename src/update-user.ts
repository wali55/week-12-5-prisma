import { prisma } from ".";

async function updateUser(id: number) {
  await prisma.user.update({
    data: {
      password: "999999",
    },
    where: {
      id,
    },
  });
}

updateUser(2).then(async () => {
  console.log("user updated");
  prisma.$disconnect();
});
