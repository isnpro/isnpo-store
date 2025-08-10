const axios = require('axios');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { chatId, message, photoUrl } = req.body;
    
    if (!chatId || !message) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }

    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    
    if (!TELEGRAM_BOT_TOKEN) {
      return res.status(500).json({ error: 'Telegram bot token not configured' });
    }

    let response;
    
    if (photoUrl) {
      // Send message with photo
      response = await axios.post(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendPhoto`,
        {
          chat_id: chatId,
          photo: photoUrl,
          caption: message,
          parse_mode: 'HTML'
        }
      );
    } else {
      // Send text message only
      response = await axios.post(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          chat_id: chatId,
          text: message,
          parse_mode: 'HTML'
        }
      );
    }

    return res.status(200).json({ success: true, data: response.data });
  } catch (error) {
    console.error('Telegram API error:', error.response?.data || error.message);
    return res.status(500).json({ 
      error: 'Failed to send Telegram message',
      details: error.response?.data || error.message 
    });
  }
};