import { Invitation } from "../../../../../services/queries/useInvitation/useInvitation.interface";
import { Invitee } from "../../../../../services/queries/useInvitees/useInvitees.interface";

export const getInitialValues = (
  invitees: Invitee[] | undefined | null,
  invitation: Invitation | undefined
) => {
  const initialValues: {
    adults: Invitee[];
    minors: Invitee[];
  } = { adults: [], minors: [] };

  if (!invitation || !invitees) return initialValues;

  const adults = invitees.filter((invitee) => !invitee.minor);
  const minors = invitees.filter((invitee) => invitee.minor);

  adults.forEach((invitee) => {
    console.log(invitee)
    initialValues.adults.push({
      id: invitee.id,
      name: invitee.name,
      surname: invitee.surname,
      minor: invitee.minor,
      dietary_restriction: invitee.dietary_restriction || [],
      dietary_restrictions_detail: invitee.dietary_restrictions_detail,
      invitation: invitee.invitation,
    });
  });

  minors.forEach((invitee) => {
    initialValues.minors.push({
      id: invitee.id,
      name: invitee.name,
      surname: invitee.surname,
      minor: invitee.minor,
      dietary_restriction: invitee.dietary_restriction || [],
      dietary_restrictions_detail: invitee.dietary_restrictions_detail,
      invitation: invitee.invitation,
    });
  });

  for (let i = 0; i < invitation.adults - adults.length; i++) {
    initialValues.adults.push({
      name: "",
      surname: "",
      minor: false,
      dietary_restriction: [],
      dietary_restrictions_detail: "",
      invitation: invitation.id,
    });
  }

  for (let i = 0; i < invitation.minors - minors.length; i++) {
    initialValues.minors.push({
      name: "",
      surname: "",
      minor: true,
      dietary_restriction: [],
      dietary_restrictions_detail: "",
      invitation: invitation.id,
    });
  }

  console.log({ ad: invitation.adults, len: initialValues.adults });
  return initialValues;
};
