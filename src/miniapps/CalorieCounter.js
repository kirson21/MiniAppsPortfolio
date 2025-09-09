import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const CalorieCounter = () => {
  const { i18n } = useTranslation();
  const [meals, setMeals] = useState([]);
  const [showAddMeal, setShowAddMeal] = useState(false);
  const [selectedFood, setSelectedFood] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('today');

  const isRussian = i18n.language === 'ru';

  const foodDatabase = [
    {
      name: isRussian ? 'Яблоко' : 'Apple',
      calories: 52,
      protein: 0.3,
      carbs: 14,
      fat: 0.2,
      unit: isRussian ? 'шт (100г)' : 'piece (100g)',
      category: 'fruits'
    },
    {
      name: isRussian ? 'Банан' : 'Banana',
      calories: 89,
      protein: 1.1,
      carbs: 23,
      fat: 0.3,
      unit: isRussian ? 'шт (100г)' : 'piece (100g)',
      category: 'fruits'
    },
    {
      name: isRussian ? 'Куриная грудка' : 'Chicken Breast',
      calories: 165,
      protein: 31,
      carbs: 0,
      fat: 3.6,
      unit: isRussian ? '100г' : '100g',
      category: 'protein'
    },
    {
      name: isRussian ? 'Рис отварной' : 'Cooked Rice',
      calories: 130,
      protein: 2.7,
      carbs: 28,
      fat: 0.3,
      unit: isRussian ? '100г' : '100g',
      category: 'grains'
    },
    {
      name: isRussian ? 'Творог 5%' : 'Cottage Cheese 5%',
      calories: 121,
      protein: 16.7,
      carbs: 1.8,
      fat: 5,
      unit: isRussian ? '100г' : '100g',
      category: 'dairy'
    },
    {
      name: isRussian ? 'Овсянка' : 'Oatmeal',
      calories: 68,
      protein: 2.4,
      carbs: 12,
      fat: 1.4,
      unit: isRussian ? '100г готовой' : '100g cooked',
      category: 'grains'
    },
    {
      name: isRussian ? 'Брокколи' : 'Broccoli',
      calories: 34,
      protein: 2.8,
      carbs: 7,
      fat: 0.4,
      unit: isRussian ? '100г' : '100g',
      category: 'vegetables'
    },
    {
      name: isRussian ? 'Лосось' : 'Salmon',
      calories: 208,
      protein: 20,
      carbs: 0,
      fat: 13,
      unit: isRussian ? '100г' : '100g',
      category: 'protein'
    }
  ];

  const [dailyGoal] = useState({
    calories: 2000,
    protein: 150,
    carbs: 250,
    fat: 65
  });

  const mealTypes = [
    { id: 'breakfast', name: isRussian ? 'Завтрак' : 'Breakfast', icon: '🍳' },
    { id: 'lunch', name: isRussian ? 'Обед' : 'Lunch', icon: '🍽️' },
    { id: 'dinner', name: isRussian ? 'Ужин' : 'Dinner', icon: '🥘' },
    { id: 'snack', name: isRussian ? 'Перекус' : 'Snack', icon: '🍎' }
  ];

  const getTodaysTotal = () => {
    return meals.reduce((total, meal) => ({
      calories: total.calories + (meal.calories * meal.quantity),
      protein: total.protein + (meal.protein * meal.quantity),
      carbs: total.carbs + (meal.carbs * meal.quantity),
      fat: total.fat + (meal.fat * meal.quantity)
    }), { calories: 0, protein: 0, carbs: 0, fat: 0 });
  };

  const addMeal = (mealType) => {
    if (!selectedFood) return;
    
    const food = foodDatabase.find(f => f.name === selectedFood);
    const newMeal = {
      id: Date.now(),
      ...food,
      quantity: quantity,
      mealType: mealType,
      time: new Date().toLocaleTimeString(),
      date: new Date().toDateString()
    };
    
    setMeals([...meals, newMeal]);
    setSelectedFood('');
    setQuantity(1);
    setShowAddMeal(false);
  };

  const removeMeal = (mealId) => {
    setMeals(meals.filter(m => m.id !== mealId));
  };

  const getMealsByType = (mealType) => {
    return meals.filter(m => m.mealType === mealType);
  };

  const getProgressPercentage = (current, goal) => {
    return Math.min((current / goal) * 100, 100);
  };

  const totals = getTodaysTotal();

  return (
    <div className="h-full bg-gradient-to-br from-yellow-50 to-orange-50 overflow-auto custom-scrollbar">
      <div className="p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {isRussian ? '🍎 Счетчик Калорий' : '🍎 Calorie Counter'}
          </h1>
          <p className="text-gray-600">
            {isRussian ? 'Контролируйте свое питание каждый день' : 'Track your nutrition every day'}
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-lg p-1 shadow-lg">
            <button
              onClick={() => setActiveTab('today')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeTab === 'today'
                  ? 'bg-yellow-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-yellow-500'
              }`}
            >
              {isRussian ? 'Сегодня' : 'Today'}
            </button>
            <button
              onClick={() => setActiveTab('summary')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeTab === 'summary'
                  ? 'bg-yellow-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-yellow-500'
              }`}
            >
              {isRussian ? 'Сводка' : 'Summary'}
            </button>
          </div>
        </div>

        {/* Today Tab */}
        {activeTab === 'today' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Progress Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { key: 'calories', label: isRussian ? 'Калории' : 'Calories', unit: 'kcal', color: 'bg-red-500' },
                { key: 'protein', label: isRussian ? 'Белки' : 'Protein', unit: 'g', color: 'bg-blue-500' },
                { key: 'carbs', label: isRussian ? 'Углеводы' : 'Carbs', unit: 'g', color: 'bg-green-500' },
                { key: 'fat', label: isRussian ? 'Жиры' : 'Fat', unit: 'g', color: 'bg-yellow-500' }
              ].map((nutrient) => (
                <div key={nutrient.key} className="bg-white rounded-xl p-4 shadow-lg">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-1">{nutrient.label}</p>
                    <p className="text-lg font-bold text-gray-800">
                      {Math.round(totals[nutrient.key])} / {dailyGoal[nutrient.key]} {nutrient.unit}
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div
                        className={`h-2 rounded-full ${nutrient.color} transition-all duration-300`}
                        style={{ width: `${getProgressPercentage(totals[nutrient.key], dailyGoal[nutrient.key])}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Meals by Type */}
            <div className="space-y-6">
              {mealTypes.map((mealType) => {
                const mealData = getMealsByType(mealType.id);
                const mealCalories = mealData.reduce((sum, meal) => sum + (meal.calories * meal.quantity), 0);
                
                return (
                  <div key={mealType.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="p-4 bg-gradient-to-r from-yellow-400 to-orange-400">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{mealType.icon}</span>
                          <div>
                            <h3 className="text-lg font-semibold text-white">{mealType.name}</h3>
                            <p className="text-yellow-100 text-sm">
                              {Math.round(mealCalories)} {isRussian ? 'ккал' : 'kcal'}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => setShowAddMeal(mealType.id)}
                          className="bg-white/20 hover:bg-white/30 text-white rounded-full w-8 h-8 flex items-center justify-center transition-all"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      {mealData.length === 0 ? (
                        <p className="text-gray-500 text-center py-4">
                          {isRussian ? 'Пока ничего не добавлено' : 'Nothing added yet'}
                        </p>
                      ) : (
                        <div className="space-y-2">
                          {mealData.map((meal) => (
                            <div key={meal.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                              <div>
                                <p className="font-medium">{meal.name}</p>
                                <p className="text-sm text-gray-600">
                                  {meal.quantity} {meal.unit} • {Math.round(meal.calories * meal.quantity)} {isRussian ? 'ккал' : 'kcal'}
                                </p>
                              </div>
                              <button
                                onClick={() => removeMeal(meal.id)}
                                className="text-red-500 hover:text-red-700"
                              >
                                ✕
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Summary Tab */}
        {activeTab === 'summary' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4">
                  {isRussian ? 'Цель на день' : 'Daily Goal'}
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>{isRussian ? 'Калории:' : 'Calories:'}</span>
                    <span className="font-medium">{dailyGoal.calories} kcal</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{isRussian ? 'Белки:' : 'Protein:'}</span>
                    <span className="font-medium">{dailyGoal.protein} g</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{isRussian ? 'Углеводы:' : 'Carbs:'}</span>
                    <span className="font-medium">{dailyGoal.carbs} g</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{isRussian ? 'Жиры:' : 'Fat:'}</span>
                    <span className="font-medium">{dailyGoal.fat} g</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4">
                  {isRussian ? 'Прогресс' : 'Progress'}
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>{isRussian ? 'Съедено:' : 'Consumed:'}</span>
                    <span className="font-medium">{Math.round(totals.calories)} kcal</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{isRussian ? 'Осталось:' : 'Remaining:'}</span>
                    <span className="font-medium">
                      {Math.max(0, dailyGoal.calories - totals.calories)} kcal
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transition-all duration-300"
                      style={{ width: `${getProgressPercentage(totals.calories, dailyGoal.calories)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Add Meal Modal */}
        <AnimatePresence>
          {showAddMeal && (
            <motion.div
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAddMeal(false)}
            >
              <motion.div
                className="bg-white rounded-xl p-6 max-w-md w-full"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-xl font-semibold mb-4">
                  {isRussian ? 'Добавить продукт' : 'Add Food'}
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {isRussian ? 'Выберите продукт:' : 'Select Food:'}
                    </label>
                    <select
                      value={selectedFood}
                      onChange={(e) => setSelectedFood(e.target.value)}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500"
                    >
                      <option value="">{isRussian ? 'Выберите...' : 'Select...'}</option>
                      {foodDatabase.map((food) => (
                        <option key={food.name} value={food.name}>
                          {food.name} ({food.calories} kcal/{food.unit})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {isRussian ? 'Количество:' : 'Quantity:'}
                    </label>
                    <input
                      type="number"
                      min="0.1"
                      step="0.1"
                      value={quantity}
                      onChange={(e) => setQuantity(parseFloat(e.target.value) || 1)}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500"
                    />
                  </div>

                  {selectedFood && (
                    <div className="bg-yellow-50 rounded-lg p-3">
                      <p className="text-sm">
                        <strong>{isRussian ? 'Питательная ценность:' : 'Nutrition Facts:'}</strong>
                      </p>
                      {(() => {
                        const food = foodDatabase.find(f => f.name === selectedFood);
                        return (
                          <div className="text-sm text-gray-600 mt-1">
                            <p>{Math.round(food.calories * quantity)} kcal</p>
                            <p>{isRussian ? 'Белки:' : 'Protein:'} {Math.round(food.protein * quantity * 10) / 10}g</p>
                            <p>{isRussian ? 'Углеводы:' : 'Carbs:'} {Math.round(food.carbs * quantity * 10) / 10}g</p>
                            <p>{isRussian ? 'Жиры:' : 'Fat:'} {Math.round(food.fat * quantity * 10) / 10}g</p>
                          </div>
                        );
                      })()}
                    </div>
                  )}
                </div>

                <div className="flex space-x-3 mt-6">
                  <button
                    onClick={() => setShowAddMeal(false)}
                    className="flex-1 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    {isRussian ? 'Отмена' : 'Cancel'}
                  </button>
                  <button
                    onClick={() => addMeal(showAddMeal)}
                    disabled={!selectedFood}
                    className="flex-1 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg hover:from-yellow-600 hover:to-orange-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isRussian ? 'Добавить' : 'Add'}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CalorieCounter;