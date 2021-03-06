import React, { useState } from 'react';
import NextLink from 'next/link';
import {
	chakra,
	Box,
	Button,
	Flex,
	FormControl,
	Icon,
	Link,
	SimpleGrid,
	Text,
	Stack,
	Switch,
	useColorModeValue,
} from '@chakra-ui/react';
import { BiCheckCircle } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';

export default function Component() {
	const [isAnnualBilling, setIsAnnualBilling] = useState(false);
	const bottomBg = useColorModeValue('white', 'gray.800');

	const Feature = (props) => {
		return (
			<Flex align='center'>
				<Flex shrink={0}>
					<Icon
						as={props.icon}
						color={props.color}
						fill='currentColor'
						fontSize={24}
					/>
				</Flex>
				<Box ml={2}>
					<chakra.span
						color={useColorModeValue('gray.500', 'gray.400')}
					>
						{props.children}
					</chakra.span>
				</Box>
			</Flex>
		);
	};

	return (
		<Flex
			id='pricing'
			w='full'
			maxW='container.xl'
			h='auto'
			py={32}
			flexDirection='column'
			alignItems='center'
			justifyContent='center'
		>
			<chakra.div maxW='container.xl' mb={4} textAlign='center'>
				<Text
					mb={2}
					fontSize={{ base: '2xl', md: '3xl' }}
					fontWeight='bold'
					lineHeight='tight'
					bgGradient='linear(to-r, brand.300, brand.600)'
					bgClip='text'
				>
					Simple, Transparent pricing
				</Text>
			</chakra.div>
			<Flex
				w='full'
				mx='auto'
				mb={8}
				rounded='md'
				shadow='xl'
				textAlign='left'
				direction={{ base: 'column', lg: 'row' }}
				borderRadius='lg'
				overflow='hidden'
			>
				<Stack spacing={8} p='45px' flex='0.7' bg={bottomBg}>
					<Text fontSize='3xl' fontWeight='bold' lineHeight='tight'>
						Pro Membership
					</Text>
					<chakra.p
						fontSize={['sm', 'md']}
						color={useColorModeValue('gray.600', 'gray.400')}
					>
						One plan for any organization—from solo makers to
						startups.
					</chakra.p>
					<Flex align='center'>
						<Text
							fontFamily='body'
							whiteSpace='nowrap'
							fontWeight='semibold'
							textTransform='uppercase'
							color='brand.400'
						>
							What&apos;s included
						</Text>
						<Flex ml='15px' w='full' borderTopWidth='1px' h='3px' />
					</Flex>
					<SimpleGrid
						columns={[1, 2, 1, 2]}
						spacingX={4}
						spacingY={4}
					>
						<Feature
							color={useColorModeValue('brand.500', 'brand.300')}
							icon={BiCheckCircle}
						>
							Unlimited Changelogs
						</Feature>
						<Feature
							color={useColorModeValue('brand.500', 'brand.300')}
							icon={BiCheckCircle}
						>
							Unlimited Banners
						</Feature>
						<Feature
							color={useColorModeValue('brand.500', 'brand.300')}
							icon={BiCheckCircle}
						>
							500 Subscribed Users
						</Feature>
						<Feature
							color={useColorModeValue('brand.500', 'brand.300')}
							icon={BiCheckCircle}
						>
							Scheduled Publishing
						</Feature>
						<Feature
							color={useColorModeValue('brand.500', 'brand.300')}
							icon={BiCheckCircle}
						>
							Custom Domain
						</Feature>
						<Feature
							color={useColorModeValue('brand.500', 'brand.300')}
							icon={BiCheckCircle}
						>
							Custom Branding
						</Feature>
						<Feature
							color={useColorModeValue('brand.500', 'brand.300')}
							icon={BiCheckCircle}
						>
							No Herald branding
						</Feature>
						<Feature
							color={useColorModeValue('brand.500', 'brand.300')}
							icon={BiCheckCircle}
						>
							Priority Support
						</Feature>
						<Feature
							color={useColorModeValue('brand.500', 'brand.300')}
							icon={BiCheckCircle}
						>
							and many more...
						</Feature>
					</SimpleGrid>
				</Stack>
				<Stack
					p='45px'
					flex='0.3'
					justify='center'
					align='center'
					bg={useColorModeValue('#F9FAFB', 'gray.900')}
					borderRightRadius='md'
				>
					<FormControl
						display='none'
						alignItems='center'
						justifyContent='center'
						mb={4}
					>
						<chakra.span fontSize='sm' mb='0' mr={0}>
							Save 20% with yearly billing
						</chakra.span>
						<Switch
							aria-label='Save 20% with yearly billing'
							colorScheme='brand'
							id='yearly-pricing'
							mx={2}
							onChange={(e) =>
								setIsAnnualBilling(e.target.checked)
							}
						/>
					</FormControl>
					<Flex
						flexDirection='column'
						align='center'
						justifyContent='center'
						fontSize='5xl'
						fontWeight={['bold', 'extrabold']}
						lineHeight='tight'
					>
						<Text
							mb={2}
							fontSize='2xl'
							fontWeight='medium'
							lineHeight='tight'
						>
							Free during Early Access
						</Text>
						{isAnnualBilling ? (
							<s>
								<Text
									mb={2}
									fontSize='5xl'
									fontWeight={['bold', 'extrabold']}
									lineHeight='tight'
								>
									$200
									<chakra.span
										fontSize='2xl'
										fontWeight='medium'
										color={useColorModeValue(
											'gray.600',
											'gray.400'
										)}
									>
										{' '}
										/ year
									</chakra.span>
								</Text>
							</s>
						) : (
							<s>
								<Text
									mb={2}
									fontSize='5xl'
									fontWeight={['bold', 'extrabold']}
									lineHeight='tight'
								>
									$20
									<chakra.span
										fontSize='2xl'
										fontWeight='medium'
										color={useColorModeValue(
											'gray.600',
											'gray.400'
										)}
									>
										{' '}
										/ month
									</chakra.span>
								</Text>
							</s>
						)}
					</Flex>
					<Stack spacing={6} textAlign='center'>
						<Text
							d='none'
							textDecor='underline'
							color={useColorModeValue('gray.600', 'gray.400')}
						>
							Learn more about our membership
						</Text>
						<Button
							w='300px'
							colorScheme='brand'
							py={6}
							onClick={() => {
								window.scrollTo(0, 0);
								alert(
									"Thank you for your interest! We're not ready for users yet. Please sign up for updates and we'll notify you when we launch"
								);
							}}
						>
							Get Started for Free
						</Button>
					</Stack>
				</Stack>
			</Flex>
			<Flex
				w='full'
				mx='auto'
				mb={8}
				textAlign='left'
				direction={{ base: 'column', lg: 'row' }}
				borderRadius='lg'
				overflow='hidden'
			>
				<Stack spacing={8} p='45px' flex='0.7'>
					<Text fontSize='3xl' fontWeight='bold' lineHeight='tight'>
						Self Hosted
					</Text>
					<chakra.p
						fontSize={['sm', 'md']}
						color={useColorModeValue('gray.600', 'gray.400')}
					>
						Herald is an open-source software and with a bit of work
						you can self-host it anywhere you like.
					</chakra.p>
					<Flex align='center'>
						<Text
							fontFamily='body'
							whiteSpace='nowrap'
							fontWeight='semibold'
							textTransform='uppercase'
							color='brand.400'
						>
							What&apos;s included
						</Text>
						<Flex ml='15px' w='full' borderTopWidth='1px' h='3px' />
					</Flex>
					<SimpleGrid
						columns={[1, 2, 1, 2]}
						spacingX={4}
						spacingY={4}
					>
						<Feature
							color={useColorModeValue('brand.500', 'brand.300')}
							icon={BiCheckCircle}
						>
							Host on your servers
						</Feature>
						<Feature
							color={useColorModeValue('brand.500', 'brand.300')}
							icon={BiCheckCircle}
						>
							Community Support
						</Feature>
					</SimpleGrid>
				</Stack>
				<Stack
					p='45px'
					flex='0.3'
					justify='center'
					align='center'
					bg={useColorModeValue('#F9FAFB', 'gray.900')}
					borderRightRadius='md'
				>
					<Stack spacing={6} textAlign='center'>
						<Link
							d='flex'
							alignItems='center'
							justifyContent='center'
							href='https://github.com/opencatalysts/herald_app'
							isExternal={true}
						>
							<Icon as={FaGithub} mr={2} />
							<Text>Source Code</Text>
						</Link>
						<NextLink href='/docs'>
							<Button colorScheme='brand' py={6} w='300px'>
								Documentation
							</Button>
						</NextLink>
					</Stack>
				</Stack>
			</Flex>
		</Flex>
	);
}
