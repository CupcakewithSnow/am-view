import {useRouteError} from "react-router-dom";

interface RouteError {
    data: string;
    error: {
        columnNumber: number;
        fileName: string;
        lineNumber: number;
        message: string;
        stack: string;
    };
    internal: boolean;
    status: number;
    statusText: string;
}

export default function ErrorPage(){
    const error = useRouteError() as RouteError
    console.log(error)
    return (
        <div>{error.statusText}</div>
    )
}