import {
	Container,
	Box,
	useColorModeValue,
	Text,
	Flex,
	Switch,
	FormControl,
	FormLabel,
	Spacer,
	Input
} from '@chakra-ui/react';

const Header = ({address}) => {
	return (
		<Box p={4}>
			<Flex
				flexDirection={{base: 'column', md: 'row'}}
				align={{base: 'center', md: 'normal'}}
			>
				<Text
					fontSize={{base: '2xl', lg: '3xl'}}
					color={useColorModeValue('gray.800', 'white')}
					fontWeight="bold"
				>
					Wallet Activity Tracker
				</Text>
				<Spacer />
				<Input
					variant="filled"
					placeholder="Enter Wallet Address"
					size="md"
					maxWidth="md"
					value={address}
				/>
			</Flex>
			<Flex justify={{base: 'center', md: 'normal'}}>
				<FormControl w="max" display="flex" alignItems="center" mt={2}>
					<FormLabel htmlFor="email-alerts">Enable email alerts?</FormLabel>
					<Switch id="email-alerts" />
				</FormControl>
			</Flex>
		</Box>
	);
};

export default function CardContainer({address, children}) {
	return (
		<Container maxW="container.lg">
			<Header address={address} />
			<Box
				bg={useColorModeValue('gray.50', 'gray.600')}
				p={{base: 2, md: 8}}
				alignItems="center"
				justifyContent="center"
				rounded={{base: 'xl'}}
			>
				{children}
			</Box>
		</Container>
	);
}
