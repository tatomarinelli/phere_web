import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getServerSideProps = async () => {
    const prisma = new PrismaClient();
    const socialItem = await prisma.socialItem.findMany();
    return { props: { socialItem } };
  };