import StatusIndicatorItem from './StatusIndicatorItem';
import { StatusIndicatorContainer } from './StatusIndicator.css';

type StatusIndicatorProps = {
    availability?: string;
    availaibityHours?: string;
    isDirectHirePossible?: boolean;
    readyToStart?: string;
};

const StatusIndicator = ({
    availability,
    availaibityHours,
    isDirectHirePossible,
    readyToStart
}: StatusIndicatorProps) => {

    return (
        <StatusIndicatorContainer>
            <StatusIndicatorItem title="Availability" value={availability} />
            <StatusIndicatorItem title="Ready to start" value={readyToStart} />
            <StatusIndicatorItem title="Availability hours" value={availaibityHours} />
            <StatusIndicatorItem title="Direct hiring" value={isDirectHirePossible !== undefined ? (isDirectHirePossible ? 'Yes' : 'No') : undefined} />
        </StatusIndicatorContainer>
    );
};

export default StatusIndicator;
