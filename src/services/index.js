import localForage from "localforage";

var collectionsStore = localForage.createInstance({
  name: "Collections",
});

var cardsStore = localForage.createInstance({
    name: "Cards",Card
});

/** Collections **/
/**
 * Get all items for Collections
 */
const indexCollection = async () => {
    try {
        let collections = [];
        await collectionsStore.iterate(function (value, key) {
            collections.push({ id: key, value });
        });
        return collections;
    }
    catch (err) {
        console.log(err);
    }
};

/**
 * Create object in Collections
 */
const createCollection = async (data) => {
    try {
        const keys = await collectionsStore.keys();
        const uniqueID = keys.length > 0 ? Number(keys[keys.length - 1]) + 1 : 1;
        await collectionsStore.setItem(uniqueID, data);
        return await collectionsStore.getItem(uniqueID);
    }
    catch (err) {
        console.log(err);
    }
};

/**
 * Update object in Collections by id
 */
const updateCollection = async (id, data) => {
    try {
        const item = await collectionsStorage.getItem(id);
        await collectionsStorage.setItem(id, { ...item, ...data });
        return await collectionsStorage.getItem(id);
    }
    catch (err) {
        console.log(err);
    }
};

/**
 * Get one object from Collections by id
 */
const showCollection = async (id) => {
    try {
        const item = await collectionsStore.getItem(id);
        return item;
    }
    catch (err) {
        console.log(err);
    }
};

/**
 * Delete an object from Collections by id
 */
const destroyCollection = async (id) => {
    try {
        await collectionsStore.removeItem(id);
        return id;
    }
    catch (err) {
        console.log(err);
    }
};
/** END Collections **/

/** Cards **/
/**
 * Get all items from Cards
 */
const indexCard = async (id) => {
    try {
        let cards = [];
        await cardsStore.iterate(function (value, key) {
            if(value.collectionId === id){
                cards.push({ id: key, value });
            }
        });
        return cards;
    }
    catch (err) {
        console.log(err);
    }
};

/**
 * Create object in Cards
 */
const createCard = async (data) => {
    try {
        const keys = await cardsStore.keys();
        const uniqueID = keys.length > 0 ? Number(keys[keys.length - 1]) + 1 : 1;
        await cardsStore.setItem(uniqueID, data);
        return await cardsStore.getItem(uniqueID);
    }
    catch (err) {
        console.log(err);
    }
};

/**
 * Update object in Cards by id
 */
const updateCard = async (id, data) => {
    try {
        const item = await cardsStorage.getItem(id);
        await cardsStorage.setItem(id, { ...item, ...data });
        return await cardsStorage.getItem(id);
    }
    catch (err) {
        console.log(err);
    }
};

/**
 * Get one object from Cards by id
 */
const showCard = async (id) => {
    try {
        const item = await cardsStore.getItem(id);
        return item;
    }
    catch (err) {
        console.log(err);
    }
};

/**
 * Delete an object from Cards by id
 */
const destroyCard = async (id) => {
    try {
        await cardsStore.removeItem(id);
        return id;
    }
    catch (err) {
        console.log(err);
    }
};
/** END Cards **/

export { indexCollection, showCollection, createCollection, updateCollection, destroyCollection, 
    indexCard, showCard, createCard, updateCard, destroyCard };