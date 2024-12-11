const express = require('express');
const cors = require('cors');
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
app.use(express.json());

// Подключение маршрутов
const languagesRoutes = require('./languageService');
const tasksRoutes = require('./taskService');
const theoryRoutes = require('./theoryService');
const answersRoutes = require('./answersService');
const usersRoutes = require('./userService');
const coursesRoutes = require('./courseService');
const lessonsRoutes = require('./lessonsService');
const lessonMaterialsRoutes = require('./lessonsMaterialsService');
const quizzesRoutes = require('./quizzesService');
const quizQuestionsRoutes = require('./quizQuestionsService');
const userProgressRoutes = require('./progressService');
const subscriptionsRoutes = require('./subscriptionService');
const notificationsRoutes = require('./notificationsService');
const userSettingsRoutes = require('./settingsService');
const courseReviewsRoutes = require('./courseService');
const userQuizResultsRoutes = require('./userQuizResultService');
const tagsRoutes = require('./tagService');
const lessonTagsRoutes = require('./lessonsTagsService');
const achievementCriteriaRoutes = require('./AchievementCriteriaService');
const userAchievementsRoutes = require('./userAchievementService');

app.use('/api', languagesRoutes(pool));
app.use('/api', tasksRoutes(pool));
app.use('/api', theoryRoutes(pool));
app.use('/api', answersRoutes(pool));
app.use('/api', usersRoutes(pool));
app.use('/api', coursesRoutes(pool));
app.use('/api', lessonsRoutes(pool));
app.use('/api', lessonMaterialsRoutes(pool));
app.use('/api', quizzesRoutes(pool));
app.use('/api', quizQuestionsRoutes(pool));
app.use('/api', userProgressRoutes(pool));
app.use('/api', subscriptionsRoutes(pool));
app.use('/api', notificationsRoutes(pool));
app.use('/api', userSettingsRoutes(pool));
app.use('/api', courseReviewsRoutes(pool));
app.use('/api', userQuizResultsRoutes(pool));
app.use('/api', tagsRoutes(pool));
app.use('/api', lessonTagsRoutes(pool));
app.use('/api', achievementCriteriaRoutes(pool));
app.use('/api', userAchievementsRoutes(pool));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});