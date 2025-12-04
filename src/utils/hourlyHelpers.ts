


export function getNextHours(hourly: any[], currentHour: number, count: number){
    
    const startIndex = hourly.findIndex(h => Number(h.hour) === currentHour) + 1; //adding 1 since we want to display the next hours, not the current
    

    if (startIndex === -1) {
        // fallback: get first 'count' hours
        return hourly.slice(0, count);
    }

    return(
        hourly.slice(startIndex, startIndex + count)
    );
}

export function getLocalTime(timezone: string) {
    return new Date().toLocaleString("en-GB", {
        timeZone: timezone,
        hour: "2-digit",
        minute: "2-digit"
    });
}


export function formatDate(dateStr: string) {
  const date = new Date(dateStr);

  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short"
  });
}





