import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { FriendsService } from './friends.service';
import { FriendDto } from './friends.dto';

@Controller('friends')
export class FriendsController {
  constructor(private readonly friendService: FriendsService) {}

  @Get() // Lista um array de objetos de todos os friends no banco de dados
  listFirends(): FriendDto[] {
    return this.friendService.list_firends();
  }

  @Get('/:id') // Retorna um friend no banco de dados de acordo com o id ou 404
  getFriend(@Param('id') id: number) {
    return this.friendService.getFriendById(id);
  }

  @Post() // Cria e retorna o firend no banco de dados
  createFriends(@Body() friend: FriendDto): FriendDto {
    return this.friendService.createFriends(friend);
  }

  @Put()
  updateFriend(@Body() friend: FriendDto): FriendDto {
    console.log(friend);
    return this.friendService.updateFriend(friend);
  }

  @Delete('/:id')
  deleteFriend(@Param('id') id: number): string {
    return this.friendService.deleteFriend(id);
  }
}
