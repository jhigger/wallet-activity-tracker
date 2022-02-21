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
	Input,
	InputGroup,
	InputRightElement,
	IconButton
} from '@chakra-ui/react';
import {BsSearch} from 'react-icons/bs';
import {useState} from 'react';

const AddressField = ({address}) => {
	const [value, setValue] = useState(address);

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	const handleSubmit = (event) => {
		alert('An address was submitted: ' + address);
		event.preventDefault();
	};

	return (
		<InputGroup maxWidth="md">
			<Input
				variant="filled"
				placeholder="Enter Wallet Address"
				size="md"
				value={value}
				onChange={handleChange}
				onSubmit={handleSubmit}
			/>
			<InputRightElement>
				<IconButton
					size="sm"
					colorScheme={'whiteAlpha'}
					aria-label="Search wallet address"
					icon={<BsSearch color={useColorModeValue('black', 'white')} />}
				/>
			</InputRightElement>
		</InputGroup>
	);
};

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
				<AddressField address={address} />
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
