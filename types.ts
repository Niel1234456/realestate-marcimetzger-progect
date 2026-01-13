export enum IntensityLevel {
  LOW = 'Low Impact',
  MODERATE = 'Moderate',
  HIGH = 'High Intensity',
  BEAST = 'Beast Mode'
}

export enum WorkoutType {
  CARDIO = 'Cardio',
  STRENGTH = 'Strength',
  YOGA = 'Yoga/Stretch',
  HIIT = 'HIIT',
  DANCE = 'Dance'
}

export interface WorkoutRequest {
  duration: number; // in minutes
  intensity: IntensityLevel;
  type: WorkoutType;
  equipment: string;
}

export interface GeneratedWorkout {
  title: string;
  description: string;
  exercises: {
    name: string;
    instructions: string;
    durationOrReps: string;
  }[];
  coolDown: string;
}
