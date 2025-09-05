interface User { 
    id: string; 
    name: string; 
    age: number; 
} 

/** 
 * 根据用户ID获取用户信息 
 * @param id 用户ID 
 * @param users 用户列表 
 * @returns {User | undefined} 用户对象 
 */ 
async function getUserById(id: string, users: User[]): Promise<User | undefined> {
    return users.find(user => user.id === id); 
}

// 根据用户邮寄获取用户信息   
function getUserByName(name: string, users: User[]): User | undefined {
    return users.find(user => user.name === name);
}