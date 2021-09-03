import express from 'express';
import dotenv from 'dotenv';
import body_parser from 'body-parser';
import compression from 'compression';
import createError from 'http-errors';
import morgan from 'morgan';
import cors from 'cors';
import path from'path';
import jwt from'./helpers/jwt.js';
import './helpers/db.js';
import puestosRouter from './routes/puestosRouter.js';
import usuariosRouter from './routes/usuariosRouter.js';
import facturaRouter from './routes/facturaRouter.js';
import reservacionRouter from './routes/reservacionRouter.js';
import comprobanteRouter from './routes/comprobanteRouter.js';
import authRouter from './routes/authRouter.js';

//Express inicializacion
var app = express();
app.use(compression());

app.use(morgan('combined'));
dotenv.config();

app.set('port', process.env.PORT || 9010);

// view engine setup
const __dirname = path.dirname('views');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(body_parser.json());
app.use(body_parser.urlencoded({
    extended: true 
}));

app.use(morgan('dev'));
// use JWT auth to secure the api
app.use(jwt());

//routes
app.use('/api/v1/auth/', authRouter);
app.use('/api/v1/puestos', puestosRouter);
app.use('/api/v1/usuarios', usuariosRouter);
app.use('/api/v1/facturas', facturaRouter);
app.use('/api/v1/reservacion', reservacionRouter);
app.use('/api/v1/comprobante', comprobanteRouter);
app.get('/', (req, res) => {
    res.render('index', { error: false, message:'API Estacionamiento' })
});

//catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

//error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

//set port
app.listen(app.get('port'), () => {
    console.log(`Server port ${app.get('port')}`);
});