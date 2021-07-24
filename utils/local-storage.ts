const LOCAL_STORAGE_KEY = 'FAVORITE';
let charactersData: any[] = [];

const isStorageExist = () => {
    return typeof(Storage) === undefined ? false : true;
 }

const initializeData = () => {
    if(isStorageExist()){
        if(localStorage.getItem(LOCAL_STORAGE_KEY)){
            const jsonData: any = localStorage.getItem(LOCAL_STORAGE_KEY);
            charactersData = JSON.parse(jsonData);
        }
    }
}

const saveData = () => {
    const jsonData = JSON.stringify(charactersData);
    localStorage.setItem(LOCAL_STORAGE_KEY, jsonData);
}

const checkData = (character: any) => {
    return charactersData.find((d: any) => d.id === character.id)
}

const removeData = (character: any) => {
    const index = charactersData.findIndex((c) => c.id === character.id);
    if(index !== -1){
        charactersData.splice(index, 1);
    }

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(charactersData));
}

export {
    charactersData,
    saveData,
    initializeData,
    checkData,
    removeData
}