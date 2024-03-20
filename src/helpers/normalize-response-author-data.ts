function removeDotsFromKeys(obj) {
    const newObj = {};
    for (let key in obj) {
        const newKey = key.replace(/\author./g, '');
        newObj[newKey] = obj[key];
    }
    return newObj;
}

export function formatAuthorData(data) {
    return data.map(item => {
        const { authorId, id, title, content, createdAt, updatedAt, ...author } = item;
        const formattedAuthor = removeDotsFromKeys(author);
        return {
            id,
            title,
            content,
            createdAt,
            updatedAt,
            author:formattedAuthor
        };
    });
}