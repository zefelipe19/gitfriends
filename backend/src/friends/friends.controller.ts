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
import { FriendDto } from './dto/friendDto';

@Controller('friends')
export class FriendsController {
  constructor(private readonly friendsService: FriendsService) {}

  @Get() // Lista um array de objetos de todos os friends no banco de dados
  async listFirends(): Promise<FriendDto[]> {
    return await this.friendsService.listFriends();
  }

  @Get('/:id') // Retorna um friend no banco de dados de acordo com o id ou 404
  async getFriend(@Param('id') id: number): Promise<FriendDto> {
    return await this.friendsService.getFriendById(id);
  }

  @Post() // Cria e retorna o firend no banco de dados
  async createFriends(@Body() friend: FriendDto): Promise<FriendDto> {
    return await this.friendsService.createFriends(friend);
  }

  @Put() // Busca e atualiza um model de acordo com o id passado no caminho da url
  async updateFriend(@Body() friend: FriendDto): Promise<FriendDto> {
    console.log(friend);
    return await this.friendsService.updateFriend(friend);
  }

  @Delete('/:id') // Deleta um model da base de dados com o id passado no caminho da url
  async deleteFriend(@Param('id') id: number): Promise<string> {
    return await this.friendsService.deleteFriend(id);
  }
}
