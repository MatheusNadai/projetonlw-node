import { io } from "../http";
import {ConnectionsServices} from "../services/ConnectionsServices"
import {UsersService} from "../services/UsersService"
import {MessagesService} from "../services/MessagesService"

interface IParams {
    text: string;
    email: string;
}

io.on("connect", (socket) => {
const connectionsServices = new ConnectionsServices();
const usersService = new UsersService();
const messagesService = new MessagesService



    socket.on("client_first_acess", async (params) => {
        const socket_id = socket.id;
        const {text, email} = params as IParams;
        let user_id = null;
    

        const userExists = await usersService.findByEmail(email);

        if(!userExists) {
            const user = await usersService.create(email);

        await connectionsServices.create({
            socket_id,
            user_id: user.id
            
    });
    user_id = user.id;
    
}else {

    user_id = userExists.id
    const connection = await connectionsServices.findByUserId(userExists.id);

    if(!connection) {
        await connectionsServices.create({
            socket_id,
            user_id: userExists.id, 
        })
    }else{
        connection.socket_id = socket_id;
        await connectionsServices.create(connection);
    }

    

}

await messagesService.create({
    text,
    user_id,

})

    });

});