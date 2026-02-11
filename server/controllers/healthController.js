/**
 * @desc    Get server health status
 * @route   GET /api/health
 * @access  Public
 */
export const getHealth = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
  })
}
