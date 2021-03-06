import React, { useState } from 'react';
import NextImage from 'next/image';
import {
	chakra,
	Alert,
	AlertDescription,
	Button,
	CloseButton,
	Flex,
	HStack,
	Link,
	useColorModeValue,
} from '@chakra-ui/react';
// import { Banner } from "@useherald/react-widget";
// import { Formik } from 'formik';

const Hero = () => {
	// const [loading, setLoading] = useState(false);
	const [waitlistCount, setWaitlistCount] = useState(0);

	// async function updateWaitlist(email) {
	// 	const response = await fetch('/api/waitlist', {
	// 		method: 'POST',
	// 		headers: {
	// 			Accept: 'application/json',
	// 			'Content-Type': 'application/json',
	// 		},
	// 		body: JSON.stringify({ email }),
	// 	});
	// 	const { data } = await response.json();
	// 	setWaitlistCount(data.number);
	// }

	return (
		<Flex
			flexDirection='column'
			alignItems='center'
			maxW='container.xl'
			px={4}
			py={32}
		>
			<Flex
				w='6xl'
				flexDirection='column'
				alignItems='center'
				textAlign='center'
				mb={16}
			>
				{/*<Banner*/}
				{/*	baseUrl='http://localhost:3001'*/}
				{/*	id='027a2e04-07ed-4920-b074-a55ab214c89f'*/}
				{/*	userId='71900427-a160-4ed2-b13c-0af51c646878'*/}
				{/*/>*/}
				<chakra.h1
					mb={3}
					fontSize={{ base: '4xl', md: '5xl' }}
					fontWeight='bold'
					lineHeight='tall'
					color={useColorModeValue('gray.900', 'white')}
				>
					Increase user engagement and reduce churn
				</chakra.h1>
				<chakra.p
					mb={5}
					fontSize={{ base: 'lg', md: 'xl' }}
					lineHeight='tall'
				>
					Keep your customers in the loop. Create a changelog,
					roadmap, banners and waitlist forms in minutes.
				</chakra.p>
				<HStack spacing={4}>
					<Link
						isExternal={true}
						aria-label='Sign In to Herald'
						href='https://app.useherald.com/dashboard'
						textDecoration='none'
						_hover={{ textDecoration: 'none' }}
					>
						<Button
							colorScheme='brand'
							p={8}
							name='join_waitlist'
							id='join_waitlist'
							size='lg'
						>
							Get Started for Free
						</Button>
					</Link>
					<Link
						isExternal={true}
						aria-label='See Herald in action'
						href='https://meta.useherald.com/changelog'
						textDecoration='none'
						_hover={{ textDecoration: 'none' }}
					>
						<Button p={8} size='lg'>
							See an example
						</Button>
					</Link>
				</HStack>
				{/*<Formik*/}
				{/*	initialValues={{ email: '' }}*/}
				{/*	onSubmit={async (values) => {*/}
				{/*		setLoading(true);*/}
				{/*		await updateWaitlist(values.email);*/}
				{/*		setLoading(false);*/}
				{/*	}}*/}
				{/*>*/}
				{/*	{(formik) => (*/}
				{/*		<chakra.form*/}
				{/*			w='md'*/}
				{/*			d='flex'*/}
				{/*			justifyContent='center'*/}
				{/*			onSubmit={formik.handleSubmit}*/}
				{/*		>*/}
				{/*			<FormControl w='70%' textAlign='left'>*/}
				{/*				<Input*/}
				{/*					h={12}*/}
				{/*					variant={'solid'}*/}
				{/*					color={useColorModeValue(*/}
				{/*						'black.100',*/}
				{/*						'white.100'*/}
				{/*					)}*/}
				{/*					_placeholder={{*/}
				{/*						color: 'gray.400',*/}
				{/*					}}*/}
				{/*					border={0}*/}
				{/*					bg={useColorModeValue(*/}
				{/*						'blackAlpha.100',*/}
				{/*						'whiteAlpha.100'*/}
				{/*					)}*/}
				{/*					onChange={formik.handleChange}*/}
				{/*					onBlur={formik.handleBlur}*/}
				{/*					value={formik.values.email}*/}
				{/*					name='email'*/}
				{/*					type='email'*/}
				{/*					required*/}
				{/*					placeholder={'Your Email'}*/}
				{/*					aria-label={'Your Email'}*/}
				{/*				/>*/}
				{/*			</FormControl>*/}
				{/*			<FormControl w='30%' ml={4}>*/}
				{/*				<Button*/}
				{/*					colorScheme='brand'*/}
				{/*					h={12}*/}
				{/*					w='100%'*/}
				{/*					type='submit'*/}
				{/*					name='join_waitlist'*/}
				{/*					id='join_waitlist'*/}
				{/*					isLoading={loading}*/}
				{/*				>*/}
				{/*					Join Waitlist*/}
				{/*				</Button>*/}
				{/*			</FormControl>*/}
				{/*		</chakra.form>*/}
				{/*	)}*/}
				{/*</Formik>*/}

				{/*<chakra.span*/}
				{/*	d='flex'*/}
				{/*	justifyContent='center'*/}
				{/*	fontSize='md'*/}
				{/*	mt={2}*/}
				{/*	textAlign='center'*/}
				{/*>*/}
				{/*	Get notified when we launch.*/}
				{/*</chakra.span>*/}
				{waitlistCount ? (
					<Alert
						d='flex'
						justifyContent='center'
						maxW='container.sm'
						borderRadius='lg'
						mt={4}
						position='relative'
						status='success'
					>
						<AlertDescription
							mr={4}
						>{`Thank you for joining the waitlist! You're currently at #${waitlistCount}`}</AlertDescription>
						<CloseButton
							onClick={() => setWaitlistCount(0)}
							position='absolute'
							right='1rem'
						/>
					</Alert>
				) : null}
			</Flex>
			<Flex mt={8}>
				<NextImage
					src='/herald-hero-image.png'
					width='1024'
					height='600'
					alt='Herald Product Image'
				/>
			</Flex>
		</Flex>
	);
};

export default Hero;
