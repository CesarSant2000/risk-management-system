'use client';
import {Typography} from "@mui/material";
import ListComponent from "@/app/home/ListComponent";

export default function TwelvePage() {
    const textArray: (JSX.Element)[] = [];
    const textTitle = <Typography
        variant="h5"
        component="h1"
        padding={"1rem"}
        textAlign={"center"}
    >
        14.2.8 Pruebas de seguridad de sistemas
    </Typography>
    const textIntro = <Typography
        variant="body1"
        textAlign={"justify"}
    >
        Tanto los sistemas nuevos como los actualizados requieren pruebas y verificaciones exhaustivas en el proceso de
        desarrollo. Estas pruebas inicialmente deberían ser realizadas por el equipo de desarrollo.<br/>
        Se deberían realizar pruebas de aceptación independientes, para asegurar que el sistema funciona como se espera.
        Además, la extensión de las pruebas debería ser proporcional a la importancia y la naturaleza del sistema.<br/>
        Para llevar a cabo las pruebas de seguridad, el desarrollador debería analizar la arquitectura del sistema,
        enumerar las amenazas potenciales, planificar pruebas, identificar herramientas de prueba, ejecutar casos de
        prueba y generar informes con los resultados.<br/>
        Una prueba de seguridad puede llevarse a cabo mediante el análisis de estático, pruebas de aceptación, pruebas
        de penetración, pruebas de carga, pruebas de análisis de origen, pruebas de in inyección SQL.
    </Typography>
    return (
        <ListComponent title={textTitle} intro={textIntro} array={textArray}/>
    )
}