export const simplifyDateTime = (dateTimeString) => {
    const dateObj = new Date(dateTimeString);
    const day = dateObj.getUTCDate().toString().padStart(2, '0');
    const month = (dateObj.getUTCMonth() + 1).toString().padStart(2, '0');
    const year = dateObj.getUTCFullYear().toString();
  
    const simplifiedDateTime = `${day}/${month}/${year}`;
    return simplifiedDateTime;
  }