import React ,{Component} from 'react';
import {Link} from 'react-router-dom';


const Todo = props=>(
    <tr>
        <td>{props.todo.todo_responsible}</td>
        <td>{props.todo.todo_description}</td>
        <td>{props.todo.todo_priority}</td>
        <td>
            <Link to={"/edit/"+props.todo._id}>Edit</Link>
        </td>
    </tr>
)

export default class TodosList extends Component{
    constructor(props){
        super(props);
        this.state={todos:[]};
    }
    componentDidMount(){
        fetch('http://localhost:4000/todos/')
            .then(response=>{
                return response.json();
            })
            .then(todo=>{
                this.setState({todos:todo});   
            })
            .catch((err)=>{
                console.log(err);
            })
    }
    todoList(){
        return this.state.todos.map((currentTodo,i)=>{
            return <Todo todo={currentTodo} key={i} />
        })
    }
    render(){
        return (
            <div>
                <h3>Todo List</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Actions</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.todoList()
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}