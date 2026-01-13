import React, { useState } from 'react';
import { Activity, Clock, Dumbbell, Play, RotateCcw, CheckCircle } from 'lucide-react';
import { IntensityLevel, WorkoutType, WorkoutRequest, GeneratedWorkout } from '../types';
import { generateWorkoutRoutine } from '../services/geminiService';

const LetsMove: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [workout, setWorkout] = useState<GeneratedWorkout | null>(null);

  const [formData, setFormData] = useState<WorkoutRequest>({
    duration: 15,
    intensity: IntensityLevel.MODERATE,
    type: WorkoutType.STRENGTH,
    equipment: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setWorkout(null);

    try {
      const result = await generateWorkoutRoutine(formData);
      setWorkout(result);
    } catch (err) {
      setError("Failed to generate workout. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: keyof WorkoutRequest, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Let's Move</h2>
          <p className="mt-4 text-lg text-gray-600">Customize your session and let AI do the planning.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Controls Column */}
          <div className="md:col-span-1">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-6 sticky top-32">
              
              {/* Duration */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Clock size={16} className="text-primary" /> Duration (min): {formData.duration}
                </label>
                <input
                  type="range"
                  min="5"
                  max="60"
                  step="5"
                  value={formData.duration}
                  onChange={(e) => handleInputChange('duration', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>5m</span>
                  <span>60m</span>
                </div>
              </div>

              {/* Intensity */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Activity size={16} className="text-primary" /> Intensity
                </label>
                <select
                  value={formData.intensity}
                  onChange={(e) => handleInputChange('intensity', e.target.value as IntensityLevel)}
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary border p-2.5 bg-gray-50"
                >
                  {Object.values(IntensityLevel).map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>

              {/* Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Dumbbell size={16} className="text-primary" /> Style
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => handleInputChange('type', e.target.value as WorkoutType)}
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary border p-2.5 bg-gray-50"
                >
                  {Object.values(WorkoutType).map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

               {/* Equipment */}
               <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Equipment (Optional)
                </label>
                <input 
                  type="text"
                  placeholder="e.g. dumbbells, mat"
                  value={formData.equipment}
                  onChange={(e) => handleInputChange('equipment', e.target.value)}
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary border p-2.5 bg-gray-50 text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-md text-sm font-bold text-white bg-primary hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all transform active:scale-95 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                    Generating...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Play size={16} fill="currentColor" /> Generate Workout
                  </span>
                )}
              </button>
            </form>
          </div>

          {/* Results Column */}
          <div className="md:col-span-2">
            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md animate-fade-in">
                <div className="flex">
                  <div className="ml-3">
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                </div>
              </div>
            )}

            {!workout && !loading && !error && (
              <div className="h-full flex flex-col items-center justify-center bg-white rounded-2xl border-2 border-dashed border-gray-200 p-12 text-center text-gray-400 min-h-[400px]">
                <Dumbbell className="h-16 w-16 mb-4 text-gray-200" />
                <h3 className="text-xl font-medium text-gray-900">No workout generated yet</h3>
                <p className="mt-2">Adjust the settings and click generate to get moving.</p>
              </div>
            )}

            {loading && !workout && (
               <div className="h-full flex flex-col items-center justify-center bg-white rounded-2xl shadow-sm border border-gray-100 p-12 min-h-[400px]">
                 <div className="animate-bounce mb-6">
                   <Activity className="h-16 w-16 text-primary" />
                 </div>
                 <p className="text-gray-900 font-semibold text-lg">Consulting the AI trainer...</p>
                 <p className="text-gray-500 mt-2">Crafting your perfect {formData.duration} min session</p>
               </div>
            )}

            {workout && (
              <div className="bg-white overflow-hidden shadow-xl rounded-2xl border border-gray-100 animate-fade-in-up">
                <div className="px-6 py-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white flex justify-between items-start sm:items-center">
                  <div>
                    <h3 className="text-2xl leading-7 font-bold text-gray-900">{workout.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">{workout.description}</p>
                  </div>
                  <button 
                    onClick={() => setWorkout(null)} 
                    className="text-gray-400 hover:text-primary transition-colors p-2 hover:bg-gray-50 rounded-full"
                    title="Reset"
                  >
                    <RotateCcw size={20} />
                  </button>
                </div>
                <div className="px-6 py-6">
                  <div className="space-y-8">
                    {workout.exercises.map((exercise, index) => (
                      <div key={index} className="flex group">
                        <div className="flex-shrink-0 mr-4 flex flex-col items-center">
                          <div className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center text-primary font-bold text-base border-2 border-green-100 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all shadow-sm">
                            {index + 1}
                          </div>
                          {index !== workout.exercises.length - 1 && (
                            <div className="h-full w-0.5 bg-gray-100 my-2 group-hover:bg-green-100 transition-colors"></div>
                          )}
                        </div>
                        <div className="flex-grow pb-2">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                            <h4 className="text-lg font-bold text-gray-900">{exercise.name}</h4>
                            <span className="inline-flex self-start items-center px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 tracking-wide uppercase">
                              {exercise.durationOrReps}
                            </span>
                          </div>
                          <p className="text-gray-600 mt-2 text-base leading-relaxed bg-gray-50 p-3 rounded-lg border border-gray-100">{exercise.instructions}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 bg-gradient-to-br from-green-50 to-white rounded-xl p-5 border border-green-100 flex gap-4 items-start shadow-sm">
                     <div className="p-2 bg-white rounded-full shadow-sm">
                       <CheckCircle className="text-primary" size={24} />
                     </div>
                     <div>
                       <h4 className="font-bold text-gray-900 text-lg">Cool Down Tip</h4>
                       <p className="text-gray-700 mt-1">{workout.coolDown}</p>
                     </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetsMove;