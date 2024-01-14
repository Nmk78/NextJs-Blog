const express = require("express");
const {get_one_user,
      user_register,
      user_login,
      get_all_posts_by_author,
      profileImgChange} = require("../controller/userController")


      ///   /user/
const router = express.Router();

// router
//       .route("/register")
//             .post(user_register)
router
      .route("/login")
            .post(user_login)
router
      .route("/profile-img")
            .patch(profileImgChange)

router
      .route("/:id")
            .get(get_one_user)

router
      .route("/posts/")
            .post(get_all_posts_by_author)
module.exports = router;