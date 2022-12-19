import { CssBaseline } from '@mui/material'
import Header from './components/Header'
import Box from '@mui/material/Box'

function App() {
	return (
		<>
			<CssBaseline />
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					height: '100vh',
				}}
			>
				<Box>
					<Header />
				</Box>
			</Box>
		</>
	)
}

export default App
