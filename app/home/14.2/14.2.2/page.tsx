'use client';
import {Typography} from "@mui/material";
import ListComponent from "@/app/home/ListComponent";


export default function FifthPage() {
    const textArray: (JSX.Element)[] = [];
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        1.	Documentación: Se crea y mantiene un documento formal de procedimientos de control de cambios. Este documento
        debe describir los pasos involucrados en el proceso de control de cambios, incluyendo los roles y responsabilidades
        de cada miembro del equipo involucrado en el proceso.
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        2.	Niveles de autorización: Se establecen y documentan los niveles de autorización para todos los cambios. Solo
        los usuarios autorizados pueden presentar cambios.
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        3.	Revisión de controles y procedimientos: Antes de realizar cualquier cambio, se revisan los controles y los
        procedimientos de integridad para garantizar que no se vean comprometidos por los cambios. Se identifican todos
        los softwares, información, entidades de bases de datos y hardware que requieren modificación.
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        4.	Seguridad: Se identifica y verifica todo el código crítico de seguridad para minimizar la probabilidad de
        debilidades de seguridad conocidas. Se realiza una evaluación de riesgos y se especifican los controles de
        seguridad según sea necesario.
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        5.	Aprobación: Se obtiene la aprobación formal para todas las propuestas detalladas antes de que comience el
        trabajo. Todos los usuarios autorizados deben aceptar los cambios antes de su implementación.
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        6.	Registro de auditoría: Se mantiene un registro de auditoría de todas las solicitudes de cambio para realizar
        un seguimiento del historial de cambios realizados en el sistema.
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        7.	Timing: La implementación de cambios se realiza en el momento adecuado y no interrumpe los procesos comerciales
        involucrados.
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        8.	Pruebas: Todos los cambios se prueban en un entorno segregado antes de su implementación para garantizar que
        no afecten negativamente el entorno operativo.
    </Typography>);
    const textTitle = <Typography
        variant="h5"
        component="h1"
        padding={"1rem"}
        textAlign={"center"}
    >
        14.2.2 Procedimientos del control de cambios del sistema
    </Typography>
    const textIntro = <Typography
        variant="body1"
        textAlign={"justify"}
    >
        En la implementación de procedimientos de control de cambios del sistema se describen los pasos necesarios para
        asegurar la integridad de los sistemas, aplicaciones y productos desde las primeras etapas de diseño hasta los
        esfuerzos de mantenimiento posteriores. El proceso de cambio incluye una evaluación de riesgos, análisis de impacto
        de los cambios, especificación de controles de seguridad necesarios y una revisión exhaustiva de los procedimientos
        existentes para garantizar que no se vean comprometidos. A continuación, se listan los procedimientos a considerar:
    </Typography>
    return (
        <ListComponent title={textTitle} intro={textIntro} array={textArray}/>
    )
}