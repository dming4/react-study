import { ReactElement } from './element'
import $ from 'jquery'

class Unit {
    constructor(element) {
        //console.log(element)
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
            } else if (propName === 'style') {
                tagStart += ` ${propName}='${props[propName]}' `
            } else if (propName === 'class') {
                tagStart += ` class='${props[propName]}' `
            } else {
                tagStart += ` ${propName}='${props[propName]}' `
            }
        }

        let tagEnd = `</${type}>`

        let tag = tagStart + '>' + contentStr + tagEnd
        return ` ${tag}`
    }
}

class ReactCompositeUnit extends Unit {
    update(nextElement, partialState) {
        this.element = nextElement || this.element
        let nextState = (this._currentComponent.state = Object.assign(
            this._currentComponent.state,
            partialState
        ))
        let nextProps = this.element.props
        if (
            this._currentComponent.shouldComponentUpdate(nextProps, nextState)
        ) {
            // const preRenderUnitInstance = this._renderUnitInstance
            // const preRenderElement = this._renderUnitInstance.element

            const nextRenderElement = this._currentComponent.render()
            this._renderUnitInstance = createReactUnit(nextRenderElement)
            let nextMarkUp = this._renderUnitInstance.getMarkup(this.reactid)
            $(`[data-reactid='${this.reactid}']`).replaceWith(nextMarkUp)
        }
    }
    getMarkup(reactid) {
        this.reactid = reactid
        let { type: component, props } = this.element
        const myComp = (this._currentComponent = new component(props))
        myComp.currUnit = this
        myComp.componentWillMount && myComp.componentWillMount()
        let element = myComp.render()
        let renderUnitInstance = (this._renderUnitInstance =
            createReactUnit(element))
        let renderMarkUp = renderUnitInstance.getMarkup(reactid)
        $(document).on('mounted', () => {
            myComp.componentDidMount && myComp.componentDidMount()
        })
        return renderMarkUp
    }
}
export function createReactUnit(element) {
    let unitInstance = null
    if (typeof element === 'string' || typeof element === 'number') {
        unitInstance = new ReactTextUnit(element)
    } else if (element instanceof ReactElement && element.type === 'string') {
        unitInstance = new ReactNativeUnit(element)
    } else if (
        element instanceof ReactElement &&
        typeof element.type === 'function'
    ) {
        unitInstance = new ReactCompositeUnit(element)
    }
    return unitInstance
}

export { Unit }
