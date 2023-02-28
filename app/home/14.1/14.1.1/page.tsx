'use client';
import {Typography} from "@mui/material";
import ListComponent from "@/app/home/ListComponent";

export default function FourthPage() {
    const textArray: (JSX.Element)[] = [];
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        1. Identificar los sistemas de información críticos: La primera etapa del plan es
        identificar los sistemas de información críticos para la organización, es decir,
        aquellos que contienen información confidencial o sensible. Esto incluye sistemas que
        manejen información financiera, de recursos humanos o de propiedad intelectual.
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        2. Definir los requisitos de seguridad: A continuación, se deben definir los requisitos
        de seguridad para cada uno de los sistemas identificados. Esto implica identificar los
        riesgos de seguridad asociados con cada sistema y establecer las medidas de seguridad
        necesarias para proteger la información contenida en ellos.
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        3. Clasificar los requisitos de seguridad: Una vez que se han definido los requisitos de
        seguridad, se deben clasificar en las diferentes categorías confidencialidad, integridad
        y disponibilidad.
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        4. Analizar los requisitos de seguridad: Se debe realizar un análisis detallado de cada
        uno de los requisitos de seguridad identificados para determinar si son alcanzables,
        medibles y verificables.
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        5. Especificar los requisitos de seguridad: Después de analizar los requisitos de
        seguridad, se deben especificar de manera clara y completa, incluyendo los criterios de
        aceptación y las medidas de verificación. Esto es crucial para garantizar que los
        proveedores externos comprendan y cumplan con los requisitos de seguridad de la
        organización.
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        6. Documentar los requisitos de seguridad: Los requisitos de seguridad deben ser
        documentados en un formato adecuado para garantizar su comprensión y uso por parte de
        los proveedores externos y otros interesados. Se debe crear un registro de requisitos de
        seguridad y mantenerlo actualizado.
        Este formato lo puedes encontrar en el siguiente enlace: <br/>
        <a href="https://1drv.ms/w/s!Aj6AIBJZ_H9ctcAFuxvHoXam8Qneow?e=PHiUv1" target={"#"}>
            Documento de requisitos de seguridad
        </a>
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        7. Revisar y actualizar los requisitos de seguridad: Finalmente, se deben revisar y
        actualizar regularmente los requisitos de seguridad para garantizar que sigan siendo
        relevantes y apropiados para la organización. Esto puede incluir la revisión de los
        requisitos de seguridad en función de los cambios en las políticas y regulaciones de
        seguridad, así como los cambios en los sistemas de información críticos. La regularidad
        de esta revisión y actualización dependerá del riesgo que tenga el activo a ser
        vulnerado.
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