import React, { useState } from "react"
import { Typography, Card, CardContent, TextField, TextareaAutosize, Button } from "@mui/material"


type Props = {}
type Review = {
    name: string
    text: string
}
const Rewievs = (props: Props) => {
    const arrReviews: Review[] = [
        {
            name: 'Alex',
            text: '– Мужчина, я можу вам чимось допомогти?– Так, мені потрібен подарунок на 8 Березня!– Вам треба щось дорожче, я вас правильно зрозуміла?– Чому ви так вирішили?– Ну, це з урахуванням того, що сьогодні вже 24-е березня …',
        },
        {
            name: 'Tanny',
            text: 'Одеса. З маршрутки виходить турист і запитує перехожого.Скажіть, а де ж ваша знаменита Дерибасівська? Так це вам ще чотири зупинки проїхати потрібно!-А мені в маршрутці сказали, що мені зараз виходити!-Пробачте, а Ви стояли чи сиділи?.',
        },
        {
            name: 'Olha',
            text: 'Найдовша і захоплююча подорож починається зі слів “Я знаю коротку дорогу!” ',
        },
    ]

    const [reviews, setReviews] = useState<Review[]>(arrReviews)
    const [newReview, setNewReview] = useState<Review>({
        name: " ",
        text: " ",
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState: Review) => ({
            ...prevState,
            name: e.target.value,
        }) )
    }

      const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
          setNewReview((prevState: Review) => ({
              ...prevState,
              text: e.target.value,
          }))
    }
    
    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.name === "" || newReview.text === "") {
            alert("All fields are  required")
        } else {
            setReviews((prevState: Review[]) => {
                return [...prevState, newReview]
            })
            setNewReview({
                name: "",
                text:"",
            })
        }
    }

  return (
      <>
          <Typography
              variant="h4"
              component={'h2'}
              sx={{
                  margin: '50px 0',
              }}
          >
              {' '}
              Rewievs{' '}
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
              <h3> Please leave a review</h3>
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
                      style={{ width: 400 }}
                      placeholder="Your text"
                      value={newReview.text}
                      onChange={handleText}
                  />
              </div>
              <Button type="submit" variant="outlined">
                  {' '}
                  Send{' '}
              </Button>
          </form>
      </>
  )
}
export default Rewievs