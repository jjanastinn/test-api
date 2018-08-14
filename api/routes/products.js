const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling get requests to /products!'
  });
});

router.post('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling post requests to /products!'
  });
});

router.get('/:productId', (req, res, next) => {
  const id = req.params.productId;
  res.status(200).json({
    message: 'You passed an ID',
    id: id
  });
});

router.patch('/:productId', (req, res, next) => {
  res.status(200).json({
    message: 'Updated product!'
  });
});

router.delete('/:productId', (req, res, next) => {
  res.status(200).json({
    message: 'Deleted product!'
  });
});

module.exports = router;