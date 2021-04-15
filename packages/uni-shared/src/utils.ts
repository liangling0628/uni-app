export function getLen(str = '') {
  return ('' + str).replace(/[^\x00-\xff]/g, '**').length
}

export function removeLeadingSlash(str: string) {
  return str.indexOf('/') === 0 ? str.substr(1) : str
}

export const invokeArrayFns = (fns: Function[], arg?: any) => {
  let ret
  for (let i = 0; i < fns.length; i++) {
    ret = fns[i](arg)
  }
  return ret
}

export function updateElementStyle(
  element: HTMLElement,
  styles: Partial<CSSStyleDeclaration>
) {
  for (const attrName in styles) {
    element.style[attrName] = styles[attrName]!
  }
}
