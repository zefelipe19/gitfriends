import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { FriendDto } from './friends.dto';

@Injectable()
export class FriendsService {
  private friends: FriendDto[] = [];

  list_firends(): FriendDto[] {
    return this.friends;
  }

  createFriends(friend): FriendDto {
    this.friends.push(friend);
    return friend;
  }

  getFriendById(id: number): FriendDto {
    const friend = this.friends.filter((friend) => friend.id == id);
    if (friend.length) {
      return friend[0];
    }
    throw new HttpException(
      `can't find friend with id: ${id}`,
      HttpStatus.NOT_FOUND,
    );
  }

  updateFriend(friend: FriendDto): FriendDto {
    const friendIndex = this.friends.findIndex((f) => f.id == friend.id);
    if (friendIndex >= 0) {
      this.friends[friendIndex] = friend;
      return friend;
    }
    throw new HttpException(
      `can't update friend with id: ${friend.id}`,
      HttpStatus.BAD_REQUEST,
    );
  }

  deleteFriend(id: number): string {
    const firendIndex = this.friends.findIndex((f) => f.id == id);
    if (firendIndex >= 0) {
      const friendObject = this.friends[firendIndex];
      this.friends.splice(firendIndex, 1);
      return `friend with id: ${id}, name: ${friendObject.name} was deleted`;
    }
    throw new HttpException(
      `can't find a friend with id: ${id}`,
      HttpStatus.NOT_FOUND,
    );
  }
}
