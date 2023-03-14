import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
const PostListing = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const getCommentsByPostId = (postId) => {
    return comments.filter((comment) => comment.postId === postId);
  };
  return (
    <div className={classes.root}>
           
      {posts.map((post) => (
        <Accordion key={post.id}>
                   
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`post${post.id}-content`}
            id={`post${post.id}-header`}
          >
                       {" "}
            <Typography className={classes.heading}>{post.title}</Typography>   
                 {" "}
          </AccordionSummary>
                   {" "}
          <AccordionDetails>
                        <Typography>{post.body}</Typography>            <br /> 
                      <Typography variant="h6">Comments:</Typography>           {" "}
            {getCommentsByPostId(post.id).map((comment) => (
              <Accordion key={comment.id}>
                               {" "}
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`comment${comment.id}-content`}
                  id={`comment${comment.id}-header`}
                >
                                    <Typography>{comment.name}</Typography>     
                           {" "}
                </AccordionSummary>
                               {" "}
                <AccordionDetails>
                                    <Typography>{comment.body}</Typography>     
                           {" "}
                </AccordionDetails>
                             {" "}
              </Accordion>
            ))}
                     {" "}
          </AccordionDetails>
                 {" "}
        </Accordion>
      ))}
         {" "}
    </div>
  );
};
export default PostListing;
