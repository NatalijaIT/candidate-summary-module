import { Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import { BadgeCard, BadgeCardContent, SkillYears, StarIconWrapper } from "./SkillItem.css";
import TooltipWrapper from "./TooltipWrapper";

type SkillItemProps = {
    value: string;
    years?: number;
    relevant: boolean;
    starIcon?: boolean;
    info?: string;
};

const SkillItem = ({ value, years, relevant, starIcon, info }: SkillItemProps) => {
    return (
        <TooltipWrapper title={info || value} byProfile={relevant}>
            <BadgeCard variant="outlined" relevant={relevant}>
                <BadgeCardContent starIcon={starIcon}>
                    {starIcon && <StarIconWrapper className="star-icon-wrapper">
                        <StarIcon />
                    </StarIconWrapper>
                    }
                    <Typography variant="body2" fontWeight={400}>
                        {value}
                    </Typography>
                    {years && (
                        <SkillYears>
                            {years} Years
                        </SkillYears>
                    )}
                </BadgeCardContent>
            </BadgeCard>
        </TooltipWrapper>
    );
};

export default SkillItem;
