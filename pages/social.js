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
//import { PrismaClient } from '@prisma/client';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import Section from '../components/section'


const Social = ({ _socialItem, _instagramItem }) => {

    /* STATIC */
    var socialItem =
        [
            { name: "Spotify", url: "https://open.spotify.com/artist/7uXCDw5tJqpxQmqTK4pB1S?si=5I8E58TCTW24ci0F1LbHDw", img: "https://i.imgur.com/0TlOpTk.png" },
            { name: "Youtube", url: "https://www.youtube.com/channel/UC9IvWSGBmu7xG1KpnHgaY3g", img: "https://i.imgur.com/jQEL3cu.png" },
            { name: "Instagram", url: "https://www.instagram.com/phere_/", img: "https://i.imgur.com/bCoBx63.png" },
            { name: "SoundCloud", url: "https://soundcloud.com/phere_ar", img: "https://i.imgur.com/n79HQ3e.png" }
        ]


    var instagramItem =
        [
            { url: "https://open.spotify.com/album/4VlWutsOaLf6SRvbUtZiy1?si=SAWjcgizSni666hUXm9TRQ&utm_source=copy-link", img: "https://i.imgur.com/w2flR8E.png" },
            { url: "https://open.spotify.com/track/2uRduSbWskSvUNnCgqBM0C?si=77a902b3c1f94844", img: " https://i.imgur.com/mAKQulr.png" },
            { url: "https://open.spotify.com/track/7AXE4epsgD37BJI3LCrxFV?si=85374f339e374825&nd=1", img: "https://i.imgur.com/93DQGCt_d.webp?maxwidth=760&fidelity=grand" },
            { url: "https://www.youtube.com/channel/UC9IvWSGBmu7xG1KpnHgaY3g", img: "https://i.imgur.com/RHYtjhV.jpg" }
        ]

    /*
    if (socialItem == null) {
        socialItem = _socialItem;
    }
    if (instagramItem == null) {
        instagramItem = _instagramItem;
    }
    */
    /*=================================================*/

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
                            scale={{ transition: 'all .15s' }}
                            _hover={{ bg: "#37474F", transform: 'scale(1.01)', transition: 'all .15s' }}
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
                                _hover={{ bg: "#37474F", transform: 'scale(1.2)', transition: 'all .15s' }}
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


/*
export async function getServerSideProps() {
    try {
        const prisma = new PrismaClient();
        const [socialItem, instagramItem] = await Promise.all([
            prisma.socialItem.findMany(),
            prisma.instagramItem.findMany()
        ]);
        return { props: { socialItem, instagramItem } };
    } catch (error) {

        var test = null;

        return { props: { test, test } };
    }
}*/
