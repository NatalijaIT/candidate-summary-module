import { Stack } from '@mui/material';
import { MainTitle } from './MainTechnologies.css';
import { StackItem } from './shared';

type StatusIndicatorItemProps = {
    title?: string;
    value?: string;
};

const StatusIndicatorItem = ({ title, value }: StatusIndicatorItemProps) => {
    return (
        <Stack spacing={2}>
            <MainTitle variant="h6" fontWeight={600}>
                {title}
            </MainTitle>
            <StackItem value={value} />
        </Stack>
    );
};

export default StatusIndicatorItem;
