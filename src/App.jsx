import { useState } from 'react';
import ProductList from './features/ProductList';
import ProductDetail from './features/ProductDetail';

function App() {
  const [currentView, setCurrentView] = useState('list'); // 'list' | 'detail'
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setCurrentView('detail');
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setSelectedProduct(null);
    setCurrentView('list');
  };

  return (
    <div className="min-h-screen pb-12">
      <header className="border-b bg-white sticky top-0 z-10" style={{ borderColor: 'var(--color-border-subtle)', backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center">
          <div className="font-bold text-lg tracking-tight flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-gray-700 to-gray-900" style={{ background: 'var(--color-text-primary)' }}></div>
            Hedamo
          </div>
        </div>
      </header>

      <main>
        {currentView === 'list' && (
          <ProductList onProductClick={handleProductClick} />
        )}
        {currentView === 'detail' && (
          <ProductDetail product={selectedProduct} onBack={handleBack} />
        )}
      </main>
    </div>
  );
}

export default App;
