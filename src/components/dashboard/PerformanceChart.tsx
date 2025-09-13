import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const performanceData = [
  { month: 'Jan', Mathematics: 65, Science: 60, Literature: 75 },
  { month: 'Feb', Mathematics: 70, Science: 65, Literature: 77 },
  { month: 'Mar', Mathematics: 72, Science: 68, Literature: 76 },
  { month: 'Apr', Mathematics: 78, Science: 72, Literature: 80 },
  { month: 'May', Mathematics: 80, Science: 75, Literature: 82 },
  { month: 'Jun', Mathematics: 85, Science: 78, Literature: 85 },
];

export const PerformanceChart = () => {
  return (
    <div className="learning-card">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Performance Analytics</h3>
          <p className="text-muted-foreground">Track your learning progress across subjects</p>
        </div>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="month" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              domain={[50, 100]}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                boxShadow: 'var(--shadow-elegant)'
              }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="Mathematics" 
              stroke="hsl(var(--primary))" 
              strokeWidth={3}
              dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="Science" 
              stroke="hsl(var(--accent))" 
              strokeWidth={3}
              dot={{ fill: 'hsl(var(--accent))', strokeWidth: 2, r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="Literature" 
              stroke="hsl(var(--success))" 
              strokeWidth={3}
              dot={{ fill: 'hsl(var(--success))', strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};