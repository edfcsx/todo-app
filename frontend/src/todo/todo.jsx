import React, {Component} from 'react'
import axios from 'axios'
import PageHeader from '../template/pageHeader'
import TodoForm from '../todo/todoForm'
import TodoList from '../todo/todoList'

const URL = 'http://127.0.0.1:3003/api/todos'

export default class Todo extends Component{
    
    constructor(props){
        super(props)

        //nesse caso estamos dizendo que independente de quem chame o this
        //apontara para a classe atual todo
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)

        //Props é apenas leitura para trabalhar com estado do objeto se faz necessário  usar o objeto state
        this.state = { description : '', list: [] }
    }

    handleAdd(){
        const description = this.state.description
        console.log(description)
        axios.post(URL,{description}).then(resp => console.log(resp))
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }

    render(){
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'/>
                <TodoForm handleAdd={this.handleAdd} description={this.state.description} handleChange={this.handleChange}/>
                <TodoList/>
            </div>
        )
    }

}