'use client';
import {Box, Grid, List, Typography} from "@mui/material";
import OptionCard from "@/app/home/OptionCard";

export default function ThirdPage() {

    return (
        <>
            <Grid
                container
                justifyContent="center"
                alignItems="center"
            >
                <Typography
                    variant="h4"
                    component="h1"
                    fontWeight={700}
                    padding={"1rem"}
                >
                    14.3 Datos de prueba
                </Typography>
            </Grid>
            <Grid container>
                <Box width={"100%"}>
                    <nav aria-label="main administrative options">
                        <List>
                            <OptionCard url={"home/14.3/14.3.1"}
                                        title={"14.3.1"}
                                        description={"Titulo."}
                            />
                        </List>
                    </nav>
                </Box>
            </Grid>
        </>
    )
}