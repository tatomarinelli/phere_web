import {
    Container,
    Heading,
    HStack,
    VStack,
    Text,
    Spacer,
    Link,
    StackDivider,
    Image
} from '@chakra-ui/react'
import { PrismaClient } from '@prisma/client';


//import Section from '../components/section'

const Social = ({ socialItem }) => {

    /*
    const spotify = {
        name: "Spotify",
        url: "https://open.spotify.com/artist/7uXCDw5tJqpxQmqTK4pB1S?si=5I8E58TCTW24ci0F1LbHDw",
        img: "https://1000logos.net/wp-content/uploads/2017/08/Spotify-Logo.png"
    }
    const yt = {
        name: "Youtube",
        link: "https://www.youtube.com/channel/UC9IvWSGBmu7xG1KpnHgaY3g",
        img: "https://www.interstellarrift.com/wiki/images/d/d8/Youtube-logo-png-photo-0.png"
    }
    */
    //const links = [spotify, yt];

    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4} >
                Social - Links
            </Heading>


            {/*Links*/}
            <VStack
                divider={<StackDivider />}
                bg="whiteAlpha.200"
                borderColor='gray.100'
                borderWidth='2px'
                p='4'
                borderRadius='lg'
                w='100%'
                maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
                alignItems='stretch'
            >
                {socialItem.map((item) => (
                    <Link isExternal href={item.url} key={item.id} color="White">
                        <HStack>
                            <Image boxSize="50px" objectFit="cover" src={item.img} />

                            <Text>{item.name}</Text>
                            <Spacer />

                        </HStack>
                    </Link>
                ))}
            </VStack>

        </Container>
    )
}

export default Social


export const getServerSideProps = async () => {
    const prisma = new PrismaClient();
    const socialItem = await prisma.socialItem.findMany();
    return { props: { socialItem } };
};
