
const students = [
{ "name": "Alice", "semester": 2, "alreadyTakenSubjects": ["Mathematics", "Physics"] },
{ "name": "Bob", "semester": 3, "alreadyTakenSubjects": ["Computer Science", "Chemistry"] },
{ "name": "Charlie", "semester": 1, "alreadyTakenSubjects": ["Biology", "History"] },
{ "name": "David", "semester": 2, "alreadyTakenSubjects": ["English Literature", "Economics"] },
{ "name": "Eva", "semester": 1, "alreadyTakenSubjects": ["Psychology", "Environmental Science"] },
{ "name": "Frank", "semester": 3, "alreadyTakenSubjects": ["History", "Economics"] },
{ "name": "Grace", "semester": 1, "alreadyTakenSubjects": ["Mathematics", "Biology"] },
{ "name": "Henry", "semester": 2, "alreadyTakenSubjects": ["Physics", "Computer Science"] },
{ "name": "Ivy", "semester": 3, "alreadyTakenSubjects": ["Environmental Science", "Psychology"] },
{ "name": "Jack", "semester": 1, "alreadyTakenSubjects": ["English Literature", "Chemistry"] }
];

const subjects = [
{ "name": "Mathematics", "prerequisites": [], "modulesPerWeek": 3, "suggestedSemester": 1, "minimumStudents": 3, "posible_teach": ["Dr. Smith", "Prof. Johnson"] },
{ "name": "Physics", "prerequisites": ["Mathematics"], "modulesPerWeek": 4, "suggestedSemester": 2, "minimumStudents": 4, "posible_teach": ["Dr. Davis", "Prof. Hall"]},
{ "name": "Computer Science", "prerequisites": ["Mathematics"], "modulesPerWeek": 3, "suggestedSemester": 2, "minimumStudents": 3, "posible_teach": ["Dr. Smith", "Dr. Turner"] },
{ "name": "Chemistry", "prerequisites": ["Physics"], "modulesPerWeek": 3, "suggestedSemester": 2, "minimumStudents": 5, "posible_teach": ["Dr. Smith", "Dr. Turner"] },
{ "name": "Biology", "prerequisites": [], "modulesPerWeek": 2, "suggestedSemester": 1, "minimumStudents": 6, "posible_teach": ["Dr. Smith", "Prof. Johnson"] },
{ "name": "History", "prerequisites": [], "modulesPerWeek": 2, "suggestedSemester": 1, "minimumStudents": 2, "posible_teach": ["Dr. Smith", "Dr. Robinson"] },
{ "name": "English Literature", "prerequisites": [], "modulesPerWeek": 3, "suggestedSemester": 1, "minimumStudents": 4, "posible_teach": ["Dr. Smith", "Prof. Baker"] },
{ "name": "Economics", "prerequisites": [], "modulesPerWeek": 3, "suggestedSemester": 2, "minimumStudents": 3, "posible_teach": ["Dr. Smith", "Prof. Baker"] },
{ "name": "Psychology", "prerequisites": [], "modulesPerWeek": 2, "suggestedSemester": 1, "minimumStudents": 8, "posible_teach": ["Dr. Davis", "Prof. White", "Dr. Robinson", "Prof. Baker"] },
{ "name": "Environmental Science", "prerequisites": [], "modulesPerWeek": 3, "suggestedSemester": 2, "minimumStudents": 8, "posible_teach": ["Prof. White", "Prof. Hall"] }
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

let studentCounts = {};
let teacherCounts = {};

subjects.forEach((subject) => {
    const prerequisites = subject.prerequisites;
    let studentCount = 0;
    let teacherCount = 0;

    students.forEach((student) => {
        if (student.alreadyTakenSubjects.includes(subject.name)) return;
        if (student.semester >= subject.suggestedSemester &&
            prerequisites.every((prerequisite) => student.alreadyTakenSubjects.includes(prerequisite))) {
            ++studentCount;
        }
    });

    teachers.forEach((teacher) => {
        if (teacher.canTeach.includes(subject.name)) {
            ++teacherCount;
        }
    });

    studentCounts[subject.name] = studentCount;
    teacherCounts[subject.name] = teacherCount;
});

console.log(
    subjects.filter((subject) => {
        return studentCounts[subject.name] >= subject.minimumStudents &&
               teacherCounts[subject.name] >= subject.minimumTeachers;
    })
);
