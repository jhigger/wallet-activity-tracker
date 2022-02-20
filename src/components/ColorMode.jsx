import {IconButton, useColorMode, useColorModeValue} from '@chakra-ui/react';
import {FaMoon, FaSun} from 'react-icons/fa';

export default function ColorMode(props) {
	const {toggleColorMode: toggleMode} = useColorMode();
	const text = useColorModeValue('dark', 'light');
	const SwitchIcon = useColorModeValue(FaMoon, FaSun);

	return (
		<IconButton
			size="md"
			fontSize="lg"
			aria-label={`Switch to ${text} mode`}
			variant="ghost"
			color="current"
			onClick={toggleMode}
			icon={<SwitchIcon />}
			{...props}
		/>
	);
}
