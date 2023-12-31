import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { tokens } from "../them";
import Header from "../component/Header";
import { mockDataTeam } from "../data/mockData";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",

    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } } :{row:{access:string}}) => {
             return (
                    <div className=" w-[60%] m-0 p-[5px] flex justify-center rounded-[4px]"
                     style={{backgroundColor: access === "admin"
                     ? colors.greenAccent[600]
                     : access === "manager"
                     ? colors.greenAccent[700]
                     : colors.greenAccent[700]}}
                    >
                      {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
                      {access === "manager" && <SecurityOutlinedIcon />}
                      {access === "user" && <LockOpenOutlinedIcon />}
                      <Typography color={colors.gray[100]} sx={{ ml: "5px" }}>
                        {access}
                      </Typography>
                    </div>
                  );
                },
              },
            ];

  return (
    <div className=" m-[20px] w-fit min-w-[1420px]">
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.indigoAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.indigoAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.gray[100]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} autoHeight 
        components={{Toolbar:GridToolbar}}/>
      </Box>
    </div>
  );
};

export default Team;