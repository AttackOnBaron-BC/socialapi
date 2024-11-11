import { Request, Response } from 'express';
import { Types } from 'mongoose';
import { IThought, IReaction } from '../types';
import { User, Thought} from '../models/index.js';

interface ThoughtRequest extends Request {
  body: Partial<IThought>;
}

interface ReactionRequest extends Request {
  body: Partial<IReaction>;
}

export const thoughtController = {
  async getAllThoughts(_req: Request, res: Response): Promise<void> {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json({ error: 'Failed to get thoughts' });
    }
  },

  async getThoughtById(req: Request, res: Response): Promise<void> {
    try {
      const thoughtId = new Types.ObjectId(req.params.thoughtId);
      const thought = await Thought.findById(thoughtId);

      if (!thought) {
        res.status(404).json({ message: 'No thought with this id!' });
        return;
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json({ error: 'Failed to get thought' });
    }
  },

  async createThought(req: ThoughtRequest, res: Response): Promise<void> {
    try {
      const thought = await Thought.create(req.body);
      await User.findByIdAndUpdate(
        req.body.userId,
        { $push: { thoughts: thought._id } }
      );
      res.status(201).json(thought);
    } catch (err) {
      res.status(400).json({ error: 'Failed to create thought' });
    }
  },

  async updateThought(req: ThoughtRequest, res: Response): Promise<void> {
    try {
      const thoughtId = new Types.ObjectId(req.params.thoughtId);
      const thought = await Thought.findByIdAndUpdate(
        thoughtId,
        req.body,
        { new: true, runValidators: true }
      );

      if (!thought) {
        res.status(404).json({ message: 'No thought with this id!' });
        return;
      }
      res.json(thought);
    } catch (err) {
      res.status(400).json({ error: 'Failed to update thought' });
    }
  },

  async deleteThought(req: Request, res: Response): Promise<void> {
    try {
      const thoughtId = new Types.ObjectId(req.params.thoughtId);
      const thought = await Thought.findByIdAndDelete(thoughtId);

      if (!thought) {
        res.status(404).json({ message: 'No thought with this id!' });
        return;
      }

      await User.findByIdAndUpdate(
        thought.userId,
        { $pull: { thoughts: thoughtId } }
      );
      res.json({ message: 'Thought deleted!' });
    } catch (err) {
      res.status(500).json({ error: 'Failed to delete thought' });
    }
  },

  async addReaction(req: ReactionRequest, res: Response): Promise<void> {
    try {
      const thoughtId = new Types.ObjectId(req.params.thoughtId);
      const thought = await Thought.findByIdAndUpdate(
        thoughtId,
        { $push: { reactions: req.body } },
        { new: true, runValidators: true }
      );

      if (!thought) {
        res.status(404).json({ message: 'No thought with this id!' });
        return;
      }
      res.json(thought);
    } catch (err) {
      res.status(400).json({ error: 'Failed to add reaction' });
    }
  },

  async removeReaction(req: Request, res: Response): Promise<void> {
    try {
      const thoughtId = new Types.ObjectId(req.params.thoughtId);
      const reactionId = new Types.ObjectId(req.params.reactionId);
      
      const thought = await Thought.findByIdAndUpdate(
        thoughtId,
        { $pull: { reactions: { reactionId } } },
        { new: true }
      );

      if (!thought) {
        res.status(404).json({ message: 'No thought with this id!' });
        return;
      }
      res.json(thought);
    } catch (err) {
      res.status(400).json({ error: 'Failed to remove reaction' });
    }
  },
};