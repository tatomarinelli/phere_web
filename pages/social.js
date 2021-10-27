import {
    Divider,
    Container,
    Heading,
    Spacer,
    Link,
    Image,
    SimpleGrid,
    GridItem,
    Box
} from '@chakra-ui/react'
import { PrismaClient } from '@prisma/client';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import Section from '../components/section'


const Social = ({ socialItem, instagramItem }) => {
    return (
        <Container maxW="container.xl">
            
            <Section delay={0.1}>
                <Heading as="h3" fontSize={20} mb={4} paddingTop={5}>
                    Social - Links
                </Heading>
            </Section>

            <Section delay={0.2}>
                {socialItem.map((item) => (
                    <Link isExternal href={item.url} key={item.id} color="White">
                        <Box display="flex"
                            boxShadow="dark-lg"
                            alignItems="center"
                            bg="#263238"
                            borderRadius='lg'
                            borderWidth='2px' p='2' marginBottom='2' maxH='-moz-fit-content'
                            scale={{transition: 'all .15s'}}
                            _hover={{ bg: "#37474F", transform: 'scale(1.01)', transition: 'all .15s'}}
                        >
                            <Image boxSize={7} src={item.img} />
                            <Box lineHeight="tight" ml='2'> {item.name} </Box>
                            <ExternalLinkIcon mx="12px" />
                        </Box>
                        <Spacer />
                    </Link>
                ))}
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
                    <SimpleGrid columns={3} spacing={1} width="full">
                        {instagramItem.map((item) => (
                            <Link isExternal href={item.url} key={item.id} color="White">
                                <GridItem 
                                    _hover={{ bg: "#37474F", transform: 'scale(1.2)', transition: 'all .15s'}}
                                    boxShadow="lg"
                                    maxW="xl" borderWidth="2px" borderColor="whiteAlpha.300" borderRadius="lg" overflow="hidden">
                                    <Image src={item.img} alt="instagram post" />
                                </GridItem>
                            </Link>
                        ))}
                    </SimpleGrid>
            </Section>
        </Container >

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