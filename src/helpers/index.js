export const simplifyDateTime = (dateTimeString) => {
    const dateObj = new Date(dateTimeString);
    const hours = dateObj.getUTCHours().toString().padStart(2, '0');
    const minutes = dateObj.getUTCMinutes().toString().padStart(2, '0');
    const day = dateObj.getUTCDate().toString().padStart(2, '0');
    const month = (dateObj.getUTCMonth() + 1).toString().padStart(2, '0');
    const year = dateObj.getUTCFullYear().toString();
  
    const simplifiedDateTime = `${hours}:${minutes} - ${day}/${month}/${year}`;
    return simplifiedDateTime;
  }