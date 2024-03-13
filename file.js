const subjects = [
    { "name": "Mathematics", "prioridad": 1, "prerequisites": [], "modulesPerWeek": 3, "posible_teach": ["Dr. Smith", "Prof. Johnson"] },
    { "name": "Physics", "prerequisites": ["Mathematics"], "modulesPerWeek": 4, "posible_teach": ["Dr. Davis", "Prof. Hall"]},
    { "name": "Computer Science", "prerequisites": ["Mathematics"], "modulesPerWeek": 3, "posible_teach": ["Dr. Smith", "Dr. Turner"] },
    { "name": "Chemistry", "prioridad": 1, "prerequisites": ["Physics"], "modulesPerWeek": 3, "posible_teach": ["Dr. Smith", "Dr. Turner"] },
    { "name": "Biology", "prerequisites": [], "modulesPerWeek": 2, "posible_teach": ["Dr. Smith", "Prof. Johnson"] },
    { "name": "History", "prioridad": 1, "prerequisites": [], "modulesPerWeek": 2, "posible_teach": ["Dr. Smith", "Dr. Robinson"] },
    { "name": "English Literature", "prerequisites": [], "modulesPerWeek": 3, "posible_teach": ["Dr. Smith", "Prof. Baker"] },
    { "name": "Economics", "prerequisites": [], "modulesPerWeek": 3, "posible_teach": ["Dr. Smith", "Prof. Baker"] },
    { "name": "Psychology", "prioridad": 1, "prerequisites": [], "modulesPerWeek": 2, "posible_teach": ["Dr. Davis", "Prof. White", "Dr. Robinson", "Prof. Baker"] },
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

function displaySubjectsAndSlots(teacherName) {
    const teacher = teachers.find(teacher => teacher.name === teacherName);
    const teacherSubjects = subjects.filter(subject => subject.posible_teach.includes(teacherName));
    
    console.log(`Subjects ${teacherName} can teach:`);
    teacherSubjects.forEach(subject => {
        console.log(`- ${subject.name}`);
    });
    
    console.log("Available slots:");
    teacher.availableSlots.forEach(slot => {
        console.log(`- ${slot.day}, ${slot.startTime} - ${slot.endTime}`);
    });
}

// Example usage
/*displaySubjectsAndSlots("Dr. Smith");
displaySubjectsAndSlots("Dr. Davis");
displaySubjectsAndSlots("Dr. Robinson");
displaySubjectsAndSlots("Dr. Turner");
displaySubjectsAndSlots("Prof. Johnson");*/

const horaInicioClases = 7.5; // 7:30 en formato de horas decimales
const horaFinClases = 21.0; // 21:00 en formato de horas decimales
const duracionModulo = 1.5; // Duración de cada módulo en horas

function calcularModulosDisponibles() {
    const modulosPorDia = (horaFinClases - horaInicioClases) / duracionModulo;
    return modulosPorDia * 5; // 5 días laborables
}

function armarHorario() {
    const modulosDisponibles = calcularModulosDisponibles();
    const horario = new Array(modulosDisponibles).fill(null);

    subjects.forEach(subject => {
        teachers.forEach(teacher => {
            if (teacher.canTeach.includes(subject.name)) {
                teacher.availableSlots.forEach(slot => {
                    const diaInicio = slot.day === 'Monday' ? 0 :
                                      slot.day === 'Tuesday' ? 1 :
                                      slot.day === 'Wednesday' ? 2 :
                                      slot.day === 'Thursday' ? 3 :
                                      slot.day === 'Friday' ? 4 : -1;
                    if (diaInicio !== -1) {
                        const inicio = diaInicio * (horaFinClases - horaInicioClases) / 5 / duracionModulo;
                        const fin = inicio + (convertirHora(slot.endTime) - convertirHora(slot.startTime)) / (1000 * 60 * duracionModulo);
                        asignarClases(horario, teacher.name, subject.name, inicio, fin);
                    }
                });
            }
        });
    });

    return horario;
}

function asignarClases(horario, profesor, asignatura, inicio, fin) {
    for (let i = inicio; i < fin; i++) {
        horario[i] = { profesor, asignatura };
    }
}

function imprimirHorario(horario) {
    console.log("Horario de clases:");
    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
    let indiceModulo = 0;
    dias.forEach(dia => {
        console.log(`${dia}:`);
        for (let i = 0; i < (horaFinClases - horaInicioClases) / duracionModulo; i++) {
            const clase = horario[indiceModulo++];
            console.log(`${horaInicioClases + i * duracionModulo} - ${horaInicioClases + (i + 1) * duracionModulo}: ${clase ? `${clase.profesor} - ${clase.asignatura}` : 'Libre'}`);
        }
    });
}

function convertirHora(horaString) {
    const [hora, minutos] = horaString.split(':').map(Number);
    const fecha = new Date();
    fecha.setHours(hora);
    fecha.setMinutes(minutos);
    fecha.setSeconds(0);
    return fecha;
}

const horario = armarHorario();
imprimirHorario(horario);


