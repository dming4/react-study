import React from './react'
// let element = 'hello react'
// React.render("hello react", document.getElementById('root'))

// let element = <div id='xxx'>hello react <button>click</button></div>

// let element=React.createElement('div', "{id:'xxx'}", 'hello react')

// {
//     type:'div',
//     props:{ id:'xxx'
//             children:[
//                'hello react',{
//                    type:'button',
//                    props:{
//                        children:['click']
//                    }
//                }
//             ]
//     }
// }

let element1 = React.createElement(
    'div',
    { id: 'data-reactid1' },
    'hello world',
    React.createElement('span', {}, '你好'),
    React.createElement('button', {}, 'click me')
)
console.log(element1, 'element1')

/**
 *
 * https://www.babeljs.cn/
 *
 */
const say = function () {
    alert('hello')
}
// let element = React.createElement(
//     'div',
//     { id: 'xxx' },
//     'hello react',
//     React.createElement('button', { onClick: say }, 'click')
// )

// let element = React.createElement(
//     'div',
//     React.createElement('button', { onClick: say }, 'click')
// )
// console.log(element, 'element')
// React.render(element, document.getElementById('root'))
