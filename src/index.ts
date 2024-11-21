import express , { Request, Response }  from 'express';
import cors from "cors";
/* import {  addPatient, getPatients } from './services/patientService'; */
import diaryRouter from './routes/diaries';
import patienceRouter from './routes/patients';
import diagnoseRouter from './routes/diagnose';
 
const app = express();
app.use(express.static('dist'))
// Configura CORS para permitir solicitudes desde http://localhost:5173
app.use(cors({
  //origin: "http://localhost:5173"
  origin:"https://tipescriptpacienteshospital.onrender.com"
}));
app.use(express.json());

const PORT = 3001;

 app.get('/api/ping', (_req: Request, res: Response) => {
  console.log('someone pinged here');
  res.send('pong');
});


app.use('/api/diaries', diaryRouter);
 
app.use('/api/patients', patienceRouter);
app.use('/api/diagnoses', diagnoseRouter);

app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err.message);
  res.status(500).send("Internal Server Error");
});


app.listen(PORT, () => {
  console.log(`Server running JAO on port ${PORT}`);
});
