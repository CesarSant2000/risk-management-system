'use client';
import {Box, Grid, List, Typography} from "@mui/material";
import OptionCard from "@/app/home/OptionCard";

export default function SecondPage() {

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
                    14.2 Seguridad en los procesos de desarrollo y soporte
                </Typography>
            </Grid>
            <Grid container>
                <Box width={"100%"}>
                    <nav aria-label="main administrative options">
                        <List>
                            <OptionCard url={"home/14.2/14.2.1"}
                                        title={"14.2.1"}
                                        description={"Política de desarrollo seguro"}
                            />
                            <OptionCard url={"home/14.2/14.2.3"}
                                        title={"14.2.3"}
                                        description={"Revisión técnica de las aplicaciones tras efectuar cambios en el sistema operativo"}
                            />
                            <OptionCard url={"home/14.2/14.2.4"}
                                        title={"14.2.4"}
                                        description={"Restricciones a los cambios de los paquetes de software"}
                            />
                            <OptionCard url={"home/14.2/14.2.5"}
                                        title={"14.2.5"}
                                        description={"Principios de Ingeniería de sistemas seguros"}
                            />
                            <OptionCard url={"home/14.2/14.2.6"}
                                        title={"14.2.6"}
                                        description={"Entorno de desarrollo seguro"}
                            />
                            <OptionCard url={"home/14.2/14.2.8"}
                                        title={"14.2.8"}
                                        description={"Pruebas de seguridad de sistemas"}
                            />
                            <OptionCard url={"home/14.2/14.2.9"}
                                        title={"14.2.9"}
                                        description={"Pruebas de aceptacion del sistema"}
                            />
                        </List>
                    </nav>
                </Box>
            </Grid>
        </>
    )
}