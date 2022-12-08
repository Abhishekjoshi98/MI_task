import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import { Bed } from '@mui/icons-material';
import BathroomIcon from '@mui/icons-material/Bathroom';

export default function Cards({singlecard}) {
    return (
        
                <Card sx={{ width: 200, minWidth: 200 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={singlecard.img}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Stack direction="row" spacing={6}>
                                <Typography gutterBottom component="div">
                                    ${singlecard.rentAmount}/month
                                </Typography>
                                <FavoriteBorderIcon />
                            </Stack>
                            <Typography component='div' variant='h6'>
                                {singlecard.locationTitle}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {singlecard.locationAddress}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Stack direction="row" spacing={1}>
                            <Chip icon={<Bed />} size='small' label={singlecard.beds+'beds'} variant="outlined" />
                            <Chip icon={<BathroomIcon />} size='small' label={singlecard.baths+'Bathrooms'} variant="outlined" />
                        </Stack>
                    </CardActions>
                </Card>
    );
}
