const express = require('express');
const cors = require('cors');
const swaggerDocs = require('./swagger');

const app = express();

app.use(cors());
app.use(express.json());

// Подключение маршрутов
const languagesRoutes = require('./routes/languageRoutes.js');
const tasksRoutes = require('./routes/taskRoutes.js');
const theoryRoutes = require('./routes/theoryRoutes.js');
const answersRoutes = require('./routes/answersRoutes.js');
const usersRoutes = require('./routes/userRoutes.js');
const coursesRoutes = require('./routes/courseRoutes.js');
const lessonsRoutes = require('./routes/lessonsRoutes.js');
const lessonMaterialsRoutes = require('./routes/lessonsMaterialsRoutes.js');
const quizzesRoutes = require('./routes/quizzesRoutes.js');
const quizQuestionsRoutes = require('./routes/quizQuestionsRoutes.js');
const userProgressRoutes = require('./routes/userProgressRoutes.js');
const subscriptionsRoutes = require('./routes/subscriptionRoutes.js');
const notificationsRoutes = require('./routes/notificationsRoutes.js');
const userSettingsRoutes = require('./routes/userProgressRoutes.js');
const courseReviewsRoutes = require('./routes/courseReviewRoutes.js');
const userQuizResultsRoutes = require('./routes/userQuizResultRoutes.js');
const tagsRoutes = require('./routes/tagRoutes.js');
const lessonTagsRoutes = require('./routes/lessonsTagsRoutes.js');
const achievementCriteriaRoutes = require('./routes/achievementCriteriaRoutes.js');
const userAchievementsRoutes = require('./routes/userAchievementRoutes.js');

app.use('/languages', languagesRoutes);
app.use('/tasks', tasksRoutes);
app.use('/theory', theoryRoutes);
app.use('/answers', answersRoutes);
app.use('/users', usersRoutes);
app.use('/courses', coursesRoutes);
app.use('/lessons', lessonsRoutes);
app.use('/lessonMaterials', lessonMaterialsRoutes);
app.use('/quizzes', quizzesRoutes);
app.use('/quizQuestions', quizQuestionsRoutes);
app.use('/userProgress', userProgressRoutes);
app.use('/subscriptions', subscriptionsRoutes);
app.use('/notifications', notificationsRoutes);
app.use('/userSettings', userSettingsRoutes);
app.use('/courseReviews', courseReviewsRoutes);
app.use('/userQuizResults', userQuizResultsRoutes);
app.use('/tags', tagsRoutes);
app.use('/lessonTags', lessonTagsRoutes);
app.use('/achievementCriteria', achievementCriteriaRoutes);
app.use('/userAchievements', userAchievementsRoutes);

swaggerDocs(app);

module.exports = app;