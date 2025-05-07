import { toast } from 'react-toastify';

export const handleSuccess = (msg:string) => {
    toast.success(msg, {
        position: 'top-right'
    })
}

export const handleError = (err:string | Error) => {
    const message = typeof err === "string" ? err : err.message;
    toast.error(message, {
        position: 'top-right'
    })
}