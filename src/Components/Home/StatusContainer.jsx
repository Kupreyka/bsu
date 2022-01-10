import React from "react";

export class StatusContainer extends React.Component {

    state = {
        editMode: false
    }

    activeEditMode = () => {
        this.state.editMode = true;
        this.setState({
            editMode: true
        })
    }

    inactiveEditMode = () => {
        this.state.editMode = false;
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div className="status">
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activeEditMode}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.inactiveEditMode} type="text" value={this.props.status}/>
                </div>
                }
            </div>
        )
    }
}