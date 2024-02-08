import { Box, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "dashboard/app/components";
import PaginationTable from "./PaginationTable";
import SimpleTable from "./SimpleTable";
import FundingPagination from "./FundingPagination";

const Container = styled("div")(({ theme }) => ({
    margin: "30px",
    [theme.breakpoints.down("sm")]: { margin: "16px" },
    "& .breadcrumb": {
        marginBottom: "30px",
        [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
    },
}));

const FundingTable = () => {
    return (
        <Container>
            <Box className="breadcrumb">
                <Breadcrumb routeSegments={[{ name: "Dashboard", path: "/Funding" }, { name: "My Funding" }]} />
            </Box>

            {/* <SimpleCard title="Simple Table">
                <SimpleTable />
            </SimpleCard> */}

            <SimpleCard title="My Fundings">
                <FundingPagination />
            </SimpleCard>
        </Container>
    );
};

export default FundingTable;
