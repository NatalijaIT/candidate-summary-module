import { CircularProgress, Box } from "@mui/material";

const Loader = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            marginTop={30}
            minHeight="100vh"
            width="100%"
        >
            <CircularProgress size={60} thickness={5} />
        </Box>
    );
};

export default Loader;
