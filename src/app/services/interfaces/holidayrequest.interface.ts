import { User } from './user.interface';

export interface HolidayRquest {
    id: number;
    user: User;
    created_at: string;
    requestedDay: string;
    status: string; 
}