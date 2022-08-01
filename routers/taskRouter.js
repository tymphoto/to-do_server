const express = require('express');

const router = express.Router();
const { User, Task } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const tasks = await Task.findAll({
      attributes: ['id', 'text', 'status'],
      include: { model: User, attributes: ['name', 'email', 'id'] },
    });
    res.json(tasks);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

router.post('/', async (req, res) => {
  const { text, user_id } = req.body;
  try {
    const result = await Task.create({ text, user_id, status: 'not done' });
    res.json(result);
  } catch (err) {
    console.log(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Task.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (error) {
    console.log(err);
  }
});

router.put('/update/:id', async (req, res) => {
  console.log('===========>>', req.body);
  try {
    await Task.update(
      { text: req.body.text },
      { where: { id: req.params.id } },
    );
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.redirect('/');
  }
});

router.put('/updatestatus/:id', async (req, res) => {
  console.log('===========>>', req.body);
  try {
    await Task.update(
      { status: req.body.status },
      { where: { id: req.params.id } },
    );
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.redirect('/');
  }
});

module.exports = router;
