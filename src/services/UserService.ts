import { getCustomRepository } from "typeorm"
import{ UserRepository } from "../repositories/UsersRepository"

class UserService{
    async create(email:string){
        const userRepository = getCustomRepository(UserRepository);

        //verificar se usuario existe
        const userExists = await userRepository.findOne({ 
            email
        })

        //Se existir Retornar user
        if(userExists){
            return userExists;
        }
   

    const user = userRepository.create({
        email
    });

    await userRepository.save(user);

    //Se não existir salvar no DB
    return user;


}
}
export { UserService };