// requerir express
let express = require("express");

// requerir path (rutas)
const path = require("path");

//guardar sus funcionalidades dentro de una variable
let app = express();
// acceder a archivos estáticos
//const publicPath = path.resolve(__dirname, "./public");
app.use(express.static('public'));

//configuración para poder correr el proyecto en Render
const port = process.env.PORT || 3001;

// poner a escuchar al servidor y vincular con el puerto
app.listen(port, () => console.log(`servidor corriendo en el puertom ${port}`));

// aplicar el método get para correr el servidor
app.get("/", (req, res) => {
    // enviar el archivo que hace referencia a la ruta por medio de sendFile
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.get("/register", (req, res) => {
    // enviar el archivo que hace referencia a la ruta por medio de sendFile
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});

app.get("/login", (req, res) => {
    // enviar el archivo que hace referencia a la ruta por medio de sendFile
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});