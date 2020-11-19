import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import GroupIcon from '@material-ui/icons/Group';
import GitHubIcon from '@material-ui/icons/GitHub';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,

  },
  loading: {
    background: "transparent",  
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    }
},
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  }
 
}));

export default function CardComponent({data, loading}) {
  const classes = useStyles();
  

  return (
    <a href={data.html_url}>  
    <Card className="card">
      { loading ?  <CircularProgress/> : 
        <>
      <CardMedia
        className={classes.media}
        image={data.avatar_url}
        title="Paella dish"
      />
      <CardContent>
        
        <Typography  component="h1">{data?.login}</Typography>
        <Typography component="p">{data.name}</Typography>  
         <Typography variant="body2" color="textSecondary" component="p">
           {data?.bio}
       </Typography>
       
        
      </CardContent>
      <CardActions disableSpacing>
        <IconButton  aria-label="add to favorites">
         <GroupIcon /> <span className="icon-text">  {data?.followers} Followers </span>
        </IconButton>
        <IconButton aria-label="share">
          <GroupAddIcon /> <span className="icon-text">  {data?.following} Following </span>
        </IconButton>
        <IconButton aria-label="share">
          <GitHubIcon/> <span className="icon-text"> {data?.public_repos} Repositories </span>
        </IconButton>
      </CardActions>
     </>
          
      }
    </Card>
    </a>
  );
}