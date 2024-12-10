const express = require('express');
const cors = require("cors");
const mysql = require('mysql2/promise');

const app = express();
const port = 3001;

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'kurs'
});

app.use(cors());
app.use(express.json()); // Чтобы обрабатывать JSON запросы

// Получение всех языков программирования
app.get('/api/languages', async (req, res) => {
  try {
    const [data] = await pool.execute('SELECT * FROM languages');
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Получение всех задач
app.get('/api/tasks', async (req, res) => {
  try {
    const [data] = await pool.execute('SELECT * FROM tasks');
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Получение теоретических разделов по идентификатору языка
app.get("/api/theory", async (req, res) => {
  try {
    const languageId = req.query.id_languages;
    const [data] = await pool.execute(
      "SELECT * FROM theorysections WHERE id_languages = ?",
      [languageId]
    );
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Получение ответов на задачи по идентификатору задачи
app.get("/api/answers", async (req, res) => {
  try {
    const taskId = req.query.id_task;
    const [data] = await pool.execute(
      "SELECT * FROM taskanswers WHERE id_task = ?",
      [taskId]
    );
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Получение всех пользователей
app.get('/api/users', async (req, res) => {
  try {
    const [data] = await pool.execute('SELECT * FROM users');
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Получение всех курсов
app.get('/api/courses', async (req, res) => {
  try {
    const [data] = await pool.execute('SELECT * FROM courses');
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Получение всех уроков
app.get('/api/lessons', async (req, res) => {
  try {
    const [data] = await pool.execute('SELECT * FROM lessons');
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Получение материалов урока по идентификатору урока
app.get('/api/lesson-materials', async (req, res) => {
  try {
    const lessonId = req.query.id_lesson;
    const [data] = await pool.execute(
      'SELECT * FROM lesson_materials WHERE id_lesson = ?',
      [lessonId]
    );
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Получение всех квизов
app.get('/api/quizzes', async (req, res) => {
  try {
    const [data] = await pool.execute('SELECT * FROM quizzes');
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Получение вопросов квиза по идентификатору квиза
app.get('/api/quiz-questions', async (req, res) => {
  try {
    const quizId = req.query.id_quiz;
    const [data] = await pool.execute(
      'SELECT * FROM quiz_questions WHERE id_quiz = ?',
      [quizId]
    );
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Получение прогресса пользователя по идентификатору пользователя
app.get('/api/user-progress', async (req, res) => {
  try {
    const userId = req.query.id_user;
    const [data] = await pool.execute(
      'SELECT * FROM user_progress WHERE id_user = ?',
      [userId]
    );
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Получение подписок пользователя по идентификатору пользователя
app.get('/api/subscriptions', async (req, res) => {
  try {
    const userId = req.query.id_user;
    const [data] = await pool.execute(
      'SELECT * FROM subscriptions WHERE id_user = ?',
      [userId]
    );
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Получение уведомлений пользователя по идентификатору пользователя
app.get('/api/notifications', async (req, res) => {
  try {
    const userId = req.query.id_user;
    const [data] = await pool.execute(
      'SELECT * FROM notifications WHERE id_user = ?',
      [userId]
    );
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Получение настроек пользователя по идентификатору пользователя
app.get('/api/user-settings', async (req, res) => {
  try {
    const userId = req.query.id_user;
    const [data] = await pool.execute(
      'SELECT * FROM user_settings WHERE id_user = ?',
      [userId]
    );
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Получение отзывов о курсах по идентификатору курса
app.get('/api/course-reviews', async (req, res) => {
  try {
    const courseId = req.query.id_course;
    const [data] = await pool.execute(
      'SELECT * FROM course_reviews WHERE id_course = ?',
      [courseId]
    );
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Получение результатов тестирования пользователя по идентификатору пользователя
app.get('/api/user-quiz-results', async (req, res) => {
  try {
    const userId = req.query.id_user;
    const [data] = await pool.execute(
      'SELECT * FROM user_quiz_results WHERE id_user = ?',
      [userId]
    );
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Получение всех тегов
app.get('/api/tags', async (req, res) => {
  try {
    const [data] = await pool.execute('SELECT * FROM tags');
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Получение тегов урока по идентификатору урока
app.get('/api/lesson-tags', async (req, res) => {
  try {
    const lessonId = req.query.id_lesson;
    const [data] = await pool.execute(
      'SELECT * FROM lesson_tags WHERE id_lesson = ?',
      [lessonId]
    );
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Получение всех критериев достижений
app.get('/api/achievement-criteria', async (req, res) => {
  try {
    const [data] = await pool.execute('SELECT * FROM achievement_criteria');
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Получение достижений пользователя по идентификатору пользователя
app.get('/api/user-achievements', async (req, res) => {
  try {
    const userId = req.query.id_user;
    const [data] = await pool.execute(
      'SELECT * FROM user_achievements WHERE id_user = ?',
      [userId]
    );
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});