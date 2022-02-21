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
	IconButton,
	Tooltip
} from '@chakra-ui/react';
import {BsSearch} from 'react-icons/bs';
import {useState} from 'react';

const AddressField = ({initialValue}) => {
	const [value, setValue] = useState(initialValue);

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	const handleSubmit = () => {
		if (value.length === 44) {
			alert('A wallet address was submitted: ' + value);
		} else alert('Invalid wallet address');
	};

	const handleKeyDown = (event) => {
		if (event.key === 'Enter') handleSubmit();
	};

	return (
		<InputGroup maxWidth="md">
			<Input
				variant="filled"
				placeholder="Enter Wallet Address"
				size="md"
				value={value}
				onChange={handleChange}
				onKeyDown={handleKeyDown}
			/>
			<InputRightElement>
				<Tooltip label="Search">
					<IconButton
						size="sm"
						colorScheme={'whiteAlpha'}
						aria-label="Search wallet address"
						icon={<BsSearch color={useColorModeValue('black', 'white')} />}
						onClick={handleSubmit}
					/>
				</Tooltip>
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
				<AddressField initialValue={address} />
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
