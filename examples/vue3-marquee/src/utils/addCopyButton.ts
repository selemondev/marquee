// https://github.com/joshnuss/shiki-transformer-copy-button
import { h } from 'hastscript'

interface CopyButtonOptions {
    toggle?: number;
}

export function addCopyButton(code: string, options: CopyButtonOptions = {}) {
    const toggleMs = options.toggle || 3000

    return {
        name: 'shiki-transformer-copy-button',
        pre(node: any) {
            const button = h('button', {
                class: 'copy',
                "data-code": code,
                onclick: `
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add('copied');
          setTimeout(() => this.classList.remove('copied'), ${toggleMs})
        `
            }, [
                h('span', { class: 'ready' }),
                h('span', { class: 'success' })
            ])

            node.children.push(button)
        }
    }
}