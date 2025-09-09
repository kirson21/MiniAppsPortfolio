import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const MerchStore = () => {
  const { i18n } = useTranslation();
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showCart, setShowCart] = useState(false);

  const isRussian = i18n.language === 'ru';

  const products = [
    {
      id: 1,
      name: isRussian ? 'Фирменная футболка' : 'Brand T-Shirt',
      category: 'clothing',
      price: 29.99,
      image: '👕',
      description: isRussian ? 'Удобная хлопковая футболка с логотипом' : 'Comfortable cotton t-shirt with logo',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: [isRussian ? 'Черный' : 'Black', isRussian ? 'Белый' : 'White', isRussian ? 'Синий' : 'Navy']
    },
    {
      id: 2,
      name: isRussian ? 'Кепка с вышивкой' : 'Embroidered Cap',
      category: 'accessories',
      price: 24.99,
      image: '🧢',
      description: isRussian ? 'Стильная кепка с качественной вышивкой' : 'Stylish cap with quality embroidery',
      sizes: [isRussian ? 'Универсальный' : 'One Size'],
      colors: [isRussian ? 'Красный' : 'Red', isRussian ? 'Черный' : 'Black']
    },
    {
      id: 3,
      name: isRussian ? 'Худи премиум' : 'Premium Hoodie',
      category: 'clothing',
      price: 59.99,
      image: '👘',
      description: isRussian ? 'Теплое худи из качественного материала' : 'Warm hoodie made from quality material',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: [isRussian ? 'Серый' : 'Gray', isRussian ? 'Черный' : 'Black']
    },
    {
      id: 4,
      name: isRussian ? 'Термокружка' : 'Thermal Mug',
      category: 'accessories',
      price: 19.99,
      image: '☕',
      description: isRussian ? 'Стильная термокружка для горячих напитков' : 'Stylish thermal mug for hot beverages',
      sizes: ['400ml'],
      colors: [isRussian ? 'Стальной' : 'Steel', isRussian ? 'Черный' : 'Black']
    },
    {
      id: 5,
      name: isRussian ? 'Стикер-пак' : 'Sticker Pack',
      category: 'digital',
      price: 9.99,
      image: '🏷️',
      description: isRussian ? 'Набор из 12 уникальных стикеров' : 'Set of 12 unique stickers',
      sizes: [isRussian ? 'Стандарт' : 'Standard'],
      colors: [isRussian ? 'Микс' : 'Mixed']
    },
    {
      id: 6,
      name: isRussian ? 'Рюкзак городской' : 'City Backpack',
      category: 'accessories',
      price: 79.99,
      image: '🎒',
      description: isRussian ? 'Удобный рюкзак для повседневного использования' : 'Comfortable backpack for daily use',
      sizes: [isRussian ? 'Стандарт' : 'Standard'],
      colors: [isRussian ? 'Черный' : 'Black', isRussian ? 'Серый' : 'Gray']
    }
  ];

  const categories = [
    { id: 'all', label: isRussian ? 'Все товары' : 'All Products' },
    { id: 'clothing', label: isRussian ? 'Одежда' : 'Clothing' },
    { id: 'accessories', label: isRussian ? 'Аксессуары' : 'Accessories' },
    { id: 'digital', label: isRussian ? 'Цифровое' : 'Digital' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (product, selectedSize, selectedColor) => {
    const cartItem = {
      ...product,
      selectedSize,
      selectedColor,
      cartId: Date.now() + Math.random()
    };
    setCart([...cart, cartItem]);
  };

  const removeFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const ProductCard = ({ product }) => {
    const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);

    return (
      <motion.div
        className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.02 }}
        layout
      >
        <div className="text-center mb-4">
          <div className="text-6xl mb-3">{product.image}</div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-3">
            {product.description}
          </p>
          <div className="text-2xl font-bold text-green-600">
            ${product.price}
          </div>
        </div>

        {/* Size Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {isRussian ? 'Размер:' : 'Size:'}
          </label>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                  selectedSize === size
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Color Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {isRussian ? 'Цвет:' : 'Color:'}
          </label>
          <div className="flex flex-wrap gap-2">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                  selectedColor === color
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => addToCart(product, selectedSize, selectedColor)}
          className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 rounded-lg font-medium hover:from-green-600 hover:to-emerald-600 transition-all duration-300"
        >
          {isRussian ? 'В корзину' : 'Add to Cart'}
        </button>
      </motion.div>
    );
  };

  return (
    <div className="h-full bg-gradient-to-br from-green-50 to-emerald-50 overflow-auto custom-scrollbar">
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {isRussian ? '🛍️ Магазин "МерчЗона"' : '🛍️ MerchZone Store'}
            </h1>
            <p className="text-gray-600">
              {isRussian ? 'Оригинальные товары и аксессуары' : 'Original merchandise and accessories'}
            </p>
          </div>
          
          <button
            onClick={() => setShowCart(true)}
            className="relative bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span className="text-2xl">🛒</span>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-green-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-green-50 shadow-md'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>

        {/* Cart Modal */}
        <AnimatePresence>
          {showCart && (
            <motion.div
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCart(false)}
            >
              <motion.div
                className="bg-white rounded-xl p-6 max-w-md w-full max-h-[80vh] overflow-y-auto"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-xl font-semibold mb-4">
                  {isRussian ? 'Корзина' : 'Shopping Cart'}
                </h3>

                {cart.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">
                    {isRussian ? 'Корзина пуста' : 'Cart is empty'}
                  </p>
                ) : (
                  <>
                    <div className="space-y-4 mb-6">
                      {cart.map((item) => (
                        <div key={item.cartId} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <span className="text-2xl">{item.image}</span>
                          <div className="flex-1">
                            <p className="font-medium text-sm">{item.name}</p>
                            <p className="text-xs text-gray-600">
                              {item.selectedSize} • {item.selectedColor}
                            </p>
                            <p className="font-bold text-green-600">${item.price}</p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.cartId)}
                            className="text-red-500 hover:text-red-700"
                          >
                            ✕
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-semibold">
                          {isRussian ? 'Итого:' : 'Total:'}
                        </span>
                        <span className="text-xl font-bold text-green-600">
                          ${getTotalPrice()}
                        </span>
                      </div>
                      <button
                        onClick={() => {
                          alert(isRussian ? 'Заказ оформлен!' : 'Order placed!');
                          setCart([]);
                          setShowCart(false);
                        }}
                        className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 rounded-lg font-medium"
                      >
                        {isRussian ? 'Оформить заказ' : 'Checkout'}
                      </button>
                    </div>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MerchStore;