export const producers = [
  { id: 'p1', name: 'Alps Manufacturing Ltd.' },
  { id: 'p2', name: 'Nordic Innovations Group' },
  { id: 'p3', name: 'Terra materia Inc.' },
];

export const methods = [
  'Self-declaration',
  'Third-party audit (unverified)',
  'Internal review',
];

export const products = [
  {
    id: 'prod_001',
    name: 'Industrial Hemp Fiber insulation',
    category: 'Building Materials',
    producerId: 'p1',
    status: 'published',
    lastUpdated: '2025-10-15T14:30:00Z',
    description: 'Thermal insulation mats made from industrial hemp fibers.',
    disclosureSummary: 'Contains 85% hemp fiber, 15% polyester binder. No flame retardants added.',
    evidenceCount: 3,
    versions: [
      { date: '2025-10-15', status: 'published', note: 'Annual update' },
      { date: '2024-09-01', status: 'archived', note: 'Initial disclosure' }
    ]
  },
  {
    id: 'prod_002',
    name: 'Recycled PET Acoustic Panels',
    category: 'Interiors',
    producerId: 'p2',
    status: 'submitted',
    lastUpdated: '2025-11-20T09:15:00Z',
    description: 'Acoustic wall panels made from post-consumer recycled PET bottles.',
    disclosureSummary: '100% PCR PET. Dyes are heavy-metal free.',
    evidenceCount: 1,
    versions: [
        { date: '2025-11-20', status: 'submitted', note: 'Submission for review' },
        { date: '2025-11-01', status: 'draft', note: 'Draft created' }
    ]
  },
  {
    id: 'prod_003',
    name: 'Bio-composite Facade Cladding',
    category: 'Exterior',
    producerId: 'p3',
    status: 'draft',
    lastUpdated: '2026-01-10T11:45:00Z',
    description: 'Exterior cladding panels verified for UV resistance.',
    disclosureSummary: 'Wood flour and PE composite. 60% wood content.',
    evidenceCount: 0,
    versions: [
         { date: '2026-01-10', status: 'draft', note: 'Work in progress' }
    ]
  },
   {
    id: 'prod_004',
    name: 'Low-Carbon Concrete Mix',
    category: 'Structural',
    producerId: 'p1',
    status: 'published',
    lastUpdated: '2025-12-05T16:20:00Z',
    description: 'Concrete mix with 40% fly ash substitution.',
    disclosureSummary: 'Reduces cement content by 40%.',
    evidenceCount: 5,
    versions: [
      { date: '2025-12-05', status: 'published', note: 'Updated formulation' },
      { date: '2025-06-15', status: 'archived', note: 'Previous version' },
      { date: '2024-12-10', status: 'archived', note: 'Initial launch' }
    ]
  },
  {
    id: 'prod_005',
    name: 'Bamboo Flooring Series X',
    category: 'Flooring',
    producerId: 'p3',
    status: 'published',
    lastUpdated: '2025-08-22T10:00:00Z',
    description: 'Solid bamboo flooring with matte finish.',
    disclosureSummary: 'Moso bamboo, harvested at 5 years. Low-VOC finish.',
    evidenceCount: 2,
    versions: [
      { date: '2025-08-22', status: 'published', note: 'New finish added' }
    ]
  }
];

export const getProducerName = (id) => {
    const producer = producers.find(p => p.id === id);
    return producer ? producer.name : 'Unknown Producer';
};
