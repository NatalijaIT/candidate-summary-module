import { Card, CardContent, Typography } from "@mui/material";
import { cardStyles, cardContentStyles, titleStyles, yearsTextStyles } from "./MainTechnologiesItem.css";

export type MainTechnologiesItemProps = {
	title: string;
	years?: string | number;
	byProfile?: boolean;
}

const MainTechnologiesItem = ({ title, years, byProfile }: MainTechnologiesItemProps) => {
	return (
		<Card variant="outlined" sx={(theme) => ({
			...((typeof cardStyles === 'function' ? cardStyles(theme) : cardStyles) as object),
			backgroundColor: byProfile ? theme.palette.action.selected : 'transparent'
		})}>
			<CardContent sx={cardContentStyles}>
				<Typography variant="body2" sx={titleStyles}>
					{title}
				</Typography>
				{!!years ? (
					<Typography variant="body2" sx={yearsTextStyles}>
						{years} Years
					</Typography>
				) : null
				}
			</CardContent>
		</Card>
	);
};

export default MainTechnologiesItem