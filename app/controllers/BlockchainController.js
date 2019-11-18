import BlockchainService from '../services/blockchain';

module.exports = {
  async stats(req, res) {
    try {
      const { data } = await BlockchainService.get('/stats?format=json');

      const {
        n_blocks_total: currentBlock,
        minutes_between_blocks: minutesBetween
      } = data;

      const blocksLeft = Math.floor(630000 - currentBlock),
        minutesLeft = Math.floor(blocksLeft * minutesBetween),
        daysLeft = Math.floor(minutesLeft / 1440);

      res.send({
        currentBlock,
        blocksLeft,
        minutesLeft,
        daysLeft
      });
    }
    catch (err) {
      res.status(500).send(err);
    }
  }
};
