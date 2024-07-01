import { z } from 'zod';

export const emailSchema = z.object({
    name: z.string().min(3, "Naam moet minimaal 3 karakters lang zijn").max(255, "Naam kan niet langer zijn dan 256 karakters"),
    email: z.string().email("Email moet een geldig emailadres zijn"),
    message: z.string().min(3, "Bericht moet minimaal 3 karakters lang zijn").max(2000, "Bericht kan niet langer zijn dan 2000 karakters"),
})