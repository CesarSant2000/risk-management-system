'use client';
import {ReactNode, useState} from "react";
import {Grid} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import * as React from "react";
import {useRouter} from "next/navigation";
import styles from "@/app/home/Others.module.css";

const pages = ['14.1 Requisitos de seguridad de los sistemas de información', '14.2 Seguridad en los procesos de desarrollo y soporte', '14.3 Datos de prueba'];

export default function HomeLayout({children,}: { children: ReactNode }) {

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const router = useRouter()


    const handleCloseNavMenu = (id: number) => {
        setAnchorElNav(null);
        switch (id) {
            case 0:
                router.push('/home/14.1', undefined)
                break;
            case 1:
                router.push('/home/14.2', undefined)
                break;
            case 2:
                router.push('/home/14.3', undefined)
                break;
        }
    };

    return (
        <>
            <Grid container
                  bgcolor={"white"}
                  sx={{
                      height: '100%',
                      minHeight: '100vh',
                      maxHeight: '?',
                  }}
            >
                <Grid item
                      md={12}
                      xs={12}
                      bgcolor={"white"}
                >
                    <AppBar position="static">
                        <Container maxWidth="xl">
                            <Toolbar disableGutters>
                                <Typography
                                    variant="h6"
                                    component="a"
                                    href="/"
                                    sx={{
                                        mr: 20,
                                        display: {xs: 'none', md: 'flex'},
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        letterSpacing: '.3rem',
                                        color: 'inherit',
                                        textDecoration: 'none',
                                        textAlign: 'center',
                                    }}
                                >
                                    SISTEMA DE GESTIÓN DE RIESGOS
                                </Typography>

                                <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                                    {pages.map((page, id) => (
                                        <Button
                                            key={page}
                                            onClick={() => handleCloseNavMenu(id)}
                                            sx={{
                                                my: 2,
                                                color: 'white',
                                                display: 'block',
                                                maxWidth: '30%',
                                                borderRadius: '10px',
                                                border: '1px solid white',
                                                margin: '10px',
                                            }}
                                        >
                                            {page}
                                        </Button>
                                    ))}
                                </Box>
                            </Toolbar>
                        </Container>
                    </AppBar>
                    <Grid container
                          justifyContent="center"
                          alignItems="center"
                          sx={{}}
                    >
                        <Grid
                            item
                            xs={12}
                            sm={10}
                            md={8}
                            sx={{
                                backgroundColor: 'white',
                                padding: '1rem',
                                marginTop: '1rem',
                                marginBottom: '1rem',
                                borderRadius: '1rem',
                            }}
                        >
                            {children}
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </>
    )
}