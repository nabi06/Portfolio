
import React from 'react';

import { Heading, Flex, Text, Button,  Avatar, RevealFx, ToggleButton } from '@/once-ui/components';
import { Projects } from '@/components/work/Projects';

import { baseURL, routes, renderContent } from '@/app/resources'; 
import { Mailchimp } from '@/components';
import { Posts } from '@/components/blog/Posts';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import AnimatedGridPattern from '@/components/ui/animated-grid-pattern';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';


import Link from 'next/link';

export async function generateMetadata(
	{params: {locale}}: { params: { locale: string }}
) {
	const t = await getTranslations();
    const { home } = renderContent(t);
	const title = home.title;
	const description = home.description;
	const ogImage = `https://${baseURL}/opengraph-image.jpg`
	

	return {
		title,
		description,
		openGraph: {
			type: 'website',
			url: `https://${baseURL}`,
			title,
			description,
			images: [
				{
					url: ogImage,
					width: 1200,
					height: 630,
					alt: title,
				},
			],
		},
		// twitter: {
		// 	card: 'summary_large_image',
		// 	title,
		// 	description,
		// 	images: [ogImage],
		// },
	};
}

export default function Home(
	{ params: {locale}}: { params: { locale: string }}
) {
	unstable_setRequestLocale(locale);
	const t = useTranslations();
	const { home, about, person, newsletter } = renderContent(t);
	
	
	return (
		<Flex
			maxWidth="m" fillWidth gap="xl"
			direction="column" alignItems="center"
			
			>
				
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'WebPage',
						name: home.title,
						description: home.description,
						url: `https://${baseURL}`,
						image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
						publisher: {
							'@type': 'Person',
							name: person.name,
							image: {
								'@type': 'ImageObject',
								url: `${baseURL}${person.avatar}`,
							},
						},
					}),
				}}
			/>
			<Flex
				fillWidth
				direction="column"
				paddingY="l" gap="m"
				className='items-center'
				>
					
						{/* <RevealFx translateY="4">
							<Heading
								wrap="balance"
								variant="display-strong-l"

								>
								{home.headline}
							</Heading>
						</RevealFx> */}
						
						<RevealFx translateY="8" delay={0.2} className='text-7xl'>
							<Heading
								wrap="balance"
								onBackground="neutral-weak"
								className='text-4xl font-sans font-thin lg:pl-36 text-center lg:text-start '>
								{home.subline}
							</Heading>
						</RevealFx>
						<RevealFx translateY="12" delay={0.4} className='items-center  !flex  !flex-col lg:!flex-row gap-8'>
							<Button
								data-border="rounded"
								href={`/${locale}/about`}
								variant="tertiary"
								suffixIcon="chevronRight"
								size="m"
								className='items-center  '>
								<Flex
									gap="8"
									alignItems="center"
									>
									{about.avatar.display && (
										<Avatar
											style={{marginLeft: '-0.75rem', marginRight: '0.25rem'}}
											src={person.avatar}
											size="m"
											/>
										)}
										{t("about.title")}
								</Flex>
							</Button>
							<Button
								data-border="rounded"
								href={`/${locale}/resume`}
								variant="tertiary"
								suffixIcon="chevronRight"
								size="m"
								className='items-center  '>
								<Flex
									gap="8"
									alignItems="center"
									>
								Resume
								
								</Flex>
							</Button>
										
										
						</RevealFx>

				
			</Flex>
			{/* <RevealFx translateY="16" delay={0.6}>
				
				<Projects range={[1,1]} locale={locale}/>
			</RevealFx> */}
			
			
			
			
		</Flex>
	);
}
