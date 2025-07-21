import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, TrendingUp, Clock, DollarSign, Users, CheckCircle, XCircle } from 'lucide-react';

interface DebtItem {
  id: number;
  category: string;
  description: string;
  impact: string;
  effort: string;
  business_risk: string;
  priority: number;
}

interface CurrentItem {
  category: string;
  description: string;
  impact: string;
  effort: string;
  business_risk: string;
}

const TechnicalDebtFramework: React.FC = () => {
  const [activeTab, setActiveTab] = useState('assessment');
  const [debtItems, setDebtItems] = useState<DebtItem[]>([]);
  const [currentItem, setCurrentItem] = useState<CurrentItem>({
    category: '',
    description: '',
    impact: '',
    effort: '',
    business_risk: ''
  });

  const categories = [
    { id: 'code_quality', name: 'Code Quality', icon: '🔧' },
    { id: 'architecture', name: 'Architecture', icon: '🏗️' },
    { id: 'testing', name: 'Testing', icon: '🧪' },
    { id: 'documentation', name: 'Documentation', icon: '📚' },
    { id: 'security', name: 'Security', icon: '🔒' },
    { id: 'performance', name: 'Performance', icon: '⚡' },
    { id: 'dependencies', name: 'Dependencies', icon: '📦' },
    { id: 'tooling', name: 'Tooling & Infrastructure', icon: '⚙️' }
  ];

  const impactLevels = [
    { value: 'critical', label: 'Critical', color: 'bg-red-500', score: 5 },
    { value: 'high', label: 'High', color: 'bg-orange-500', score: 4 },
    { value: 'medium', label: 'Medium', color: 'bg-yellow-500', score: 3 },
    { value: 'low', label: 'Low', color: 'bg-green-500', score: 2 },
    { value: 'minimal', label: 'Minimal', color: 'bg-gray-500', score: 1 }
  ];

  const effortLevels = [
    { value: 'weeks', label: 'Weeks', score: 1 },
    { value: 'months', label: 'Months', score: 2 },
    { value: 'quarters', label: 'Quarters', score: 3 },
    { value: 'years', label: 'Years', score: 4 }
  ];

  const calculatePriority = (impact: string, effort: string, businessRisk: string): number => {
    const impactScore = impactLevels.find(l => l.value === impact)?.score || 0;
    const effortScore = effortLevels.find(l => l.value === effort)?.score || 0;
    const riskMultiplier = businessRisk === 'high' ? 1.5 : businessRisk === 'medium' ? 1.2 : 1;
    
    return Math.round((impactScore / effortScore) * riskMultiplier * 10) / 10;
  };

  const addDebtItem = () => {
    if (currentItem.category && currentItem.description) {
      const priority = calculatePriority(currentItem.impact, currentItem.effort, currentItem.business_risk);
      setDebtItems([...debtItems, { ...currentItem, id: Date.now(), priority }]);
      setCurrentItem({ category: '', description: '', impact: '', effort: '', business_risk: '' });
    }
  };

  const removeDebtItem = (id: number) => {
    setDebtItems(debtItems.filter(item => item.id !== id));
  };

  const sortedDebtItems = [...debtItems].sort((a, b) => b.priority - a.priority);

  const renderAssessmentGuide = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map(category => (
          <Card key={category.id} className="border-l-4 border-blue-500">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <span className="text-2xl">{category.icon}</span>
                {category.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-gray-600 space-y-2">
                {category.id === 'code_quality' && (
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Duplicated code blocks</li>
                    <li>Complex, hard-to-maintain functions</li>
                    <li>Inconsistent coding standards</li>
                    <li>Missing error handling</li>
                  </ul>
                )}
                {category.id === 'architecture' && (
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Tight coupling between components</li>
                    <li>Monolithic structures</li>
                    <li>Inconsistent design patterns</li>
                    <li>Scalability limitations</li>
                  </ul>
                )}
                {category.id === 'testing' && (
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Low test coverage</li>
                    <li>Brittle or flaky tests</li>
                    <li>Missing integration tests</li>
                    <li>Manual testing processes</li>
                  </ul>
                )}
                {category.id === 'documentation' && (
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Outdated documentation</li>
                    <li>Missing API documentation</li>
                    <li>Lack of architectural diagrams</li>
                    <li>No onboarding guides</li>
                  </ul>
                )}
                {category.id === 'security' && (
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Vulnerable dependencies</li>
                    <li>Hardcoded credentials</li>
                    <li>Missing security headers</li>
                    <li>Unencrypted data transmission</li>
                  </ul>
                )}
                {category.id === 'performance' && (
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Slow database queries</li>
                    <li>Memory leaks</li>
                    <li>Inefficient algorithms</li>
                    <li>Missing caching strategies</li>
                  </ul>
                )}
                {category.id === 'dependencies' && (
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Outdated libraries</li>
                    <li>Unused dependencies</li>
                    <li>Version conflicts</li>
                    <li>Deprecated packages</li>
                  </ul>
                )}
                {category.id === 'tooling' && (
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Manual deployment processes</li>
                    <li>Missing CI/CD pipelines</li>
                    <li>Inadequate monitoring</li>
                    <li>Development environment issues</li>
                  </ul>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderTracker = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5" />
            Add Technical Debt Item
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <select 
                value={currentItem.category} 
                onChange={(e) => setCurrentItem({...currentItem, category: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select category...</option>
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.icon} {cat.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Business Impact</label>
              <select 
                value={currentItem.impact} 
                onChange={(e) => setCurrentItem({...currentItem, impact: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select impact...</option>
                {impactLevels.map(level => (
                  <option key={level.value} value={level.value}>{level.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Effort to Fix</label>
              <select 
                value={currentItem.effort} 
                onChange={(e) => setCurrentItem({...currentItem, effort: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select effort...</option>
                {effortLevels.map(level => (
                  <option key={level.value} value={level.value}>{level.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Business Risk</label>
              <select 
                value={currentItem.business_risk} 
                onChange={(e) => setCurrentItem({...currentItem, business_risk: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select risk...</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea 
              value={currentItem.description}
              onChange={(e) => setCurrentItem({...currentItem, description: e.target.value})}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows={3}
              placeholder="Describe the technical debt issue..."
            />
          </div>
          <button 
            onClick={addDebtItem}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!currentItem.category || !currentItem.description}
          >
            Add Item
          </button>
        </CardContent>
      </Card>

      {debtItems.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Technical Debt Inventory ({debtItems.length} items)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {sortedDebtItems.map((item) => {
                const categoryInfo = categories.find(c => c.id === item.category);
                const impactInfo = impactLevels.find(l => l.value === item.impact);
                return (
                  <div key={item.id} className="border rounded-lg p-4 bg-gray-50">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <span className="text-lg">{categoryInfo?.icon}</span>
                          <span className="font-medium">{categoryInfo?.name}</span>
                          <span className={`px-2 py-1 rounded text-xs text-white ${impactInfo?.color}`}>
                            {impactInfo?.label} Impact
                          </span>
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                            Priority: {item.priority}
                          </span>
                        </div>
                        <p className="text-gray-700 mb-2">{item.description}</p>
                        <div className="flex gap-4 text-sm text-gray-600 flex-wrap">
                          <span>Effort: {effortLevels.find(e => e.value === item.effort)?.label}</span>
                          <span>Risk: {item.business_risk}</span>
                        </div>
                      </div>
                      <button 
                        onClick={() => removeDebtItem(item.id)}
                        className="text-red-500 hover:text-red-700 ml-2"
                      >
                        <XCircle className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );

  const renderReport = () => {
    const highPriorityItems = debtItems.filter(item => item.priority >= 3);
    const categoryBreakdown = categories.map(cat => ({
      ...cat,
      count: debtItems.filter(item => item.category === cat.id).length
    }));

    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              Executive Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded">
                <div className="text-2xl font-bold text-blue-600">{debtItems.length}</div>
                <div className="text-sm text-gray-600">Total Debt Items</div>
              </div>
              <div className="bg-red-50 p-4 rounded">
                <div className="text-2xl font-bold text-red-600">{highPriorityItems.length}</div>
                <div className="text-sm text-gray-600">High Priority Items</div>
              </div>
              <div className="bg-green-50 p-4 rounded">
                <div className="text-2xl font-bold text-green-600">
                  {Math.round(debtItems.reduce((sum, item) => sum + item.priority, 0) / debtItems.length * 10) / 10 || 0}
                </div>
                <div className="text-sm text-gray-600">Average Priority Score</div>
              </div>
            </div>
            
            <div className="prose max-w-none">
              <h3 className="text-lg font-semibold mb-3">Key Findings</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Our analysis identified {debtItems.length} technical debt items across {categoryBreakdown.filter(c => c.count > 0).length} categories</span>
                </div>
                <div className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>{highPriorityItems.length} items require immediate attention due to high business impact</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>Addressing top priority items could significantly improve development velocity and system reliability</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Category Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categoryBreakdown.map(cat => (
                <div key={cat.id} className="text-center p-3 border rounded">
                  <div className="text-2xl mb-1">{cat.icon}</div>
                  <div className="font-medium text-sm">{cat.name}</div>
                  <div className="text-lg font-bold text-blue-600">{cat.count}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {sortedDebtItems.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Top Priority Items</CardTitle>
            </CardHeader>
            <CardContent>
              {sortedDebtItems.slice(0, 5).map((item, index) => {
                const categoryInfo = categories.find(c => c.id === item.category);
                const impactInfo = impactLevels.find(l => l.value === item.impact);
                return (
                  <div key={item.id} className="border-b pb-3 mb-3 last:border-b-0">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                        #{index + 1}
                      </span>
                      <span className="text-lg">{categoryInfo?.icon}</span>
                      <span className="font-medium">{categoryInfo?.name}</span>
                      <span className={`px-2 py-1 rounded text-xs text-white ${impactInfo?.color}`}>
                        {impactInfo?.label}
                      </span>
                      <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">
                        Priority: {item.priority}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm">{item.description}</p>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-green-700">Immediate Actions (Next 30 days)</h4>
                <p className="text-sm text-gray-600">Address critical and high-impact items that can be resolved quickly</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="font-semibold text-yellow-700">Short-term Planning (Next quarter)</h4>
                <p className="text-sm text-gray-600">Include medium-priority items in sprint planning and allocate dedicated time</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-blue-700">Long-term Strategy</h4>
                <p className="text-sm text-gray-600">Establish processes to prevent future debt accumulation and regular assessment cycles</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Technical Debt Analysis Framework</h1>
        <p className="text-gray-600">Comprehensive tool for identifying, tracking, and reporting technical debt</p>
      </div>

      <div className="flex border-b mb-6 overflow-x-auto">
        <button 
          onClick={() => setActiveTab('assessment')}
          className={`px-4 py-2 font-medium whitespace-nowrap ${activeTab === 'assessment' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Assessment Guide
        </button>
        <button 
          onClick={() => setActiveTab('tracker')}
          className={`px-4 py-2 font-medium whitespace-nowrap ${activeTab === 'tracker' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Debt Tracker
        </button>
        <button 
          onClick={() => setActiveTab('report')}
          className={`px-4 py-2 font-medium whitespace-nowrap ${activeTab === 'report' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Stakeholder Report
        </button>
      </div>

      {activeTab === 'assessment' && renderAssessmentGuide()}
      {activeTab === 'tracker' && renderTracker()}
      {activeTab === 'report' && renderReport()}
    </div>
  );
};

export default TechnicalDebtFramework;