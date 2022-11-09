import './App.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function App() {
  const styles = [];

  const list = {
    weak: ['Слабые толчки', '2.8 - 4.3'],
    moderate: ['Умеренные	толчки ', '4.3 - 4.8'],
    strong: ['Сильные толчки ', '4.8 - 6.2'],
    veryStrong: ['Очень сильные толчки ', '6.2 - 7.3'],
    catastrophic: ['Катастрофические толчки ', '7.3 - 9.0'],
  };

  const [answerText, setAnswerText] = useState('Нет данных...');
  const [textFrom, setTextFrom] = useState('');
  const [color, setColor] = useState('success');

  const result = (textFrom) => {
    if (textFrom >= 2.8 && textFrom <= 4.3) {
      setAnswerText(list.weak[0]);
      setTextFrom('');
      setColor('success');
    }
    if (textFrom >= 4.3 && textFrom <= 4.8) {
      setAnswerText(list.moderate[0]);
      setTextFrom('');
      setColor('success');
    }
    if (textFrom >= 4.8 && textFrom <= 6.2) {
      setAnswerText(list.strong[0]);
      setTextFrom('');
      setColor('success');
    }
    if (textFrom >= 6.2 && textFrom <= 7.3) {
      setAnswerText(list.veryStrong[0]);
      setTextFrom('');
      setColor('success');
    }
    if (textFrom >= 7.3 && textFrom <= 9.0) {
      setAnswerText(list.catastrophic[0]);
      setTextFrom('');
      setColor('warning');
    }
    if (textFrom < 2.7 || textFrom > 9.1) {
      setAnswerText('Нет данных...');
      setTextFrom('');
      setColor('secondary');
    }
  };

  const keyEnter = (event) => {
    if (event.key === 'Enter') {
      result(textFrom);
    }
  };

  const valueTextOne = (event) => {
    setTextFrom(event.target.value);
  };

  return (
    <div className='App'>
      <Grid
        container
        spacing={0}
        sx={{
          maxWidth: '500px',
          margin: '0 auto',
          padding: '15px',
          borderRadius: '5px',
          border: '1px solid',
          boxShadow: '0 0 10px rgba(0,0,0,0.8)',
        }}
      >
        <Grid item xs={12}>
          <Box>
            <h2>Измерения величины событий</h2>
          </Box>
          <Box>
            <TextField
              sx={{ margin: '0 0 25px 0', fontSize: '4em' }}
              className='dispaly-info'
              id='outlined-read-only-input'
              variant='outlined'
              value={answerText}
              InputProps={{
                readOnly: true,
              }}
              color={color}
              focused
            />
          </Box>
          <Box>
            <Box className='text'>
              <TextField
                onKeyDown={keyEnter}
                onChange={valueTextOne}
                id='outlined-basic'
                label='Значение'
                variant='outlined'
                value={textFrom}
              />
              <Box>
                <h3>Введите значение магнитуд М, по Рихтеру, единицы</h3>
              </Box>
            </Box>
            <Box>
              <Button
                onClick={() => result(textFrom)}
                sx={{ marginTop: '25px', padding: '15px 0' }}
                className='buttStart'
                variant='contained'
              >
                Проверить
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
