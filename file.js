// Crear array de objetos de materias
const materias = [
    { "nombre": "Mathematics", "prerrequisito": [], "modulos_semanales": 3, "semestre_minimo": 1, "minimo_estudiantes": 3 },
    { "nombre": "Physics", "prerrequisito": ["Mathematics"], "modulos_semanales": 4, "semestre_minimo": 2, "minimo_estudiantes": 4 },
    { "nombre": "Computer Science", "prerrequisito": ["Mathematics"], "modulos_semanales": 3, "semestre_minimo": 2, "minimo_estudiantes": 3 },
    { "nombre": "Chemistry", "prerrequisito": ["Physics"], "modulos_semanales": 3, "semestre_minimo": 2, "minimo_estudiantes": 5 },
    { "nombre": "Biology", "prerrequisito": [], "modulos_semanales": 2, "semestre_minimo": 1, "minimo_estudiantes": 6 },
    { "nombre": "History", "prerrequisito": [], "modulos_semanales": 2, "semestre_minimo": 1, "minimo_estudiantes": 2 },
    { "nombre": "English Literature", "prerrequisito": [], "modulos_semanales": 3, "semestre_minimo": 1, "minimo_estudiantes": 4 },
    { "nombre": "Economics", "prerrequisito": [], "modulos_semanales": 3, "semestre_minimo": 2, "minimo_estudiantes": 3 },
    { "nombre": "Psychology", "prerrequisito": [], "modulos_semanales": 2, "semestre_minimo": 1, "minimo_estudiantes": 8 },
    { "nombre": "Environmental Science", "prerrequisito": [], "modulos_semanales": 3, "semestre_minimo": 2, "minimo_estudiantes": 8 }
   ];

// Crear array de objetos alumnos
const alumnos = [
    { "nombre": "Alice", "semestre": 2, "materias_cursadas": ["Mathematics", "Physics"] },
    { "nombre": "Bob", "semestre": 3, "materias_cursadas": ["Computer Science", "Chemistry"] },
    { "nombre": "Charlie", "semestre": 1, "materias_cursadas": ["Biology", "History"] },
    { "nombre": "David", "semestre": 2, "materias_cursadas": ["English Literature", "Economics"] },
    { "nombre": "Eva", "semestre": 1, "materias_cursadas": ["Psychology", "Environmental Science"] },
    { "nombre": "Frank", "semestre": 3, "materias_cursadas": ["History", "Economics"] },
    { "nombre": "Grace", "semestre": 1, "materias_cursadas": ["Mathematics", "Biology"] },
    { "nombre": "Henry", "semestre": 2, "materias_cursadas": ["Physics", "Computer Science"] },
    { "nombre": "Ivy", "semestre": 3, "materias_cursadas": ["Environmental Science", "Psychology"] },
    { "nombre": "Jack", "semestre": 1, "materias_cursadas": ["English Literature", "Chemistry"] }
   ];

const transformedMaterias = materias.map(materia => {
    return {
        name: materia.nombre,
        prerequisites: materia.prerrequisito,
        modulesPerWeek: materia.modulos_semanales,
        suggestedSemester: materia.semestre_minimo,
        minimumStudents: materia.minimo_estudiantes
    };
});

console.log(transformedMaterias);
