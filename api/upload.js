const { createWriteStream } = require('fs');
const { tmpdir } = require('os');
const { join } = require('path');
const { promisify } = require('util');
const { pipeline } = require('stream');
const { v4: uuidv4 } = require('uuid');
const fetch = require('node-fetch');

const pipelineAsync = promisify(pipeline);

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const file = req.files?.file;
    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Generate a unique filename
    const filename = `${uuidv4()}-${file.name}`;
    const filepath = join(tmpdir(), filename);

    // Save file to temporary directory
    await pipelineAsync(file.data, createWriteStream(filepath));

    // In a real production environment, you would upload to a permanent storage
    // For Vercel, we'll return a temporary URL (note: this won't persist)
    // For demo purposes only - in production use S3, Cloudinary, etc.
    const fileUrl = `file://${filepath}`;

    return res.status(200).json({ 
      success: true, 
      fileUrl,
      filename 
    });
  } catch (error) {
    console.error('Upload error:', error);
    return res.status(500).json({ error: 'Failed to upload file' });
  }
};