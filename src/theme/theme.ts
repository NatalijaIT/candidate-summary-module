import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
	interface Palette {
		highlight: {
			main: string;
		};
		border: {
			dashed: string;
		};
	}
	interface PaletteOptions {
		highlight?: {
			main?: string;
		};
		border?: {
			dashed?: string;
		};
	}
}

export const theme = createTheme({
	palette: {
		common: {
			black: '#212121',
			white: '#fff',
		},
		info: {
			main: 'rgba(0, 0, 0, 0.38)',
		},
		highlight: {
			main: '#DCFF02',
		},
		border: {
			dashed: '#9E9E9E',
		},
		action: {
			selected: 'rgba(0, 0, 0, 0.08)',
		},
	},
	typography: {
		fontFamily: 'Outfit, sans-serif',
		h1: {
			fontSize: '2rem',
			fontWeight: 600,
			lineHeight: '2.5rem',
			letterSpacing: '0.4px',
		},
		h6: {
			fontSize: '1.375rem',
			fontWeight: 600,
			letterSpacing: '0.2px',
			lineHeight: '28px',
		},
		body1: {
			fontSize: '1rem',
			fontWeight: 400,
			lineHeight: '1.375rem',
		},
		subtitle1: {
			fontSize: '1rem',
			fontWeight: 500,
		},
		caption: {
			fontSize: '0.875rem',
			letterSpacing: '0.3px',
		},
	},
	spacing: 8,
});
