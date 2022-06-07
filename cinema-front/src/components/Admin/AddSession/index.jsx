import { Form, Radio, Select, DatePicker, Button, Modal } from 'antd';
import { useEffect, useState } from 'react';
import { getFilms } from '../../../APIs/filmAPI';
import styles from './addSession.module.css';
import { postSession } from '../../../APIs/sessionAPI';

const { Option } = Select;

const AddSession = ({flag}) => {
  const [films, setFilms] = useState([]);
  const [movie, setMovie] = useState('');
  const [auditorium, setAuditorium] = useState(1);
  const [time, setTime] = useState('');

  useEffect(async () => {
    setFilms(await getFilms())
  }, [flag]);

  function range(start, end) {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }

  function disabledDateTime() {
    return {
      disabledSeconds: () => range(0, 59),
    };
  }
  const successModal = () => {
    Modal.success({
      content: "Сеанс успешно создан"
    })
  }

  const onHandleSubmit = async () => {
      await postSession(time, movie, auditorium);
  }

  return(
    <Form
      onFinish={onHandleSubmit}
      className={styles.addSessionForm}
    >
      <Form.Item label="Фильм">
        <Select onChange={(value, option) => setMovie(option.id)}>
          {films.map(film => <Option id={film.id} key={film.id} >{film.title}</Option>)}
        </Select>
      </Form.Item>
      <Form.Item label="Зал">
        <Radio.Group value={auditorium} onChange={(e) => setAuditorium(e.target.value)}>
          <Radio.Button value="1">1</Radio.Button>
          <Radio.Button value="2">2</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Время сеанса">
        <DatePicker
          showTime
          onOk={(value) => setTime(value._d.toUTCString())}
          disabledTime={disabledDateTime}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Отправить
        </Button>
      </Form.Item>
    </Form>
  )
}

export default AddSession;
