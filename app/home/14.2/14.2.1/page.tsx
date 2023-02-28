'use client';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import {useState} from "react";
import {Divider, Typography} from "@mui/material";

const textArray: (JSX.Element)[] = [];
textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
    Seguridad del entorno de desarrollo: definir requisitos de seguridad relacionados al entorno de desarrollo, de
    tal manera que se pueda garantizar la seguridad lógica y física del sistema que se desarrollará. Se deben crear
    respaldos del sistema, aplicar políticas de control de acceso, separar los ambientes de trabajo (desarrollo,
    pruebas, operaciones y mantenimiento), etc.
</Typography>);
textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
    Seguridad en la metodología de desarrollo de software: hay algunas formas de incorporar la seguridad en el
    desarrollo de software <br/>
    - Aplicar controles y procesos en cada fase del ciclo de vida de desarrollo de software<br/>
    - Utilizar metodologías, procesos, políticas, etc. que toman en cuenta la seguridad del software, por ejemplo,
    Microsoft SDL, CLASP, SSDF, OSAA, entre otros
</Typography>);
textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
    Guías de desarrollo seguro para cada lenguaje de programación utilizado: usar las versiones más recientes del
    lenguaje de programación, importar correctamente los paquetes, comprobar exhaustivamente la seguridad de los
    paquetes antes de instalarlos, utilizar entornos virtuales como zona de trabajo, denegación por defecto para evitar
    el acceso a recursos delicados, validación de entradas, prácticas criptográficas, seguridad de bases de datos, etc.
</Typography>);
textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
    Requisitos de seguridad en la fase de diseño: definir requisitos enfocados en una arquitectura segura, técnicas
    de diseño, modelo de amenazas, plataformas e interfaz de usuario.
</Typography>);
textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
    Repositorios seguros: establecer políticas de seguridad para los repositorios, las cuales pueden enfocarse en el
    servicio, privacidad, acceso a los datos, uso de la información, etc. Por ejemplo, en GitHub, se puede crear en el
    repositorio un archivo llamado SECURITY.md, el cual instruye a los usuarios sobre la mejor manera de comunicarse y
    colaborar cuando deseen informar vulnerabilidades de seguridad en el repositorio <a target={"#"} href={"" +
    "https://docs.github.com/en/code-security/getting-started/securing-your-repository#setting-a-security-policy"}>
    repositorio</a>.</Typography>);
textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
    Seguridad en el control de versiones: utilizar un sistema de control de versiones que lleve a cabo el seguimiento
    de la información cuando se realicen cambios. Como mínimo, el sistema de control de versiones debe describir el
    cambio, registrar quién realizó el cambio, conservar la fecha/hora del cambio; recuperar versiones anteriores; y
    comparar versiones
</Typography>);
textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
    Seguridad de Aplicaciones:<br/>
    - Asignar los permisos y privilegios a roles de aplicación, nunca directamente a los usuarios.<br/>
    - La aplicación debe manejar los errores sin depender de los mensajes de error del servidor que se muestran a los
    usuarios.<br/>
    - No permitir la subida de archivos ejecutables a la aplicación.<br/>
    - Implementar controles de acceso, identificación, autenticación, autorización, cifrado.<br/>
</Typography>);
textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
    Evitar, encontrar y reparar vulnerabilidades:<br/>
    - Remover dependencias, funcionalidades, componentes, archivos y documentación innecesaria y no utilizada.<br/>
    - Monitorizar continuamente fuentes como Common Vulnerabilities and Exposures (CVE) y National Vulnerability
    Database (NVD) en búsqueda de vulnerabilidades.<br/>
    - Utilizar herramientas como, Dependency Check y retire.js, para mantener un inventario de los componentes,
    dependencias, versiones, etc., del sistema.<br/>
    - Realizar pruebas de penetración.<br/>
    - Desarrollar un plan para el tratamiento de vulnerabilidades.<br/>
    Se deben utilizar técnicas de programación segura tanto en código nuevo como en reutilizado. Además, los
    desarrolladores deben verificar que las normas de programación segura se hayan aplicado en el uso, pruebas y
    revisión de código.
</Typography>);

export default function SeventhPage() {
    const [checked, setChecked] = useState([0]);

    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <>
            <Typography
                variant="h5"
                component="h1"
                padding={"1rem"}
                textAlign={"center"}
            >
                14.2.1 Política de desarrollo seguro
            </Typography>
            <Typography
                variant="body1"
                textAlign={"justify"}
            >
                Es necesario establecer y aplicar reglas que guíen la construcción del software durante todo el ciclo de
                vida de desarrollo. Estas políticas podrán ser más o menos restrictivas de acuerdo con los objetivos y
                prioridades que tenga la organización, sin embargo, siempre se debe tomar en cuenta la seguridad como un
                requisito para construir un servicio, software, etc.
                Dentro de una política de desarrollo seguro, se deberían someter a consideración los siguientes
                aspectos:
            </Typography>
            <List sx={{width: '100%', bgcolor: 'background.paper'}}>
                {textArray.map((text, index) => {
                    const labelId = `checkbox-list-label-${index}`;

                    return (
                        <>
                            <Divider/>
                            <ListItem
                                key={index}
                                secondaryAction={
                                    <IconButton edge="end" aria-label="comments">
                                        <CommentIcon/>
                                    </IconButton>
                                }
                                disablePadding
                            >
                                <ListItemButton role={undefined} onClick={handleToggle(index)} dense>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={checked.indexOf(index) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{'aria-labelledby': labelId}}
                                        />
                                    </ListItemIcon>
                                    <ListItemText id={labelId}
                                                  primary={text}/>
                                </ListItemButton>
                            </ListItem>
                            <Divider/>
                        </>
                    );
                })}
            </List>
        </>
    )
}