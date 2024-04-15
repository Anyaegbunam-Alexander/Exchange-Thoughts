import Message from '../models/message.schema.js';

export async function saveMessage(data) {
    try {
        console.log("here is the id",data.id);
        const message = await Message.create({
            userId: data.id,
            message: data.message
        });

        console.log('Message saved successfully:', message);
        return message;
    } catch (error) {
        console.error('Error saving message:', error);
        throw error;
    }
}
