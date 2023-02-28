// app\home\administrative\OptionCard.tsx

import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import {useRouter} from 'next/navigation'
import Skeleton from '@mui/material/Skeleton';

/**
 * This is the type for the props of the OptionCard component.
 * @interface Props
 * @property {string} url - The url to redirect to when the option is clicked.
 * @property {string} title - The title of the option.
 * @property {string} description - The description of the option.
 */
type Props = {
    url: string
    title?: string
    description?: string
}

/**
 * This component is used on the different administrative pages to display the different options.
 * @param url - The url to redirect to when the option is clicked.
 * @param title - The title of the option.
 * @param description - The description of the option.
 * @param other - Other information to be used in the option.
 * @constructor - The OptionCard component.
 * @return {JSX.Element} - The OptionCard component.
 */
export default function OptionCard({url, title, description}: Props): JSX.Element {
    const router = useRouter()
    const handleAdminOptionClick = (url: string) => () => {
        // redirect to url
        router.push(url);
    }
    return (
        <ListItem>
            <ListItemButton onClick={handleAdminOptionClick(url)}
                            sx={{
                                border: "1px solid #e0e0e0",
                                borderRadius: "1rem",
                                padding: "1rem",
                            }}
            >
                <ListItemAvatar>
                    <Avatar>
                        <SettingsRoundedIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={title} secondary={description}/>
            </ListItemButton>
        </ListItem>
    )
}

export function SkeletonOptionCard(): JSX.Element {
    return (
        <ListItem>
            <ListItemButton sx={{
                border: "1px solid #e0e0e0",
                borderRadius: "1rem",
                padding: "1rem",
            }}>
                <ListItemAvatar>
                    <Avatar>
                        <SettingsRoundedIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={<Skeleton width={200}/>} secondary={<Skeleton width={200}/>}/>
            </ListItemButton>
        </ListItem>
    )
}
