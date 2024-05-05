const getCurrentDateAndTime = (): string => {
  const currentDate = new Date();
  const dateString = currentDate.toDateString();
  const timeString = currentDate.toLocaleTimeString();
  return `Today is ${dateString}, and the current time is ${timeString}.`;
};

export default getCurrentDateAndTime;
