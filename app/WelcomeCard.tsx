'use client';

import {createTheme, Grid, ThemeProvider, Typography} from "@mui/material";
import styles from "@/app/WelcomeCard.module.css";
import {useRouter} from "next/navigation";

const theme = createTheme();

export default function WelcomeCard() {
    const router = useRouter()

    function handleClick() {
        router.push('/home', undefined)
    }

    return (
        <ThemeProvider theme={theme}>
            <Grid container
                  justifyContent="center"
                  alignItems="center"
                  height={"100vh"}
                  width={"100vw"}
            >
                <div className={styles.card} onClick={handleClick}>
                    <div className={styles.cardContent}>
                        <Typography variant={"h3"} color={"white"}>
                            Bienvenidos
                        </Typography>
                        <Typography variant={"h4"} color={"white"}>
                            SISTEMA DE GESTIÓN DE RIESGOS
                        </Typography>
                    </div>
                </div>
            </Grid>
        </ThemeProvider>
    )
}