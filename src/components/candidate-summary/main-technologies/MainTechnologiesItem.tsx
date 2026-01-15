import {
    TechnologyCard,
    TechnologyCardContent,
    TechnologyTitle,
    TechnologyYears
} from "./MainTechnologiesItem.css";
import TooltipWrapper from "../../@shared/TooltipWrapper";

export type MainTechnologiesItemProps = {
    title: string;
    years?: string | number;
    byProfile: boolean;
};

const MainTechnologiesItem = ({ title, years, byProfile }: MainTechnologiesItemProps) => {
    return (
        <TooltipWrapper byProfile={byProfile} title={title}>
            <TechnologyCard variant="outlined" byProfile={byProfile}>
                <TechnologyCardContent>
                    <TechnologyTitle variant="body2">
                        {title}
                    </TechnologyTitle>
                    {years && (
                        <TechnologyYears>
                            {years} Years
                        </TechnologyYears>
                    )}
                </TechnologyCardContent>
            </TechnologyCard>
        </TooltipWrapper>
    );
};

export default MainTechnologiesItem;