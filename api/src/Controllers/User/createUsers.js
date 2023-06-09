const { Users } = require("../../db")
const createUsers = async ({email}) => {
    const addUsers = await Products.create({email});
    return addUsers;
}
module.exports = createUsers;