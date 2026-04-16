import type { BuiltinTheme, BundledLanguage, ShikiTransformer } from "shiki";
import type { Themes } from "@/components/ui/code-block";
import { codeToHtml } from "shiki";

export async function convertCodeToHtml(
  code: string,
  lang: BundledLanguage,
  theme: BuiltinTheme | Themes,
  transformers: ShikiTransformer[] = [],
  defaultColor?: string,
  cssVariablePrefix?: string,
) {
  if (typeof theme === "string") {
    return await codeToHtml(code.trim(), {
      lang,
      theme,
      transformers,
      defaultColor,
    });
  }

  const normalizedThemes = {
    light: theme.light,
    dark: theme.dark ?? theme.light,
  };

  return await codeToHtml(code.trim(), {
    lang,
    themes: normalizedThemes,
    transformers,
    defaultColor,
    cssVariablePrefix,
  });
}
