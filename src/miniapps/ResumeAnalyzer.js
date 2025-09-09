import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ResumeAnalyzer = () => {
  const { i18n } = useTranslation();
  const [uploadedFile, setUploadedFile] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const [activeTab, setActiveTab] = useState('upload');

  const isRussian = i18n.language === 'ru';

  const mockAnalysis = {
    score: 85,
    strengths: isRussian ? [
      'Четкая структура резюме',
      'Релевантный опыт работы',
      'Хорошее образование',
      'Актуальные навыки',
      'Профессиональные достижения'
    ] : [
      'Clear resume structure',
      'Relevant work experience',
      'Good educational background',
      'Up-to-date skills',
      'Professional achievements'
    ],
    improvements: isRussian ? [
      'Добавить больше количественных показателей',
      'Улучшить описание достижений',
      'Добавить ключевые слова для ATS',
      'Включить больше технических навыков'
    ] : [
      'Add more quantifiable metrics',
      'Improve achievement descriptions',
      'Add ATS-friendly keywords',
      'Include more technical skills'
    ],
    skills: {
      technical: isRussian ? [
        'JavaScript', 'Python', 'React', 'Node.js', 'SQL', 'Git'
      ] : [
        'JavaScript', 'Python', 'React', 'Node.js', 'SQL', 'Git'
      ],
      soft: isRussian ? [
        'Командная работа', 'Лидерство', 'Коммуникация', 'Решение проблем'
      ] : [
        'Teamwork', 'Leadership', 'Communication', 'Problem Solving'
      ]
    },
    experience: {
      totalYears: 5,
      roles: isRussian ? [
        'Frontend Разработчик',
        'Full-stack Разработчик',
        'Младший Разработчик'
      ] : [
        'Frontend Developer',
        'Full-stack Developer', 
        'Junior Developer'
      ]
    },
    recommendations: isRussian ? [
      'Добавьте портфолио с примерами проектов',
      'Укажите конкретные цифры достижений',
      'Адаптируйте резюме под конкретную вакансию',
      'Добавьте профессиональные сертификаты'
    ] : [
      'Add portfolio with project examples',
      'Include specific achievement metrics',
      'Tailor resume for specific job postings',
      'Add professional certifications'
    ]
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
      setActiveTab('results');
      setAnalyzing(true);
      
      // Simulate analysis delay
      setTimeout(() => {
        setAnalyzing(false);
        setAnalysis(mockAnalysis);
      }, 3000);
    }
  };

  const ScoreCircle = ({ score }) => {
    const circumference = 2 * Math.PI * 45;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (score / 100) * circumference;

    return (
      <div className="relative w-32 h-32">
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#e5e7eb"
            strokeWidth="8"
            fill="transparent"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke="#10b981"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">{score}</div>
            <div className="text-xs text-gray-600">{isRussian ? 'баллов' : 'score'}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="h-full bg-gradient-to-br from-indigo-50 to-purple-50 overflow-auto custom-scrollbar">
      <div className="p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {isRussian ? '🔍 Анализатор Резюме' : '🔍 Resume Analyzer'}
          </h1>
          <p className="text-gray-600">
            {isRussian ? 'ИИ анализ резюме с оценкой и рекомендациями' : 'AI-powered resume analysis with scoring and recommendations'}
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-lg">
            <button
              onClick={() => setActiveTab('upload')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeTab === 'upload'
                  ? 'bg-indigo-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-indigo-500'
              }`}
            >
              {isRussian ? 'Загрузка' : 'Upload'}
            </button>
            <button
              onClick={() => setActiveTab('results')}
              disabled={!uploadedFile}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeTab === 'results' && uploadedFile
                  ? 'bg-indigo-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed'
              }`}
            >
              {isRussian ? 'Результаты' : 'Results'}
            </button>
          </div>
        </div>

        {/* Upload Tab */}
        {activeTab === 'upload' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📄</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {isRussian ? 'Загрузите ваше резюме' : 'Upload Your Resume'}
                </h3>
                <p className="text-gray-600">
                  {isRussian ? 'Поддерживаются форматы PDF, DOC, DOCX' : 'Supported formats: PDF, DOC, DOCX'}
                </p>
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-indigo-400 transition-colors">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="resume-upload"
                />
                <label htmlFor="resume-upload" className="cursor-pointer">
                  <div className="text-4xl mb-4">📁</div>
                  <p className="text-lg font-medium text-gray-700 mb-2">
                    {isRussian ? 'Перетащите файл сюда или нажмите для выбора' : 'Drag & drop your file here or click to browse'}
                  </p>
                  <p className="text-sm text-gray-500">
                    {isRussian ? 'Максимальный размер: 10MB' : 'Maximum size: 10MB'}
                  </p>
                </label>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  {isRussian ? 'Ваши данные в безопасности и не сохраняются на сервере' : 'Your data is secure and not stored on our servers'}
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                {
                  icon: '⚡',
                  title: isRussian ? 'Быстрый анализ' : 'Fast Analysis',
                  description: isRussian ? 'Результат за секунды' : 'Results in seconds'
                },
                {
                  icon: '🎯',
                  title: isRussian ? 'Точная оценка' : 'Accurate Scoring',
                  description: isRussian ? 'ИИ анализ по 50+ критериям' : 'AI analysis across 50+ criteria'
                },
                {
                  icon: '💡',
                  title: isRussian ? 'Умные советы' : 'Smart Recommendations',
                  description: isRussian ? 'Персональные рекомендации' : 'Personalized improvement tips'
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h4 className="font-semibold text-gray-800 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Results Tab */}
        {activeTab === 'results' && uploadedFile && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {analyzing ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {isRussian ? 'Анализируем ваше резюме...' : 'Analyzing your resume...'}
                </h3>
                <p className="text-gray-600">
                  {isRussian ? 'Пожалуйста, подождите' : 'Please wait a moment'}
                </p>
              </div>
            ) : analysis && (
              <div className="space-y-8">
                {/* Score Overview */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="text-center md:text-left mb-6 md:mb-0">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        {isRussian ? 'Общая оценка резюме' : 'Overall Resume Score'}
                      </h3>
                      <p className="text-gray-600">
                        {uploadedFile.name}
                      </p>
                    </div>
                    <ScoreCircle score={analysis.score} />
                  </div>
                </div>

                {/* Strengths & Improvements */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h4 className="text-lg font-semibold text-green-600 mb-4 flex items-center">
                      <span className="mr-2">✅</span>
                      {isRussian ? 'Сильные стороны' : 'Strengths'}
                    </h4>
                    <ul className="space-y-2">
                      {analysis.strengths.map((strength, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">•</span>
                          <span className="text-gray-700">{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h4 className="text-lg font-semibold text-orange-600 mb-4 flex items-center">
                      <span className="mr-2">🔧</span>
                      {isRussian ? 'Области для улучшения' : 'Areas for Improvement'}
                    </h4>
                    <ul className="space-y-2">
                      {analysis.improvements.map((improvement, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-orange-500 mr-2 mt-1">•</span>
                          <span className="text-gray-700">{improvement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Skills Analysis */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-6 flex items-center">
                    <span className="mr-2">🛠️</span>
                    {isRussian ? 'Анализ навыков' : 'Skills Analysis'}
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-gray-700 mb-3">
                        {isRussian ? 'Технические навыки' : 'Technical Skills'}
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {analysis.skills.technical.map((skill, index) => (
                          <span
                            key={index}
                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-700 mb-3">
                        {isRussian ? 'Мягкие навыки' : 'Soft Skills'}
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {analysis.skills.soft.map((skill, index) => (
                          <span
                            key={index}
                            className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience Summary */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="mr-2">💼</span>
                    {isRussian ? 'Опыт работы' : 'Work Experience'}
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-600 mb-2">
                        {isRussian ? 'Общий опыт:' : 'Total Experience:'}
                      </p>
                      <p className="text-2xl font-bold text-indigo-600">
                        {analysis.experience.totalYears} {isRussian ? 'лет' : 'years'}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-2">
                        {isRussian ? 'Должности:' : 'Roles:'}
                      </p>
                      <ul className="space-y-1">
                        {analysis.experience.roles.map((role, index) => (
                          <li key={index} className="text-gray-700">{role}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg p-6 text-white">
                  <h4 className="text-lg font-semibold mb-4 flex items-center">
                    <span className="mr-2">💡</span>
                    {isRussian ? 'Рекомендации ИИ' : 'AI Recommendations'}
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {analysis.recommendations.map((recommendation, index) => (
                      <div key={index} className="bg-white/10 rounded-lg p-4">
                        <p className="text-white/90">{recommendation}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => {
                      setActiveTab('upload');
                      setUploadedFile(null);
                      setAnalysis(null);
                    }}
                    className="px-6 py-3 bg-white border-2 border-indigo-500 text-indigo-500 rounded-lg font-medium hover:bg-indigo-50 transition-all"
                  >
                    {isRussian ? 'Анализировать новое резюме' : 'Analyze New Resume'}
                  </button>
                  <button
                    onClick={() => alert(isRussian ? 'Отчет сохранен!' : 'Report saved!')}
                    className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-medium hover:from-indigo-600 hover:to-purple-700 transition-all"
                  >
                    {isRussian ? 'Скачать отчет' : 'Download Report'}
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ResumeAnalyzer;