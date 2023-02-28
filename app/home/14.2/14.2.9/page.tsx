'use client';
import {Typography} from "@mui/material";
import ListComponent from "@/app/home/ListComponent";

export default function TwelvePage() {
    const textArray: (JSX.Element)[] = [];
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        1) Control<br/>
        Considerando futuras actualizaciones o mejoras para el sistema. Se deberá documentar todos los resultados de las
        pruebas. Con el objetivo de compararlas en un futuro después de una actualización o mejora dentro del sistema.
        Junto a los resultados los criterios de aceptación también tendrán que ser debidamente documentados y
        almacenados.<br/>
        Los datos requeridos mínimos son los siguientes:<br/>
        • Identificador<br/>
        • Prueba Asociada<br/>
        • Resultado Esperado<br/>
        • Resultado Obtenido<br/>
        • Fecha<br/>
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        2) Guia de implementación<br/>
        Dentro de las pruebas de aceptación se deberá incluir una verificación del cumplimiento de los requisitos de
        seguridad de la información.<br/>
        Sin importar los requisitos/objetivos de la política de seguridad del producto owner, la información no puede
        ignorar ninguno de los 3 requisitos fundamentales.<br/>
        • Confidencialidad<br/>
        • Integridad<br/>
        • Disponibilidad<br/>
        Estos tres elementos se complementan, por ejemplo, la confidencialidad ayuda a proteger las contraseñas, las
        contraseñas promueven la integridad del sistema al controlar el control de acceso.<br/>
        Adicionalmente la empresa deberá realizar las pruebas dentro de un entorno de pruebas realista para asegurar la
        calidad de los resultados.<br/>
    </Typography>);
    const textTitle = <Typography
        variant="h5"
        component="h1"
        padding={"1rem"}
        textAlign={"center"}
    >
        14.2.9 Pruebas de aceptación del sistema
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