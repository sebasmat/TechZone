interface reviewInterface {
    id: string,
    review: string,
    score: number,
    userId: number,
    productsId: number,
    User: {
        Gender: string,
        available: boolean,
        cellPhone: string
        direction: string,
        email: string,
        id: number,
        name: string,
        password: null
        profileIMG: string
    }
}