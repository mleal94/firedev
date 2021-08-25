# Firedev Challenge

## Instalar servidor

    npm install

## Ejecutar la App

    npm run dev

#Gestión de estudiantes

## Adicionar un nuevo estudiante

### Endpoint

`POST /students`

## Obtener listado de estudiantes

### Endpoint

`POST /students/search`

### Cuerpo de la solicitud
```json

{
"name":"Luis",
"email":"luis@gmail.com",
"gender":"MALE_TYPE",
"age":25,
"classRoom":"6123cb541ec6bfeeaf5a3ac4"
}

```
### Para buscar un estudiante por su nombre. Pasar en el cuerpo de la solicitud:

```json
{
    "search":"Manolo"
}

```

## Obtener detalles del un estudiante

### Endpoint

`GET /students/:id`

## Actualizar infomacion un estudiante

### Endpoint

`PATCH /students/:id`

## Eliminar estudiante

### Endpoint

`DELETE /students/:id`

# Gestión de grupo

## Agreagar un nuevo grupos

### Endpoint

`POST /classroom`
```json
{
  "name":"1307",
  "students":["61254d20e263483bc8241c64"],
  "mainProfessor": "Lorenzo Del Monte Verde"
}

```
## Obtener listado de grupos

### Endpoint

`POST /classroom/search`

### Para buscar un estudiante por su nombre. Pasar en el cuerpo de la solicitud

```json
{
    "search":"Grupo A"
}

```

## Obtener detalles de un grupo

### Endpoint

`GET /classroom/:id`

## Actualizar datos de un grupo

### Endpoint

`PATCH /classroom/:id`

## Eliminar un grupo.

### Endpoint

`DELETE /classroom/:id`

## Eliminar estudiante de un grupo

### Endpoint

`DELETE /classroom/:id/remove-student`

### Cuerpo de la solicitud

```json
{
	"student":"61259d529bdd583578aee190"
}
```

## Agregar estudiante a un grupo

### Endpoint

`DELETE /classroom/:id/add-student`

### Cuerpo de la solicitud

```json
{
	"student":"61259d529bdd583578aee190"
}
```
