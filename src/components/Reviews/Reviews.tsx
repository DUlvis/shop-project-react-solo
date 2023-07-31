import {
    Typography,
    Card,
    CardContent,
    TextField,
    TextareaAutosize,
    Button,
} from '@mui/material'
import { useState } from 'react'

type Props = {}

type Review = {
    name: string
    text: string
}

const Reviews = (props: Props) => {
    const arrReviews: Review[] = [
        {
            name: 'Jack',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, sequi.',
        },
        {
            name: 'Ann',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, sequi.',
        },
    ]

    const [reviews, setReviews] = useState<Review[]>(arrReviews)
    const [newReview, setNewReview] = useState<Review>({
        name: '',
        text: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState: Review) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState: Review) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.name === '' || newReview.text === '') {
            alert('All fields are required!')
        } else {
            setReviews((prevState: Review[]) => {
                return [...prevState, newReview]
            })
            setNewReview({
                name: '',
                text: '',
            })
        }
    }

    return (
        <>
            <Typography
                variant="h4"
                component={'h2'}
                sx={{
                    margin: '30px 0',
                }}
            >
                Reviews
            </Typography>
            {reviews.map(({ name, text }: Review, i) => (
                <Card
                    variant="outlined"
                    key={i}
                    sx={{
                        margin: '30px 0',
                    }}
                >
                    <CardContent>
                        <div>Name: {name}</div>
                        <div>{text}</div>
                    </CardContent>
                </Card>
            ))}
            <form onSubmit={onSend}>
                <h3>Please leave a review</h3>
                <div>
                    <TextField
                        size="small"
                        placeholder="Your name"
                        value={newReview.name}
                        onChange={handleName}
                    />
                </div>
                <br />
                <div>
                    <TextareaAutosize
                        minRows={5}
                        placeholder="Your text"
                        value={newReview.text}
                        onChange={handleText}
                    />
                </div>
                <Button type="submit" variant="outlined">
                    Send
                </Button>
            </form>
        </>
    )
}

export default Reviews
