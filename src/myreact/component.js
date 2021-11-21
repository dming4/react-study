class Component {
    constructor(props) {
        this.props = props
    }
    setState(partialState) {
        this.currUnit.update(null, partialState)
    }
}

export default Component
