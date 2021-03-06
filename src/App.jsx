import CardContainer from './components/CardContainer.jsx';
import Card from './components/Card.jsx';
import ColorMode from './components/ColorMode';
import {Container, Box} from '@chakra-ui/react';

function App() {
	const wallet_address = '92Tr5Kd6Q84ZC3wwaSYp9TGtraMbBwTsjq4d6CCGPk3x';
	const jsonArray = [
		{
			transaction_type: 'Bought',
			marketplace: 'Solanart',
			total_amount: 7.002044279,
			nft: 'solchicks-2192',
			image:
				'https://ipfs.io/ipfs/bafybeibpjqn2gosn65qflesmhbzd7kio3gnmtyopibptb6hucjyv6q4zhu/solchicks-2192.png',
			time: 'datetime.datetime(2021, 12, 30, 20, 31, 54)',
			url: 'https://solanart.io/'
		},
		{
			transaction_type: 'type',
			marketplace: 'marketplace',
			total_amount: '',
			nft: 'nft',
			image: 'image',
			time: 'time',
			url: 'https://solanart.io/'
		}
	];

	return (
		<Box>
			<Container maxW="container.lg" align="center">
				<ColorMode />
			</Container>
			<CardContainer address={wallet_address || ''}>
				{jsonArray.map((obj, i) => {
					return <Card key={i} {...obj} />;
				})}
			</CardContainer>
		</Box>
	);
}

export default App;
