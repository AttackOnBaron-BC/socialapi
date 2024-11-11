import { Router } from 'express';
import { userController } from '../../controllers/user-controller.js';
const router = Router();
router.route('/')
    .get(userController.getAllUsers)
    .post(userController.createUser);
router.route('/:userId')
    .get(userController.getUserById)
    .put(userController.updateUser)
    .delete(userController.deleteUser);
router.route('/:userId/friends/:friendId')
    .post(userController.addFriend)
    .delete(userController.removeFriend);
export default router;
