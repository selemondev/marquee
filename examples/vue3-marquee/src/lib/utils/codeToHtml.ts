import { codeToHtml } from "shiki"
import { transformerCopyButton } from "./transformerCopyButton"
export const convertCodeToHtml = async (code: string, lang: string, theme: string) => {
    return await codeToHtml(code, {
        lang,
        theme,
        transformers: [
            transformerCopyButton({
                duration: 3000,
                successIcon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M16 3h2.6A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3H8m0 11l3 3l5-7M8.8 1h6.4a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-.8.8H8.8a.8.8 0 0 1-.8-.8V1.8a.8.8 0 0 1 .8-.8'/%3E%3C/svg%3E",
                copyIcon: "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20stroke='rgba(128,128,128,1)'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20viewBox='0%200%2024%2024'%3E%3Crect%20width='8'%20height='4'%20x='8'%20y='2'%20rx='1'%20ry='1'/%3E%3Cpath%20d='M16%204h2a2%202%200%200%201%202%202v14a2%202%200%200%201-2%202H6a2%202%200%200%201-2-2V6a2%202%200%200%201%202-2h2'/%3E%3C/svg%3E",
            })
        ]
    })
}