'use client';
import {Typography} from "@mui/material";
import ListComponent from "@/app/home/ListComponent";

export default function TenthPage() {
    const textArray: (JSX.Element)[] = [];
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        1. El riesgo de que se vean comprometidos los controles incorporados y los procesos de integridad;
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        2. Si debe obtenerse el consentimiento del proveedor;
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        3. La posibilidad de obtener los cambios requeridos del proveedor como actualizaciones estándar del programa;
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        4. El impacto si la organización se hace responsable del futuro mantenimiento del software como resultado de los
        cambios;
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        5. Compatibilidad con otro software en uso.
    </Typography>);
    const textTitle = <Typography
        variant="h5"
        component="h1"
        padding={"1rem"}
        textAlign={"center"}
    >
        14.2.4 Restricciones a los cambios de los paquetes de software
    </Typography>
    const textIntro = <Typography
        variant="body1"
        textAlign={"justify"}
    >
        Se deben tener restricciones al realizar cambios en un paquete de software, dado que existe la posibilidad de
        inyectar nuevas amenazas para la seguridad. Es por ello que tanto se recomienda no realizar modificaciones en
        los paquetes de software, y si se realizan deben limitarse los cambios y ser estrictamente controlados. Además,
        en el caso que un software, por fuerza mayor, deba modificarse se deben tener en cuenta lo siguiente:<br/>
    </Typography>
    return (
        <ListComponent title={textTitle} intro={textIntro} array={textArray}/>
    )
}