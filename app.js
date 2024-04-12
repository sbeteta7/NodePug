const express = require("express")
const { join } = require("path"); // Importar la función join desde el módulo path

const app = express();
const port = 3000;

app.set("view engine", "pug");

app.get("/", (req, res) => {
    res.render( "hello");
    });

//Funcion Join,public los usuarios pueden utilizar lo que hay en la carpeta public
app.use('/public',express.static(join(__dirname, 'public')));


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});