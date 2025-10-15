const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.getAll = async (req, res) => {
  try { const users = await User.find().select('-password'); res.json(users); } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.getById = async (req, res) => {
  try { const user = await User.findById(req.params.id).select('-password'); if (!user) return res.status(404).json({ msg: 'Not found' }); res.json(user); } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.create = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: 'User already exists' });
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    user = new User({ name, email, password: hashed });
    await user.save();
    res.status(201).json({ id: user._id, name: user.name, email: user.email });
  } catch (err) { res.status(400).json({ error: err.message }); }
};

exports.update = async (req, res) => { try { const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }).select('-password'); if (!updated) return res.status(404).json({ msg: 'Not found' }); res.json(updated); } catch (err) { res.status(400).json({ error: err.message }); } };

exports.remove = async (req, res) => { try { await User.findByIdAndDelete(req.params.id); res.json({ msg: 'Deleted' }); } catch (err) { res.status(500).json({ error: err.message }); } };

exports.removeAll = async (req, res) => { try { await User.deleteMany({}); res.json({ msg: 'All users removed' }); } catch (err) { res.status(500).json({ error: err.message }); } };
