const CustomErrors = {
  MISSING_NAME_ERROR: {
    MESSAGE: 'El nombre del estudiante es obligatorio',
  },
  MISSING_NAME_CLASSROOM_ERROR: {
    MESSAGE: 'El nombre del grupo es obligatorio',
  },
  MISSING_EMAIL_ERROR: {
    MESSAGE: 'El correo del estudiante es obligatorio',
  },
  MISSING_CLASSROOM_ERROR: {
    MESSAGE: 'El aula del estudiante es obligatoria',
  },
  MISSING_AGE_ERROR: {
    MESSAGE: 'La edad del estudiante es obligatoria',
  },
  NOT_FOUND_ERROR: {
    MESSAGE: 'Estudiante no encontrado',
  },
  NOT_FOUND_CLASSROOM_ERROR: {
    MESSAGE: 'Grupo no encontrado',
  },
  NOT_VALID_ID_ERROR: {
    MESSAGE: 'El id no es válido',
  },
  NOT_VALID_ID_VALIDATION: {
    MESSAGE: 'no es válido',
  },
  EXIST_EMAIL_ERROR: {
    MESSAGE: 'Existe un estudiante registrado con este correo',
  },
  EXIST_CLASSROOM_NAME_ERROR: {
    MESSAGE: 'Existe grupo registrado con este nombre',
  },
  NOT_FOUND_STUDENT_CLASSROOM_ERROR: {
    MESSAGE: 'Estudiante no encontrado en el grupo',
  },

};

module.exports = CustomErrors;
