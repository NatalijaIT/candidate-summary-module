import StarIcon from "@mui/icons-material/Star";
import { Tooltip } from "@mui/material";

import {
    AchievementCard,
    CardContentWrapper,
    AchievementText,
    StarIconWrapper
} from "./Achievement.css";

type AchievementItemProps = {
    title: string;
    info: string;
};

const AchievementItem = ({ title, info }: AchievementItemProps) => {
    return (
        <Tooltip
            title={info}
            arrow
            placement="top"
            slotProps={{
                tooltip: {
                    sx: {
                        fontSize: '14px'
                    }
                }
            }}
        >
            <AchievementCard variant="outlined">
                <CardContentWrapper>
                    <StarIconWrapper className="star-icon-wrapper">
                        <StarIcon />
                    </StarIconWrapper>
                    <AchievementText variant="body2">{title}</AchievementText>
                </CardContentWrapper>
            </AchievementCard>
        </Tooltip>
    );
};

export default AchievementItem