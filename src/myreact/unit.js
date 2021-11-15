import { ReactElement } from './element'

class Unit {
    constructor(element) {
        console.log(element)
        this.element = element
    }
}

class ReactTextUnit extends Unit {
    getMarkup() {
        // return `<span data-reactid=0>${this.element}</span>`
        return this.element
    }
}

/**
let element = React.createElement('div', "{id:'xxx'}", 'hello react')
 * 
 */
class ReactNativeUnit extends Unit {
    getMarkup() {
        let { type, props } = this.element

        let tagStart = `<${type}`
        let contentStr = ''
        for (const propName in props) {
            if (propName === 'children') {
                contentStr = props[propName]
                    .map((child, idx) => {
                        return createReactUnit(child).getMarkup()
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
