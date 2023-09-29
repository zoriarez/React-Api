import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';

function AlbumCard(props) {
    return (
        
        <Card  sx={{ width: 300  }} >
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                 ID:{props.album.id}
                </Typography>
                <Typography sx={{ fontSize: 14 }}  color="text.secondary">
                User-Id: {props.album.userId}
                    
                </Typography>
                <Typography variant="h5" component="div">
                TItle: {props.album.title}
                </Typography>
            </CardContent>
            <CardActions>
                <a target="_blank" href={`https://${props.album.website}`}>
                    <Button size="small">Learn More</Button>
                </a>
            </CardActions>
        </Card>
    )
}
export default AlbumCard