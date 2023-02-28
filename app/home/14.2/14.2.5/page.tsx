'use client';
import {Typography} from "@mui/material";
import ListComponent from "@/app/home/ListComponent";

export default function ElevenPage() {
    const textArray: (JSX.Element)[] = [];
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        1. Desarrollar protecciones por capas;
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        2. Establecer una política, arquitectura y controles de seguridad sólidos como base para el diseño;
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        3. Incorporar requisitos de seguridad en el ciclo de vida de desarrollo del sistema;
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        4. Delinear los límites físicos y lógicos de la seguridad;
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        5. Garantizar que los desarrolladores de sistemas reciben formación sobre cómo construir software seguro;
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        6. Adaptar los controles de seguridad para satisfacer las necesidades organizativas y operativas;
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        7. Realizar modelos de amenazas para identificar casos de uso, agentes de amenazas, vectores de ataque y
        patrones de ataque, así como controles compensatorios y patrones de diseño necesarios para mitigar el riesgo; y
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        8. Reducir el riesgo a niveles aceptables, permitiendo así tomar decisiones informadas sobre la gestión del
        riesgo.
    </Typography>);
    const textTitle = <Typography
        variant="h5"
        component="h1"
        padding={"1rem"}
        textAlign={"center"}
    >
        14.2.5 Principios de ingeniería de sistemas seguros
    </Typography>
    const textIntro = <Typography
        variant="body1"
        textAlign={"justify"}
    >
        Los principios de ingeniería de sistemas seguros nos permiten tener procedimientos establecidos, documentados,
        mantenibles y aplicados a los esfuerzos de implementación de sistemas de información. Además, permite que la
        seguridad este diseñada dentro de las capas de arquitectura del sistema: negocio, datos, aplicaciones y
        tecnología, con lo que se logra balancear la necesidad de seguridad con la accesibilidad de la información.<br/>
        Algunos de los principios utilizados son:
    </Typography>
    return (
        <ListComponent title={textTitle} intro={textIntro} array={textArray}/>
    )
}