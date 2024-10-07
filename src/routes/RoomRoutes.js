const express = require('express'); 
const RoomController = require('../controllers/RoomController'); 
const authMiddleware = require('../middlewares/auth');

const router = express.Router();

router.post('/', authMiddleware, RoomController.createRoom);

router.get('/', authMiddleware, RoomController.getAllRooms);

router.post('/:roomId/join', authMiddleware, RoomController.joinRoom);

module.exports = router;
