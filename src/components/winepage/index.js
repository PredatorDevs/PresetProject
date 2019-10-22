import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import vinos from '../../assets/img/wines/vinosoriente.jpeg'

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        backgroundColor: 'white'
    },
    media: {
        height: 140,
    },
});

export default function WinePage() {
    const classes = useStyles();

    return (
        <div>
            <CardContainer>
                <div className="item1">
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={vinos}
                            title="Vinos de Oriente"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Vinos de Oriente
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Nuestro primer cliente satisfecho. Vinos de la mejor calidad y al mejor precio
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Saber más
                        </Button>
                        <Button size="small" color="primary">
                            Contactar
                        </Button>
                    </CardActions>
                </Card>
                </div>
                <div className="item2">
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={vinos}
                            title="Vinos de Oriente"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Vinos de Oriente
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Nuestro primer cliente satisfecho. Vinos de la mejor calidad y al mejor precio
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Saber más
                        </Button>
                        <Button size="small" color="primary">
                            Contactar
                        </Button>
                    </CardActions>
                </Card>
                </div>
                <div className="item3">
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={vinos}
                            title="Vinos de Oriente"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Vinos de Oriente
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Nuestro primer cliente satisfecho. Vinos de la mejor calidad y al mejor precio
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Saber más
                        </Button>
                        <Button size="small" color="primary">
                            Contactar
                        </Button>
                    </CardActions>
                </Card>
                </div>
            </CardContainer>
            <CardContainer>
                <div className="item1">
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={vinos}
                            title="Vinos de Oriente"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Vinos de Oriente
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Nuestro primer cliente satisfecho. Vinos de la mejor calidad y al mejor precio
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Saber más
                        </Button>
                        <Button size="small" color="primary">
                            Contactar
                        </Button>
                    </CardActions>
                </Card>
                </div>
                <div className="item2">
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={vinos}
                            title="Vinos de Oriente"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Vinos de Oriente
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Nuestro primer cliente satisfecho. Vinos de la mejor calidad y al mejor precio
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Saber más
                        </Button>
                        <Button size="small" color="primary">
                            Contactar
                        </Button>
                    </CardActions>
                </Card>
                </div>
                <div className="item3">
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={vinos}
                            title="Vinos de Oriente"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Vinos de Oriente
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Nuestro primer cliente satisfecho. Vinos de la mejor calidad y al mejor precio
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Saber más
                        </Button>
                        <Button size="small" color="primary">
                            Contactar
                        </Button>
                    </CardActions>
                </Card>
                </div>
            </CardContainer>
        </div>

    );
}

const CardContainer = styled.div`
    margin-top: 30px;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, auto);
    grid-template-areas: "item1 item2 item3";

    .item1 {
        grid-area: item1
    }
    .item2 {
        grid-area: item2
    }
    .item3 {
        grid-area: item3
    }
`