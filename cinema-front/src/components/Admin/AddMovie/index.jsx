import { Modal, Button, Form, Input } from 'antd';
import { useState } from 'react';
import { postFilm } from '../../../APIs/filmAPI';
import styles from './addFilm.module.css'

const AddMovie = ({flag, setFlag}) => {

  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState('');
  const [coeficient, setCoeficient] = useState(1);
  const [country, setCountry] = useState('');
  const [year, setYear] = useState('');

 const successModal = () => {
   Modal.success({
     content: `Фильм "${title}" успешно добавлен`
   })
 }

  const onHandleSubmit = async () => {
   try{
     await postFilm(title, duration, coeficient, year, country)
     successModal()
     setFlag(!setFlag)
   } catch (e){
     Modal.error({content: 'Произошла ошибка, перепроверьте данные или попробуйте позже'})
   }

  }

  return(
      <Form
        onFinish={onHandleSubmit}
        className={styles.addMovieForm}
      >
        <Form.Item label="Название">
          <Input value={title} onChange={(e) => setTitle(e.target.value)}/>
        </Form.Item>
        <Form.Item label="Длительность">
          <Input value={duration} onChange={(e) => setDuration(e.target.value)} addonAfter="мин"/>
        </Form.Item>
        <Form.Item label="Коэфициент">
          <Input value={coeficient} onChange={(e) => setCoeficient(e.target.value)}/>
        </Form.Item>
        <Form.Item label="Страна">
          <Input value={country} onChange={(e) => setCountry(e.target.value)}/>
        </Form.Item>
        <Form.Item label="Год">
          <Input value={year} onChange={(e) => setYear(e.target.value)}/>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Отправить
          </Button>
        </Form.Item>
      </Form>
  )
}

export default AddMovie;
