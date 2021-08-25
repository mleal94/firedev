const REGEX = {
  NAME: /^[A-Za-z0-9ÁÉÍÓÚñáéíóúÑ]([A-Za-z0-9ÁÉÍÓÚñáéíóúÑ]|\s[A-Za-z0-9ÁÉÍÓÚñáéíóúÑ]){2,255}$/i,
  ID: /^[0-9a-fA-F]{24}$/,
  NUMBER: /^[0-9]*$/,
};

module.exports = REGEX;
