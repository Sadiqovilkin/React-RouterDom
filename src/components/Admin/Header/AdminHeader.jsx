import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
const AdminHeader = ({ adminID, setAdminID, setLocalAdminID }) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"pink"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin
          </Typography>

          {adminID &&(
            <>
            
             <Button color="inherit">
            <Link to={"/admin"}>Dashboard</Link>
          </Button>
          <Button color="inherit">
            <Link to={"/admin/add-category"}>AddCountry</Link>
          </Button>
          <Button color="inherit">
            <Link to={"/admin/countries"}>Countries</Link>
          </Button>
          <Button
                onClick={() => {
                  Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      setAdminID(null);
                      setLocalAdminID(null);
                      Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success",
                      }).then(() => {
                        navigate("/admin/login");
                      });
                    }
                  });
                }}
                color="inherit"
              >
                Log Out
              </Button>
          
          </>
          )
          
          }
         
         
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default AdminHeader