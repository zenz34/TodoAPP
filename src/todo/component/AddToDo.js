import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/action";

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { input: "" };
    }

    inputOnChange = (input) => {
        this.setState({ input });
    };

    addTodo = () => {
        this.props.addTodo(this.state.input);
        this.setState({ input: "" });
    };

    render() {
        return (
            <div>
                <input
                    onChange={(e) => this.inputOnChange(e.target.value)}
                    value={this.state.input}
                />
                <button onClick={this.addTodo}>
                    Add Todo
                </button>
            </div>
        );
    }
}

export default connect(null, { addTodo })(AddTodo);
