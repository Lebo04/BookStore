const db = require("../Config");
const { hash, compare, hashSync } = require("bcrypt");
const { createToken } = require("../middleware/AuthenticatedUser");

class User {
  async createUser(req, res) {
    const detail = req.body;
    detail.userPass = await hash(detail.userPass, 15);

    const user = {
      userPass: detail.userPass,
      emailAdd: detail.emailAdd,
    };

    const strQry = `
        INSERT INTO Users
        SET ?;
        `;
    db.query(strQry, [detail], async (err) => {
      const emailExist = await strQry.findOne({emailAdd: req.body.emailAdd})
      if (emailExist) return res.status(400).send('Email already exist')

      
      if (err) {
        res.status(401).json({ err });
      } else {
        const token = createToken(user);
        res.cookie("RightUser", token, {
          httpOnly: true,
          maxAge: 3600000,
        });
        res.status(200).json({ msg: "A new user has been created." });
      }
    });
  }
  login(req, res) {
    const { emailAdd, userPass } = req.body;
    const strQry = `
        SELECT userID, firstName, lastName, emailAdd, userPass
        FROM Users
        WHERE emailAdd = '${emailAdd}';
    `;

    db.query(strQry, async (err, data) => {
      if (err) throw err;
      if (!data || data == null) {
        res.status(401).json({ err: "Incorrect email address" });
      } else {
        await compare(userPass, data[0].userPass, (cErr, cResult) => {
          if (cErr) throw cErr;
          const token = createToken({
            userPass,
            emailAdd,
          });
          res.cookie("RightUser", token, {
            maxAge: 3600000,
            httpOnly: true,
          });
          if (cResult) {
            res.status(200).json({
              msg: "Logged In",
              token,
              result: data[0],
            });
          } else {
            res.status(401).json({
              err: "Incorrect Password, try again or register",
            });
          }
        });
      }
    });
  }
  // forgotPassword(req, res) {
  //   const { emailAdd } = req.body;
  //   const strQry = `
  //   SELECT userID, firstName, lastName, emailAdd, userPass
  //       FROM Users
  //       WHERE emailAdd = '${emailAdd}'; 
  //   `;
  //   db.query(strQry, async (err, data) => {
  //     try {
  //       const oldUser = await strQry.findOne({emailAdd});
  //       if (!oldUser) {
  //         return res.send('User does not exist');
  //       }
  //       const secret = SECRET_KEY + oldUser.userPass;
  //       const token = createToken.toString({emailAdd: oldUser.emailAdd, userID: oldUser.userID}, secret,{expiresIn: '5m'});
  //       const link = `http://localhost:3000/resetPassword/${oldUser.userId}/${token}`
  //     } catch (error) {
        
  //     }
  //   })

  //   // if (email !== emailAdd) {
  //   //   res.send("User not registered");
  //   //   return;
  //   // }

  //   // const secret = SECRET_KEY + userPass;
  //   // const payload = {
  //   //   emailAdd: emailAdd,
  //   //   userID: userID,
  //   // };
  //   // const token = createToken.sign(payload, secret, { expiresIn: "15m" });
  //   // const link = `http://localhost:3000/resetPassword/${userId}/${token}`;

  //   // res.send("Password reset link has been sent to your email...");
  // }
  // resetPassword(req, res) {
  //   const {userID, token} = req.params;
  //   const strQry = `
  //   SELECT userID, firstName, lastName, emailAdd, userPass
  //       FROM Users
  //       WHERE emailAdd = '${emailAdd}'; 
  //   `;

  //   db.query(strQry, [req.params.id], (err, data) => {
  //     if (userID !== userID) {
  //       res.send('Invalid id')
  //       return
  //     }
  //     const secret = SECRET_KEY + userPass
  //     try {
  //       const payload = createToken.verify(token, secret)
  //       res.render('resetPassword', {email: emailAdd})
  //     } catch (error) {
  //       res.send(error.message)
  //     }
  //   });

  // }
  updateUser(req, res) {
    const detail = req.body;
    if (detail.userPass != null || detail.userPass != undefined)
      detail.userPass = hashSync(detail.userPass, 15);

    const strQry = `
        UPDATE Users 
        SET ?
        WHERE userID = ?;
        `;

    db.query(strQry, [detail, req.params.id], (err) => {
      if (err) throw err;
      res.status(200).json({ msg: "A record was updated" });
    });
  }
  deleteUser(req, res) {
    const strQry = `
    DELETE FROM Users
    WHERE userID = ?;
    `;

    db.query(strQry, [req.params.id], (err) => {
      if (err) throw err;
      res.status(200).json({ msg: "A record has been deleted" });
    });
  }
  getUser(req, res) {
    const strQry = `
    SELECT userID, firstName, lastName, gender, cellphoneNum, emailAdd, userRole, userProfile, joinDate
    FROM Users
    WHERE userID = ?;    
    `;

    db.query(strQry, [req.params.id], (err, data) => {
      if (err) throw err;
      res.status(200).json({ result: data });
    });
  }
  getUsers(req, res) {
    const strQry = `
    SELECT userID, firstName, lastName, cellphoneNum, emailAdd
    FROM Users;
    `;

    db.query(strQry, (err, data) => {
      if (err) throw err;
      res.status(200).json({ results: data });
    });
  }
  forgotPassword(req, res) {
    const detail = req.body;
    if (detail.userPass != null || detail.userPass != undefined)
      detail.userPass = hashSync(detail.userPass, 15);

    const strQry = `
        UPDATE Users 
        SET ?
        WHERE cellphoneNum = ? and emailAdd = ?;
        `;

    db.query(strQry, [detail, req.params.id], (err) => {
      if (err) throw err;
      res.status(200).json({ msg: "A record was updated" });
    });
  }
}
class Admin {
  async createAdmin(req, res) {
    const detail = req.body;
    detail.adminPass = await hash(detail.adminPass, 15);

    const user = {
      adminPass: detail.adminPass,
      emailAdd: detail.emailAdd,
    };

    const strQry = `
        INSERT INTO Admin
        SET ?
        `;
    db.query(strQry, [detail], (err) => {
      if (err) {
        res.status(401).json({ err });
      } else {
        const token = createToken(user);
        res.cookie("RightUser", token, {
          httpOnly: true,
          maxAge: 3600000,
        });
        res.status(200).json({ msg: "A new admin has been created." });
      }
    });
  }
  login(req, res) {
    const { emailAdd, adminPass } = req.body;
    const strQry = `
        SELECT adminID, firstName, lastName, emailAdd, cellphoneNum, adminPass
        FROM Admin
        WHERE emailAdd = '${emailAdd}';
    `;

    db.query(strQry, async (err, data) => {
      if (err) throw err;
      if (!data || data == null) {
        res.status(401).json({ err: "Incorrect email address" });
      } else {
        await compare(adminPass, data[0].adminPass, (cErr, cResult) => {
          if (cErr) throw cErr;
          const token = createToken({
            adminPass,
            emailAdd,
          });
          res.cookie("RightUser", token, {
            maxAge: 3600000,
            httpOnly: true,
          });
          if (cResult) {
            res.status(200).json({
              msg: "Logged In",
              token,
              result: data[0],
            });
          } else {
            res.status(401).json({
              err: "Incorrect Password, try again or register",
            });
          }
        });
      }
    });
  }
  updateAdmin(req, res) {
    const detail = req.body;
    if (detail.adminPass != null || detail.adminPass != undefined)
      detail.adminPass = hashSync(detail.adminPass, 15);

    const strQry = `
        UPDATE Admin 
        SET ?
        WHERE adminID = ?;
        `;

    db.query(strQry, [detail, req.params.id], (err) => {
      if (err) throw err;
      res.status(200).json({ msg: "A record was updated" });
    });
  }
  deleteAdmin(req, res) {
    const strQry = `
    DELETE FROM Admin
    WHERE adminID = ?;
    `;

    db.query(strQry, [req.params.id], (err) => {
      if (err) throw err;
      res.status(200).json({ msg: "A record has been deleted" });
    });
  }
  getAdmin(req, res) {
    const strQry = `
    SELECT adminID, firstName, lastName, cellphoneNum, emailAdd
    FROM Admin
    WHERE adminID = ?;    
    `;

    db.query(strQry, [req.params.id], (err, data) => {
      if (err) throw err;
      res.status(200).json({ result: data });
    });
  }
  getAdmins(req, res) {
    const strQry = `
    SELECT adminID, firstName, lastName, cellphoneNum, emailAdd
    FROM Admin;
    `;

    db.query(strQry, (err, data) => {
      if (err) throw err;
      res.status(200).json({ results: data });
    });
  }
  forgotPassword(req, res) {
    const detail = req.body;
    if (detail.adminPass != null || detail.adminPass != undefined)
      detail.adminPass = hashSync(detail.adminPass, 15);

    const strQry = `
        UPDATE Admin 
        SET ?
        WHERE cellphoneNum = ? and emailAdd = ?;
        `;

    db.query(strQry, [detail, req.params.id], (err) => {
      if (err) throw err;
      res.status(200).json({ msg: "A record was updated" });
    });
  }
}
class Item {
  addItem(req, res) {
    const strQry = `
        INSERT INTO Products
        SET ?
        `;
    db.query(strQry, [req.body], (err) => {
      if (err) {
        console.log(err);
        res.status(400).json({ err: "Unable to add a new product" });
      } else {
        res.status(200).json({ msg: "Successfully added a new product" });
      }
    });
  }
  updateItem(req, res) {
    const detail = req.body;
    if (detail.userPass != null || detail.userPass != undefined)
      detail.userPass = hashSync(detail.userPass, 15);

    const strQry = `
        UPDATE Products
        SET ?
        WHERE id = ?;
        `;

    db.query(strQry, [req.body, req.params.id], (err) => {
      if (err) {
        res.status(400).json({ msg: "Unable to update the product" });
      } else {
        res.status(200).json({ msg: "A product has been updated" });
      }
    });
  }
  deleteItem(req, res) {
    const strQry = `
    DELETE FROM Products
    WHERE id = ?;
    `;

    db.query(strQry, [req.params.id], (err) => {
      if (err) throw err;
      res.status(200).json({ msg: "A product has been deleted" });
    });
  }
  getItem(req, res) {
    const strQry = `
    SELECT id, prodName, prodDescription, category, price, author, imgURL, publishDate
    FROM Products
    WHERE id = ?;    
    `;

    db.query(strQry, [req.params.id], (err, data) => {
      if (err) throw err;
      res.status(200).json({ result: data });
    });
  }
  getItems(req, res) {
    const strQry = `
    SELECT id, prodName, prodDescription, category, price, author, imgURL, publishDate
    FROM Products;
    `;

    db.query(strQry, (err, data) => {
      if (err) throw err;
      res.status(200).json({ results: data });
    });
  }
}
class Cart {
  addToCart(req, res) {
    const strQry = `
        INSERT INTO Cart
        SET ?
        `;
    db.query(strQry, [req.body], (err, result) => {
      if (err) {
        console.log(err);
        res.status(400).json({ err: "Unable to add to cart" });
      } else {
        res.status(200).json({ msg: "Successfully added to the cart",result });
      }
    });
  }
  updateCart(req, res) {
    const detail = req.body;
    if (detail.userPass != null || detail.userPass != undefined)
      detail.userPass = hashSync(detail.userPass, 15);

    const strQry = `
        UPDATE Cart
        SET ?
        WHERE CartID = ?;
        `;

    db.query(strQry, [req.body, req.params.id], (err) => {
      if (err) {
        res.status(400).json({ msg: "Unable to update the cart" });
      } else {
        res.status(200).json({ msg: "The cart has been updated" });
      }
    });
  }
  deleteCart(req, res) {
    const strQry = `
    DELETE FROM Cart
    WHERE cartID = ?;
    `;

    db.query(strQry, [req.params.id], (err) => {
      if (err) throw err;
      res.status(200).json({ msg: "A product has been deleted" });
    });
  }
  getCartItem(req, res) {
    const strQry = `
    SELECT cartID, prodName, price, imgURL, totalPrice
    FROM Cart
    WHERE cartID = ?;    
    `;

    db.query(strQry, [req.params.id], (err, data) => {
      if (err) throw err;
      res.status(200).json({ result: data });
    });
  }
  getCartItems(req, res) {
    const strQry = `
    SELECT cartID, prodName, price, imgURL, totalPrice
    FROM Cart;
    `;

    db.query(strQry, (err, data) => {
      if (err) throw err;
      res.status(200).json({ results: data });
    });
  }
}

module.exports = {
  Item,
  User,
  Admin,
  Cart,
};
