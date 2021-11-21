export class ReactElement {
    constructor(type, props) {
        this.type = type
        this.props = props
    }
}

/**
 * 返回虚拟dom，用对象描述dom
 * 
 * 
let element = <div id='xxx'>
                    hello react 
                    <button>click</button>
                </div>
 
let element=React.createElement('div', {id:'xxx'}, 'hello react',React.createElement('button',{},'click'))
{
    type:'div',
    props:{ id:'xxx'
            children:[
               'hello react',{
                   type:'button',
                   props:{
                       children:['click']
                   }
               }
            ]
    }
}


 * @param {*} element 
 * @param {*} props 
 * @param  {...any} children 
 */
export function createElement(type, props, ...children) {
    props = props || {}
    props.children = children
    let e = new ReactElement(type, props)
    return e
}
