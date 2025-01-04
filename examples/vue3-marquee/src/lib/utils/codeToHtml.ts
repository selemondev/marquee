import { codeToHtml } from "shiki"
export const convertCodeToHtml = async (code: string, lang: string, theme: string) => {
    return await codeToHtml(code, {
        lang,
        theme
    })
}