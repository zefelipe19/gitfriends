import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { FriendDto } from './dto/friendDto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FriendsService {
  private friends: FriendDto[] = [];

  constructor(private readonly PrismaService: PrismaService) {}

  async listFriends(): Promise<FriendDto[]> {
    // return this.friends;
    return await this.PrismaService.friend.findMany();
  }

  async createFriends(friend): Promise<FriendDto> {
    // this.friends.push(friend);
    const createFriend = await this.PrismaService.friend.create({
      data: {
        name: friend.name,
      },
    });
    console.log(createFriend);
    return friend;
  }

  async getFriendById(id: number): Promise<FriendDto> {
    // const friend = this.friends.filter((friend) => friend.id == id);
    // if (friend.length) {
    //   return friend[0];
    // }
    const friend = await this.PrismaService.friend.findUnique({
      where: {
        id: +id,
      },
    });
    if (friend) {
      return friend;
    }
    throw new HttpException(
      `can't find friend with id: ${id}`,
      HttpStatus.NOT_FOUND,
    );
  }

  async updateFriend(friend: FriendDto): Promise<FriendDto> {
    // const friendIndex = this.friends.findIndex((f) => f.id == friend.id);
    // if (friendIndex >= 0) {
    //   this.friends[friendIndex] = friend;
    //   return friend;
    // }
    const friendToUpdate = await this.PrismaService.friend.update({
      where: {
        id: friend.id,
      },
      data: {
        name: friend.name,
      },
    });
    if (friendToUpdate) {
      return friendToUpdate;
    }
    throw new HttpException(
      `can't update friend with id: ${friend.id}`,
      HttpStatus.BAD_REQUEST,
    );
  }

  async deleteFriend(id: number): Promise<string> {
    // const firendIndex = this.friends.findIndex((f) => f.id == id);
    // if (firendIndex >= 0) {
    //   const friendObject = this.friends[firendIndex];
    //   this.friends.splice(firendIndex, 1);
    //   return `friend with id: ${id}, name: ${friendObject.name} was deleted`;
    // }
    const friend = await this.PrismaService.friend.delete({
      where: {
        id: +id,
      },
    });
    if (friend) {
      return `friend with id: ${id}, name: ${friend.id} was deleted`;
    }
    throw new HttpException(
      `can't find a friend with id: ${id}`,
      HttpStatus.NOT_FOUND,
    );
  }
}
