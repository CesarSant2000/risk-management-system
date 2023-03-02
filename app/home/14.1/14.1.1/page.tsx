'use client';
import {Typography} from "@mui/material";
import ListComponent from "@/app/home/ListComponent";

export default function FourthPage() {
    const textArray: (JSX.Element)[] = [];
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        1.	Alcance y Objetivos: Identificar los objetivos de seguridad de sistemas de información,
        los cuales deben estar alineados con los objetivos de seguridad globales de la organización.
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        2.	Identificar las Partes Interesadas: Identificar todas las partes interesadas que participarán en
        el proceso de análisis y especificación de requisitos de seguridad de la información, incluyendo usuarios
        de negocios, personal de TI, profesionales de seguridad y gerencia.
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        3.	Metodología y Herramientas: Usar el modelado de amenazas STRIDE para identificar y especificar requisitos
        de seguridad de la información. En específico se ocupará la herramienta “Microsoft Threat Modeling Tool”. Esta
        herramienta se encuentra disponible en el siguiente enlace:
        <a href="https://www.microsoft.com/en-us/securityengineering/sdl/threatmodeling" target={"#"}>
            Microsoft Threat Modeling Tool
        </a>
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        4. Documentar Requisitos: Documentar todos los requisitos y controles de seguridad de la información
        redactados de en el formato especificado en el siguiente enlace: <br/>
        <a href="https://1drv.ms/w/s!Aj6AIBJZ_H9ctcAFuxvHoXam8Qneow?e=PHiUv1" target={"#"}>
            Documento de requisitos de seguridad
        </a>
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        5.	Autenticación de Usuario: Definir el nivel de confianza requerido en la identidad reclamada de los usuarios
        y derivar requisitos de autenticación de usuario en consecuencia.
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        6.	Provisión y Autorización de Acceso: Definir procesos de provisión y autorización de acceso para usuarios de
        negocios y usuarios privilegiados o técnicos, asegurando la adecuada segregación de funciones.
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        7.	Educación y Concientización del Usuario: Definir un plan de capacitación a los usuarios y operadores de sus
        deberes y responsabilidades relacionados con la seguridad de la información.
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        8.	Protección de Activos: Identificar las necesidades de protección de los activos involucrados, incluyendo
        disponibilidad, confidencialidad e integridad. Para aplicaciones que proporcionan servicios a través de redes
        públicas, considerar los controles dedicados 14.1.2 y 14.1.3.
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        9.	Requisitos de Procesos de Negocios: Identificar y derivar requisitos de procesos de negocios, como registro
        y monitoreo de transacciones, requisitos de no repudio y otros controles de seguridad.
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        10.	Pruebas y Adquisiciones: De ser el caso de necesitarlo, definir un proceso formal de pruebas y adquisiciones.
        Los contratos con el proveedor deben abordar los requisitos de seguridad identificados.
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        11.	Criterios de Aceptación: Definir criterios de aceptación para los productos, como su funcionalidad, que
        garantizará que se cumplan los requisitos de seguridad identificados. Evaluar los productos frente a estos
        criterios antes de adquirirlos.
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        12.	Revisar y actualizar los requisitos de seguridad: Finalmente, se deben revisar y actualizar regularmente los
        requisitos de seguridad para garantizar que sigan siendo relevantes y apropiados para la organización. Esto
        puede incluir la revisión de los requisitos de seguridad en función de los cambios en las políticas y regulaciones
        de seguridad, así como los cambios en los sistemas de información críticos. La regularidad de esta revisión y
        actualización dependerá del riesgo que tenga el activo a ser vulnerado.
    </Typography>);

    const textTitle = <Typography
        variant="h5"
        component="h1"
        padding={"1rem"}
        textAlign={"center"}
    >
        14.1.1. Análisis y especificación de los requisitos de seguridad
    </Typography>

    const textIntro = <Typography
        variant="body1"
        textAlign={"justify"}
    >
        La especificación de los requisitos de seguridad es un proceso clave para garantizar que los
        sistemas de información sean seguros y se ajusten a los requisitos de seguridad de la organización. En
        esta
        sección, se establecen las mejores prácticas para llevar a cabo un análisis de los requisitos de
        seguridad y para especificarlos de manera clara y completa. <br/>
        A continuación, se presenta una guía de como implementar de manera adecuada este apartado:
    </Typography>

    return (
        <ListComponent title={textTitle} intro={textIntro} array={textArray}/>
    )
}