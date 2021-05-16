exports.convertDate = (s_Date, format) => {
    let date = new Date(s_Date);
    switch(format){
        case "yyyy-MM-dd":{
            return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
        }
        case "dd-MM-yyyy":{
            return `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`;
        }
        default:{
            return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        }
    }
}
exports.parseJwt = (token) => {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(Buffer.from(base64, 'base64').toString());
}