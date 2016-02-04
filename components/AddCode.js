import React, { Component, PropTypes } from 'react'

export default class AddCode extends Component {
  handleSubmit(e) {
    e.preventDefault()
    const node_code = this.refs.code;
    const node_name = this.refs.userName;
    const code = node_code.value.trim();
    const name = node_name.value.trim() || 'Anonymous';
    if (code) {
      this.props.onAddSubmit({code: code, name: name})
      node_code.value = ''
      node_name.value = ''
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <textarea className="post-code" placeholder="Post your code" ref="code">
          </textarea>
          <input className="post-user-name" type="text" placeholder="Your Name" ref="userName" />
          <div>
            <input type="submit" className="btn btn-add" value="POST" />
          </div>
        </form>
      </div>
    )
  }
}

AddCode.propTypes = {
  onAddSubmit: PropTypes.func.isRequired
}
