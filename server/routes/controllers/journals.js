const Journal = require('../../models/Journal');

module.exports = {
  list: async (req, res) => {
    try {
      const { user_data: { data: { _id } } } = req.body;
      const userJournals = await Journal.find({ user_id: _id });
      return res.status(200).json(userJournals);
    } catch (error) {
      return res.status(500).json({
        status: 'Failure',
        message: 'An error Occured, Try Again ',
      });
    }
  },

  create: async (req, res) => {
    try {
      const { title, content, user_data: { data: { _id } } } = req.body;
      const newJournal = new Journal({ title, content, user_id: _id });

      const resp = await newJournal.save();

      return res.status(201).json(resp);
    } catch (error) {
      return res.status(500).json({
        status: 'Failure',
        message: 'An error Occured, Try Again ',
      });
    }
  },
  get: async (req, res) => {
    try {
      const { user_data: { data: { _id } } } = req.body;
      const { journalId } = req.params;
      const journal = await Journal.findOne({ _id: journalId, user_id: _id });
      if (!journal) {
        return res.status(404).json({
          status: 'Failure',
          message: 'Journal Not Found',
        });
      }
      return res.status(200).json(journal);
    } catch (error) {
      return res.status(500).json({
        status: 'Failure',
        message: 'An error Occured, Try Again ',
      });
    }
  },
  update: async (req, res) => {
    try {
      const { title, content, user_data: { data: { _id } } } = req.body;
      const { journalId } = req.params;

      const journal = await Journal.findOne({ _id: journalId, user_id: _id });
      if (!journal) {
        return res.status(404).json({
          status: 'Failure',
          message: 'Journal Not Found',
        });
      }
      const updatedjournal = await journal.update({ title, content });
      return res.status(200).json({
        status: 'success',
        journal: updatedjournal,
      });
    } catch (error) {
      return res.status(500).json({
        status: 'Failure',
        message: 'An error Occured, Try Again ',
      });
    }
  },

  delete: async (req, res) => {
    try {
      const { user_data: { data: { _id } } } = req.body;
      const { journalId } = req.params;

      const data = await Journal.deleteOne({ _id: journalId, user_id: _id });
      return data.deletedCount === 1
        ? res.status(204).json()
        : res.status(404).json({
          status: 'Failure',
          message: 'Journal Not Found',
        });
    } catch (err) {
      return res.status(500).json({
        status: 'Failure',
        message: 'An error Occured, Try Again ',
      });
    }
  },
};
