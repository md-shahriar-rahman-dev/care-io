# Care.IO - Baby Sitting & Elderly Care Platform

Care.IO is a responsive web application that allows users to find and hire trusted caretakers for children, elderly, or special care at home. The platform makes caregiving easy, secure, and accessible.

---

## 🌟 Features

- Responsive Design (Mobile, Tablet, Desktop)
- User Authentication: Email/Password & Google Login
- Dynamic Booking: Duration, Location, Address
- Automatic Total Cost Calculation
- Booking Status: Pending / Confirmed / Completed / Cancelled
- My Bookings Page: Track all bookings
- Services: Baby Care, Elderly Care, Sick People Care
- Service Detail Pages with Book Service option
- Email invoices on booking confirmation
- 404 Error Page

Optional: Stripe Payment Integration, Admin Dashboard

---

## 🚀 Installation

1. Clone the repo:
```bash
git clone [Your Repo URL]
cd care-io
````

2. Install dependencies:

```bash
npm install
```

3. Add environment variables in `.env.local`:

```env
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

4. Run the development server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## 📂 Project Structure (Key)

```
app/           # Pages: home, login, register, booking, my-bookings
models/        # MongoDB models: User, Booking, Service
lib/           # DB & Auth utilities
components/    # UI components
public/        # Static assets
styles/        # CSS/Tailwind
```

---

## 📌 Usage

1. Register / Log in
2. Browse services on the homepage
3. View service details and book
4. Select duration & location
5. Confirm booking → status = Pending
6. Track bookings in `My Bookings` page

---

## 💻 Live Demo

* Live: https://care-io-iota.vercel.app/

