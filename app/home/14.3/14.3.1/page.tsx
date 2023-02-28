'use client';
import {Typography} from "@mui/material";
import ListComponent from "@/app/home/ListComponent";

export default function ThirteenPage() {
    const textArray: (JSX.Element)[] = [];
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        1) Los procedimientos de control de acceso deben aplicarse a los sistemas de pruebas. De tal manera que todo se
        simule completamente el sistema.
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        2) Siempre que exista una copia de información con el objetivo de realizar una prueba, debera existir una
        autorización para dicha copia.
    </Typography>);
    textArray.push(<Typography variant={"body1"} textAlign={"justify"}>
        3) Toda información operaciónal, deberá ser borrada inmediatamente después de que la prueba sea efectuada.
    </Typography>);
    const textTitle = <Typography
        variant="h5"
        component="h1"
        padding={"1rem"}
        textAlign={"center"}
    >
        14.3.1 Protección de los datos de prueba
    </Typography>
    const textIntro = <Typography
        variant="body1"
        textAlign={"justify"}
    >
        Los datos de prueba tienen que ser debidamente seleccionados ya que esta información será documentada y
        reutilizada constantemente lo que genera una alta probabilidad de que sea vulnerada.<br/>
        En caso de que sea necesario utilizar información dedicada con objetivos netamente de pruebas se deberá seguir
        remover o modificar toda la información que sea privada.<br/>
        Las siguientes recomendaciones se deben aplicar cuando la información que se busca proteger tiene el objetivo de
        pruebas/testing.<br/>
    </Typography>
    return (
        <ListComponent title={textTitle} intro={textIntro} array={textArray}/>
    )
}