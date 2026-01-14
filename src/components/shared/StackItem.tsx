import { Card, CardContent, Typography } from '@mui/material';
import { badgeCardStyles, cardContentStyles } from './StackItem.css';

type StackItemProps = {
    value?: string;
};

const StackItem = ({ value }: StackItemProps) => {
    return (
        <Card variant="outlined" sx={badgeCardStyles}>
            <CardContent sx={cardContentStyles}>
                <Typography variant="body2" fontWeight={500}>
                    {value}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default StackItem;
