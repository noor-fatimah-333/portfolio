/**
 * @desc    Send contact form email
 * @route   POST /api/contact
 * @access  Public
 */
export const sendContactEmail = async (req, res) => {
  try {
    const { name, email, company, message, budget } = req.body

    // Validate required fields
    if (!name || !email || !company || !message || !budget) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
      })
    }

    // TODO: Implement email sending
    // Example using Nodemailer:
    // const transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASS,
    //   },
    // })
    // 
    // await transporter.sendMail({
    //   from: email,
    //   to: process.env.CONTACT_EMAIL,
    //   subject: `Portfolio Contact: ${name} from ${company}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Company:</strong> ${company}</p>
    //     <p><strong>Budget:</strong> ${budget}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `,
    // })

    // For now, just log and return success
    console.log('Contact form submission:', { name, email, company, budget, message })

    res.status(200).json({
      success: true,
      message: 'Thank you for your message! I will get back to you soon.',
    })
  } catch (error) {
    console.error('Contact form error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
    })
  }
}
