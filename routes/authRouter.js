const express = require("express");
const {createUser, loginUserCtrl,getaUser,getallUser,deleteaUser, blockUser, unblockUser, updatedUser, handleRefreshToken, logout, updatePassword, forgotPasswordToken, resetPassword} = require('../controller/userCtrl');
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.put("/password",authMiddleware , updatePassword);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);
router.post("/forgot-password-token", forgotPasswordToken);
router.put("/reset-password/:token", resetPassword);


router.post("/register",createUser);
router.post("/login",loginUserCtrl);
router.get("/all-users", getallUser);
router.get("/:id", authMiddleware, isAdmin, getaUser);
router.delete("/:id", deleteaUser);
router.put("/edit-user", authMiddleware, updatedUser);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);
module.exports = router;