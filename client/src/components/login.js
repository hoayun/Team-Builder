import React, {Component} from "react"
import { login } from "./UserFunctions"

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            errors: {}
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(e) {
        this.setState
    }
}