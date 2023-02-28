'use client';
import {Typography} from "@mui/material";
import ListComponent from "@/app/home/ListComponent";

export default function SixthPage() {
    const textArray: (JSX.Element)[] = [];
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        1. Identificar los servicios de aplicaciones críticos para el negocio y los datos que se
        transmiten a través de ellos.
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        2. Identificar las amenazas y los riesgos asociados con la transmisión de datos en
        línea, incluyendo los riesgos de intercepción, manipulación o compromiso de la
        información.
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        3. Implementar medidas de seguridad adecuadas para proteger las transacciones de
        servicios de aplicaciones, incluyendo:<br/>
        Autenticación de usuarios: Implementar métodos de autenticación seguros para verificar
        la identidad de los usuarios que acceden a los servicios de aplicaciones.<br/>
        Cifrado de datos: Utilizar algoritmos de cifrado para proteger la confidencialidad de
        los datos que se transmiten a través de los servicios de aplicaciones.<br/>
        Control de integridad de los datos: Implementar medidas para garantizar que los datos
        transmitidos no se manipulen durante la transmisión, como la firma digital o el control
        de la integridad de los datos.<br/>
        Disponibilidad: Garantizar la disponibilidad de los servicios de aplicaciones para
        garantizar que los usuarios puedan acceder a ellos cuando sea necesario.<br/>
        Monitoreo de eventos de seguridad: Implementar medidas para monitorear y registrar
        eventos de seguridad, con el fin de detectar y responder rápidamente a cualquier posible
        incidente de seguridad.<br/>
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        4. Realizar pruebas regulares de seguridad para garantizar que las medidas de seguridad
        implementadas sean efectivas y se adapten a los cambios en el entorno de seguridad.
    </Typography>);
    const textTitle = <Typography
        variant="h5"
        component="h1"
        padding={"1rem"}
        textAlign={"center"}
    >
        14.1.3 Protección de transacciones en servicios de aplicación
    </Typography>
    const textIntro = <Typography
        variant="body1"
        textAlign={"justify"}
    >
        Esta sección se enfoca en las medidas de seguridad que deben implementarse para proteger la
        información que se transmite a través de los servicios de aplicaciones, como pueden ser las
        transacciones en línea de banca, comercio electrónico, entre otros. [1]. En este apartado se
        menciona una guía para la implementación de esta sección:
    </Typography>
    return (
        <ListComponent title={textTitle} intro={textIntro} array={textArray}/>
    )
}