import { UserController } from './User.controller';
import { UserRepository } from './User.repository';
import { UserService } from './User.service';

const userRepo = new UserRepository();
const userService = new UserService(userRepo);
export const userController = new UserController(userService);
