export const fetchAPI = (date) => {
    // Simulating an asynchronous API call
    return new Promise((resolve) => {
      // You can replace this with actual API logic
      const availableTimes = [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
      ];
      resolve(availableTimes);
    });
  };
  
  export const submitAPI = (formData) => {
    // Simulating an asynchronous API call
    return new Promise((resolve) => {
      // You can replace this with actual API logic
      const success = true;
      resolve(success);
    });
  };
  