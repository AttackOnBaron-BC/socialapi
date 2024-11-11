import { Types } from 'mongoose';
// Create user IDs for reference
const userIds = {
    john: new Types.ObjectId(),
    jane: new Types.ObjectId(),
    bob: new Types.ObjectId(),
    alice: new Types.ObjectId(),
    charlie: new Types.ObjectId()
};
// Create thought IDs for reference
const thoughtIds = {
    thought1: new Types.ObjectId(),
    thought2: new Types.ObjectId(),
    thought3: new Types.ObjectId(),
    thought4: new Types.ObjectId(),
    thought5: new Types.ObjectId(),
    thought6: new Types.ObjectId(),
    thought7: new Types.ObjectId(),
    thought8: new Types.ObjectId()
};
export const users = [
    {
        _id: userIds.john,
        username: 'johndoe',
        email: 'test@test.com',
        thoughts: [thoughtIds.thought1, thoughtIds.thought2],
        friends: [userIds.jane]
    },
    {
        _id: userIds.jane,
        username: 'janedoe',
        email: 'jane@test.com',
        thoughts: [thoughtIds.thought3, thoughtIds.thought4],
        friends: [userIds.john, userIds.bob]
    },
    {
        _id: userIds.bob,
        username: 'bobsmith',
        email: 'bob@test.com',
        thoughts: [thoughtIds.thought5],
        friends: [userIds.jane, userIds.alice]
    },
    {
        _id: userIds.alice,
        username: 'alicejones',
        email: 'alice@test.com',
        thoughts: [thoughtIds.thought6, thoughtIds.thought7],
        friends: [userIds.bob, userIds.charlie]
    },
    {
        _id: userIds.charlie,
        username: 'charliebrown',
        email: 'charlie@test.com',
        thoughts: [thoughtIds.thought8],
        friends: [userIds.alice]
    },
];
export const thoughts = [
    {
        _id: thoughtIds.thought1,
        thoughtText: "Just learned TypeScript, and it's amazing!",
        createdAt: new Date('2024-01-15T10:00:00'),
        username: 'johndoe',
        userId: userIds.john,
        reactions: [
            {
                reactionId: new Types.ObjectId(),
                reactionBody: "That's awesome!",
                username: 'janedoe',
                createdAt: new Date('2024-01-16T10:00:00')
            }
        ]
    },
    {
        _id: thoughtIds.thought2,
        thoughtText: "JavaScript is so versatile!",
        createdAt: new Date('2024-01-17T10:00:00'),
        username: 'johndoe',
        userId: userIds.john,
        reactions: [
            {
                reactionId: new Types.ObjectId(),
                reactionBody: "Indeed it is!",
                username: 'bobsmith',
                createdAt: new Date('2024-01-18T10:00:00')
            }
        ]
    },
    {
        _id: thoughtIds.thought3,
        thoughtText: "I love coding!",
        createdAt: new Date('2024-01-19T10:00:00'),
        username: 'janedoe',
        userId: userIds.jane,
        reactions: [
            {
                reactionId: new Types.ObjectId(),
                reactionBody: "Me too!",
                username: 'johndoe',
                createdAt: new Date('2024-01-20T10:00:00')
            }
        ]
    },
    {
        _id: thoughtIds.thought4,
        thoughtText: "Node.js is great for backend development.",
        createdAt: new Date('2024-01-21T10:00:00'),
        username: 'janedoe',
        userId: userIds.jane,
        reactions: [
            {
                reactionId: new Types.ObjectId(),
                reactionBody: "Absolutely!",
                username: 'alicejones',
                createdAt: new Date('2024-01-22T10:00:00')
            }
        ]
    },
    {
        _id: thoughtIds.thought5,
        thoughtText: "MongoDB is a powerful NoSQL database.",
        createdAt: new Date('2024-01-23T10:00:00'),
        username: 'bobsmith',
        userId: userIds.bob,
        reactions: [
            {
                reactionId: new Types.ObjectId(),
                reactionBody: "I agree!",
                username: 'charliebrown',
                createdAt: new Date('2024-01-24T10:00:00')
            }
        ]
    },
    {
        _id: thoughtIds.thought6,
        thoughtText: "Express makes building APIs easy.",
        createdAt: new Date('2024-01-25T10:00:00'),
        username: 'alicejones',
        userId: userIds.alice,
        reactions: [
            {
                reactionId: new Types.ObjectId(),
                reactionBody: "Yes, it does!",
                username: 'bobsmith',
                createdAt: new Date('2024-01-26T10:00:00')
            }
        ]
    },
    {
        _id: thoughtIds.thought7,
        thoughtText: "React is my favorite frontend library.",
        createdAt: new Date('2024-01-27T10:00:00'),
        username: 'alicejones',
        userId: userIds.alice,
        reactions: [
            {
                reactionId: new Types.ObjectId(),
                reactionBody: "Mine too!",
                username: 'janedoe',
                createdAt: new Date('2024-01-28T10:00:00')
            }
        ]
    },
    {
        _id: thoughtIds.thought8,
        thoughtText: "I enjoy learning new technologies.",
        createdAt: new Date('2024-01-29T10:00:00'),
        username: 'charliebrown',
        userId: userIds.charlie,
        reactions: [
            {
                reactionId: new Types.ObjectId(),
                reactionBody: "Same here!",
                username: 'alicejones',
                createdAt: new Date('2024-01-30T10:00:00')
            }
        ]
    },
];
