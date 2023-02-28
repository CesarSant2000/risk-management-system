'use client';
import {Box, Grid, List, Typography} from "@mui/material";
import OptionCard from "@/app/home/OptionCard";

export default function FirstPage() {

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
                    14.1 Requisitos de seguridad de los sistemas de información
                </Typography>
            </Grid>
            <Grid container>
                <Box width={"100%"}>
                    <nav aria-label="main administrative options">
                        <List>
                            <OptionCard url={"home/14.1/14.1.1"}
                                        title={"14.1.1"}
                                        description={"Análisis y especificación de los requisitos de seguridad"}
                            />
                            <OptionCard url={"home/14.1/14.1.2"}
                                        title={"14.1.2"}
                                        description={"Seguridad de las comunicaciones en servicios accesibles por redes públicas"}
                            />
                            <OptionCard url={"home/14.1/14.1.3"}
                                        title={"14.1.3"}
                                        description={"Protección de transacciones en servicios de aplicación"}
                            />
                        </List>
                    </nav>
                </Box>
            </Grid>
        </>
    )
}