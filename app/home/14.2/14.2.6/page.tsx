'use client';
import {Typography} from "@mui/material";
import ListComponent from "@/app/home/ListComponent";

export default function TwelvePage() {
    const textArray: (JSX.Element)[] = [];
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        1. Sensibilidad de los datos que va a procesar, almacenar y transmitir el sistema;
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        2. Requisitos internos y externos aplicables
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        3. Controles de seguridad ya implantados por la organización que apoyan el desarrollo del sistema;
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        4. Fiabilidad del personal que trabaja en el entorno;
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        5. El grado de externalización asociado al desarrollo del sistema;
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        6. La necesidad de segregación entre distintos entornos;
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        7. El control del acceso al entorno de desarrollo;
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        8. La supervisión de los cambios en el entorno y el código almacenado en él;
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        9. Las copias de seguridad se almacenan en ubicaciones externas seguras;
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        10. Control del movimiento de datos desde y hacia el entorno.
    </Typography>);
    const textTitle = <Typography
        variant="h5"
        component="h1"
        padding={"1rem"}
        textAlign={"center"}
    >
        14.2.6 Entorno de desarrollo seguro
    </Typography>
    const textIntro = <Typography
        variant="body1"
        textAlign={"justify"}
    >
        Los ambientes de desarrollo seguro son fundamentales dentro de las organizaciones, esto se debe a que protegen
        el progreso del sistema y sus integraciones durante todo el ciclo de vida del desarrollo. La protección del
        entorno involucra a las personas, procesos y tecnología asociada, por lo que las organizaciones deben evaluar
        los riesgos asociados a los esfuerzos de un desarrollo individual del sistema.
    </Typography>
    return (
        <ListComponent title={textTitle} intro={textIntro} array={textArray}/>
    )
}