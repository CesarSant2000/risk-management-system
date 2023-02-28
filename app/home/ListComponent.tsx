'use client';
import {Divider, Grid, Typography} from "@mui/material";
import {useState} from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";

export default function ListComponent(props: {title: JSX.Element, intro: JSX.Element, array: JSX.Element[]}) {
    const [checked, setChecked] = useState([0]);
    const {title, intro, array} = props;
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

    return (
        <>
            {title}
            {intro}
            <List sx={{width: '100%', bgcolor: 'background.paper'}}>
                {array.map((text, index) => {
                    const labelId = `checkbox-list-label-${index+1}`;

                    return (
                        <>
                            <Divider/>
                            <ListItem
                                key={index+1}
                                secondaryAction={
                                    <IconButton edge="end" aria-label="comments">
                                        <CommentIcon/>
                                    </IconButton>
                                }
                                disablePadding
                            >
                                <ListItemButton role={undefined} onClick={handleToggle(index+1)} dense>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={checked.indexOf(index+1) !== -1}
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
        </>
    )
}