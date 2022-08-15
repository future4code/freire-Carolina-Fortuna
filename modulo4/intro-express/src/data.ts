export type User = {
id: string,
name: string,
phone: number,
email: string,
website: string
}

export const people: User[] = [
    {
        id: '1',
        name: 'ana',
        phone: 320193747,
        email: 'ana@anjsjsdi.br',
        website: 'www.aninha.com.br'
    },

    {
        id: '2',
        name: 'Bia',
        phone: 321933445,
        email: 'bia@hotmail.br',
        website: 'www.bia.com.br'
    },

    {
        id: '3',
        name: 'Beyonce',
        phone: 3201937337,
        email: 'bey@terra.br',
        website: 'www.beyonce-online.com.br'
    },

    {
        id: '4',
        name: 'Nicki Minaj',
        phone: 3201937337,
        email: 'nicki_the_ninja@terra.br',
        website: 'www.mypinkfriday.com.br'
    },
    {
        id: '5',
        name: 'Megan thee Stallion',
        phone: 3201937337,
        email: 'mts@terra.br',
        website: 'www.theestallion.com.br'
    },

]

export type Post = {
    id: number,
    title: string,
    body: string,
    userId: string
}

export const posts: Post[] = [
    {
        id: 123,
        title: 'her',
        body: 'take a pic im her her her her her she she she',
        userId: '5'
    },
    {
        id: 124,
        title: 'break my soul',
        body: 'you wont break my soul',
        userId: '3'
    },

    {
        id: 125,
        title: 'super freak',
        body: 'he wanna a F R E AK AK AK AK ',
        userId: '4'
    },

]
