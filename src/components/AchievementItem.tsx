import StarIcon from "@mui/icons-material/Star";
import { Tooltip } from "@mui/material";

import {
    RewardCard,
    CardContentWrapper,
    RewardText,
    StarIconWrapper
} from "./AchievementItem.css";

type AchievementItemProps = {
    title: string;
    info: string;
};

const AchievementItem: React.FC<AchievementItemProps> = ({ title, info }) => {
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
            <RewardCard variant="outlined">
                <CardContentWrapper>
                    <StarIconWrapper className="star-icon-wrapper">
                        <StarIcon />
                    </StarIconWrapper>
                    <RewardText variant="body2">{title}</RewardText>
                </CardContentWrapper>
            </RewardCard>
        </Tooltip>
    );
};

export default AchievementItem