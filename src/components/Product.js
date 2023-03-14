import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  ImageList,
  ImageListItem,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: { marginTop: theme.spacing(4), marginBottom: theme.spacing(4) },
  title: { marginBottom: theme.spacing(2) },
  imageListItem: { "&:hover $imageOverlay": { display: "flex" } },
  imageOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "none",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
    "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
  },
  icon: { marginRight: theme.spacing(1) },
}));
const Products = () => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  const handleDelete = (id) => {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
  };
  return (
    <Container className={classes.root}>
           {" "}
      <Typography variant="h4" className={classes.title}>
                Products     {" "}
      </Typography>
           {" "}
      <Box display="flex" justifyContent="flex-end" marginBottom={2}>
               {" "}
        <Link to="/add">
                   {" "}
          <IconButton>
                        <AddIcon className={classes.icon} />            Add
            Product         {" "}
          </IconButton>
                 {" "}
        </Link>
             {" "}
      </Box>
           {" "}
      <ImageList cols={4} gap={16}>
               {" "}
        {products.map((product) => (
          <ImageListItem
            key={product.id}
            className={classes.imageListItem}
            onClick={() => console.log(`Clicked on product ${product.id}`)}
          >
                        <img src={product.url} alt={product.title} />           {" "}
            <div className={classes.imageOverlay}>
                           {" "}
              <Link to={`/edit/${product.id}`}>
                               {" "}
                <IconButton color="inherit">
                                    <EditIcon />               {" "}
                </IconButton>
                             {" "}
              </Link>
                           {" "}
              <IconButton
                color="inherit"
                onClick={() => handleDelete(product.id)}
              >
                                <DeleteIcon />             {" "}
              </IconButton>
                         {" "}
            </div>
                     {" "}
          </ImageListItem>
        ))}
             {" "}
      </ImageList>
         {" "}
    </Container>
  );
};
export default Products;
