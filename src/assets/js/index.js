const getAccess = function () {
    let access = localStorage.getItem('access');
    return access;
}

export {
    getAccess
}