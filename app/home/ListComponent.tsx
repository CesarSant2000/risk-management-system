'use client';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
    Grid,
    TextField,
    Typography
} from "@mui/material";
import {useEffect, useState} from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import ReactToPrint from "react-to-print";

export interface CommentaryInterface {
    commentary: string;
    index: number;
}

export default function ListComponent(props: { title: JSX.Element, intro: JSX.Element, array: JSX.Element[] }) {
    const [checked, setChecked] = useState([0]);
    const {title, intro, array} = props;
    const [openDialog, setOpenDialog] = useState(false);
    const [dialogTitle, setDialogTitle] = useState('');
    const [openDialog2, setOpenDialog2] = useState(false);
    const [dialogTitle2, setDialogTitle2] = useState('');
    const [dialogMessage2, setDialogMessage2] = useState('');
    const [commentaryHistory, setCommentaryHistory] = useState([] as CommentaryInterface[]);
    const [currentOptionIndex, setCurrentOptionIndex] = useState(0);
    const [commentaryRecords, setCommentaryRecords] = useState([] as JSX.Element[]);
    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);

    };

    useEffect(
        () => {

            if (checked.length === array.length + 1) {
                setDialogTitle2(`Sección completada`);
                setDialogMessage2(`Usted ha completado todos los pasos de esta sección.`);
                setOpenDialog2(true);
                const returnList: JSX.Element[] = [];
                let tempIndex = 1;
                if (commentaryHistory.length > 0) {
                    returnList.push(
                        <Typography variant="body1" color="text.primary">
                            Recuerde que tiene los siguientes comentarios:
                        </Typography>
                    )
                    returnList.push(<Divider/>)
                    commentaryHistory.forEach((commentary) => {
                            returnList.push(
                                <Typography variant="body2" color="text.secondary">
                                    {tempIndex}.- {commentary.commentary}
                                </Typography>
                            );
                            tempIndex++;
                        }
                    )
                    returnList.push(<Divider/>)
                }
                setCommentaryRecords(returnList);
            }
        }, [checked, commentaryHistory, array.length]
    )

    function handleDialogClose() {
        //get input value from id commentary_text
        const commentaryInput = document.getElementById('commentary_text') as HTMLInputElement;
        const commentaryValue = commentaryInput.value;
        const commentary = {
            commentary: commentaryValue,
            index: currentOptionIndex
        }
        if (commentary.commentary) {
            setCommentaryHistory([...commentaryHistory, commentary]);
        }
        setOpenDialog(false);
    }

    function handleDialogClose2() {
        setOpenDialog2(false);

    }

    function handleCommentary(index: number) {
        console.log("Comentario");
        setDialogTitle(`Ingrese un comentario para el punto ${index}`);
        setOpenDialog(true);
        setCurrentOptionIndex(index);
        console.log(checked)
    }

    function generateCurrentCommentaryHistory() {
        const returnList: JSX.Element[] = [];
        let tempIndex = 1;
        commentaryHistory.forEach((commentary) => {
                if (commentary.index === currentOptionIndex) {
                    returnList.push(
                        <Typography variant="body2" color="text.secondary">
                            {tempIndex}.- {commentary.commentary}
                        </Typography>
                    );
                    tempIndex++;
                }
            }
        );
        return returnList;
    }

    function handlePrint() {
        console.log("Imprimir");
        window.print();
    }

    return (
        <>
            {title}
            {intro}
            <List sx={{width: '100%', bgcolor: 'background.paper'}}>
                {array.map((text, index) => {
                    const labelId = `checkbox-list-label-${index + 1}`;

                    return (
                        <>
                            <Divider/>
                            <ListItem
                                key={index + 1}
                                secondaryAction={
                                    <IconButton edge="end" aria-label="comments"
                                                onClick={() => handleCommentary(index + 1)}>
                                        <CommentIcon/>
                                    </IconButton>
                                }
                                disablePadding
                            >
                                <ListItemButton role={undefined} onClick={handleToggle(index + 1)} dense>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={checked.indexOf(index + 1) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{'aria-labelledby': labelId}}
                                        />
                                    </ListItemIcon>
                                    <ListItemText id={labelId}
                                                  primary={text}/>
                                </ListItemButton>
                            </ListItem>
                            <Divider/>
                        </>
                    );
                })}
            </List>
            <Dialog
                open={openDialog}
                onClose={handleDialogClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {dialogTitle}
                </DialogTitle>
                <DialogContent>
                    <List>
                        {generateCurrentCommentaryHistory()}
                    </List>
                    <Grid padding={"5px"}>
                        <TextField id="commentary_text" label="Ingrese su comentario" variant="outlined"/>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleDialogClose()} autoFocus>
                        Entendido
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={openDialog2}
                onClose={handleDialogClose2}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {dialogTitle2}
                </DialogTitle>
                <DialogContent>
                    <Grid item
                          padding={'5px'}
                    >
                        <Typography variant="body1" color="text.primary">
                            {dialogMessage2}
                        </Typography>
                        <List>
                            {commentaryRecords}
                        </List>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleDialogClose2()} autoFocus>
                        Entendido
                    </Button>
                </DialogActions>
            </Dialog>
            <Grid container
                  justifyContent={"center"}
                  alignItems={"center"}
            >
                <Button variant="contained" onClick={() => handlePrint()}>Imprimir reporte</Button>
            </Grid>

        </>
    )
}