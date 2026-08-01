export const muscleGroups = [
  "All",
  "Chest",
  "Back",
  "Legs",
  "Shoulders",
  "Arms",
  "Core",
  "Cardio",
  "Full Body",
];

const exercises = [
  // Chest
  { id: 1, name: "Barbell Bench Press", muscleGroup: "Chest", difficulty: "Intermediate", equipment: "Barbell", sets: "4 × 8-10", description: "The core chest builder. Lie on a flat bench and press the bar from chest height to lockout, keeping shoulder blades pinned back." },
  { id: 2, name: "Incline Dumbbell Press", muscleGroup: "Chest", difficulty: "Intermediate", equipment: "Dumbbells", sets: "3 × 10-12", description: "Targets the upper chest. Press dumbbells up and slightly inward on a 30-45° incline bench." },
  { id: 3, name: "Push-Up", muscleGroup: "Chest", difficulty: "Beginner", equipment: "Bodyweight", sets: "3 × 15-20", description: "A bodyweight staple. Keep your body in a straight line from head to heel as you lower and press back up." },
  { id: 4, name: "Cable Fly", muscleGroup: "Chest", difficulty: "Beginner", equipment: "Cable Machine", sets: "3 × 12-15", description: "Isolates the chest through a wide arc. Keep a slight bend in the elbows and squeeze at the midline." },
  // Back
  { id: 5, name: "Pull-Up", muscleGroup: "Back", difficulty: "Advanced", equipment: "Pull-Up Bar", sets: "4 × 6-10", description: "A demanding vertical pull. Drive your elbows down and back until your chin clears the bar." },
  { id: 6, name: "Lat Pulldown", muscleGroup: "Back", difficulty: "Beginner", equipment: "Cable Machine", sets: "3 × 10-12", description: "A beginner-friendly pull-up alternative. Pull the bar to your upper chest, leading with your elbows." },
  { id: 7, name: "Barbell Row", muscleGroup: "Back", difficulty: "Intermediate", equipment: "Barbell", sets: "4 × 8-10", description: "Builds back thickness. Hinge at the hips and row the bar to your lower ribcage." },
  { id: 8, name: "Deadlift", muscleGroup: "Back", difficulty: "Advanced", equipment: "Barbell", sets: "3 × 5", description: "A full posterior-chain movement. Keep the bar close and drive through your heels to stand tall." },
  { id: 9, name: "Seated Cable Row", muscleGroup: "Back", difficulty: "Beginner", equipment: "Cable Machine", sets: "3 × 12", description: "Builds mid-back thickness with a controlled, seated pulling motion." },
  // Legs
  { id: 10, name: "Barbell Back Squat", muscleGroup: "Legs", difficulty: "Intermediate", equipment: "Barbell", sets: "4 × 6-8", description: "The lower-body king. Sit back and down while keeping your chest up and knees tracking your toes." },
  { id: 11, name: "Romanian Deadlift", muscleGroup: "Legs", difficulty: "Intermediate", equipment: "Barbell", sets: "3 × 10", description: "Targets hamstrings and glutes. Hinge at the hips with a soft knee bend and a flat back." },
  { id: 12, name: "Walking Lunge", muscleGroup: "Legs", difficulty: "Beginner", equipment: "Dumbbells", sets: "3 × 12 per leg", description: "Builds single-leg strength and balance. Step forward and drop the back knee toward the floor." },
  { id: 13, name: "Leg Press", muscleGroup: "Legs", difficulty: "Beginner", equipment: "Machine", sets: "3 × 12-15", description: "A joint-friendly way to load the quads and glutes without balancing a bar." },
  { id: 14, name: "Standing Calf Raise", muscleGroup: "Legs", difficulty: "Beginner", equipment: "Machine", sets: "4 × 15-20", description: "Isolates the calves. Rise onto your toes and pause at the top before lowering under control." },
  // Shoulders
  { id: 15, name: "Overhead Press", muscleGroup: "Shoulders", difficulty: "Intermediate", equipment: "Barbell", sets: "4 × 8", description: "Builds pressing strength overhead. Brace your core and press the bar straight up past your face." },
  { id: 16, name: "Lateral Raise", muscleGroup: "Shoulders", difficulty: "Beginner", equipment: "Dumbbells", sets: "3 × 12-15", description: "Isolates the side delts for width. Raise the dumbbells to shoulder height with a slight elbow bend." },
  { id: 17, name: "Face Pull", muscleGroup: "Shoulders", difficulty: "Beginner", equipment: "Cable Machine", sets: "3 × 15", description: "Strengthens rear delts and rotator cuffs. Pull the rope toward your face, elbows high." },
  // Arms
  { id: 18, name: "Barbell Curl", muscleGroup: "Arms", difficulty: "Beginner", equipment: "Barbell", sets: "3 × 10-12", description: "A classic biceps builder. Curl the bar up while keeping your elbows pinned to your sides." },
  { id: 19, name: "Hammer Curl", muscleGroup: "Arms", difficulty: "Beginner", equipment: "Dumbbells", sets: "3 × 12", description: "Targets the biceps and forearms with a neutral, palms-facing-in grip." },
  { id: 20, name: "Tricep Dip", muscleGroup: "Arms", difficulty: "Intermediate", equipment: "Parallel Bars", sets: "3 × 10-12", description: "Builds tricep and chest strength. Lower until your elbows hit about 90° and press back up." },
  { id: 21, name: "Skull Crusher", muscleGroup: "Arms", difficulty: "Intermediate", equipment: "EZ Bar", sets: "3 × 10-12", description: "Isolates the triceps. Lower the bar toward your forehead with elbows fixed in place." },
  // Core
  { id: 22, name: "Plank", muscleGroup: "Core", difficulty: "Beginner", equipment: "Bodyweight", sets: "3 × 45-60s", description: "Builds core stability. Keep a straight line from shoulders to heels and brace your abs." },
  { id: 23, name: "Hanging Leg Raise", muscleGroup: "Core", difficulty: "Advanced", equipment: "Pull-Up Bar", sets: "3 × 12", description: "A demanding lower-ab movement. Raise your legs to hip height without swinging." },
  { id: 24, name: "Russian Twist", muscleGroup: "Core", difficulty: "Beginner", equipment: "Bodyweight", sets: "3 × 20", description: "Targets the obliques with a rotational, seated twisting motion." },
  // Cardio
  { id: 25, name: "Jump Rope", muscleGroup: "Cardio", difficulty: "Beginner", equipment: "Jump Rope", sets: "5 × 1 min", description: "A simple, effective conditioning tool for footwork, coordination, and calorie burn." },
  // Full Body
  { id: 26, name: "Burpee", muscleGroup: "Full Body", difficulty: "Advanced", equipment: "Bodyweight", sets: "4 × 12", description: "A high-intensity full-body movement combining a squat, plank, push-up, and jump." },
  { id: 27, name: "Kettlebell Swing", muscleGroup: "Full Body", difficulty: "Intermediate", equipment: "Kettlebell", sets: "4 × 15", description: "A hip-hinge power movement that trains the posterior chain and elevates heart rate fast." },
];

export default exercises;
