import { Invitee } from "../useInvitees/useInvitees.interface";

export interface Invitation {
    id: string;
    created_at: string;
    last_update: string;
    adults: number;
    minors: number;
    closed: boolean;
    invitees?: Invitee[];
}
