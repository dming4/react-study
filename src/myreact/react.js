import { createReactUnit } from './unit'
import { createElement } from './element'
class React {
    static render(element, container) {

        let reactUnit = createReactUnit(element)

        const htmlstring = reactUnit.getMarkup();

        console.log(htmlstring, 'htmlstring')
        container.innerHTML = htmlstring

    }

    static createElement(element, props, ...children) {
        return createElement(element, props, ...children)
    }
}

// function render(element, container) {
//     let reactUnit = createReactUnit(element)

//     const htmlstring = reactUnit.getMarkup();
//     container.innerHTML = htmlstring

// }

export default React