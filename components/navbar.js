import Logo from './logo'
import NextLink from 'next/link'
import {
    MenuDivider,
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
//import ThemeToogleButton from './theme-toogle-button'


const LinkItem = ({ href, path, children }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return (
        <NextLink href={href}>
            <Link
                p={2}
                bg={active ? 'grassTeal' : undefined}
                color={active ? '#FAFAFA' : inactiveColor}
                rounded="lg"
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            style={{ backdropFilter: 'blur(1px)' }}
            zIndex={1}
            {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
                justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>

                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                    <LinkItem href="/" path={path}>
                        Home
                    </LinkItem>
                    {/*
                     <LinkItem href="/contact" path={path}>
                        Contact
                    </LinkItem>
                    <LinkItem href="/about-us" path={path}>
                        About us
                    </LinkItem>
                    <LinkItem href="/music" path={path}>
                        Music
                    </LinkItem>
                    */}
                    <LinkItem href="/social" path={path}>
                        Social Media
                    </LinkItem>
                </Stack>

                <Box flex={1} align="right">
                    {/*<ThemeToogleButton />*/}

                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }} style={{ backdropFilter: 'blur(10px)' }}>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options"
                            />
                            <MenuList bg='#4B515D' alignContent maxH="-webkit-fit-content">
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link} >Home</MenuItem>
                                </NextLink>
                                <MenuDivider/>
                                {/*
                                <NextLink href="/contact" passHref>
                                <MenuItem as={Link}>Contact</MenuItem>
                                </NextLink>
                                <NextLink href="/about-us" passHref>
                                    <MenuItem as={Link}>About Us</MenuItem>
                                </NextLink>
                                <NextLink href="/music" passHref>
                                    <MenuItem as={Link}>Music</MenuItem>
                                </NextLink>
                                */}
                                <NextLink href="/social" passHref>
                                    <MenuItem as={Link}>Social Media</MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>

            </Container >
        </Box >
    )
}

export default Navbar