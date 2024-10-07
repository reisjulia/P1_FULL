const Room = require('../models/RoomModel');

class RoomController {
    static async createRoom(request, response) {
        const { name, description, capacity } = request.body;

        try {
            const room = new Room({ name, description, capacity });
            await room.save();

            response.status(201).json({
                message: 'Sala criada',
                room,
            });
        } 
        catch (error) {
            response.status(500).json({ message: 'Erro ao criar sala', error });
        }
    }


    static async getAllRooms(request, response) {
        try {
            const rooms = await Room.find();
            response.status(200).json(rooms);
        } 
        catch (error) {
            response.status(500).json({ message: 'Erro ao listar salas', error });
        }
    }

    static async joinRoom(request, response) {
        const { roomId } = request.params;

        try {
            const room = await Room.findById(roomId);
            if (!room || !room.isActive) {
                return res.status(404).json({ message: 'Sala não encontrada ou inativa.' });
            }

            if (room.participants.includes(userId)) {
                return res.status(400).json({ message: 'Você já está na sala.' });
            }

            room.participants.push(userId);
            await room.save();

            res.status(200).json({ message: `Você entrou na sala ${room.name}` });
        } catch (error) {
            res.status(500).json({ message: 'Erro ao entrar na sala', error });
        }
    }
}

module.exports = new RoomController();