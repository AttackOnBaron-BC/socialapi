import { Request, Response } from 'express';
import { Types } from 'mongoose';
import { IUser } from '../types';
import { User, Thought} from '../models/index.js';

interface UserRequest extends Request {
  body: Partial<IUser>;
}

export const userController = {
  async getAllUsers(_req: Request, res: Response): Promise<void> {
    try {
      const users = await User.find()
        .populate('thoughts')
        .populate('friends');
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: 'Failed to get users' });
    }
  },

  async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const userId = new Types.ObjectId(req.params.userId);
      const user = await User.findById(userId)
        .populate('thoughts')
        .populate('friends');

      if (!user) {
        res.status(404).json({ message: 'No user with this id!' });
        return;
      }
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: 'Failed to get user' });
    }
  },

  async createUser(req: UserRequest, res: Response): Promise<void> {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json({ error: 'Failed to create user' });
    }
  },

  async updateUser(req: UserRequest, res: Response): Promise<void> {
    try {
      const userId = new Types.ObjectId(req.params.userId);
      const user = await User.findByIdAndUpdate(
        userId,
        req.body,
        { new: true, runValidators: true }
      );

      if (!user) {
        res.status(404).json({ message: 'No user with this id!' });
        return;
      }
      res.json(user);
    } catch (err) {
      res.status(400).json({ error: 'Failed to update user' });
    }
  },

  async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      const userId = new Types.ObjectId(req.params.userId);
      const user = await User.findById(userId);

      if (user) {
        await Thought.deleteMany({ userId: user._id });
        await User.findByIdAndDelete(userId);
        res.json({ message: 'User and associated thoughts deleted!' });
        return;
      }

      res.status(404).json({ message: 'No user with this id!' });      
    } catch (err) {
      res.status(500).json({ error: 'Failed to delete user' });
    }
  },

  async addFriend(req: Request, res: Response): Promise<void> {
    try {
      const userId = new Types.ObjectId(req.params.userId);
      const friendId = new Types.ObjectId(req.params.friendId);
      
      const user = await User.findByIdAndUpdate(
        userId,
        { $addToSet: { friends: friendId } },
        { new: true }
      );

      if (!user) {
        res.status(404).json({ message: 'No user with this id!' });
        return;
      }
      res.json(user);
    } catch (err) {
      res.status(400).json({ error: 'Failed to add friend' });
    }
  },

  async removeFriend(req: Request, res: Response): Promise<void> {
    try {
      const userId = new Types.ObjectId(req.params.userId);
      const friendId = new Types.ObjectId(req.params.friendId);
      
      const user = await User.findByIdAndUpdate(
        userId,
        { $pull: { friends: friendId } },
        { new: true }
      );

      if (!user) {
        res.status(404).json({ message: 'No user with this id!' });
        return;
      }
      res.json(user);
    } catch (err) {
      res.status(400).json({ error: 'Failed to remove friend' });
    }
  },
};
