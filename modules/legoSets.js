const setData = require("../data/setData");
const themeData = require("../data/themeData");

let sets = [];

const initialize = () => {
    return new Promise((resolve, reject) => {
        try {
            setData.forEach((set) => {
                const matchingTheme = themeData.find(theme => theme.id === set.theme_id);
                if (matchingTheme) {
                    const updatedSet = { ...set, theme: matchingTheme.name };
                    sets.push(updatedSet);
                }
            });
            resolve();
        } catch (error) {
            reject(error.message);
        }
    });
};

const getAllSets = () => {
    return new Promise((resolve, reject) => {
        if (sets.length > 0) {
            resolve(sets);
        } else {
            reject("No Sets Available");
        }
    });
};

const getSetByNum = (setNum) => {
    return new Promise((resolve, reject) => {
        if (typeof setNum !== 'string') {
            setNum = setNum.toString();
        }

        const targetSet = sets.find(set => set.theme_id === setNum);
        if (targetSet) {
            resolve(targetSet);
        } else {
            reject("Unable to find the requested set");
        }
    });
};

const getSetsByTheme = (theme) => {
    return new Promise((resolve, reject) => {
        const filteredSets = sets.filter(set => 
            set.theme.toLowerCase().includes(theme.toLowerCase()) || 
            set.theme.toLowerCase() === theme.toLowerCase()
        );

        if (filteredSets.length > 0) {
            resolve(filteredSets);
        } else {
            reject("Unable to find sets for the requested theme");
        }
    });
};

module.exports = { initialize, getAllSets, getSetByNum, getSetsByTheme };
