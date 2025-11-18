export const generateTimeSlots = (): string[] => {
  const slots: string[] = [];

  for (let hour = 8; hour <= 19; hour++) {
    slots.push(formatTime(hour, 0));

    if (hour < 19) {
      slots.push(formatTime(hour, 30));
    }
  }

  return slots;
};

const formatTime = (hour: number, minutes: number): string => {
  const period = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
  const displayMinutes = minutes === 0 ? '00' : minutes;
  return `${displayHour}:${displayMinutes} ${period}`;
};
