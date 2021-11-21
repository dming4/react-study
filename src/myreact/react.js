import { createReactUnit } from './unit'
import { createElement } from './element'
import Component from './component'
import $ from 'jquery'
const React = {
    Component,
    render,
    createElement,
}
function render(element, container) {
    let rootIndex = 0

    let reactUnit = createReactUnit(element)

    const htmlstring = reactUnit.getMarkup(rootIndex)

    console.log(htmlstring, 'htmlstring')
    container.innerHTML = htmlstring
    $(document).trigger('mounted')
}

export default React
