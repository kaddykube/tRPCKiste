const user = {name: 'user', password: '123'};

export function checkUser (p1: string, p2: string){
    if(p1 == user.name && p2 == user.password){
        return true;
    } else {
        return false;
    }
}