import { Card, CardContent, Typography } from "@mui/material";
import { cardStyles, cardContentStyles, titleStyles } from "./MainTechnologiesItem.css";
import TooltipWrapper from "../../@shared/TooltipWrapper";

export type MainTechnologiesItemProps = {
	title: string;
	years?: string | number;
	byProfile: boolean;
}

const MainTechnologiesItem = ({ title, years, byProfile }: MainTechnologiesItemProps) => {
	return (
		<TooltipWrapper byProfile={byProfile} title={title}>
			<Card variant="outlined" sx={(theme) => ({
				...((typeof cardStyles === 'function' ? cardStyles(theme) : cardStyles) as object),
				backgroundColor: byProfile ? theme.palette.action.selected : 'transparent'
			})}>
				<CardContent sx={cardContentStyles}>
					<Typography variant="body2" sx={titleStyles}>
						{title}
					</Typography>
					{years && (
						<Typography sx={{ fontSize: 12 }}>
							{years} Years
						</Typography>
					)}
				</CardContent>
			</Card>
		</TooltipWrapper>
	);
};

export default MainTechnologiesItem