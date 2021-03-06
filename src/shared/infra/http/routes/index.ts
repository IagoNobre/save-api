import { Router } from 'express';

import studentsRouter from '@modules/users/infra/http/routes/students.router';
import notificationsRouter from '@modules/notifications/infra/http/routes/notifications.router';
import ticketsRouter from '@modules/tickets/infra/http/routes/tickets.router';

const routes = Router();

routes.use('/students', studentsRouter);
routes.use('/notifications', notificationsRouter);
routes.use('/tickets', ticketsRouter);

export default routes;
