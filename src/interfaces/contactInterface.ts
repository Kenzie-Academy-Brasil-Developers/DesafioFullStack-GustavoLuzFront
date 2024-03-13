export interface IContacts{
    id: string,
    name: string,
    email: string,  
    telephone: string,
    registeredAt: Date,
    clientId: string
}

export interface IContactsUpdate{
    id: string
    name?: string,
    email?: string,
    telephone?: string,
}