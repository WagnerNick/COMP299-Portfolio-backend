const Model = require('../models/Qualification');
exports.getAll = async (req, res) => {
  try { const items = await Model.find(); res.json(items); } 
  catch (err) { res.status(500).json({ error: err.message }); }
};
exports.getById = async (req, res) => {
  try { const item = await Model.findById(req.params.id); if (!item) return res.status(404).json({ msg: 'Not found' }); res.json(item); } 
  catch (err) { res.status(500).json({ error: err.message }); }
};
exports.create = async (req, res) => {
  try { const newItem = new Model(req.body); await newItem.save(); res.status(201).json(newItem); } 
  catch (err) { res.status(400).json({ error: err.message }); }
};
exports.update = async (req, res) => {
  try { const updated = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true }); if (!updated) return res.status(404).json({ msg: 'Not found' }); res.json(updated); } 
  catch (err) { res.status(400).json({ error: err.message }); }
};
exports.remove = async (req, res) => {
  try { await Model.findByIdAndDelete(req.params.id); res.json({ msg: 'Deleted' }); } 
  catch (err) { res.status(500).json({ error: err.message }); }
};
exports.removeAll = async (req, res) => {
  try { await Model.deleteMany({}); res.json({ msg: 'All removed' }); } 
  catch (err) { res.status(500).json({ error: err.message }); }
};
