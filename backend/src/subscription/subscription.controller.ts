import { Controller } from '@nestjs/common';
import {UsersService} from "../users/users.service";
import {SubscriptionService} from "./subscription.service";

@Controller('subscription')
export class SubscriptionController {

    constructor(
        private subscriptionService: SubscriptionService,
        private userService: UsersService
    ) {}


}
