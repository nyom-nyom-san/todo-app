import { useContext, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { TodoContext } from '../context/TodoContext'
import { useNavigate } from 'react-router-dom'

export default function AddTodo() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [completed, setCompleted] = useState(false)
    const setTodos = useContext(TodoContext).setTodos
    const todos = useContext(TodoContext).todos
    const navigate = useNavigate()

    return (
        <Container>
            <h1 className='my-3'>Add Todo</h1>
            <Form onSubmit={event => {
                event.preventDefault()
                setTodos([
                    ...todos,
                    { id: Date.now(), title, description, completed },
                ])
                navigate("/")
            }}>
                <Form.Group className='mb-3' controlId='title'>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type='text'
                        placeholder='Get Software Dev Job'
                        required
                    />
                </Form.Group>

                <Form.Group className='mb-3' controlId='description'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        as='textarea'
                        row={4}
                        placeholder={`1.Create amazing project\n2. Meet my Girlfriend\n3. Games with homies`}
                        required
                    />
                </Form.Group>

                <Form.Check
                    onChange={(e) => setCompleted(e.target.checked)}
                    type='checkbox'
                    id='completed'
                    checked={completed}
                    label='Mark as completed'
                    className='mb-3'
                />

                <Button variant='primary' type='submit'> Submit</Button>
            </Form>
        </Container>
    )
}