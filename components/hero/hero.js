import React from "react"
import styles from "./hero.module.css"
export default class Hero extends React.Component {
    render() {
        return <div className={styles.container}>
            <img className={styles.image} src={this.props.hero.node.image.url} width="500" height="400" />
            <div className={styles.overlay}>
                {this.props.hero.node.hero[0].text}
            </div>
        </div>
    }
};
