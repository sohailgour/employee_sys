import React from 'react';
import { Calendar, Tag, CheckCircle, XCircle, Clock, AlertTriangle } from 'lucide-react';

// Shared Card Component
const TaskCard = ({ children, variant }) => {
  const variants = {
    accepted: 'bg-gradient-to-br from-amber-500 to-amber-600',
    new: 'bg-gradient-to-br from-blue-500 to-blue-600',
    completed: 'bg-gradient-to-br from-green-500 to-emerald-600',
    rejected: 'bg-gradient-to-br from-red-500 to-red-600'
  };

  return (
    <div className={`relative overflow-hidden rounded-xl shadow-lg ${variants[variant]} transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}>
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10 transform translate-x-8 -translate-y-8">
        {variant === 'accepted' && <Clock className="w-full h-full" />}
        {variant === 'new' && <AlertTriangle className="w-full h-full" />}
        {variant === 'completed' && <CheckCircle className="w-full h-full" />}
        {variant === 'rejected' && <XCircle className="w-full h-full" />}
      </div>
      {children}
    </div>
  );
};

const RejectTask = ({data}) => {
  return (
    <TaskCard variant="rejected">
    <div className="p-5 h-[40vh] w-[300px]">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2 bg-black/20 rounded-lg px-3 py-1">
          <Tag className="w-4 h-4" />
          <span className="text-sm font-medium text-white">{data.category}</span>
        </div>
        <div className="flex items-center space-x-2 text-white/90">
          <Calendar className="w-4 h-4" />
          <span className="text-sm">{data.taskDate}</span>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-white mb-3">{data.taskTittle}</h2>
      <p className="text-white/90 text-sm leading-relaxed mb-4">{data.taskDescription}</p>
      
      <button className="w-full bg-red-500/30 text-white py-2 px-4 rounded-lg text-sm font-medium flex items-center justify-center gap-2">
        <XCircle className="w-4 h-4" />
        Failed Task
      </button>
    </div>
  </TaskCard>
  )
}

export default RejectTask