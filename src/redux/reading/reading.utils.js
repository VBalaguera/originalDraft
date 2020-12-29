//FOR STUDY PURPOSES ONLY, WE DO NOT NEED THIS RIGHT NOW BECAUSE WE'RE NOT USING QUANTITY AS A PROP

export const addBookToList = (readingItems, bookItemToAdd) => {
    //we add as arguments: all the existing items that are in our readingItems array so far; 
    //and the book item we want to add

    const existingBookItem = readingItems.find(readingItems => readingItems.id === bookItemToAdd.id);
    //we get each individual item, check their id, and see if they check the id from the item we're trying to add; 

    if (existingBookItem) {
        return readingItems.map(readingItem =>
            readingItem.id === bookItemToAdd.id
            ? { ...readingItem, quantity: readingItem.quantity + 1}
            : readingItem
            )
    }

    return [...readingItems, {...bookItemToAdd, quantity: 1}]
};
