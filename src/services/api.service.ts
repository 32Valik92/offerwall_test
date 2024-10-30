import {IBook} from "../models";

const bookService = {
   getAll: async (): Promise<IBook[]> => {
      try {
         const response = await fetch("/data.json");
         if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
         }
         const data: IBook[] = await response.json();
         return data;
      } catch (error) {
         console.error("Error fetching data from data.json:", error);
         throw error;
      }
   },
};

export {bookService};
