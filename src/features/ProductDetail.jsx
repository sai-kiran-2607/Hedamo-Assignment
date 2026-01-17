import Card from '../components/Card';
import Badge from '../components/Badge';
import Button from '../components/Button';
import { getProducerName } from '../data/mockData';
import { ArrowLeft, Clock, FileText, Info } from 'lucide-react';
import PropTypes from 'prop-types';

const ProductDetail = ({ product, onBack }) => {
    if (!product) return null;

    return (
        <div className="w-full max-w-4xl mx-auto p-6">
            <Button variant="ghost" onClick={onBack} className="mb-4 pl-0 hover:bg-transparent hover:text-primary">
                <ArrowLeft size={16} className="mr-2" />
                Back to Registry
            </Button>

            <div className="flex justify-between items-start mb-6">
                <div>
                    <div className="text-sm text-muted mb-1">{product.category}</div>
                    <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
                    <div className="text-md text-muted">
                        Declared by <span className="font-medium text-primary">{getProducerName(product.producerId)}</span>
                    </div>
                </div>
                <Badge status={product.status} className="text-sm px-3 py-1" />
            </div>

            {/* Disclaimer Banner - CRITICAL REQUIREMENT */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-8 flex items-start gap-3" style={{ backgroundColor: '#FFFBEB', borderColor: '#FCD34D' }}>
                <Info className="flex-shrink-0 text-yellow-600" size={20} style={{ color: '#D97706' }} />
                <p className="text-sm text-yellow-800" style={{ color: '#92400E' }}>
                    <strong>Transparency Notice:</strong> This page presents producer-declared information.
                    It is <strong>not</strong> a certification, verification, or endorsement validation.
                    All data is provided directly by the producer.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 flex flex-col gap-6">
                    <Card className="p-6">
                        <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                            <FileText size={18} className="text-muted" />
                            Disclosure Summary
                        </h3>
                        <p className="text-sm leading-relaxed mb-4">
                            {product.description}
                        </p>
                        <div className="bg-gray-50 p-4 rounded-md border border-gray-100" style={{ backgroundColor: 'var(--color-bg-tertiary)' }}>
                            <span className="block text-xs text-muted mb-1 uppercase tracking-wider">Material Declaration</span>
                            <p className="font-medium text-sm">{product.disclosureSummary}</p>
                        </div>
                    </Card>

                    <Card className="p-6">
                        <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                            <Clock size={18} className="text-muted" />
                            Version History
                        </h3>
                        <div className="relative border-l border-gray-200 ml-2 space-y-6" style={{ borderColor: 'var(--color-border-subtle)' }}>
                            {product.versions.map((version, idx) => (
                                <div key={idx} className="relative pl-6">
                                    <div
                                        className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full border border-white"
                                        style={{
                                            backgroundColor: idx === 0 ? 'var(--color-accent)' : 'var(--color-text-tertiary)',
                                            borderColor: 'var(--color-bg-secondary)'
                                        }}
                                    />
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                                        <span className="text-sm font-medium">
                                            {new Date(version.date).toLocaleDateString()}
                                        </span>
                                        <Badge status={version.status} className="scale-90 origin-left sm:origin-right" />
                                    </div>
                                    <p className="text-xs text-muted mt-1">
                                        {version.note}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>

                <div className="flex flex-col gap-6">
                    <Card className="p-4">
                        <h4 className="text-xs font-semibold uppercase text-muted mb-3">Metadata</h4>
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span className="text-muted">Evidence Count</span>
                                <span className="font-mono">{product.evidenceCount}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted">Last Updated</span>
                                <span>{new Date(product.lastUpdated).toLocaleDateString()}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted">ID</span>
                                <span className="font-mono text-xs">{product.id}</span>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

ProductDetail.propTypes = {
    product: PropTypes.object,
    onBack: PropTypes.func.isRequired
};

export default ProductDetail;
