import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const user = ctx.switchToHttp().getRequest().user;
    
    

    if (!user) {
      return null;
    }
    console.log(user);
    
    

    return data ? user[data] : user; 
  },
);




// export const GetUser = createParamDecorator(
//   (data: string | undefined, ctx: ExecutionContext) => {
//     const request: Express.Request = ctx.switchToHttp().getRequest();
//     if (data) {
//       return request.user[data];
//     }
//     return request.user;
//   },
// );




