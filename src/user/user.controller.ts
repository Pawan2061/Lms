import { Body, Controller, Get, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { Public } from 'src/common/public.decorator';
import { UpdateUserDto } from './dto/updateUser.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService:UserService){}

        // write the code for change mail




    

    

    @Public()
        

    @Get("/")


    async findAll(){
        return this.userService.getUsers()
    }


    @Public()


    



    @Get('/:id')
    async findUser(@Param ('id',ParseIntPipe)id:number):Promise<Object>{
        console.log(id);
        

        return this.userService.getUserById(id)

    }



    @Patch()
    async updateEmail(@Body() updateDto:UpdateUserDto){

        return this.userService.updateEmail(updateDto)

    }


    


    






    

 
}
