import Resend from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendBookingEmail(to, bookingDetails) {
  await resend.emails.send({
    from: process.env.EMAIL_FROM,
    to,
    subject: "Your Care Booking Confirmation",
    html: `<h1>Booking Confirmed!</h1>
           <p>Service: ${bookingDetails.service}</p>
           <p>Duration: ${bookingDetails.duration}</p>
           <p>Location: ${bookingDetails.location}</p>
           <p>Total Cost: ${bookingDetails.total}</p>`,
  });
}
