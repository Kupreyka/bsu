import React from "react";

export class StatusContainer extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activeEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    inactiveEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateProfileStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div className="status">
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activeEditMode}>{this.props.status || 'Установить статус'}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.inactiveEditMode} type="text"
                           value={this.state.status}/>
                </div>
                }
            </div>
        )
    }
}