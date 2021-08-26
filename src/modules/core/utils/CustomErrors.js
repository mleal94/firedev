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
  NOT_VALID_AGE_ERROR: {
    MESSAGE: 'Este valor no es valido para la edad',
  },
  NOT_VALID_TYPE_AGE_ERROR: {
    MESSAGE: 'El valor del campo edad no debe contener caracteres que no sean números',
  },
  NOT_VALID_ID_VALIDATION: {
    MESSAGE: 'no es válido',
  },
  EXIST_EMAIL_ERROR: {
    MESSAGE: 'Existe un estudiante registrado con este correo',
  },
  ADD_STUDENT_ERROR: {
    MESSAGE: 'Ha ocurrido un error al registrar al estudiante',
  },
  EXIST_CLASSROOM_NAME_ERROR: {
    MESSAGE: 'Existe grupo registrado con este nombre',
  },
  NOT_FOUND_STUDENT_CLASSROOM_ERROR: {
    MESSAGE: 'Estudiante no encontrado en el grupo',
  },
  ALREADY_EXIST_STUDENT_CLASSROOM_ERROR: {
    MESSAGE: 'El estudiante se encuentra registrado en el grupo',
  },
  ALREADY_EXIST_STUDENT_IN_CLASSROOM_ERROR: {
    MESSAGE: 'El estudiante ya se encuentra registrado en un grupo',
  },

};

module.exports = CustomErrors;
