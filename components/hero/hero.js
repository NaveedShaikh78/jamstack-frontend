import React from "react"
import { getServerURL } from "../../lib/api"
export default class Hero extends React.Component {
    render() {
        return <div >
            <img className="image" src={this.props.hero.node.image.url} width="500" height="400" />
            <div className='overlay'>
                {this.props.hero.node.hero[0].text}
            </div>
        </div>
    }
};
