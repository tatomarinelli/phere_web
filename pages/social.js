import {
    Divider,
    Container,
    Heading,
    HStack,
    VStack,
    Text,
    Spacer,
    Link,
    StackDivider,
    Image,
    SimpleGrid,
    GridItem,
    Box
} from '@chakra-ui/react'
import { PrismaClient } from '@prisma/client';

import Section from '../components/section'

const Social = ({ socialItem, instagramItem }) => {
    return (
        <Container maxW="container.xl">
            <Section delay={0.1}>
                <Heading as="h3" fontSize={20} mb={4} >
                    Social - Links
                </Heading>
            </Section>


            <Section delay={0.2}>
                <VStack
                    divider={<StackDivider />}
                    bg="whiteAlpha.200"
                    borderColor='gray.500'
                    borderWidth='2px'
                    borderRadius='lg'
                    w='100%'
                    alignItems='stretch'
                    paddingBlockStart={2}
                    paddingBlockEnd={2}
                >
                    {socialItem.map((item) => (
                        <Link isExternal href={item.url} key={item.id} color="White">
                            <HStack paddingLeft={4} >
                                <Image boxSize={8} src={item.img} alignContent="center" />
                                <Text> {item.name}</Text>
                                <Spacer />
                            </HStack>
                        </Link>
                    ))}
                </VStack>
            </Section>

            <Section delay={0.3}>
                <Divider my={6} />
                <Box textAlign="end">
                    <Heading as="h3" fontSize={20} mb={4}>
                        Instagram Posts
                    </Heading>
                </Box>
                <Divider my={6} />
            </Section>

            <Section delay={0.35}>
            <SimpleGrid columns={3} spacing={5} width="full">
                {instagramItem.map((item) => (
                    <Link isExternal href={item.url} key={item.id} color="White">
                        <GridItem maxW="xl" borderWidth="2px" borderColor="whiteAlpha.300" borderRadius="lg" overflow="hidden">
                            <Image src={item.img} alt="instagram post" />
                        </GridItem>
                    </Link>
                ))}
            </SimpleGrid>
            </Section>
        </Container>

    )
}

export default Social


export async function getServerSideProps() {
    const prisma = new PrismaClient();
    const [socialItem, instagramItem] = await Promise.all([
        prisma.socialItem.findMany(),
        prisma.instagramItem.findMany()
    ]);
    return { props: { socialItem, instagramItem } };
  }