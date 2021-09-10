import { Fragment } from 'react';
import Head from 'next/head';
import { chakra, Box, Divider, Heading, Text, VStack } from '@chakra-ui/react';
import { supabase } from '../packages/app/lib/supabaseClient';
import config from 'herald-app/herald.config';
import TimelineLayout from '../packages/app/components/layouts/Timeline';
import { format, formatDistance } from 'date-fns';

function Home(props) {
	const { changelogs } = props;

	return (
		<>
			<Head>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href={config.logoIcon}
				/>
			</Head>
			<TimelineLayout>
				<VStack py={16} w='full' spacing={8}>
					{changelogs.map((changelog) => {
						return (
							<Fragment key={changelog.id}>
								<Box w='full' mb={4}>
									<Heading as='h2' mb={4}>
										{changelog.title}
									</Heading>
									<chakra.div
										d='flex'
										alignItems='center'
										justifyContent='start'
										mb={8}
										w='full'
									>
										<Text
											fontSize='md'
											title={format(
												new Date(changelog.updated_at),
												'PPPpp'
											)}
										>
											{formatDistance(
												new Date(changelog.updated_at),
												new Date(),
												{ addSuffix: true }
											)}
										</Text>
									</chakra.div>
									<chakra.div
										className='herald'
										fontSize='lg'
										lineHeight='tall'
										dangerouslySetInnerHTML={{
											__html: changelog.content,
										}}
									/>
								</Box>
								<Divider mb={4} />
							</Fragment>
						);
					})}
				</VStack>
			</TimelineLayout>
		</>
	);
}

export default Home;

export async function getServerSideProps() {
	const { data: changelogs, error } = await supabase
		.from('changelogs')
		.select()
		.match({ author: config.author })
		.order('updated_at', { ascending: false });

	if (changelogs && changelogs.length > 0) {
		return {
			props: {
				changelogs,
			},
		};
	} else {
		return {
			props: {
				changelogs: [],
				error,
			},
		};
	}
}