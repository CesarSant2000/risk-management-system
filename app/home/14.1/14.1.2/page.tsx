'use client';
import {Typography} from "@mui/material";
import ListComponent from "@/app/home/ListComponent";


export default function FifthPage() {
    const textArray: (JSX.Element)[] = [];
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        1. Identificar los servicios accesibles por redes públicas que manejan información
        confidencial: Determine qué servicios son accesibles por redes públicas y qué
        información se transmite a través de ellos. Identifique qué información es crítica y
        requiere protección adicional.
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        2. Evaluar los riesgos de seguridad: Realice una evaluación de riesgos para determinar
        las amenazas y vulnerabilidades asociadas con los servicios identificados. Esto incluirá
        identificar posibles amenazas externas y evaluar la vulnerabilidad del sistema. La identificación
        de amenazas se la realizará usando STRIDE y la herramienta de microsoft disponible en el siguiente enlace:
        <a href="https://www.microsoft.com/en-us/securityengineering/sdl/threatmodeling" target={"#"}>
            Microsoft Threat Modeling Tool
        </a>
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        3. Implementar controles de seguridad adecuados: Utilice los resultados de la evaluación
        de riesgos para seleccionar los controles de seguridad adecuados para cada servicio
        accesible por redes públicas. Esto incluye la autenticación de usuarios con la
        verificación de dos factores, el cifrado de extremo a extremo, la protección contra
        ataques malintencionados y la segmentación de redes.
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        4. Establecer políticas y procedimientos de seguridad: Establezca políticas y
        procedimientos claros para el uso de servicios accesibles por redes públicas. Incluya
        cómo se accede a estos servicios, qué información se puede transmitir y cómo se debe
        proteger la información.
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        5. Capacitar a los empleados: Capacite a los empleados en la importancia de la seguridad
        de las comunicaciones en servicios accesibles por redes públicas y cómo utilizar los
        servicios de manera segura y efectiva
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        6. Realizar pruebas y evaluaciones regulares: Realice pruebas y evaluaciones regulares
        de los controles de seguridad implementados para asegurarse de que siguen siendo
        efectivos y actualizarlos en consecuencia.
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        7. Revisar y mejorar continuamente: Revisar y mejorar continuamente la estrategia de
        seguridad para garantizar que esté alineada con las necesidades y riesgos de la
        organización y que se mantenga actualizada con los cambios tecnológicos y las amenazas
        de seguridad emergentes
    </Typography>);
    const textTitle = <Typography
        variant="h5"
        component="h1"
        padding={"1rem"}
        textAlign={"center"}
    >
        14.1.2 Seguridad de las comunicaciones en servicios accesibles por redes públicas
    </Typography>
    const textIntro = <Typography
        variant="body1"
        textAlign={"justify"}
    >
        La transmisión de información a través de redes públicas puede ser un riesgo de seguridad
        significativo para las organizaciones, ya que estas redes no son controladas por la organización
        y pueden estar expuestas a diversas amenazas, como ataques malintencionados y la interceptación
        de información. En este apartado se menciona una guía para la implementación de esta sección:
    </Typography>
    return (
        <ListComponent title={textTitle} intro={textIntro} array={textArray}/>
    )
}