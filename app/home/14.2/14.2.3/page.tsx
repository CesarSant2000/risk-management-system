'use client';
import {Typography} from "@mui/material";
import ListComponent from "@/app/home/ListComponent";

export default function NinePage() {
    const textArray: (JSX.Element)[] = [];
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        1. Revisión de los procedimientos de control y de integridad de las aplicaciones para asegurarse de que no han
        sido comprometidos por los cambios en el sistema operativo.<br/>
        Para comprobar que la integridad de las aplicaciones no se ha visto comprometida se debería realizar una
        auditoría interna. Con la cual se podrá definir qué aplicaciones y datos se revisarán y en qué medida, verificar
        que las aplicaciones funcionan correctamente, que los datos estén completos, como se están procesando los datos,
        niveles de acceso, privilegios, control de cambios, seguridad de la aplicación, etc.
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        2. Realización de cambios necesarios en los planes de continuidad del negocio:<br/>
        La organización debería determinar si la continuidad de la seguridad de la información queda dentro del proceso
        de continuidad del negocio o dentro del proceso de gestión de la recuperación de desastres [ISO27002]. <br/>
        Para modificar el plan de continuidad del negocio se deberá:<br/>
        a. Identificar las amenazas y ordenarlas según su probabilidad de ocurrencia.<br/>
        b. Realizar un análisis del impacto que generan las amenazas en la empresa.<br/>
        c. Crear un plan de respuesta y recuperación.<br/>
        d. Probar el plan al menos una vez al año.<br/>

    </Typography>);
    const textTitle = <Typography
        variant="h5"
        component="h1"
        padding={"1rem"}
        textAlign={"center"}
    >
        14.2.3 Revisión técnica de las aplicaciones tras efectuar cambios en el sistema operativo
    </Typography>
    const textIntro = <Typography
        variant="body1"
        textAlign={"justify"}
    >
        Si se modifican los sistemas operativos, las aplicaciones de negocio críticas deberán ser revisadas y aprobadas
        para garantizar que no existen efectos adversos en las operaciones o la seguridad de la organización.<br/>
        A continuación, se presenta una guía de como implementar de manera adecuada este apartado:<br/>

    </Typography>
    return (
        <ListComponent title={textTitle} intro={textIntro} array={textArray}/>
    )
}