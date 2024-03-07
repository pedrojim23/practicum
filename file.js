
const subjects = [
    { "name": "Mathematics", "prerequisites": [], "modulesPerWeek": 3, "posible_teach": ["Dr. Smith", "Prof. Johnson"] },
    { "name": "Physics", "prerequisites": ["Mathematics"], "modulesPerWeek": 4, "posible_teach": ["Dr. Davis", "Prof. Hall"]},
    { "name": "Physics", "prerequisites": ["Mathematics"], "modulesPerWeek": 4, "posible_teach": ["Dr. Davis", "Prof. Hall"]},
    { "name": "Computer Science", "prerequisites": ["Mathematics"], "modulesPerWeek": 3, "posible_teach": ["Dr. Smith", "Dr. Turner"] },
    { "name": "Chemistry", "prerequisites": ["Physics"], "modulesPerWeek": 3, "posible_teach": ["Dr. Smith", "Dr. Turner"] },
    { "name": "Biology", "prerequisites": [], "modulesPerWeek": 2, "posible_teach": ["Dr. Smith", "Prof. Johnson"] },
    { "name": "History", "prerequisites": [], "modulesPerWeek": 2, "posible_teach": ["Dr. Smith", "Dr. Robinson"] },
    { "name": "English Literature", "prerequisites": [], "modulesPerWeek": 3, "posible_teach": ["Dr. Smith", "Prof. Baker"] },
    { "name": "Economics", "prerequisites": [], "modulesPerWeek": 3, "posible_teach": ["Dr. Smith", "Prof. Baker"] },
    { "name": "Psychology", "prerequisites": [], "modulesPerWeek": 2, "posible_teach": ["Dr. Davis", "Prof. White", "Dr. Robinson", "Prof. Baker"] },
    { "name": "Environmental Science", "prerequisites": [], "modulesPerWeek": 3, "posible_teach": ["Prof. White", "Prof. Hall"] }
];

const teachers = [
    {"name": "Dr. Smith", "canTeach": ["Mathematics", "Physics"], "availableSlots": [{"day": "Monday", "startTime": "09:00 AM", "endTime": "11:00 AM"},{"day": "Wednesday", "startTime": "02:00 PM", "endTime": "04:00 PM"}]},
    {"name": "Prof. Johnson", "canTeach": ["Computer Science", "Chemistry"], "availableSlots": [{"day": "Tuesday", "startTime": "10:00 AM", "endTime": "12:00 PM"},{"day": "Thursday", "startTime": "01:00 PM", "endTime": "03:00 PM"}]},
    {"name": "Dr. Davis", "canTeach": ["Biology", "History"], "availableSlots": [{"day": "Monday", "startTime": "01:00 PM", "endTime": "03:00 PM"},{"day": "Wednesday", "startTime": "10:00 AM", "endTime": "12:00 PM"}]},
    {"name": "Prof. White", "canTeach": ["English Literature", "Economics"], "availableSlots": [{"day": "Tuesday", "startTime": "11:00 AM", "endTime": "01:00 PM"},{"day": "Thursday", "startTime": "09:00 AM", "endTime": "11:00 AM"}]},
    {"name": "Dr. Robinson", "canTeach": ["Psychology", "Environmental Science"], "availableSlots": [{"day": "Friday", "startTime": "03:00 PM", "endTime": "05:00 PM"},{"day": "Monday", "startTime": "02:00 PM", "endTime": "04:00 PM"}]},
    {"name": "Prof. Hall", "canTeach": ["Mathematics", "Biology"], "availableSlots": [{"day": "Wednesday", "startTime": "09:00 AM", "endTime": "11:00 AM"},{"day": "Friday", "startTime": "02:00 PM", "endTime": "04:00 PM"}]},
    {"name": "Dr. Turner", "canTeach": ["Physics", "Computer Science"], "availableSlots": [{"day": "Tuesday", "startTime": "03:00 PM", "endTime": "05:00 PM"},{"day": "Thursday", "startTime": "01:00 PM", "endTime": "03:00 PM"}]},
    {"name": "Prof. Baker", "canTeach": ["Environmental Science", "Psychology"], "availableSlots": [{"day": "Monday", "startTime": "11:00 AM", "endTime": "01:00 PM"},{"day": "Wednesday", "startTime": "03:00 PM", "endTime": "05:00 PM"}]}
];

const drSmithSubjects = subjects.filter(subject => subject.posible_teach.includes("Dr. Smith"));
const drSmithSlots = teachers.find(teacher => teacher.name === "Dr. Smith").availableSlots;
console.log("Subjects Dr. Smith can teach:");
// Itera sobre los temas que el Dr. Smith puede enseñar y muestra sus nombres
drSmithSubjects.forEach(subject => {
  console.log(`- ${subject.name}`);
});
console.log("Available slots:");
// Itera sobre los horarios disponibles del Dr. Smith
drSmithSlots.forEach(slot => {
  console.log(`- ${slot.day}, ${slot.startTime} - ${slot.endTime}`);
});

const drDavisSubjects = subjects.filter(subject => subject.posible_teach.includes("Dr. Davis"));
const drDavisSlots = teachers.find(teacher => teacher.name === "Dr. Davis").availableSlots;
console.log("Subjects Dr. Davis can teach:");
drDavisSubjects.forEach(subject => {
  console.log(`- ${subject.name}`);
});
console.log("Available slots:");
// Itera sobre los horarios disponibles
drDavisSlots.forEach(slot => {
  console.log(`- ${slot.day}, ${slot.startTime} - ${slot.endTime}`);
});

const drRobinsonSubjects = subjects.filter(subject => subject.posible_teach.includes("Dr. Robinson"));
const drRobinsonSlots = teachers.find(teacher => teacher.name === "Dr. Robinson").availableSlots;
console.log("Subjects Dr. Robinson can teach:");
drRobinsonSubjects.forEach(subject => {
  console.log(`- ${subject.name}`);
});
console.log("Available slots:");
// Itera sobre los horarios disponibles
drRobinsonSlots.forEach(slot => {
  console.log(`- ${slot.day}, ${slot.startTime} - ${slot.endTime}`);
});

const drTurnerSubjects = subjects.filter(subject => subject.posible_teach.includes("Dr. Turner"));
const drTurnerSlots = teachers.find(teacher => teacher.name === "Dr. Turner").availableSlots;
console.log("Subjects Dr. Turner can teach:");
drTurnerSubjects.forEach(subject => {
  console.log(`- ${subject.name}`);
});
console.log("Available slots:");
// Itera sobre los horarios disponibles
drTurnerSlots.forEach(slot => {
  console.log(`- ${slot.day}, ${slot.startTime} - ${slot.endTime}`);
});

const profJohnsonSubjects = subjects.filter(subject => subject.posible_teach.includes("Prof. Johnson"));
const profJohnsonSlots = teachers.find(teacher => teacher.name === "Prof. Johnson").availableSlots;
console.log("Subjects Prof. Johnson can teach:");
profJohnsonSubjects.forEach(subject => {
  console.log(`- ${subject.name}`);
});
console.log("Available slots:");
// Itera sobre los horarios disponibles del Dr. Smith
profJohnsonSlots.forEach(slot => {
  console.log(`- ${slot.day}, ${slot.startTime} - ${slot.endTime}`);
});
