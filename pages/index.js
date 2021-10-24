import { Container, Box, Heading, Image } from '@chakra-ui/react'

const Page = () => {
    return (

        <Container>

            <Box display={{ md: 'flex' }} p={5}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        phere
                    </Heading>
                    <p>Producers and Live Performers based in Argentina</p>
            
                </Box>

                <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
                    <Image borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        maxWidth="150px"
                        maxHeight="150px"
                        boxSize="150px"
                        objectFit="cover"
                        display="inline-block"
                        borderRadius="full"
                        src="/images/profile.jpg"
                        alt="Profile Pic" />
                </Box>


            </Box>
        </Container>
    )
}

export default Page

//<video id="background-video" loop autoPlay>
//                <source src="/images/test.mp4" type="video/mp4" />
//                <source src="/images/test.mp4" type="video/ogg" />
//                Your browser does not support the video tag.
//</video>