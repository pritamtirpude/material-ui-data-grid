import { CssBaseline, Container, Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";

function App() {
  const VISIBLE_FIELDS = [
    "name",
    "avatar",
    "rating",
    "country",
    "city",
    "email",
    "dateCreated",
    "isAdmin",
  ];

  const { data } = useDemoData({
    dataSet: "Employee",
    visibleFields: VISIBLE_FIELDS,
    rowLength: 100,
  });

  console.log(data);

  return (
    <>
      <CssBaseline />
      <Container style={{ height: 400, width: "100%" }}>
        <Box style={{ padding: "2rem 0rem" }}>
          <Typography variant="h3" gutterBottom>
            Material UI Data Grid
          </Typography>
          <DataGrid
            {...data}
            slots={{ toolbar: GridToolbar }}
            initialState={{
              ...data.initialState,
              pagination: { paginationModel: { pageSize: 10 } },
            }}
            pageSizeOptions={[10, 15, 20]}
          />
        </Box>
      </Container>
    </>
  );
}

export default App;
