import React from 'react';
import {
	chakra,
	Box,
	Flex,
	useColorModeValue,
	Image,
	Spacer,
	Text,
	VStack,
	IconButton,
	Tooltip,
	Skeleton
} from '@chakra-ui/react';
import {BsBoxArrowUpRight} from 'react-icons/bs';

const NFT = ({src}) => {
	const size = '10rem';
	return (
		<Flex minW="max" p={2} align="center" justify="center">
			<Image
				boxSize={{base: size}}
				borderRadius={{base: 'xl'}}
				objectFit="cover"
				src={src}
				fallback={<Skeleton h={size} w={size} borderRadius="xl" />}
				alt="NFT"
			/>
		</Flex>
	);
};

const Details = ({name, marketplace, amount, type, time, url}) => {
	return (
		<VStack w="full">
			<Flex w="full" flexDirection={{base: 'column', md: 'row'}}>
				<Box p="2">
					<Text
						fontSize={{base: '2xl', lg: '3xl'}}
						color={useColorModeValue('gray.800', 'white')}
						fontWeight="bold"
						maxWidth={{base: '48', lg: 'sm'}}
						isTruncated
					>
						{name}
					</Text>
					<Box mt={1}>
						<chakra.span
							color={useColorModeValue('gray.600', 'gray.400')}
							display={{base: 'none', lg: 'inline'}}
						>
							Marketplace:{' '}
						</chakra.span>
						<Text
							display={{base: 'inline-block', lg: 'inline'}}
							color={useColorModeValue('gray.800', 'white')}
							maxWidth={{base: '48', lg: 'xs'}}
							isTruncated
						>
							{marketplace}
						</Text>
					</Box>
					<Box mt={1}>
						<chakra.span
							color={useColorModeValue('brand.600', 'brand.300')}
							display={{base: 'none', lg: 'inline'}}
						>
							Amount:{' '}
						</chakra.span>
						<chakra.span color={useColorModeValue('gray.800', 'white')}>
							{amount} SOL
						</chakra.span>
					</Box>
				</Box>
				<Spacer />
				<Box minW="min" p="2" textAlign={{base: 'start', md: 'end'}}>
					<chakra.h2
						fontSize={{base: '2xl', lg: '3xl'}}
						color={type == 'BOUGHT' ? 'green.300' : 'red.300'}
						fontWeight="bold"
					>
						{type}
					</chakra.h2>
					<Text mt={1} color={useColorModeValue('gray.600', 'gray.400')}>
						{time}
					</Text>
				</Box>
			</Flex>
			<Box p={2} textAlign={{base: 'start', md: 'end'}} alignSelf="end">
				<Tooltip label="View in Explorer">
					<IconButton
						size="md"
						fontSize="md"
						aria-label={'View in explorer'}
						variant="ghost"
						color="current"
						onClick={() => window.open(url, '_blank').focus()}
						icon={<BsBoxArrowUpRight />}
					/>
				</Tooltip>
			</Box>
		</VStack>
	);
};

export default function Card({
	image,
	nft,
	marketplace,
	total_amount,
	transaction_type,
	time,
	url,
	...props
}) {
	return (
		<Box
			bg={useColorModeValue('white', 'gray.800')}
			display={{base: 'block', sm: 'flex'}}
			shadow={{lg: 'lg'}}
			rounded={{base: 'xl'}}
			p={2}
			m={1}
			minW="min"
			{...props}
		>
			<NFT src={image} />
			<Details
				name={nft}
				marketplace={marketplace}
				amount={total_amount}
				type={transaction_type.toUpperCase()}
				time={time}
				url={url}
			/>
		</Box>
	);
}
