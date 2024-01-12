import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';

export const updateUser = async (req, res, next) => {
  try {
    if (req.user.id !== req.params.id) {
      return next(errorHandler(403, 'You can only update your account!'));
    }

    const updateUserFields = {
      username: req.body.username,
      email: req.body.email,
      avatar: req.body.avatar,
    };

    if (req.body.password) {
      updateUserFields.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: updateUserFields },
      { new: true }
    );

    const { password, ...rest } = updateUser._doc;

    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};


export const deleteUser = async (req, res, next) => {
  try {
    if (req.user.id !== req.params.id) {
      return next(errorHandler(401, 'You can only delete your own account'));
    }

    const deletedUser = await User.findByIdAndDelete(req.params.id);

    if (!deletedUser) {    
      return next(errorHandler(404, 'User not found'));
    }
    res.clearCookie('access_token')
    res.status(200).json('User has been deleted!');
  } catch (error) {
    next(error);
  }
};


