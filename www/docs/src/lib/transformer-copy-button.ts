// Inspired by shiki-transformer-copy-button (https://github.com/joshnuss/shiki-transformer-copy-button).
// Modified by adding support for display mode, code annotations removal and ARIA attributes for improved accessibility.
import type { ShikiTransformer } from "shiki";
import { h } from "hastscript";
import { buttonStyles } from "./button-styles";
import { removeCodeAnnotations } from "./remove-code-annotations";
export interface CopyButtonOptions {
  duration?: number;
  copyIcon?: string;
  successIcon?: string;
  enableDarkMode?: boolean;
  display?: "hover" | "ready";
  cssVariables?: string;
}

export function transformerCopyButton(
  options: CopyButtonOptions = {
    duration: 3000,
    display: "ready",
    enableDarkMode: false,
  },
): ShikiTransformer {
  return {
    name: "shiki-transformer-copy-button",
    code(node) {
      const button = h(
        "button",
        {
          class: "shiki-transformer-button-copy",
          role: "button",
          "aria-label": "Copy to clipboard",
          "aria-live": "polite",
          "data-code": removeCodeAnnotations(this.source),
          onclick: `
                navigator.clipboard.writeText(this.dataset.code);
                this.classList.add('shiki-transformer-button-copied');
                this.setAttribute('aria-pressed', 'true');
                setTimeout(() => { this.classList.remove('shiki-transformer-button-copied'); this.setAttribute('aria-pressed', 'false');}, ${options.duration})
                `,
        },
        [h("span", { class: "ready" }), h("span", { class: "success" })],
      );
      node.children.push(button);
      node.children.push({
        type: "element",
        tagName: "style",
        properties: {},
        children: [
          {
            type: "text",
            value: buttonStyles({
              successIcon: options.successIcon,
              copyIcon: options.copyIcon,
              display: options.display,
              enableDarkMode: options.enableDarkMode,
              cssVariables: options.cssVariables,
            }),
          },
        ],
      });
    },
  };
}
