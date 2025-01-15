import React from 'react';
import { CheckCircle, Plus, XCircle, Clock } from 'lucide-react';

const TaskNumber = ({ data }) => {
  const stats = [
    {
      title: 'Completed Tasks',
      value: data.taskCounts.completed,
      icon: CheckCircle,
      bgColor: 'bg-gradient-to-br from-green-500 to-emerald-600',
      shadowColor: 'shadow-green-500/20',
      iconColor: 'text-green-200'
    },
    {
      title: 'New Tasks',
      value: data.taskCounts.newTask,
      icon: Plus,
      bgColor: 'bg-gradient-to-br from-blue-500 to-blue-600',
      shadowColor: 'shadow-blue-500/20',
      iconColor: 'text-blue-200'
    },
    {
      title: 'Failed Tasks',
      value: data.taskCounts.failed,
      icon: XCircle,
      bgColor: 'bg-gradient-to-br from-red-500 to-red-600',
      shadowColor: 'shadow-red-500/20',
      iconColor: 'text-red-200'
    },
    {
      title: 'Active Tasks',
      value: data.taskCounts.active,
      icon: Clock,
      bgColor: 'bg-gradient-to-br from-amber-500 to-amber-600',
      shadowColor: 'shadow-amber-500/20',
      iconColor: 'text-amber-200'
    }
  ];

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl ${stat.bgColor} ${stat.shadowColor} shadow-lg p-6 transition-transform duration-300 hover:scale-105`}
            >
              <div className="absolute top-3 right-3">
                <Icon className={`w-8 h-8 ${stat.iconColor} opacity-80`} />
              </div>
              <div className="mt-2">
                <h2 className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </h2>
                <p className="text-lg font-medium text-white/90">
                  {stat.title}
                </p>
              </div>
              <div className="absolute bottom-0 right-0 opacity-10">
                <Icon className="w-32 h-32 transform translate-x-8 translate-y-8" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TaskNumber;