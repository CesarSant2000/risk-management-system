'use client';
import {Typography} from "@mui/material";
import ListComponent from "@/app/home/ListComponent";

export default function TwelvePage() {
    const textArray: (JSX.Element)[] = [];
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        1.	Identificar las necesidades de desarrollo: Antes de buscar un tercero para el desarrollo de
        software, es importante identificar claramente las necesidades de la organización en cuanto a
        funcionalidad, seguridad y calidad. Esto permitirá seleccionar un proveedor adecuado.
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        2.	Seleccionar un proveedor confiable: La organización debe buscar un proveedor confiable que tenga
        experiencia en el desarrollo de software seguro y cumpla con los requisitos de la organización. Es
        importante realizar una evaluación de seguridad y calidad antes de contratar a un tercero.
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        3.	Establecer requisitos de seguridad: La organización debe establecer requisitos claros de seguridad
        para el tercero, incluyendo políticas de seguridad, medidas de seguridad y requisitos de privacidad.
        Estos requisitos deben estar claramente definidos en el contrato.
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        4.	Realizar pruebas de seguridad y calidad: La organización debe realizar al menos, prueba de penetración,
        de vulnerabilidad y de carga. Esto permitirá detectar y corregir posibles problemas antes de que el software
        sea puesto en producción.
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        5.	Monitorear y evaluar continuamente: Se debe incluir en el contrato el derecho a que la organización pueda
        auditar en cualquier momento el ciclo de vida del desarrollo del producto contratado. Esto con el objetivo de
        monitorear y evaluar continuamente el trabajo del tercero y la calidad del software desarrollado. Teniendo así
        la posibilidad de encontrar fallas tempranas y poder tomar medidas correctivas.
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        6.	Garantía: Toda tercerización de desarrollo de software debe contar con un tiempo de garantía en donde el
        proveedor deba responder ante cualquier fallo del producto entregado.
    </Typography>);
    const textTitle = <Typography
        variant="h5"
        component="h1"
        padding={"1rem"}
        textAlign={"center"}
    >
        14.2.7 Desarrollo tercerizado
    </Typography>
    const textIntro = <Typography
        variant="body1"
        textAlign={"justify"}
    >
        Esta sección aborda la gestión de riesgos asociados al desarrollo tercerizado de
        software y establece recomendaciones para mitigar esos riesgos.
    </Typography>
    return (
        <ListComponent title={textTitle} intro={textIntro} array={textArray}/>
    )
}