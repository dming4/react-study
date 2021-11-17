import { ReactElement } from './element'

class Unit {
    constructor(element) {
        console.log(element)
        this.element = element
    }
}

class ReactTextUnit extends Unit {
    getMarkup(rootIndex) {
        return `<span data-reactid=${rootIndex}>${this.element}</span>`
        //  return this.element
    }
}

/**
let element = React.createElement('div', "{id:'xxx'}", 'hello react')
 * 
 */
class ReactNativeUnit extends Unit {
    getMarkup(rootIndex) {
        let { type, props } = this.element

        let tagStart = `<${type}  data-reactid=${rootIndex}`
        let contentStr = ''
        for (const propName in props) {
            if (/^on[A-Z]/.test(propName)) {
                document.addEventListener('click', (e) => {
                    if (e.target.dataset.reactid === rootIndex) {
                        props[propName]()
                    }
                })
                // oBtn.onclick = function () {
                //     props[propName]()
                // }
            } else if (propName === 'children') {
                contentStr = props[propName]
                    .map((child, idx) => {
                        return createReactUnit(child).getMarkup(
                            rootIndex + '.' + idx
                        )
                    })
                    .join('')
            } else {
                tagStart += ` ${propName}='${props[propName]}' `
            }
        }

        let tagEnd = `</${type}>`

        let tag = tagStart + '>' + contentStr + tagEnd
        return ` ${tag}`
    }
}

export function createReactUnit(element) {
    let unitInstance = null
    if (typeof element === 'string' || typeof element === 'number') {
        unitInstance = new ReactTextUnit(element)
    }
    if (element instanceof ReactElement || element.type === 'string') {
        unitInstance = new ReactNativeUnit(element)
    }
    return unitInstance
}

export { Unit, ReactTextUnit, ReactNativeUnit }
