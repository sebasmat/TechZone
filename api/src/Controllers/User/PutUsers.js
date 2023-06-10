const { Users } = require("../../db")
const PutData = async ({email,  name , profileIMG, direction, cellPhone, Gender}) => {
    const PutDataUser = await Users.findOne({where : {email : email}})
    const PutUsers = await PutDataUser.update({email,  name , profileIMG, direction, cellPhone, Gender});
    return PutUsers;
}
module.exports = PutData;