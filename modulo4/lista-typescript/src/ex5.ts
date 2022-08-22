
type User = {
    name: string,
    email: string,
    role: string
}

const users:User[] =
[
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 
function names (admins:User[]):void[]| string[]{
    return admins.map ((item)=>{
       return item.email
})
}

function emailAdmin (users:User[]): User[] {
    
    const admins : User[] = users.filter((item:User)=>{
        return item.role == 'admin'
    })
    return admins
}

const admins : User[] = emailAdmin(users)
console.log(admins)
console.log(names(admins))