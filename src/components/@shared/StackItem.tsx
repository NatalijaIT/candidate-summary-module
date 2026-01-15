import { Typography } from "@mui/material";
import { BadgeCard, BadgeCardContent } from "./StackItem.css";

type StackItemProps = {
    value?: string;
};

const StackItem = ({ value }: StackItemProps) => {
    return (
        <BadgeCard variant="outlined">
            <BadgeCardContent>
                <Typography variant="body2" fontWeight={400}>
                    {value}
                </Typography>
            </BadgeCardContent>
        </BadgeCard>
    );
};

export default StackItem;
