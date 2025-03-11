// import mongoose from "mongoose";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

// const UserSchema = new mongoose.Schema(
//   {
//     username: { type: String, required: true },
//     email: { type: String, unique: true, required: true },
//     password: { type: String, required: true },
//     role: { type: String, enum: ["user", "admin"], default: "user" },
//     state: String,
//     city: String,
//     country: String,
//     pincode: String,
//     phone: String,
//   },
//   { timestamps: true }
// );

// // Hash password before saving to database
// UserSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });

// // Method to compare passwords for authentication
// UserSchema.methods.comparePassword = async function (inputPassword) {
//   return await bcrypt.compare(inputPassword, this.password);
// };

// // Method to generate JWT token
// UserSchema.methods.generateAuthToken = function () {
//   return jwt.sign(
//     { id: this._id, email: this.email, role: this.role },
//     process.env.JWT_SECRET,
//     { expiresIn: "1d" }
//   );
// };

// // Remove password field when returning user data
// UserSchema.methods.toJSON = function () {
//   const userObject = this.toObject();
//   delete userObject.password;
//   return userObject;
// };

// // Prevent OverwriteModelError
// const User = mongoose.models.User || mongoose.model("User", UserSchema);

// export default User;
