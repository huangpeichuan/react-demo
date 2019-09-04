import React from 'react';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value:''};

        this.handelChange = this.handelChange.bind(this);
        this.handelSubmit = this.handelSubmit.bind(this);
    }

    //change事件
    handelChange(e) {
      this.setState({value:e.target.value.toUpperCase()});
    }

    //提交事件
    handelSubmit(e) {
      alert("提交的名字："+this.state.value);
      e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handelSubmit}>
                <label>
                    名字：
                    <input type="text" value={this.state.value} onChange={this.handelChange} />
                </label>
                <input type="submit" value="提交" />
            </form>
        );
    }
}

export default NameForm;
