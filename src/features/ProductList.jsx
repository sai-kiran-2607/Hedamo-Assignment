import { useState, useMemo } from 'react';
import Card from '../components/Card';
import Badge from '../components/Badge';
import Input from '../components/Input';
import Button from '../components/Button';
import { products, getProducerName } from '../data/mockData';
import { Search, Filter, ArrowUpDown } from 'lucide-react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const ProductList = ({ onProductClick }) => {
    const [search, setSearch] = useState('');
    const [filterCategory, setFilterCategory] = useState('All');
    const [sortOrder, setSortOrder] = useState('updated-desc'); // 'name-asc', 'updated-desc'

    const categories = ['All', ...new Set(products.map(p => p.category))];

    const filteredProducts = useMemo(() => {
        let result = products;

        if (filterCategory !== 'All') {
            result = result.filter(p => p.category === filterCategory);
        }

        if (search) {
            const lowerSearch = search.toLowerCase();
            result = result.filter(p =>
                p.name.toLowerCase().includes(lowerSearch) ||
                getProducerName(p.producerId).toLowerCase().includes(lowerSearch)
            );
        }

        return result.sort((a, b) => {
            if (sortOrder === 'name-asc') {
                return a.name.localeCompare(b.name);
            } else {
                return new Date(b.lastUpdated) - new Date(a.lastUpdated);
            }
        });
    }, [search, filterCategory, sortOrder]);

    return (
        <div className="w-full max-w-4xl mx-auto p-6">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-semibold">Discovery Registry</h1>
                <div className="text-sm text-muted">
                    {filteredProducts.length} Disclosures
                </div>
            </div>

            <div className="flex flex-col gap-4 mb-6">
                <div className="flex gap-2">
                    <div className="flex-1">
                        <Input
                            icon={<Search size={16} />}
                            placeholder="Search products or producers..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <Button
                        variant="secondary"
                        onClick={() => setSortOrder(prev => prev === 'updated-desc' ? 'name-asc' : 'updated-desc')}
                        title="Toggle Sort"
                    >
                        <ArrowUpDown size={16} className="mr-2" />
                        {sortOrder === 'updated-desc' ? 'Newest' : 'Name'}
                    </Button>
                </div>

                <div className="flex gap-2 overflow-x-auto pb-2">
                    {categories.map(cat => (
                        <Button
                            key={cat}
                            variant={filterCategory === cat ? 'primary' : 'secondary'}
                            onClick={() => setFilterCategory(cat)}
                            className="text-xs py-1"
                            style={{ whiteSpace: 'nowrap' }}
                        >
                            {cat}
                        </Button>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-2">
                {filteredProducts.length === 0 ? (
                    <div className="text-center py-8 text-muted">
                        No products found matching your criteria.
                    </div>
                ) : (
                    filteredProducts.map(product => (
                        <Card
                            key={product.id}
                            hoverable
                            onClick={() => onProductClick(product)}
                            className="flex justify-between items-center p-4 transition-colors"
                        >
                            <div className="flex flex-col gap-1">
                                <span className="font-medium text-lg">{product.name}</span>
                                <div className="flex items-center gap-2 text-sm text-muted">
                                    <span>{product.category}</span>
                                    <span>•</span>
                                    <span>{getProducerName(product.producerId)}</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                                <Badge status={product.status} />
                                <span className="text-xs text-subtle">
                                    Updated {new Date(product.lastUpdated).toLocaleDateString()}
                                </span>
                            </div>
                        </Card>
                    ))
                )}
            </div>
        </div>
    );
};

ProductList.propTypes = {
    onProductClick: PropTypes.func.isRequired
};

export default ProductList;
